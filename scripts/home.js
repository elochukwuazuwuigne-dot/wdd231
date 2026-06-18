// Footer information
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;


// Responsive navigation
const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    }
});


// Course array
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
        code: "WDD231",
        name: "Web Frontend Development I",
        credits: 2,
        subject: "WDD",
        completed: false
    },
    {
        code: "CSE110",
        name: "Programming Building Blocks",
        credits: 2,
        subject: "CSE",
        completed: true
    },
    {
        code: "CSE111",
        name: "Programming with Functions",
        credits: 2,
        subject: "CSE",
        completed: true
    },
    {
        code: "CSE210",
        name: "Programming with Classes",
        credits: 2,
        subject: "CSE",
        completed: false
    }
];


// Display courses
const courseContainer = document.getElementById("course-container");
const totalCredits = document.getElementById("total-credits");

function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

       card.classList.add("course-card");

        if (course.subject === "WDD") {
        card.classList.add("wdd");
    }

        if (course.subject === "CSE") {
        card.classList.add("cse");
    }

        if (course.completed) {
        card.classList.add("completed");
    }

        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <p>${course.credits} Credits</p>
            <p>${course.completed ? "Completed ✓" : "In Progress"}</p>
        `;

        courseContainer.appendChild(card);
    });

    const credits = courseList.reduce(
        (total, course) => total + course.credits,
        0
    );

    totalCredits.textContent = `Total Credits: ${credits}`;
}


// Buttons
document.getElementById("all-btn").addEventListener("click", () => {
    displayCourses(courses);
});

document.getElementById("wdd-btn").addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
});

document.getElementById("cse-btn").addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
});


// Initial display
displayCourses(courses);


