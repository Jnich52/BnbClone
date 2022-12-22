import React from "react";
// import Image from "react-bootstrap";
import "./Bnb.css";
import logo from "../assets/pictures/logo.png";
import CompanyLogo from "./CompanyLogo";
const Bnb = () => {
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/");
  };
  return (
    <div onClick={handleClick} className="hmebtn">
      {/* <Image> */}
      <CompanyLogo />
      {/* </Image> */}
    </div>
  );
};

export default Bnb;
