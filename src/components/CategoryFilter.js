import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : ""}
      onClick={() => onCategorySelect(category)}
    >
      {category}
    </button>
  ));

  return <div className="categories">{buttons}</div>;
}

export default CategoryFilter;
