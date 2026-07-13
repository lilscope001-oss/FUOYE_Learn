let currentUser = null;
let currentCourse = null;
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizFinished = false;
let timerId = null;
let remainingSeconds = 0;
let currentStreak = 0;
let bestStreak = 0;
let answeredCount = 0;
let answerLocked = false;
let totalQuizSeconds = 0;
const PASS_MARK_PERCENT = 50;

const params = new URLSearchParams(window.location.search);
const courseCode = (params.get("course") || "CSC101").replace(/\s+/g, "").toUpperCase();

const courseTitleElement = document.getElementById("courseTitle");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const timerBox = document.getElementById("timerBox");
const progressElement = document.getElementById("quizProgress");
const progressFillElement = document.getElementById("progressFill");
const streakElement = document.getElementById("streakCount");
const xpPreviewElement = document.getElementById("xpPreview");
const feedbackElement = document.getElementById("answerFeedback");
const arenaRankElement = document.getElementById("arenaRank");
const quizSubtitleElement = document.getElementById("quizSubtitle");

async function initQuiz() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    currentCourse = findCourse(courseCode);

    if (!currentCourse) {
        showMissingCourse();
        return;
    }

    if (!canTakeCourse(currentCourse.code)) {
        const previousCourse = getPreviousCourse(currentCourse.code);
        alert(`Please pass ${formatCourseCode(previousCourse.code)} before moving to this quiz.`);
        window.location.href = `quiz.html?course=${previousCourse.code}`;
        return;
    }

    questions = generateQuizQuestions(currentCourse.code);
    remainingSeconds = calculateQuizDuration(questions.length);
    totalQuizSeconds = remainingSeconds;

    courseTitleElement.innerText = `${formatCourseCode(currentCourse.code)} Quiz`;
    if (quizSubtitleElement) {
        quizSubtitleElement.innerText =
            `${currentCourse.title} - Pass with ${PASS_MARK_PERCENT}% or higher to unlock the next course.`;
    }

    loadQuestion();
    startTimer();
}

function showMissingCourse() {
    courseTitleElement.innerText = "Course Not Found";
    questionElement.innerText = "The selected course could not be found.";
    optionsElement.innerHTML = "";
    nextBtn.style.display = "none";
    if (timerElement) timerElement.innerText = "00:00";
}

function calculateQuizDuration(questionCount) {
    return Math.max(300, questionCount * 60);
}

function startTimer() {
    updateTimerDisplay();

    timerId = setInterval(async () => {
        remainingSeconds--;
        updateTimerDisplay();

        if (remainingSeconds <= 0) {
            await finishQuiz(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    if (!timerElement) return;

    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    timerElement.innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timerBox) {
        timerBox.classList.toggle("timer-warning", remainingSeconds <= 60);
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];

    if (!question) return;

    selectedAnswer = null;
    answerLocked = false;
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    resetFeedback();

    if (progressElement) {
        progressElement.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
    }

    updateGamifiedHud();
    nextBtn.disabled = true;
    nextBtn.innerText = currentQuestion === questions.length - 1 ? "Finish Quiz" : "Continue";

    question.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.dataset.index = index;
        div.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;

        div.addEventListener("click", () => {
            handleOptionSelect(index);
        });

        optionsElement.appendChild(div);
    });
}

nextBtn.addEventListener("click", async () => {
    if (!answerLocked) {
        showFeedback("Select an answer to continue.", false);
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        return;
    }

    await finishQuiz(false);
});

function handleOptionSelect(index) {
    if (answerLocked || quizFinished) return;

    selectedAnswer = index;
    answerLocked = true;
    answeredCount++;

    const question = questions[currentQuestion];
    const correct = selectedAnswer === question.answer;
    const optionElements = document.querySelectorAll(".option");

    optionElements.forEach((element, optionIndex) => {
        element.classList.add("disabled");
        element.classList.toggle("selected", optionIndex === selectedAnswer);

        if (optionIndex === question.answer) {
            element.classList.add("correct");
        }

        if (!correct && optionIndex === selectedAnswer) {
            element.classList.add("wrong");
        }
    });

    if (correct) {
        score++;
        currentStreak++;
        bestStreak = Math.max(bestStreak, currentStreak);
        showFeedback(getCorrectFeedback(), true);
    } else {
        currentStreak = 0;
        showFeedback(`Not quite. Correct answer: ${question.options[question.answer]}`, false);
    }

    updateGamifiedHud();
    nextBtn.disabled = false;
}

function showFeedback(message, correct) {
    if (!feedbackElement) return;

    feedbackElement.innerText = message;
    feedbackElement.classList.remove("is-correct", "is-wrong");
    feedbackElement.classList.add(correct ? "is-correct" : "is-wrong");
}

function resetFeedback() {
    if (!feedbackElement) return;

    feedbackElement.innerText = "";
    feedbackElement.classList.remove("is-correct", "is-wrong");
}

function getCorrectFeedback() {
    if (currentStreak >= 5) return `Excellent. ${currentStreak} correct answers in a row.`;
    if (currentStreak >= 3) return `Great streak. ${currentStreak} combo bonus is active.`;
    return "Correct. Keep going.";
}

function updateGamifiedHud() {
    const answeredRatio = questions.length
        ? Math.round((answeredCount / questions.length) * 100)
        : 0;

    if (progressFillElement) {
        progressFillElement.style.width = `${answeredRatio}%`;
    }

    if (streakElement) {
        streakElement.innerText = `${currentStreak} Combo`;
    }

    if (xpPreviewElement) {
        xpPreviewElement.innerText = `${calculatePotentialXp()} XP`;
    }

    if (arenaRankElement) {
        arenaRankElement.innerText = getArenaRank();
    }
}

function calculatePotentialXp() {
    return (score * 20) + (bestStreak * 5) + calculateTimeBonus();
}

function calculateTimeBonus() {
    if (!totalQuizSeconds || remainingSeconds <= 0) return 0;
    const remainingRatio = remainingSeconds / totalQuizSeconds;
    return Math.max(0, Math.round(remainingRatio * 30));
}

function getArenaRank() {
    if (bestStreak >= 7) return "Master";
    if (bestStreak >= 5) return "Scholar";
    if (bestStreak >= 3) return "Challenger";
    return "Rookie";
}

function getGrade(percentage) {
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= PASS_MARK_PERCENT) return "D";
    return "R";
}

async function finishQuiz(timeExpired) {
    if (quizFinished) return;

    quizFinished = true;
    clearInterval(timerId);

    document.getElementById("quizArea").style.display = "none";
    document.getElementById("result").style.display = "block";

    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= PASS_MARK_PERCENT;
    const xpEarned = passed ? calculatePotentialXp() : 0;
    const resultPrefix = timeExpired ? "Time is up. " : "";
    const grade = getGrade(percentage);

    const resultGrade = document.getElementById("resultGrade");
    if (resultGrade) resultGrade.innerText = grade;

    document.getElementById("scoreText").innerText =
        `${resultPrefix}Score: ${score}/${questions.length} (${percentage}%)`;

    document.getElementById("xpText").innerText =
        `You earned ${xpEarned} XP`;

    updateResultStats(percentage, xpEarned);

    updateResultActions(passed);

    if (passed) {
        savePassedCourse(currentCourse.code);
    }

    if (passed && currentUser && !currentUser.profile_pending_sync) {
        currentUser.xp = (currentUser.xp || 0) + xpEarned;
        currentUser.streak = Math.max(currentUser.streak || 0, bestStreak);
        currentUser.badges = currentUser.badges || [];

        await updateAchievements();
        await updateUserDatabase(currentUser);
    }
}

function updateResultStats(percentage, xpEarned) {
    const resultStats = document.getElementById("resultStats");
    if (!resultStats) return;

    resultStats.innerHTML = `
        <div class="result-stat">
            <strong>${percentage}%</strong>
            <span>Accuracy</span>
        </div>
        <div class="result-stat">
            <strong>${bestStreak}</strong>
            <span>Best Combo</span>
        </div>
        <div class="result-stat">
            <strong>${xpEarned}</strong>
            <span>XP Reward</span>
        </div>
    `;
}

function updateResultActions(passed) {
    const resultMessage = document.getElementById("resultMessage");
    const resultActions = document.getElementById("resultActions");

    if (!resultActions) return;

    const nextCourse = getNextCourse(currentCourse.code);

    if (!passed) {
        if (resultMessage) {
            resultMessage.innerText = `Mission not cleared yet. You need at least ${PASS_MARK_PERCENT}% to unlock the next quiz. Retake this course and try to build a stronger streak.`;
        }

        resultActions.innerHTML = `
        <a href="quiz.html?course=${currentCourse.code}" class="course-btn">Retake Challenge</a>
        `;
        return;
    }

    if (resultMessage) {
        resultMessage.innerText = "Mission cleared. Great work. Your progress has been updated.";
    }

    resultActions.innerHTML = nextCourse
        ? `<a href="quiz.html?course=${nextCourse.code}" class="course-btn">Start Next Challenge</a>`
        : `<a href="courses.html" class="course-btn">Back To Courses</a>`;
}

function getNextCourse(courseCode) {
    const currentIndex = courseCatalog.findIndex(course => course.code === courseCode);

    if (currentIndex === -1) return null;

    return courseCatalog[currentIndex + 1] || null;
}

function getPreviousCourse(courseCode) {
    const currentIndex = courseCatalog.findIndex(course => course.code === courseCode);

    if (currentIndex <= 0) return null;

    return courseCatalog[currentIndex - 1];
}

function canTakeCourse(courseCode) {
    const previousCourse = getPreviousCourse(courseCode);

    if (!previousCourse) return true;

    return getPassedCourses().includes(previousCourse.code);
}

function savePassedCourse(courseCode) {
    if (!currentUser?.id) return;

    const key = `fuoye_passed_courses_${currentUser.id}`;
    const passedCourses = getPassedCourses();

    if (!passedCourses.includes(courseCode)) {
        passedCourses.push(courseCode);
        localStorage.setItem(key, JSON.stringify(passedCourses));
    }
}

function getPassedCourses() {
    if (!currentUser?.id) return [];

    try {
        return JSON.parse(localStorage.getItem(`fuoye_passed_courses_${currentUser.id}`)) || [];
    } catch (error) {
        return [];
    }
}

async function updateAchievements() {
    if (!currentUser) return;

    currentUser.badges = currentUser.badges || [];

    if (currentUser.xp >= 100 && !currentUser.badges.includes("Beginner")) {
        currentUser.badges.push("Beginner");
    }

    if (currentUser.xp >= 300 && !currentUser.badges.includes("Scholar")) {
        currentUser.badges.push("Scholar");
    }

    if (currentUser.xp >= 500 && !currentUser.badges.includes("Master Learner")) {
        currentUser.badges.push("Master Learner");
    }

    if ((currentUser.streak || 0) >= 5 && !currentUser.badges.includes("Combo Scholar")) {
        currentUser.badges.push("Combo Scholar");
    }
}

function formatCourseCode(code) {
    return code.replace(/([A-Z]+)(\d+)/, "$1 $2");
}

initQuiz();
