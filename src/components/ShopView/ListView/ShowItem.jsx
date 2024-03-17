import React from "react";
import "./css/ListView.css";

export default function ShowItem(props) {
  const { item } = props;
  console.log('ShowItem')

  return (
    <div className="shopList">
      <img className="shopListImg" src={item.img}></img>
      <h3 className="shopListName">{item.name}</h3>
      <p className="shopLitsColor">{item.color}</p>
      <p className="shopListPrice">${item.price}</p>
      <button className="shopListButton">ADD TO CART</button>
    </div>
  );
}
