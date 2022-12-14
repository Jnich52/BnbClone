import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import Reservation from './Components/Reservation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
    <Ratings_Review_Container />
    <Reservation></Reservation>
    </div>
  )
}

export default App