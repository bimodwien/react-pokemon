import React from "react";
import '../pages/pokemonPage/pages.css'

const Filter = ({handleFilter}) => {
  return (
    <>
    <div className="filter-layout">
      <input type="text" onChange={handleFilter} className="filter-form" placeholder="Search Pokemon..."/>
    </div>
    </>
  );
};

export default Filter;
