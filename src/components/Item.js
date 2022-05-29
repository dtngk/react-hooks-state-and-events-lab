import React from "react";
import {useState} from "react";

function Item({ name, category }) {
  const [inCart,updateCart] = useState(0);
  const appClass = inCart ? "in-cart" : ""

  function handleClick(){
    updateCart((inCart) => !inCart);
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
