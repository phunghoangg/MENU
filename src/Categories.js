import React from "react";

function Categories({category , filterCategory}) {
  return (
    <div className="btn-container">
      {category.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
             onClick={() => filterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
