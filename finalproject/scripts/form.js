// Simple form helper (optional)

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", () => {
        console.log("Form submitted successfully");
    });
}