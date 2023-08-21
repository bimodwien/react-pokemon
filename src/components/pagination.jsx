import React from "react";

const Pagination = ({handlePrevious, handleNext}) => {
  return (
    <>
    <div className="pagination-button">
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>
    </div>
    </>
  );
};

export default Pagination;
