import React from "react";

const Categories = ({ filterItems }) => {
  return (
    <div className="container">
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
    </div>
  );
};

export default Categories;
