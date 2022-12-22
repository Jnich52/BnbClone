import Category from "./Stats-Catagory";
import { ratingBarSetter } from "./Ratings-Section-Function";

const Stats_Section = (props) => {

    let obj = ratingBarSetter(props.pageData);
    let arr = ['Cleanliness', 'Accuracy', 'Communication', 'Location', 'Check-in', 'Value'];
    let myStyle ={
        "--bs-progress-bar-bg": "black",
        "--bs-progress-bg":"#c9c9c9"
    }

    return(
        <div className='stats-section' style={myStyle}>
            {arr.map((item) => 
            <Category category={item} {...obj}/>
            )}
        </div>
    )
}

export default Stats_Section;