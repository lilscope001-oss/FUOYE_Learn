let currentUser = null;
let currentCourse = null;
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let quizFinished = false;
let timerId = null;
let remainingSeconds = 0;

const params = new URLSearchParams(window.location.search);
const courseCode = (params.get("course") || "CSC101").replace(/\s+/g, "").toUpperCase();

const courseTitleElement = document.getElementById("courseTitle");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerElement = document.getElementById("timer");
const progressElement = document.getElementById("quizProgress");
const courseOutlineElement = document.getElementById("courseOutline");

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

    questions = generateQuizQuestions(currentCourse.code);
    remainingSeconds = calculateQuizDuration(questions.length);

    courseTitleElement.innerText = `${formatCourseCode(currentCourse.code)} Quiz`;

    if (courseOutlineElement) {
        courseOutlineElement.innerText = currentCourse.outline;
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

    const xpEarned = score * 20;
    const resultPrefix = timeExpired ? "Time is up. " : "";

    document.getElementById("scoreText").innerText =
        `${resultPrefix}Score: ${score}/${questions.length}`;

    document.getElementById("xpText").innerText =
        `You earned ${xpEarned} XP`;

    if (currentUser && !currentUser.profile_pending_sync) {
        currentUser.xp = (currentUser.xp || 0) + xpEarned;
        currentUser.badges = currentUser.badges || [];

        await updateAchievements();
        await updateUserDatabase(currentUser);
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
