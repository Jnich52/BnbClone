function ratingCalculator(ratingArray) {
    let accuracy = 0;
    let checkin = 0;
    let cleanliness = 0;
    let communication = 0;
    let location = 0;
    let value = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      accuracy += ratingArray[i].Accuracy / ratingArray.length;
      checkin += ratingArray[i]['Check-in'] / ratingArray.length;
      cleanliness += ratingArray[i].Cleanliness / ratingArray.length;
      communication += ratingArray[i].Communication / ratingArray.length;
      location += ratingArray[i].Location / ratingArray.length;

      value += (
      (ratingArray[i].Accuracy / ratingArray.length+
      ratingArray[i]['Check-in'] / ratingArray.length+
      ratingArray[i].Cleanliness / ratingArray.length+
      ratingArray[i].Communication / ratingArray.length+
      ratingArray[i].Location / ratingArray.length) / 5
      );

    }
    let rating = Math.ceil((((accuracy + checkin + cleanliness + communication + location + value) / 6) * 100)/100);
    return rating;
  }


  function reviewCounter(reviewArray) {
    let reviewCount = reviewArray.length;

    return reviewCount === 0 || reviewCount >= 2
      ? `${reviewCount} Reviews`
      : `${reviewCount} Review`;
  }

  function ratingBarSetter(ratingArray){
    let accuracy = 0;
    let checkin = 0;
    let cleanliness = 0;
    let communication = 0;
    let location = 0;
    let value = 0;

    for (let i = 0; i < ratingArray.length; i++) {
      accuracy += ratingArray[i].Accuracy / ratingArray.length;
      checkin += ratingArray[i]['Check-in'] / ratingArray.length;
      cleanliness += ratingArray[i].Cleanliness / ratingArray.length;
      communication += ratingArray[i].Communication / ratingArray.length;
      location += ratingArray[i].Location / ratingArray.length;

      value += (
      (ratingArray[i].Accuracy / ratingArray.length+
      ratingArray[i]['Check-in'] / ratingArray.length+
      ratingArray[i].Cleanliness / ratingArray.length+
      ratingArray[i].Communication / ratingArray.length+
      ratingArray[i].Location / ratingArray.length) / 5
      );
      }
      let houseObj = {
        Accuracy: Math.ceil(accuracy * 100) / 100,
        'Check-in': Math.ceil(checkin * 100) / 100,
        Cleanliness: Math.ceil(cleanliness * 100) / 100,
        Communication: Math.ceil(communication * 100) / 100,
        Location: Math.ceil(location * 100) / 100,
        Value: Math.ceil(value * 100) / 100
      };
      return houseObj;
  }

  export{
    ratingCalculator,
    reviewCounter,
    ratingBarSetter

  }