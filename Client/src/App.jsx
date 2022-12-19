import React, {useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Review_Comment_Container from "./Components/Review-Comment-Container"
import Reservation from './Components/Reservation.jsx';
import './Components/Reservation.css';
import PropertyDetails from './Components/Property-Details';
import Navbar from './Components/Navbar.jsx'
import './Components/Navbar.css'
import Footer_Section from "./Components/Footer-Section";

function App() {

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <div class="grid-container">
        <div class="item1">I M A G E S</div>
        <div class="item2"><PropertyDetails/></div>
        <div class="item3"><Reservation/></div>
        <div class="item4"><Review_Comment_Container/></div>
      </div>

      <footer>
       <Footer_Section />
      </footer>
    </div>
  )
}

export default App