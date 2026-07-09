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
    calculateProgress();
    loadActivity();
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
            `Welcome Back, ${user.name} 👋`;
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
            <li>${item}</li>
            `;
        });
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

    const today = new Date().toDateString();
    const lastReward = currentUser.last_reward;

    if (today === lastReward) return;

    currentUser.xp = (currentUser.xp || 0) + 10;
    currentUser.last_reward = today;

    await updateUserDatabase(currentUser);
    await saveActivity("🎁 Daily login reward (+10 XP)");
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
