import React from "react";

const Pagination = ({handlePrevious, handleNext}) => {
  return (
    <>
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>
    </>
  );
};

export default Pagination;
