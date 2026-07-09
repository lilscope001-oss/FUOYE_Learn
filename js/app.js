// =============================
// FUOYE LEARN HUB DASHBOARD
// app.js
// =============================

// Check Login

let currentUser = null;

async function initApp() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    await dailyReward();
    updateDashboard();
    await updateAdminNav();
    calculateProgress();
    loadActivity();
    renderDashboardCourses();
    await loadLeaderboardPreview();
}

// =============================
// Dashboard Stats
// =============================

function updateDashboard() {

    const user = currentUser;

    if (!user) return;

    // Profile Box
    const profileName = document.getElementById("profileName");
    const profileXP = document.getElementById("profileXP");

    if (profileName) {
        profileName.innerText = user.name;
    }

    if (profileXP) {
        profileXP.innerText = (user.xp || 0) + " XP";
    }

    // Welcome Text

    const welcome =
        document.getElementById(
            "welcomeUser"
        );

    if (welcome) {
        welcome.innerText =
            `Welcome Back, ${user.name}`;
    }

    // XP

    const xp =
        document.getElementById(
            "totalXP"
        );

    if (xp) {
        xp.innerText =
            user.xp || 0;
    }

    // Streak

    const streak =
        document.getElementById(
            "currentStreak"
        );

    if (streak) {
        streak.innerText =
            user.streak || 0;
    }

    // Badges

    const badges =
        document.getElementById(
            "badgeCount"
        );

    if (badges) {
        badges.innerText =
            user.badges
            ? user.badges.length
            : 0;
    }

    // Level

    const level =
        document.getElementById(
            "userLevel"
        );

    if (level) {

        let xpValue =
            user.xp || 0;

        let currentLevel =
            calculateLevel(
                xpValue
            );

        level.innerText =
            currentLevel;

    }

}

// =============================
// Level Calculator
// =============================

function calculateLevel(xp) {

    if (xp >= 2000)
        return "400L";

    if (xp >= 1200)
        return "300L";

    if (xp >= 600)
        return "200L";

    return "100L";
}

async function updateAdminNav() {
    const adminNavItem = document.getElementById("adminNavItem");

    if (!adminNavItem) return;

    adminNavItem.style.display = await isCurrentSessionAdmin() ? "block" : "none";
}

// =============================
// Progress Percentage
// =============================

function calculateProgress() {

    const user = currentUser;

    if (!user) return;

    const progressBar =
        document.getElementById(
            "progressBar"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    if (
        !progressBar ||
        !progressText
    ) return;

    const xp =
        user.xp || 0;

    let percent =
        Math.min(
            (xp / 2000) * 100,
            100
        );

    progressBar.style.width =
        percent + "%";

    progressText.innerText =
        percent.toFixed(0) + "%";
}

// =============================
// Recent Activity
// =============================

function loadActivity() {

    const activity = document.getElementById("activityList");

    if (!activity || !currentUser) return;

    const history = currentUser.activity_history || [];

    activity.innerHTML = "";

    if (history.length === 0) {
        activity.innerHTML = `<li>No activity yet</li>`;
        return;
    }

    history
        .slice(-5)
        .reverse()
        .forEach(item => {
            activity.innerHTML += `
            <li>${escapeHtml(item)}</li>
            `;
        });
}

function renderDashboardCourses() {
    const container = document.getElementById("dashboardCourses");

    if (!container || typeof courseCatalog === "undefined" || !Array.isArray(courseCatalog)) return;

    const featuredCourses = courseCatalog.slice(0, 3);

    container.innerHTML = featuredCourses.map(course => `
        <article class="course-card">
            <div class="course-top">${formatCourseCode(course.code)}</div>
            <div class="course-body">
                <h3>${escapeHtml(course.title)}</h3>
                <p>${escapeHtml(course.level)} - ${escapeHtml(course.semester)} timed quiz practice.</p>
                <a href="quiz.html?course=${course.code}" class="course-btn">Take Quiz</a>
            </div>
        </article>
    `).join("");
}

async function loadLeaderboardPreview() {
    const container = document.getElementById("leaderboardPreview");

    if (!container) return;

    const users = await fetchAllUsers();
    const topUsers = users
        .filter(Boolean)
        .sort((a, b) => (b.xp || 0) - (a.xp || 0))
        .slice(0, 3);

    if (topUsers.length === 0) {
        container.innerHTML = `
            <div class="rank-item">
                <span>No leaderboard data yet.</span>
                <span class="badge">0 XP</span>
            </div>
        `;
        return;
    }

    container.innerHTML = topUsers.map((user, index) => `
        <div class="rank-item">
            <span>${getRankIcon(index)} ${escapeHtml(user.name || "Student")}</span>
            <span class="badge">${user.xp || 0} XP</span>
        </div>
    `).join("");
}

// =============================
// Save Activity
// =============================

async function saveActivity(text) {
    if (!currentUser) return;

    const history = currentUser.activity_history || [];
    currentUser.activity_history = [...history, text];

    await updateUserDatabase(currentUser);
}

// =============================
// Daily Reward
// =============================

async function dailyReward() {
    if (!currentUser) return;
    if (currentUser.profile_pending_sync) return;

    const today = new Date().toDateString();
    const rewardKey = `fuoye_last_reward_${currentUser.id}`;
    const lastReward = currentUser.last_reward || localStorage.getItem(rewardKey);

    if (today === lastReward) return;

    currentUser.xp = (currentUser.xp || 0) + 10;
    currentUser.last_reward = today;
    localStorage.setItem(rewardKey, today);

    await updateUserDatabase(currentUser);
    await saveActivity("Daily login reward (+10 XP)");
}

// =============================
// Logout
// =============================

async function logout() {

    await signOutUser();

    window.location.href =
        "login.html";

}

// =============================
// Course Unlock System
// =============================

function isCourseUnlocked(
    requiredXP
) {

    if (!currentUser)
        return false;

    return (
        (currentUser.xp || 0) >= requiredXP
    );

}

function getRankIcon(index) {
    if (index === 0) return '<img src="assets/icons/award-gold.svg" alt="" class="icon-rank">';
    if (index === 1) return '<img src="assets/icons/award-silver.svg" alt="" class="icon-rank">';
    if (index === 2) return '<img src="assets/icons/award-bronze.svg" alt="" class="icon-rank">';
    return "";
}

function formatCourseCode(code) {
    return String(code || "").replace(/([A-Z]+)(\d+)/, "$1 $2");
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// =============================
// Initialize
// =============================

initApp();

// =============================
// Global Access
// =============================

window.logout = logout;

window.saveActivity =
    saveActivity;

window.isCourseUnlocked =
    isCourseUnlocked;

window.calculateLevel =
    calculateLevel;
