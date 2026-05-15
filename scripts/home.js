// MENU TOGGLE
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.setAttribute(
        "aria-expanded",
        navigation.classList.contains("open")
    );
});

// FOOTER DATES
document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// COURSES
const courses = [
    { code: "WDD130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
    { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, subject: "WDD", completed: true },
    { code: "CSE110", name: "Programming Building Blocks", credits: 2, subject: "CSE", completed: false },
    { code: "CSE111", name: "Programming with Functions", credits: 2, subject: "CSE", completed: false }
];

const container = document.querySelector("#course-container");
const totalDisplay = document.querySelector("#total-credits");

function displayCourses(list) {
    container.innerHTML = "";

    list.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");

        if (course.completed) card.classList.add("completed");

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
        `;

        container.appendChild(card);
    });

    const total = list.reduce((sum, c) => sum + c.credits, 0);
    totalDisplay.textContent = `Total Credits: ${total}`;
}

displayCourses(courses);

// FILTERS
document.querySelector("#all-btn").addEventListener("click", () => displayCourses(courses));

document.querySelector("#wdd-btn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "WDD"));
});

document.querySelector("#cse-btn").addEventListener("click", () => {
    displayCourses(courses.filter(c => c.subject === "CSE"));
});