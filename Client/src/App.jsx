import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetails from './Components/Property-Details';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
    <PropertyDetails show={show} setShow={setShow} />
    <Ratings_Review_Container />
    </div>
  )
}

export default App
