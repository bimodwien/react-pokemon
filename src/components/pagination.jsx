import React from "react";
import '../pages/pokemonPage/pages.scss'

const Pagination = ({handlePrevious, handleNext}) => {
  return (
    <>
    <div className="pagination-handle">
      <button onClick={handlePrevious} className="previous-button">prev</button>
      <button onClick={handleNext} className="next-button">next</button>
    </div>
    </>
  );
};

export default Pagination;
