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
import Other_Options from './Components/Other-Options';



function App() {
  return (
    <div className="App">
          
      <header>
        <Navbar />
      </header>

      <div className="grid-container">
        <div className="item1">I M A G E S</div>
        <div className="item3"><PropertyDetails /></div>
        <div className="item4"><Reservation/></div>
        <div className="item5"><Review_Comment_Container/></div>
      </div>

      <footer>
          <Other_Options />
          <Footer_Section />
      </footer>

      <Reservation_Bar />
    </div>
  )
}

export default App;
