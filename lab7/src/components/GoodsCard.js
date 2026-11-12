import React from 'react';

function GoodsCard(props) {
  return (
    <div className="goods-card">
      <img src={props.image} alt={props.name} className="goods-image" />
      <h4 className="goods-title">{props.name}</h4>
      <p className="goods-price">Ціна: {props.price} грн</p>
    </div>
  );
}

export default GoodsCard;
