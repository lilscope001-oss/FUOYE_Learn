let currentUser = null;

async function initProgress() {
    currentUser = await getCurrentUser();

    if (!currentUser) {
        window.location.href = 'login.html';
        return;
    }

    renderProgress();
}

function renderProgress() {
    const passedCourses = getPassedCourses();
    const courses = Array.isArray(courseCatalog) ? courseCatalog : [];
    const completedCount = passedCourses.length;
    const overall = courses.length
        ? Math.min((completedCount / courses.length) * 100, 100)
        : 0;

    setText('xpValue', currentUser.xp || 0);
    setText('badgeValue', currentUser.badges ? currentUser.badges.length : 0);
    setText('levelValue', calculateLevel(currentUser.xp || 0));
    setText('courseValue', completedCount);
    setText('overallText', `${overall.toFixed(0)}% Completed`);

    const overallProgress = document.getElementById('overallProgress');
    if (overallProgress) overallProgress.style.width = overall + '%';

    renderCourseProgress(courses, passedCourses);
}

function renderCourseProgress(courses, passedCourses) {
    const container = document.getElementById('courseContainer');
    if (!container) return;

    const visibleCourses = courses.slice(0, 12);

    if (visibleCourses.length === 0) {
        container.innerHTML = '<div class="course-item">No courses available yet.</div>';
        return;
    }

    container.innerHTML = visibleCourses.map((course, index) => {
        const completed = passedCourses.includes(course.code);
        const previousCompleted = index === 0 || passedCourses.includes(visibleCourses[index - 1]?.code);
        const progress = completed ? 100 : previousCompleted ? 25 : 0;

        return `
            <article class="course-item ${completed ? 'completed' : ''}">
                <div class="course-name">${formatCourseCode(course.code)} - ${escapeHtml(course.title)}</div>
                <div class="course-meta">${escapeHtml(course.level)} - ${escapeHtml(course.semester)}</div>
                <div class="small-progress">
                    <div class="small-fill" style="width:${progress}%"></div>
                </div>
                <strong>${completed ? 'Completed' : previousCompleted ? 'Ready to take' : 'Locked until previous quiz is passed'}</strong>
            </article>
        `;
    }).join('');
}

function getPassedCourses() {
    if (!currentUser?.id) return [];

    try {
        return JSON.parse(localStorage.getItem(`fuoye_passed_courses_${currentUser.id}`)) || [];
    } catch (error) {
        return [];
    }
}

function calculateLevel(xp) {
    if (xp >= 2000) return '400L';
    if (xp >= 1200) return '300L';
    if (xp >= 600) return '200L';
    return '100L';
}

function formatCourseCode(code) {
    return String(code || '').replace(/([A-Z]+)(\d+)/, '$1 $2');
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

initProgress();
