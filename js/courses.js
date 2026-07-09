const INITIAL_COURSE_LIMIT = 12;

const courseGrid = document.getElementById("courseGrid");
const courseDetails = document.getElementById("courseDetails");
const courseCount = document.getElementById("courseCount");
const levelFilter = document.getElementById("levelFilter");
const semesterFilter = document.getElementById("semesterFilter");
const searchInput = document.getElementById("courseSearch");
const courseSelect = document.getElementById("courseSelect");
const moreCoursesBtn = document.getElementById("moreCoursesBtn");

let showAllCourses = false;

if (levelFilter) levelFilter.addEventListener("change", updateCourseOptions);
if (semesterFilter) semesterFilter.addEventListener("change", updateCourseOptions);
if (searchInput) searchInput.addEventListener("input", updateCourseOptions);
if (courseSelect) courseSelect.addEventListener("change", renderSelectedCourse);
if (moreCoursesBtn) moreCoursesBtn.addEventListener("click", toggleMoreCourses);

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

    showAllCourses = false;
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

    renderCourseGrid(filteredCourses);
    renderSelectedCourse();
}

function renderCourseGrid(courses) {
    if (!courseGrid) return;

    const visibleCourses = showAllCourses
        ? courses
        : courses.slice(0, INITIAL_COURSE_LIMIT);

    courseGrid.innerHTML = "";

    visibleCourses.forEach(course => {
        courseGrid.innerHTML += createCourseCard(course);
    });

    if (courses.length === 0) {
        courseGrid.innerHTML = `<div class="card">No courses match your selection.</div>`;
    }

    if (moreCoursesBtn) {
        moreCoursesBtn.style.display = courses.length > INITIAL_COURSE_LIMIT ? "block" : "none";
        moreCoursesBtn.innerText = showAllCourses
            ? "Show Fewer Courses"
            : `More Courses (${courses.length - INITIAL_COURSE_LIMIT})`;
    }
}

function toggleMoreCourses() {
    showAllCourses = !showAllCourses;
    renderCourseGrid(getFilteredCourses());
}

function renderSelectedCourse() {
    if (!courseDetails) return;

    const selectedCourse = findCourse(courseSelect?.value);

    if (!selectedCourse) {
        courseDetails.innerHTML = `<div class="card">No courses match your selection.</div>`;
        return;
    }

    courseDetails.innerHTML = `
    <h2 class="section-title">Selected Course</h2>
    ${createCourseCard(selectedCourse)}
    `;
}

function createCourseCard(course) {
    return `
    <article class="course-card">
        <div class="course-banner">
            <h3>${formatCourseCode(course.code)}</h3>
            <span>${course.level} - ${course.semester}</span>
        </div>
        <div class="course-content">
            <h2>${course.title}</h2>
            <div class="course-meta">${generateQuizQuestions(course.code).length} timed quiz questions</div>
            <a href="quiz.html?course=${course.code}" class="course-btn">Take Quiz</a>
        </div>
    </article>
    `;
}

function formatCourseCode(code) {
    return code.replace(/([A-Z]+)(\d+)/, "$1 $2");
}

updateCourseOptions();
