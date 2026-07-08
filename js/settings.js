let currentUser = null;

async function changeUsername() {
    const newName = document.getElementById('usernameInput').value.trim();

    if (!newName) {
        alert('Please enter a username');
        return;
    }

    currentUser.name = newName;
    await updateUser(currentUser.id, { name: currentUser.name });

    alert('Username updated successfully');
}

async function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const enabled = document.body.classList.contains('dark-mode');

    if (!currentUser) return;

    currentUser.dark_mode = enabled;
    await updateUser(currentUser.id, { dark_mode: currentUser.dark_mode });
}

function applySavedDarkMode() {
    if (currentUser?.dark_mode === true) {
        document.body.classList.add('dark-mode');
    }
}

async function initSettings() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    applySavedDarkMode();
}

initSettings();

async function resetProgress() {
    const confirmReset = confirm('Reset all XP, badges and progress?');

    if (!confirmReset) return;

    currentUser.xp = 0;
    currentUser.streak = 0;
    currentUser.badges = [];

    await updateUser(currentUser.id, {
        xp: currentUser.xp,
        streak: currentUser.streak,
        badges: currentUser.badges
    });

    alert('Progress reset successfully');
    location.reload();
}

async function logout() {
    await signOutUser();
    window.location.href = 'login.html';
}
