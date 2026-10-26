document.addEventListener("DOMContentLoaded", () => {
    const el4 = document.getElementById("element-4");
    const el5 = document.querySelector("#element-5");

    let state4 = 0;
    let state5 = 0;

    if (el4) {
        el4.addEventListener("click", () => {
            if (state4 === 0 || state4 === 2) {
                el4.className = "bg-blue";
                state4 = 1;
            } else {
                el4.className = "bg-green";
                state4 = 2;
            }
        });
    }

    if (el5) {
        el5.addEventListener("click", () => {
            if (state5 === 0 || state5 === 2) {
                el5.className = "bg-green";
                state5 = 1;
            } else {
                el5.className = "bg-blue";
                state5 = 2;
            }
        });
    }

    const imageContainer = document.getElementById("image-container");
    const btnAdd = document.getElementById("btn-add");
    const btnGrow = document.getElementById("btn-grow");
    const btnShrink = document.getElementById("btn-shrink");
    const btnRemove = document.getElementById("btn-remove");

    const IMAGE_SRC = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40ZXxoOcN3REZHVfbMo3-I-yz-xfMumYkHF0ZXpTQsoL8Lb4CoC8MCZw&s=10";
    const IMAGE_ALT = "Гарне фото Чернігова з валу.";
    const IMAGE_LINK = "https://www.chernigiv-rada.gov.ua/";
    const STEP = 50;

    function getImg() {
        return document.getElementById("city-image");
    }

    if (btnAdd) {
        btnAdd.addEventListener("click", () => {
            let img = getImg();
            if (!img) {
                let link = document.getElementById("city-link");
                if (!link) {
                    link = document.createElement("a");
                    link.id = "city-link";
                    link.href = IMAGE_LINK;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    imageContainer.appendChild(link);
                }
                img = document.createElement("img");
                img.id = "city-image";
                img.src = IMAGE_SRC;
                img.alt = IMAGE_ALT;
                img.width = 600;
                link.appendChild(img);
            } else {
                alert("Зображення вже є на сторінці.");
            }
        });
    }

    if (btnGrow) {
        btnGrow.addEventListener("click", () => {
            const img = getImg();
            if (img) {
                img.width = (img.width || img.clientWidth) + STEP;
            } else {
                alert("Спочатку додайте зображення.");
            }
        });
    }

    if (btnShrink) {
        btnShrink.addEventListener("click", () => {
            const img = getImg();
            if (img) {
                const currentWidth = img.width || img.clientWidth;
                if (currentWidth - STEP >= 100) {
                    img.width = currentWidth - STEP;
                } else {
                    alert("Досягнуто мінімального розміру!");
                }
            } else {
                alert("Спочатку додайте зображення.");
            }
        });
    }

    if (btnRemove) {
        btnRemove.addEventListener("click", () => {
            const img = getImg();
            if (img) {
                img.remove();
            } else {
                alert("Зображення вже видалено.");
            }
        });
    }
});
