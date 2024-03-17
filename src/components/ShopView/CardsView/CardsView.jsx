import React from "react";
import ShopCard from "./ShopCard";
import "./css/CardsView.css";

export default function CardsView(props) {
  const { items } = props;

  return (
    <div className="cardView">
      {items.map((item, i) => (
        <div className="ShopCardMain" key={i}>
          <ShopCard item={item} />
        </div>
      ))}
    </div>
  );
}