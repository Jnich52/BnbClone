import image from "../assets/pictures/aircover.png"

const AirCover = () =>{

    function clickEvent(){
        
        console.log("working")
    }
    return (
        <div>
            <img id="AirCover-Img" src={image} height="auto" width="18%"></img>
            <p className="AirCover" id="AirCover-Body">Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
            <div className="AirCover" id="AirCover-Learn" onClick={clickEvent}>Learn more</div>
        </div>
    )
}
export default AirCover