import ProgressBar from "react-bootstrap/ProgressBar";

const Category = (props) => {
    return(
        <div className="stats-category">
            <label className="stats-category-category">{props.cat}</label>
            <ProgressBar/>
            <label className="stats-category-rate">5.0</label>
        </div>

    )
}

export default Category;