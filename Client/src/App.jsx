import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import PropertyDetails from './Components/Property-Details';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
    <PropertyDetails />
    <Ratings_Review_Container show={show} setShow={setShow}/>
    </div>
  )
}

export default App
