import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Review_Comment_Container from "./Components/Review-Comment-Container";
import Reservation from "./Components/Reservation.jsx";
import Reservation_Bar from "./Components/Reservation-Bar.jsx";
import "./Components/Reservation.css";
import PropertyDetails from "./Components/Property-Details";
import Navbar from "./Components/Navbar.jsx";
import Footer_Section from "./Components/Footer-Section";
import "./Components/Navbar.css";
import Other_Options from "./Components/Other-Options";
import axios from "axios";
import Pics from "./Components/Pics";
import Star from "./Components/Star";
import ShareButton from "./Components/Share";
import SaveButton from "./Components/Save";
import Titlerow from "./Components/Info1";
import "./App.css";
import { Router } from "react-router";

function App() {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://backendbnb.onrender.com/api/reviews").then((res) => {
      setPageData(res.data);
      setIsLoading(false);
    });
  }, []);

  let propsObj = {
    pageData,
    setPageData,
  };

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className="grid-container">
        <div className="item1">I M A G E S</div>
        <div className="item3">
          <PropertyDetails />
        </div>
        <div className="item4">
          <Reservation {...propsObj} />
        </div>
        <div className="item5">
          {isLoading ? (
            "Loading..."
          ) : (
            <Review_Comment_Container {...propsObj} />
          )}
        </div>
      </div>

      <footer>
        <Other_Options />
        <Footer_Section />
      </footer>
      <div className="grid-container">
        <div className="item1">
          {" "}
          <span id="spanner">Joe Dirt's Ultimate Tree Mansion</span>
          <Titlerow />
          {/* <Star />
          <ShareButton /> <SaveButton /> */}
          {/* <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>{" "} */}
          {/* <ShareButton /> <SaveButton /> */}
          <Pics />{" "}
        </div>
        <Reservation_Bar />
      </div>
    </div>
  );
}

export default App;
