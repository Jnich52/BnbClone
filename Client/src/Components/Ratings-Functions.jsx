var cleanliness = 0;
var checkin = 0;
var accuracy = 0;
var communication = 0;
var location = 0;
var value = 0;

function ratingCalculator(ratingArray) {
    
    for (let i = 0; i < ratingArray.length; i++) {
        cleanliness += ratingArray[i].cleanliness;
        checkin += ratingArray[i].checkin;
        accuracy += ratingArray[i].accuracy;
        communication += ratingArray[i].communication;
        location += ratingArray[i].location;
        value += (
        (
            ratingArray[i].cleanliness+
            ratingArray[i].checkin+
            ratingArray[i].accuracy+
            ratingArray[i].communication+
            ratingArray[i].location
        ) / 5);
    }
    let ratingAverage = (
        ((cleanliness / ratingArray.length)+
        (checkin / ratingArray.length)+
        (accuracy / ratingArray.length)+
        (communication / ratingArray.length)+
        (location / ratingArray.length)+
        (value / ratingArray.length)) / 5
    )
    return Math.ceil(ratingAverage * 100) / 100;
        
}
function reviewCounter(reviewArray) {
    let reviewCount = reviewArray.length;

    return reviewCount === 0 || reviewCount >= 2
        ? `${reviewCount} Reviews`
        : `${reviewCount} Review`;
    }


export {
    ratingCalculator,
    reviewCounter
}