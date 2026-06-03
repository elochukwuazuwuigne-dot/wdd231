import { places } from "../data/places.mjs";

// Navigation Menu
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const expanded =
      menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", !expanded);
  });
}

// Footer
document.querySelector("#currentyear").textContent =
  new Date().getFullYear();

document.querySelector("#lastModified").textContent =
  `Last Modified: ${document.lastModified}`;

// Visitor Message
const visitMessage = document.querySelector("#visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent =
    "Welcome! Let us know if you have any questions.";
} else {
  const daysBetween =
    Math.floor((now - Number(lastVisit)) / 86400000);

  if (daysBetween < 1) {
    visitMessage.textContent =
      "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    visitMessage.textContent =
      "You last visited 1 day ago.";
  } else {
    visitMessage.textContent =
      `You last visited ${daysBetween} days ago.`;
  }
}

localStorage.setItem("lastVisit", now);

// Build Cards
const cardsContainer = document.querySelector("#discover-cards");

places.forEach(place => {
  const card = document.createElement("section");
  card.classList.add("discover-card");

  card.innerHTML = `
    <h2>${place.name}</h2>

    <figure>
      <img
        src="${place.image}"
        alt="${place.name}"
        width="300"
        height="200"
        loading="lazy">
    </figure>

    <address>${place.address}</address>

    <p>
      ${place.description}
      <br><br>
      <strong>Cost:</strong> ${place.price}
    </p>

    <button>Learn More</button>
  `;

  cardsContainer.appendChild(card);
});