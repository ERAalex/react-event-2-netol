import React from "react";
import ShowItem from "./ShowItem";
import "./css/ListView.css";


export const ListView = (props) => {
  console.log('ListView----1---')
  console.log(props)
  const { items } = props;

    return (
    <div className="listView">
      {items.map((item, i) => (
        <div className="ShopListC" key={i}>
          <ShowItem item={item} />
        </div>
      ))}
    </div>
  );
}


// export default function ListView(props) {
//   console.log('ListView--1--')
//   console.log(props)
//   console.log('ListView--2--')
//   const { productsItems } = props;
//   console.log(productsItems)
  
//   return (
//     <div className="listView">
//       {productsItems.map((item, i) => (
//         <div className="ShopListC" key={i}>
//           <ShowItem item={item} />
//         </div>
//       ))}
//     </div>
//   );
// }
