import React, {useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review_Comment_Container from "./Components/Review-Comment-Container"
import Reservation from './Components/Reservation.jsx';
import Reservation_Bar from './Components/Reservation-Bar.jsx'
import './Components/Reservation.css';
import PropertyDetails from './Components/Property-Details';
import Navbar from './Components/Navbar.jsx'
import Footer_Section from './Components/Footer-Section';
import './Components/Navbar.css'

function App() {

  return (
    <div className="App">
          
      <header>
        <Navbar />
      </header>

      <div class="grid-container">
        <div class="item1">I M A G E S</div>
        <div class="item3"><PropertyDetails /></div>
        <div class="item4"><Reservation/></div>
        <div class="item5"><Review_Comment_Container/></div>
      </div>

      <footer>
          <Footer_Section />
      </footer>

      <Reservation_Bar />
    </div>
  )
}

export default App