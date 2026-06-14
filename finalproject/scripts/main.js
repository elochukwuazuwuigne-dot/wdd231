// ---------- MOBILE MENU ----------
const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !expanded);
});


// ---------- FOOTER DATE ----------
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// ---------- LOCAL STORAGE (simple tracker) ----------
let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 1;
} else {
    visits = Number(visits) + 1;
}

localStorage.setItem("visits", visits);