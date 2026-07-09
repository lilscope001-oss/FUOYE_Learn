const courseDetails = document.getElementById("courseDetails");
const courseCount = document.getElementById("courseCount");
const levelFilter = document.getElementById("levelFilter");
const semesterFilter = document.getElementById("semesterFilter");
const searchInput = document.getElementById("courseSearch");
const courseSelect = document.getElementById("courseSelect");

if (levelFilter) levelFilter.addEventListener("change", updateCourseOptions);
if (semesterFilter) semesterFilter.addEventListener("change", updateCourseOptions);
if (searchInput) searchInput.addEventListener("input", updateCourseOptions);
if (courseSelect) courseSelect.addEventListener("change", renderSelectedCourse);

function getFilteredCourses() {
    const selectedLevel = levelFilter?.value || "all";
    const selectedSemester = semesterFilter?.value || "all";
    const searchTerm = (searchInput?.value || "").trim().toLowerCase();

    return courseCatalog.filter(course => {
        const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
        const matchesSemester = selectedSemester === "all" || course.semester === selectedSemester;
        const searchable = `${course.code} ${course.title}`.toLowerCase();
        const matchesSearch = !searchTerm || searchable.includes(searchTerm);

        return matchesLevel && matchesSemester && matchesSearch;
    });
}

function updateCourseOptions() {
    if (!courseSelect) return;

    const filteredCourses = getFilteredCourses();
    courseSelect.innerHTML = "";

    filteredCourses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.code;
        option.innerText = `${formatCourseCode(course.code)} - ${course.title}`;
        courseSelect.appendChild(option);
    });

    if (courseCount) {
        courseCount.innerText = `${filteredCourses.length} courses`;
    }

    renderSelectedCourse();
}

function renderSelectedCourse() {
    if (!courseDetails) return;

    const selectedCourse = findCourse(courseSelect?.value);

    if (!selectedCourse) {
        courseDetails.innerHTML = `<div class="card">No courses match your selection.</div>`;
        return;
    }

    courseDetails.innerHTML = `
    <article class="course-card">
        <div class="course-banner">
            <h3>${formatCourseCode(selectedCourse.code)}</h3>
            <span>${selectedCourse.level} - ${selectedCourse.semester}</span>
        </div>
        <div class="course-content">
            <h2>${selectedCourse.title}</h2>
            <div class="course-meta">${generateQuizQuestions(selectedCourse.code).length} timed quiz questions</div>
            <a href="quiz.html?course=${selectedCourse.code}" class="course-btn">Take Quiz</a>
        </div>
    </article>
    `;
}

function formatCourseCode(code) {
    return code.replace(/([A-Z]+)(\d+)/, "$1 $2");
}

updateCourseOptions();
