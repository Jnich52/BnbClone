import React, {useState, useEffect} from "react";

const Reviews = (props) =>{
    return (
        <div className="profile-section-container">
            <a href="https://http.cat/103">
                <img className="profile-picture-image" src="https://http.cat/103"/>
            </a>
            <h3 className="profile-name">Jordan</h3>
            <div className="profile-join-date">January 2022</div>
            <div className="profile-review">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
        </div>
    )
}


export default Reviews