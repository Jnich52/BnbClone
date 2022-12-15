import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";
import RatingBar from "./Progress-Bar";
import "./Ratings-Review.css";


const Ratings_Review_Container = (props) => {
    return (
        <div id="R-R-Container">
            <Ratings />
            <RatingBar />
            <Reviews />
        </div>
    )
}

export default Ratings_Review_Container;