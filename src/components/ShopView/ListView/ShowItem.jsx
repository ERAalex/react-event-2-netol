import React from "react";
import "./css/ListView.css";

export default function ShowItem(props) {
  const { item } = props;

  return (
    <div className="showItemList">
      <img className="showItemListImg" src={item.img}></img>
      <h3 className="showItemListName">{item.name}</h3>
      <p className="showItemListColor">{item.color}</p>
      <p className="showItemListPrice">${item.price}</p>
      <button className="showItemListBut">ADD TO CART</button>
    </div>
  );
}
