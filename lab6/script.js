document.addEventListener("DOMContentLoaded", () => {
    const downloadBtn = document.getElementById("downloadBtn");
    const statusMessage = document.getElementById("statusMessage");
    const usersGrid = document.getElementById("usersGrid");

    const API_URL = "https://randomuser.me/api/?results=5";

    downloadBtn.addEventListener("click", () => {
        loadUsersData();
    });

    function loadUsersData() {
        statusMessage.textContent = "Loading...";
        statusMessage.className = "status-message";

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                statusMessage.textContent = "success!";
                statusMessage.className = "status-message success";
                renderUsers(data.results);
            })
            .catch((error) => {
                console.error("Помилка завантаження даних:", error);
                statusMessage.textContent = "Failed to load data!";
                statusMessage.className = "status-message error";
            });
    }

    function renderUsers(users) {
        usersGrid.innerHTML = "";

        users.forEach((user) => {
            const pictureUrl = user.picture.large;
            const postcode = user.location.postcode;
            const city = user.location.city;
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;

            const card = document.createElement("div");
            card.className = "user-card";

            card.innerHTML = `
                <img src="${pictureUrl}" alt="User Photo">
                <div class="user-details">
                    <p><strong>Postcode:</strong> ${postcode}</p>
                    <p><strong>City:</strong> ${city}</p>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>E-mail:</strong> ${email}</p>
                </div>
            `;

            usersGrid.appendChild(card);
        });
    }
});
