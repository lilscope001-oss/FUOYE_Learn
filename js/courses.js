const courseGrid = document.getElementById("courseGrid");
const courseCount = document.getElementById("courseCount");
const levelFilter = document.getElementById("levelFilter");
const semesterFilter = document.getElementById("semesterFilter");
const searchInput = document.getElementById("courseSearch");

if (levelFilter) levelFilter.addEventListener("change", renderCourses);
if (semesterFilter) semesterFilter.addEventListener("change", renderCourses);
if (searchInput) searchInput.addEventListener("input", renderCourses);

function renderCourses() {
    if (!courseGrid) return;

    const selectedLevel = levelFilter?.value || "all";
    const selectedSemester = semesterFilter?.value || "all";
    const searchTerm = (searchInput?.value || "").trim().toLowerCase();

    const filteredCourses = courseCatalog.filter(course => {
        const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
        const matchesSemester = selectedSemester === "all" || course.semester === selectedSemester;
        const searchable = `${course.code} ${course.title} ${course.outline}`.toLowerCase();
        const matchesSearch = !searchTerm || searchable.includes(searchTerm);

        return matchesLevel && matchesSemester && matchesSearch;
    });

    courseGrid.innerHTML = "";

    filteredCourses.forEach(course => {
        courseGrid.innerHTML += `
        <article class="course-card">
            <div class="course-banner">
                <h3>${formatCourseCode(course.code)}</h3>
                <span>${course.level} • ${course.semester}</span>
            </div>
            <div class="course-content">
                <h2>${course.title}</h2>
                <p>${course.outline}</p>
                <div class="course-meta">${generateQuizQuestions(course.code).length} timed quiz questions</div>
                <a href="quiz.html?course=${course.code}" class="course-btn">Take Quiz</a>
            </div>
        </article>
        `;
    });

    if (courseCount) {
        courseCount.innerText = `${filteredCourses.length} courses`;
    }

    if (filteredCourses.length === 0) {
        courseGrid.innerHTML = `<div class="card">No courses match your search.</div>`;
    }
}

function formatCourseCode(code) {
    return code.replace(/([A-Z]+)(\d+)/, "$1 $2");
}

renderCourses();
