import ProgressBar from 'react-bootstrap/ProgressBar'


const RatingBar = () => {
    let myStyle ={
        height: "5px",
        width: "150px",
        "--bs-progress-bar-bg": "black",
        "--bs-progress-bg":"#c9c9c9"
    }

    return(
        <div className='rating-bars-container'>
            <div className='rating-bar-category'>Cleanliness</div>
            <ProgressBar style={myStyle} now={3.8} min={0} max={5}/>
            <div className='rating-bar-rating'>3.5</div>
        </div>
    )
}

export default RatingBar;