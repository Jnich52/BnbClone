import Category from "./Stats-Catagory";
import { ratingBarSetter } from "./Ratings-Section-Function";

const Stats_Section = (props) => {

    let obj = ratingBarSetter(props.pageData);
    let arr = ['Cleanliness', 'Accuracy', 'Communication', 'Location', 'Check-in', 'Value'];

    return(
        <div className='stats-section'>
            {arr.map((item) => 
            <Category category={item} {...obj}/>
            )}
        </div>
    )
}

export default Stats_Section;