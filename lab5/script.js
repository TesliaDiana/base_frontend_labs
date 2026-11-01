document.addEventListener("DOMContentLoaded", () => {
    initTable();
});

const patterns = {
    fullname: /^[А-ЩЬЮЯҐЄІЇ][а-щьюяґєії']+\s[А-ЩЬЮЯҐЄІЇ]\.[А-ЩЬЮЯҐЄІЇ]\.$/u,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idcard: /^[А-ЩЬЮЯҐЄІЇ]{2}\s№\d{6}$/u,
    faculty: /^[А-ЩЬЮЯҐЄІЇ]{4}$/u,
    dob: /^\d{2}\.\d{2}\.\d{4}$/
};

function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    const values = {};

    const fields = [
        { id: "fullname", label: "ПІБ" },
        { id: "phone", label: "Телефон" },
        { id: "idcard", label: "ID-card" },
        { id: "faculty", label: "Факультет" },
        { id: "dob", label: "Дата народж." }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const row = document.getElementById(`row-${field.id}`);
        const val = input.value.trim();

        if (!patterns[field.id].test(val)) {
            row.classList.add("error");
            isValid = false;
        } else {
            row.classList.remove("error");
            values[field.label] = val;
        }
    });

    const outputContent = document.getElementById("outputContent");

    if (isValid) {
        let html = "";
        for (const [key, val] of Object.entries(values)) {
            html += `<p><strong>${key}:</strong> ${val}</p>`;
        }
        outputContent.innerHTML = html;
    } else {
        outputContent.innerHTML = "";
    }

    return false;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function initTable() {
    const table = document.getElementById("matrixTable");
    const colorPicker = document.getElementById("colorPicker");
    const TARGET_CELL = 4;
    let counter = 1;

    for (let r = 0; r < 6; r++) {
        const tr = document.createElement("tr");
        for (let c = 0; c < 6; c++) {
            const td = document.createElement("td");
            td.textContent = counter;
            td.dataset.row = r;
            td.dataset.col = c;
            td.dataset.number = counter;

            if (counter === TARGET_CELL) {
                td.classList.add("active-target");

                td.onmouseover = function () {
                    this.style.backgroundColor = getRandomColor();
                };

                td.onclick = function () {
                    this.style.backgroundColor = colorPicker.value;
                };

                td.ondblclick = function () {
                    const selectedColor = colorPicker.value;
                    const allCells = table.querySelectorAll("td");
                    allCells.forEach(cell => {
                        const row = parseInt(cell.dataset.row, 10);
                        const col = parseInt(cell.dataset.col, 10);
                        if (row + col === 5) {
                            cell.style.backgroundColor = selectedColor;
                        }
                    });
                };
            }

            tr.appendChild(td);
            counter++;
        }
        table.appendChild(tr);
    }
}
