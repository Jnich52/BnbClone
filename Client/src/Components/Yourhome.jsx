import React from "react";
import "./Yourhome.css";
// import Image from "react-bootstrap";

const Yourhome = () => {
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/host/homes");
  };
  return (
    <div onClick={handleClick}>
      {/* <Image> */}
      <div style={{ cursor: "pointer", fontWeight: "bold" }}>
        Airbnb Your Home
      </div>
      {/* </Image> */}
    </div>
  );
};

export default Yourhome;
