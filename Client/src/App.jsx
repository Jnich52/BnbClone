import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyDetails from './Components/Property-Details';

function App() {

  return (
    <div className="App">
    <PropertyDetails />
    <Ratings_Review_Container />
    </div>
  )
}

export default App
