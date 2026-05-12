// NAVIGATION

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);
});

// FOOTER DATES

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// COURSE ARRAY

const courses = [
    {
        code: "WDD130",
        name: "Web Fundamentals",
        credits: 2,
        subject: "WDD",
        completed: true
    },

    {
        code: "WDD131",
        name: "Dynamic Web Fundamentals",
        credits: 2,
        subject: "WDD",
        completed: true
    },

    {
        code: "CSE110",
        name: "Programming Building Blocks",
        credits: 2,
        subject: "CSE",
        completed: false
    },

    {
        code: "CSE111",
        name: "Programming with Functions",
        credits: 2,
        subject: "CSE",
        completed: false
    }
];

// DISPLAY COURSES

const container = document.querySelector("#course-container");

function displayCourses(courseList) {

    container.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
        `;

        container.appendChild(card);
    });

    // TOTAL CREDITS

    const totalCredits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    document.querySelector("#total-credits").textContent =
        `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

// FILTER BUTTONS

document.querySelector("#all-btn").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#wdd-btn").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");

    displayCourses(wddCourses);
});

document.querySelector("#cse-btn").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");

    displayCourses(cseCourses);
});

