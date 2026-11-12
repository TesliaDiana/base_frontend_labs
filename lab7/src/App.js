import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

const GOODS_DATA = [
  {
    id: 1,
    name: 'Яблуко',
    price: 25,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M60 32 C60 18 72 12 78 14' stroke='%235d4037' stroke-width='5' fill='none' stroke-linecap='round'/><path d='M62 24 C74 14 88 20 84 30 C76 34 65 30 62 24 Z' fill='%234caf50'/><path d='M60 36 C38 30 24 48 28 74 C32 96 48 106 60 102 C72 106 88 96 92 74 C96 48 82 30 60 36 Z' fill='%23e53935'/></svg>",
  },
  {
    id: 2,
    name: 'Груша',
    price: 35,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M60 26 L60 14' stroke='%235d4037' stroke-width='5' stroke-linecap='round'/><path d='M60 20 C72 12 84 18 80 26 C72 30 63 26 60 20 Z' fill='%234caf50'/><path d='M60 28 C46 28 42 46 36 62 C28 80 36 104 60 104 C84 104 92 80 84 62 C78 46 74 28 60 28 Z' fill='%23fdd835'/></svg>",
  },
  {
    id: 3,
    name: 'Виноград',
    price: 65,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M60 26 L60 12 M48 20 C60 14 72 14 80 22' stroke='%234caf50' stroke-width='5' fill='none' stroke-linecap='round'/><circle cx='46' cy='42' r='13' fill='%237b1fa2'/><circle cx='74' cy='42' r='13' fill='%238e24aa'/><circle cx='38' cy='64' r='13' fill='%236a1b9a'/><circle cx='60' cy='62' r='13' fill='%239c27b0'/><circle cx='82' cy='64' r='13' fill='%237b1fa2'/><circle cx='49' cy='84' r='13' fill='%238e24aa'/><circle cx='71' cy='84' r='13' fill='%236a1b9a'/><circle cx='60' cy='102' r='12' fill='%237b1fa2'/></svg>",
  },
  {
    id: 4,
    name: 'Персик',
    price: 48,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M60 30 C64 16 78 14 84 22 C76 28 66 30 60 30 Z' fill='%234caf50'/><path d='M60 32 C34 28 22 52 28 76 C34 96 52 104 60 102 C68 104 86 96 92 76 C98 52 86 28 60 32 Z' fill='%23ff7043'/><path d='M60 32 C54 52 54 80 60 102' stroke='%23e64a19' stroke-width='3' fill='none'/></svg>",
  },
  {
    id: 5,
    name: 'Апельсин',
    price: 42,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='64' r='38' fill='%23fb8c00'/><path d='M60 26 C66 14 80 14 84 22 C76 28 66 28 60 26 Z' fill='%2343a047'/><circle cx='46' cy='54' r='2' fill='%23ef6c00'/><circle cx='72' cy='60' r='2' fill='%23ef6c00'/><circle cx='56' cy='78' r='2' fill='%23ef6c00'/></svg>",
  },
  {
    id: 6,
    name: 'Черешня',
    price: 75,
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><path d='M42 74 C46 46 62 28 72 18 C74 34 78 52 80 74' stroke='%234caf50' stroke-width='4' fill='none'/><path d='M72 18 C84 14 94 20 90 28 C82 30 74 24 72 18 Z' fill='%234caf50'/><circle cx='40' cy='82' r='18' fill='%23c62828'/><circle cx='80' cy='82' r='18' fill='%23d32f2f'/></svg>",
  },
];

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Content />
        <Image />

        <hr className="section-divider" />

        <section className="goods-section">
          <h2>Галерея товарів</h2>
          <div className="goods-grid">
            {GOODS_DATA.map((item) => (
              <GoodsCard
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
