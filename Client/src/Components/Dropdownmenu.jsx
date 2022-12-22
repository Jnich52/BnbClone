import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
// import DropdownButton from "react-bootstrap";
// import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import Dropdown from "react-bootstrap/Dropdown";
import Dropbutton from "./Dropbutton";
import "./Dropdownmenu.css";
import LoginDropdown from "./Profile";

const Dropdownmenu = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const showDropdownMethod = () => {
    if (hover === true) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };
  const link1 = () => {
    window.location.assign("https://www.airbnb.com/host/homes");
  };
  const link2 = () => {
    window.location.assign(
      "https://www.airbnb.com/host/experiences?from_nav=1"
    );
  };
  const link3 = () => {
    window.location.assign("https://www.airbnb.com/help?audience=guest");
  };
  return (
    <div>
      <div className="mouseEvent">
        <button
          className="btn1"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          Profile
        </button>
        {/* {isShown && <div>I'll appear when you hover over the button.</div>} */}
      </div>

      <Dropdown.Menu id="dropdown-menu" align={"end"} show={isShown}>
        <Dropdown.Item>Sign up</Dropdown.Item>
        <Dropdown.Item>Log in</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={link1}>Airbnb your home</Dropdown.Item>
        <Dropdown.Item onClick={link2}>Host and experience</Dropdown.Item>
        <Dropdown.Item onClick={link3}>Help</Dropdown.Item>
      </Dropdown.Menu>
      {/* <LoginDropdown /> */}
    </div>
  );
};

export default Dropdownmenu;
