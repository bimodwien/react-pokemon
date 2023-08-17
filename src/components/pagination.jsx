import React from "react";

const Pagination = () => {
  return (
    <>
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>
    </>
  );
};

export default Pagination;
