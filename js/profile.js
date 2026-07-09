let currentUser = null;

async function initProfile() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    const name = currentUser.name || "Student";
    const email = currentUser.email || "";
    const matric = currentUser.matric || "Not provided";
    const xp = currentUser.xp || 0;
    const level = calculateProfileLevel(xp);
    const badges = currentUser.badges || [];

    setProfileText("name", name);
    setProfileText("detailName", name);
    setProfileText("email", email);
    setProfileText("detailEmail", email || "Not provided");
    setProfileText("matric", matric);
    setProfileText("department", currentUser.department || "Computer Science");
    setProfileText("xp", xp);
    setProfileText("level", level);
    setProfileText("badgeCount", badges.length);
    setProfileText("avatarInitials", getInitials(name));
    setProfileText(
        "accountStatus",
        currentUser.profile_pending_sync ? "Profile Sync Pending" : "Active Student"
    );

    renderProgress(xp);
    renderBadges(badges);
}

function setProfileText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.innerText = value;
    }
}

function calculateProfileLevel(xp) {
    if (xp >= 2000) return "400L";
    if (xp >= 1200) return "300L";
    if (xp >= 600) return "200L";
    return "100L";
}

function renderProgress(xp) {
    const percent = Math.min((xp / 2000) * 100, 100);
    const progressFill = document.getElementById("profileProgress");

    if (progressFill) {
        progressFill.style.width = `${percent}%`;
    }

    setProfileText("progressText", `${percent.toFixed(0)}% completed toward 400L milestone`);
}

function renderBadges(badges) {
    const badgeContainer = document.getElementById("badges");

    if (!badgeContainer) return;

    if (!badges.length) {
        badgeContainer.innerHTML = `<span class="badge-chip">No badges yet</span>`;
        return;
    }

    badgeContainer.innerHTML = badges
        .map(badge => `<span class="badge-chip">${badge}</span>`)
        .join("");
}

function getInitials(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0].toUpperCase())
        .join("") || "ST";
}

async function logout() {
    await signOutUser();
    window.location.href = "login.html";
}

initProfile();
