import React from "react";
import "./css/CardsView.css";

export default function ShopCard(props) {
  const { item } = props;
  return (
    <div className="shopCard">
      <h3 className="shopCardName">{item.name}</h3>
      <p className="shopCardColor">{item.color}</p>
      <img className="shopCardImg" src={item.img}></img>
      <div className="shopCardPriceBlock">
        <p className="shopCardPrice">${item.price}</p>
        <button className="shopCardListBut">ADD TO CART</button>
      </div>
    </div>
  );
}

