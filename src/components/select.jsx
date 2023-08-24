import React from "react";
import '../pages/pokemonPage/pages.scss'

const Select = ({ handleSelect }) => {
  return (
    <>
    <div className="content-select">
      Show per: <select onChange={handleSelect} defaultValue={""} className="button-select">
        <option value="" disabled>
          Select
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
    </>
  );
};

export default Select;
