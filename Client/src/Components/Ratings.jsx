import React, { useState, useEffect } from "react";

const Ratings_Head = (props) => {
  function ratingCalculator(ratingArray) {

    let accuracy = 0;
    let checkin = 0;
    let cleanliness = 0;
    let communication = 0;
    let location = 0;
    let value = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      accuracy += ratingArray[i].accuracy / ratingArray.length;
      checkin += ratingArray[i].checkin / ratingArray.length;
      cleanliness += ratingArray[i].cleanliness / ratingArray.length;
      communication += ratingArray[i].communication / ratingArray.length;
      location += ratingArray[i].location / ratingArray.length;

      value += (
      (ratingArray[i].accuracy / ratingArray.length+
      ratingArray[i].checkin / ratingArray.length+
      ratingArray[i].cleanliness / ratingArray.length+
      ratingArray[i].communication / ratingArray.length+
      ratingArray[i].location / ratingArray.length) / 5
      );

    }
    let rating = Math.ceil((((accuracy + checkin + cleanliness + communication + location + value) / 6) * 100)/100);
    
    return rating;
  }


  function reviewCounter(reviewArray) {
    let reviewCount = reviewArray.length;

    return reviewCount === 0 || reviewCount >= 2
      ? `${reviewCount} Reviews`
      : `${reviewCount} Review`;
  }

  return (
    <div className="ratings-title">
      &#9733; {ratingCalculator(props.pageData)} · {reviewCounter(props.pageData)}
    </div>
  );
};

export default Ratings_Head;
