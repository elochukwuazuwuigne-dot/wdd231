const container = document.querySelector("#anime-container");
const dialog = document.querySelector("#anime-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeBtn = document.querySelector("#close-dialog");

let animeData = [];

// ---------- FETCH DATA ----------
async function loadAnime() {
    try {
        const response = await fetch("data/anime.json");

        if (!response.ok) {
            throw new Error("Failed to load anime data");
        }

        animeData = await response.json();

        displayAnime(animeData);

    } catch (error) {
        console.error("Error loading anime:", error);
        container.innerHTML = "<p>Failed to load anime data.</p>";
    }
}

// ---------- DISPLAY CARDS ----------
function displayAnime(list) {
    container.innerHTML = "";

    list.forEach((anime, index) => {
        const card = document.createElement("div");
        card.classList.add("anime-card");

    card.innerHTML = `
    <img src="${anime.image}" alt="${anime.title}" loading="lazy">

    <h3>${anime.title}</h3>
    <p><strong>Genre:</strong> ${anime.genre}</p>
    <p><strong>Year:</strong> ${anime.year}</p>
    <p><strong>Rating:</strong> ${anime.rating}</p>

    <button class="more-btn" data-index="${index}">
        More Info
    </button>
`;

        container.appendChild(card);
    });

    // attach button events
    document.querySelectorAll(".more-btn").forEach(btn => {
        btn.addEventListener("click", showDetails);
    });
}

// ---------- MODAL ----------
function showDetails(event) {
    const index = event.target.dataset.index;
    const anime = animeData[index];

    dialogContent.innerHTML = `
        <h2>${anime.title}</h2>
        <p>Genre: ${anime.genre}</p>
        <p>Year: ${anime.year}</p>
        <p>Rating: ${anime.rating}</p>
    `;

    dialog.showModal();
}

closeBtn.addEventListener("click", () => {
    dialog.close();
});


// start app
loadAnime();