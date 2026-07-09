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
    const enabled = !document.body.classList.contains('dark-mode');

    saveThemePreference(currentUser?.id, enabled);
    updateDarkModeButton(enabled);

    if (!currentUser) return;

    currentUser.dark_mode = enabled;
    const { error } = await updateUser(currentUser.id, { dark_mode: currentUser.dark_mode });

    if (error) {
        console.warn('Dark mode was saved locally but not synced to Supabase.', error);
    }
}

function applySavedDarkMode() {
    applyUserTheme(currentUser);
    const enabled = document.body.classList.contains('dark-mode');

    updateDarkModeButton(enabled);
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
