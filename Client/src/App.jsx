import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review_Comment_Container from "./Components/Review-Comment-Container"
import Reservation from './Components/Reservation.jsx';
import './Components/Reservation.css';
import PropertyDetails from './Components/Property-Details';

function App() {

  return (
    <div className="App">
          <div style={{textAlign:'center'}}>
        <text><h1>Up in the Air BnB</h1></text>
      </div>
      
      <div style={{textAlign:'center'}}>
        <text><h1>---Navbar Will Go Here---</h1></text>
      </div>

      <div class="grid-container">
        <div class="item1">I M A G E S
        </div>

        <div class="item3">
        <PropertyDetails />
        </div>

        <div class="item4">
        <Reservation></Reservation>
        </div>

        <div class="item5">
        <Review_Comment_Container />
        </div>
          
      </div>
    </div>
  )
}

export default App