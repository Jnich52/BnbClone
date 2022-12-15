import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import Reservation from './Components/Reservation.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Reservation.css'

function App() {
  

  return (
    <div className="App">
    <Reservation></Reservation>
    <Ratings_Review_Container />
    </div>
  )
}

export default App