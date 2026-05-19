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

// WEATHER API
const apiKey = "YOUR_API_KEY";

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=12.1328&lon=-86.2504&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(weatherURL);

    const data = await response.json();

    document.querySelector("#current-temp").textContent =
        `${data.list[0].main.temp}°C`;

    document.querySelector("#weather-desc").textContent =
        data.list[0].weather[0].description;

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    for (let i = 8; i < 32; i += 8) {

        const item = document.createElement("li");

        item.textContent =
            `${data.list[i].dt_txt.split(" ")[0]}: ${data.list[i].main.temp}°C`;

        forecast.appendChild(item);
    }
}

getWeather();

// SPOTLIGHT MEMBERS
const membersURL = "data/members.json";

async function getSpotlights() {

    const response = await fetch(membersURL);

    const data = await response.json();

    const members = data.filter(member =>
        member.membership === "Gold" ||
        member.membership === "Silver"
    );

    const randomMembers =
        members.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.querySelector("#spotlight-container");

    randomMembers.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <h3>${member.name}</h3>

            <img src="${member.image}"
                 alt="${member.name} logo"
                 loading="lazy">

            <p>${member.address}</p>

            <p>${member.phone}</p>

            <a href="${member.website}" target="_blank">
                Visit Website
            </a>

            <p>${member.membership} Member</p>
        `;

        container.appendChild(card);

    });

}

getSpotlights();