import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import Reservation from './Components/Reservation.jsx';
import './Components/Reservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetails from './Components/Property-Details';

function App() {
  const [show, setShow] = useState(false);

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
        <PropertyDetails show={show} setShow={setShow} />
        </div>

        <div class="item4">
        <Reservation></Reservation>
        </div>

        <div class="item5">
        <Ratings_Review_Container />
        </div>
          
      </div>
    
    </div>
  )
}

export default App