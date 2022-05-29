import React from "react";
import Item from "./Item";
import {useState} from "react";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("All");

  function handleChange(category){
    setCategory(category.target.value);
  }

  const itemFilter = items.filter((item) => {
    if (category === "All") return true;

    return item.category === category;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
