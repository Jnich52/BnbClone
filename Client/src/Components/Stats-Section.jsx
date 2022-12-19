import Category from "./Stats-Catagory"

const Stats_Section = () => {
    let myStyle ={
        height: "5px",
        width: "150px",
        "--bs-progress-bar-bg": "black",
        "--bs-progress-bg":"#c9c9c9"
    }
    let ratingArr = ["Cleanliness","Communication","Check-in","Accuracy", "Location","Value"]

    return(
        <div className='stats-section'>
            {ratingArr.map((item) => (
            <Category cat={item}/>
            ))}
        </div>
    )
}

export default Stats_Section;