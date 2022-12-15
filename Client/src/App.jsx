import React, {useEffect, useState} from 'react';
import Ratings_Review_Container from './Components/Rating-Review-Container';
import AirCover from './Components/AirCover';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <div className="App">
    <AirCover />
    <Ratings_Review_Container />
    </div>
  )
}

export default App
