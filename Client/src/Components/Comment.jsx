const Comment = (props) =>{
    console.log(props)
    return(
    <div className="commentEntry">
        <div className="top">
            <a href="https://http.cat/102">
                <img className="profile-picture-image" src="https://http.cat/102"/>
            </a>
            <div className="profile-text-wrapper">
                <h4 className="profile-name">{props.name}</h4>
                <div className="profile-join-date">{props.joined === undefined ? "Not Set" : props.joined}</div>
            </div>
        </div>
        <div className="bottom">
            <p className="profile-review">{props.comment}</p>
        </div>
    </div>
    ) 
}
export default Comment;