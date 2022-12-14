import React from "react";
import { useState, useEffect } from "react";

function Reservation() {

    return (
    <html>
        <head>
        </head>
        <body>

            <h1>Grid Layout</h1>

            <p>This grid layout contains six columns and three rows:</p>

            <div class="grid-container">
            <div class="item1">Header</div>
            <div class="item3">
                <text> Property info here</text><br></br>
                <text> Property info here</text><br></br> 
                <text> Property info here</text><br></br> 
                <text> Property info here</text><br></br> 
            
            </div>  
            <div class="item4">
                <div id="reservationCard"> 
                <text>Filler Text</text><br></br>
                <text>Filler Text</text><br></br>
                <text>Filler Text</text><br></br>
                <text>Filler Text</text><br></br>
                <text>Filler Text</text><br></br>
                <text>Filler Text</text><br></br>
                </div>
            </div>
            <div class="item5">Footer</div>
            </div>

        </body>
    </html>
    )
}

export default Reservation;