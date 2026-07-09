async function initLeaderboard() {
    const [users, currentUser] = await Promise.all([
        fetchAllUsers(),
        getCurrentUser()
    ]);

    const rankedUsers = users
        .filter(Boolean)
        .sort((a, b) => (b.xp || 0) - (a.xp || 0));

    updateSummary(rankedUsers, currentUser);
    renderPodium(rankedUsers.slice(0, 3));
    renderLeaderboardRows(rankedUsers, currentUser);
}

function updateSummary(users, currentUser) {
    setText('totalStudents', users.length);
    setText('topXp', `${users[0]?.xp || 0} XP`);

    const currentRank = users.findIndex(user => user.id === currentUser?.id);
    setText('yourRank', currentRank >= 0 ? `#${currentRank + 1}` : '--');
}

function renderPodium(topUsers) {
    const podium = document.getElementById('podiumList');
    if (!podium) return;

    if (topUsers.length === 0) {
        podium.innerHTML = '';
        return;
    }

    podium.innerHTML = topUsers.map((user, index) => `
        <article class="podium-card ${index === 0 ? 'first' : ''}">
            <div class="podium-rank">
                ${getRankIcon(index)}
                <span>${getRankLabel(index)}</span>
            </div>
            <div>
                <div class="podium-name">${escapeHtml(user.name || 'Student')}</div>
                <div class="podium-meta">${escapeHtml(user.department || 'Computer Science')} - ${escapeHtml(user.level || '100L')}</div>
            </div>
            <div class="xp">${user.xp || 0} XP</div>
        </article>
    `).join('');
}

function renderLeaderboardRows(users, currentUser) {
    const container = document.getElementById('leaderboardList');
    if (!container) return;

    if (users.length === 0) {
        container.innerHTML = '<div class="leaderboard-empty">No students on the leaderboard yet.</div>';
        return;
    }

    container.innerHTML = users.map((user, index) => {
        const isCurrentUser = user.id === currentUser?.id;

        return `
            <div class="player ${isCurrentUser ? 'current-user' : ''}">
                <div class="rank">${getRankIcon(index)}<span>#${index + 1}</span></div>
                <div class="student-cell">
                    <div class="student-avatar">${getInitials(user.name)}</div>
                    <div>
                        <div class="student-name">${escapeHtml(user.name || 'Student')}</div>
                        <div class="student-meta">${escapeHtml(user.matric || user.department || 'FUOYE Learn')}</div>
                    </div>
                </div>
                <div class="level-pill">${escapeHtml(user.level || '100L')}</div>
                <div class="xp">${user.xp || 0} XP</div>
            </div>
        `;
    }).join('');
}

function getRankIcon(index) {
    if (index === 0) return '<img src="assets/icons/award-gold.svg" alt="" class="icon-rank">';
    if (index === 1) return '<img src="assets/icons/award-silver.svg" alt="" class="icon-rank">';
    if (index === 2) return '<img src="assets/icons/award-bronze.svg" alt="" class="icon-rank">';
    return '';
}

function getRankLabel(index) {
    if (index === 0) return 'Top Learner';
    if (index === 1) return 'Second Place';
    if (index === 2) return 'Third Place';
    return `#${index + 1}`;
}

function getInitials(name) {
    const parts = String(name || 'Student')
        .trim()
        .split(/\s+/)
        .slice(0, 2);

    return parts
        .map(part => part.charAt(0).toUpperCase())
        .join('') || 'S';
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.innerText = value;
}

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

initLeaderboard();
