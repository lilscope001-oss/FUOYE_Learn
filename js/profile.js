let currentUser = null;

async function initProfile() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    setProfileText("name", currentUser.name || "Student");
    setProfileText("email", currentUser.email || "");
    setProfileText("matric", currentUser.matric || "");
    setProfileText("xp", currentUser.xp || 0);
    setProfileText(
        "badges",
        currentUser.badges?.length ? currentUser.badges.join(", ") : "No badges yet"
    );
}

function setProfileText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.innerText = value;
    }
}

async function logout() {
    await signOutUser();
    window.location.href = "login.html";
}

initProfile();
