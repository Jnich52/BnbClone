import React, {useState, useEffect} from "react";
import Comment from "./Comment"

const Reviews_Comments = (props) =>{
    let raters = props.pageData.slice(-6);
    return (
        <div className="profile-section-container">
        {raters.map((obj) => {
        return (
          <Comment name={obj.name} comment={obj.comment} joined={obj.joined} />
        );
      })}
        </div>
    )
}


export default Reviews_Comments;