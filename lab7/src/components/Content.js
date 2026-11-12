import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state4 = 0;
    this.state5 = 0;
    this.handleElement4Click = this.handleElement4Click.bind(this);
    this.handleElement5Click = this.handleElement5Click.bind(this);
  }

  handleElement4Click() {
    const el4 = document.getElementById('element-4');
    if (!el4) return;

    if (this.state4 === 0 || this.state4 === 2) {
      el4.className = 'bg-blue';
      this.state4 = 1;
    } else {
      el4.className = 'bg-green';
      this.state4 = 2;
    }
  }

  handleElement5Click() {
    const el5 = document.querySelector('#element-5');
    if (!el5) return;

    if (this.state5 === 0 || this.state5 === 2) {
      el5.className = 'bg-green';
      this.state5 = 1;
    } else {
      el5.className = 'bg-blue';
      this.state5 = 2;
    }
  }

  render() {
    return (
      <>
        <section>
          <h2>Тесля Діана Валеріївна</h2>
          <p>Дата народження: 14 вересня 2007 року. Місце народження: м. Чернігів, Україна.</p>
          <p>
            Освіта: Навчалась в Чернігівській спеціалізованій загальноосвітній школі (СЗОШ) з
            поглибленим вивченням іноземних мов. Наразі навчаюся у Київському політехнічному
            інституті імені Ігоря Сікорського на спеціальності «Інженерія програмного забезпечення».
          </p>
        </section>

        <section>
          <h3 id="element-4" onClick={this.handleElement4Click}>
            Хоббі:
          </h3>
          <ul>
            <li id="element-5" onClick={this.handleElement5Click}>
              Граю на музичних інструментах (фортепіано, гітара).
            </li>
            <li>Граю у відеоігри.</li>
            <li>Створення відео.</li>
            <li>Читання манхв.</li>
          </ul>
        </section>

        <section>
          <h3>Мої улюблені ігри:</h3>
          <ol>
            <li>Don't Starve Together - кооперативне виживання.</li>
            <li>Don't Starve - соло виживання.</li>
            <li>PEAK - підйом на гору з друзями.</li>
            <li>Slay the Spire - карточний roguelike</li>
          </ol>
        </section>

        <section>
          <h3>Моє улюблене місто — Чернігів</h3>
          <p>
            Це місто в Чернігівській області в Україні. Тут я народилася та росла. Мені
            подобається його малонаселеність та можливість приємно проводити час.
          </p>
          <p>
            <em>
              Клацнувши на фото нижче можна перейти на Офіційний веб-портал Чернігівської міської
              ради.
            </em>
          </p>
        </section>
      </>
    );
  }
}

export default Content;
