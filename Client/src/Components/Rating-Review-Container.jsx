import React, { useState, useEffect } from "react";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

const Ratings_Review_Container = (props) => {
    return (
        <div>
           <Ratings />
           <Reviews />
        </div>
    )
}

export default Ratings_Review_Container;