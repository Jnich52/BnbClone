import React, { useState, useEffect } from "react";

const Ratings = (props) => {
  function ratingCalculator(ratingArray) {
    let ratingAverage = 0;

    // for (let i = 0; i < ratingArray.length; i++) {
    //   ratingAverage += ratingArray[i];
    // }

    // //return ratingAverage / ratingArray.length;
    return ratingAverage;
  }


  function reviewCounter(reviewArray) {
    //let reviewCount = reviewArray.length;
    let reviewCount = 100; //DELETE WHEN DATA IS POPULATED;

    return reviewCount === 0 || reviewCount >= 2
      ? `(${reviewCount} Reviews)`
      : `(${reviewCount} Review)`;
  }

  return (
    <div className="Star-Icon">
      &#9733; {ratingCalculator()} {reviewCounter()}
    </div>
  );
};

export default Ratings;
