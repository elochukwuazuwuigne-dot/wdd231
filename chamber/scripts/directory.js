console.log("JS loaded");

const membersContainer = document.querySelector("#members");

async function getMembers() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Cannot load JSON file");
        }

        const members = await response.json();

        displayMembers(members);

    } catch (error) {

        console.error("ERROR:", error);

        membersContainer.innerHTML =
            "<p>Failed to load members.</p>";
    }
}

function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("div");

        card.classList.add("member-card");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">
                Visit Website
            </a>
        `;

        membersContainer.appendChild(card);
    });
}

getMembers();