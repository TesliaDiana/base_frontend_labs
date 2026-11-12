import React, { useState } from 'react';

const IMAGE_SRC =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40ZXxoOcN3REZHVfbMo3-I-yz-xfMumYkHF0ZXpTQsoL8Lb4CoC8MCZw&s=10';
const IMAGE_ALT = 'Гарне фото Чернігова з валу.';
const IMAGE_LINK = 'https://www.chernigiv-rada.gov.ua/';
const STEP = 50;

function Image() {
  const [isVisible, setIsVisible] = useState(true);
  const [width, setWidth] = useState(600);

  const handleAdd = () => {
    if (!isVisible) {
      setIsVisible(true);
      setWidth(600);
    } else {
      alert('Зображення вже є на сторінці.');
    }
  };

  const handleGrow = () => {
    if (isVisible) {
      setWidth((prevWidth) => prevWidth + STEP);
    } else {
      alert('Спочатку додайте зображення.');
    }
  };

  const handleShrink = () => {
    if (isVisible) {
      if (width - STEP >= 100) {
        setWidth((prevWidth) => prevWidth - STEP);
      } else {
        alert('Досягнуто мінімального розміру!');
      }
    } else {
      alert('Спочатку додайте зображення.');
    }
  };

  const handleRemove = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      alert('Зображення вже видалено.');
    }
  };

  return (
    <section>
      <div id="image-container">
        {isVisible && (
          <a id="city-link" href={IMAGE_LINK} target="_blank" rel="noopener noreferrer">
            <img id="city-image" src={IMAGE_SRC} alt={IMAGE_ALT} width={width} />
          </a>
        )}
      </div>

      <div className="image-controls">
        <button id="btn-add" onClick={handleAdd}>
          Додати
        </button>
        <button id="btn-grow" onClick={handleGrow}>
          Збільшити
        </button>
        <button id="btn-shrink" onClick={handleShrink}>
          Зменшити
        </button>
        <button id="btn-remove" onClick={handleRemove}>
          Видалити
        </button>
      </div>
    </section>
  );
}

export default Image;
