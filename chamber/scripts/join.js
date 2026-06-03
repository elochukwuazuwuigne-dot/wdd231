// OPEN MODALS
const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        modal.showModal();
    });
});

// CLOSE MODALS
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        modal.close();
    });
});



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
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;

// TIMESTAMP
const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    timestampField.value = new Date().toISOString();
}