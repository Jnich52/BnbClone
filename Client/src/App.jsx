import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import AirCover from './Components/AirCover';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetails from './Components/Property-Details';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
    <Ratings_Review_Container />
    <PropertyDetails show={show} setShow={setShow} />
    </div>
  )
}

export default App
