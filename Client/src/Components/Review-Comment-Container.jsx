import React, { useState, useEffect } from "react";
import Ratings_Head from "./Ratings";
import "./Ratings-Review.css";
import Reviews_Comments from "./Reviews-Comment";
import Stats_Section from "./Stats-Section";


const Review_Comment_Container = (props) => {
    return (
        <div id="reviews-comment-section">
            <Ratings_Head {...props}/>
            <Stats_Section {...props}/>
            <Reviews_Comments {...props}/>
        </div>
    )
}

export default Review_Comment_Container;