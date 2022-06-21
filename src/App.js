import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [itemCategory, setItemCategory] = useState(items);
  let filterCategory = (category) => {
    if (category === "all") {
      setItemCategory(items);
    } else {
      let newItem = items.filter((item) => {
        return item.category === category;
      });
      setItemCategory(newItem);
    }
  };
  return (
    <div className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories category={allCategories} filterCategory={filterCategory} />
      <Menu items={itemCategory} />
    </div>
  );
}

export default App;
