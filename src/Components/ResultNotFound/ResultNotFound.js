import React from 'react';

const ResultNotFound = () => {
  return (
    <div className="notFoundContainer">
      <span className="symbol">😔</span>
      <p className="message">Sorry, no results were found.</p>
    </div>
  );
};

export default ResultNotFound;