import React from "react";

const Filter = ({handleFilter}) => {
  return (
    <>
      <input type="text" onChange={handleFilter} />
    </>
  );
};

export default Filter;
