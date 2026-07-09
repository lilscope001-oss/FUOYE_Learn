let currentUser = null;

async function changeUsername() {
    const newName = document.getElementById('usernameInput').value.trim();
    const message = document.getElementById('profileMessage');

    if (!newName) {
        if (message) message.innerText = 'Please enter a display name.';
        return;
    }

    currentUser.name = newName;
    await updateUser(currentUser.id, { name: currentUser.name });

    if (message) message.innerText = 'Profile updated successfully.';
}

async function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const enabled = document.body.classList.contains('dark-mode');
    localStorage.setItem(getDarkModeKey(), enabled ? 'true' : 'false');
    updateDarkModeButton(enabled);

    if (!currentUser) return;

    currentUser.dark_mode = enabled;
    await updateUser(currentUser.id, { dark_mode: currentUser.dark_mode });
}

function applySavedDarkMode() {
    const enabled = currentUser?.dark_mode === true || localStorage.getItem(getDarkModeKey()) === 'true';

    if (enabled) {
        document.body.classList.add('dark-mode');
    }

    updateDarkModeButton(enabled);
}

function getDarkModeKey() {
    return currentUser?.id ? `fuoye_dark_mode_${currentUser.id}` : 'fuoye_dark_mode';
}

async function initSettings() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    applySavedDarkMode();
    populateSettingsForm();
}

initSettings();

function populateSettingsForm() {
    const usernameInput = document.getElementById('usernameInput');

    if (usernameInput) {
        usernameInput.value = currentUser.name || '';
    }
}

function updateDarkModeButton(enabled) {
    const button = document.getElementById('darkModeBtn');

    if (button) {
        button.innerText = enabled ? 'Use Light Mode' : 'Use Dark Mode';
    }
}

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
