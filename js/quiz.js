let currentUser = null;
let currentCourse = null;
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizFinished = false;
let timerId = null;
let remainingSeconds = 0;
const PASS_MARK_PERCENT = 50;

const params = new URLSearchParams(window.location.search);
const courseCode = (params.get("course") || "CSC101").replace(/\s+/g, "").toUpperCase();

const courseTitleElement = document.getElementById("courseTitle");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const progressElement = document.getElementById("quizProgress");

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

    courseTitleElement.innerText = `${formatCourseCode(currentCourse.code)} Quiz`;

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
}

function loadQuestion() {
    const question = questions[currentQuestion];

    if (!question) return;

    selectedAnswer = null;
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";

    if (progressElement) {
        progressElement.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
    }

    question.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = option;

        div.addEventListener("click", () => {
            selectedAnswer = index;

            document.querySelectorAll(".option").forEach(element => {
                element.classList.remove("selected");
            });

            div.classList.add("selected");
        });

        optionsElement.appendChild(div);
    });
}

nextBtn.addEventListener("click", async () => {
    if (selectedAnswer === null) {
        alert("Select an answer first.");
        return;
    }

    submitAnswer();
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
        return;
    }

    await finishQuiz(false);
});

function submitAnswer() {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }
}

async function finishQuiz(timeExpired) {
    if (quizFinished) return;

    quizFinished = true;
    clearInterval(timerId);

    document.getElementById("quizArea").style.display = "none";
    document.getElementById("result").style.display = "block";

    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= PASS_MARK_PERCENT;
    const xpEarned = passed ? score * 20 : 0;
    const resultPrefix = timeExpired ? "Time is up. " : "";

    document.getElementById("scoreText").innerText =
        `${resultPrefix}Score: ${score}/${questions.length} (${percentage}%)`;

    document.getElementById("xpText").innerText =
        `You earned ${xpEarned} XP`;

    updateResultActions(passed);

    if (passed) {
        savePassedCourse(currentCourse.code);
    }

    if (passed && currentUser && !currentUser.profile_pending_sync) {
        currentUser.xp = (currentUser.xp || 0) + xpEarned;
        currentUser.badges = currentUser.badges || [];

        await updateAchievements();
        await updateUserDatabase(currentUser);
    }
}

function updateResultActions(passed) {
    const resultMessage = document.getElementById("resultMessage");
    const resultActions = document.getElementById("resultActions");

    if (!resultActions) return;

    const nextCourse = getNextCourse(currentCourse.code);

    if (!passed) {
        if (resultMessage) {
            resultMessage.innerText = `You need at least ${PASS_MARK_PERCENT}% to move to the next quiz. Retake this course quiz.`;
        }

        resultActions.innerHTML = `
        <a href="quiz.html?course=${currentCourse.code}" class="course-btn">Retake Quiz</a>
        `;
        return;
    }

    if (resultMessage) {
        resultMessage.innerText = "Great work. You passed this course quiz.";
    }

    resultActions.innerHTML = nextCourse
        ? `<a href="quiz.html?course=${nextCourse.code}" class="course-btn">Go To Next Quiz</a>`
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
}

function formatCourseCode(code) {
    return code.replace(/([A-Z]+)(\d+)/, "$1 $2");
}

initQuiz();
