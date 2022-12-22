import ProgressBar from "react-bootstrap/ProgressBar";

const Category = (props) => {

    return(
        <div className="stats-category">
            <label className="stats-category-category">{props.category}</label>
            <ProgressBar now={props[props.category]} min={0} max={5}/>
            <label className="stats-category-rate">{props[props.category]}</label>
        </div>

    )
}

export default Category;