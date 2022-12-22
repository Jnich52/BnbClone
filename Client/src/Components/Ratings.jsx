import React, { useState, useEffect } from "react";
import {ratingCalculator, reviewCounter} from "./Ratings-Section-Function";

const Ratings_Head = (props) => {
  return (
    <div className="ratings-title">
      &#9733; {ratingCalculator(props.pageData)} · {reviewCounter(props.pageData)}
    </div>
  );
};

export default Ratings_Head;
