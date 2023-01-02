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
    window.open("https://www.airbnb.com/host/homes");
  };
  const link2 = () => {
    window.open("https://www.airbnb.com/host/experiences?from_nav=1");
  };
  const link3 = () => {
    window.open("https://www.airbnb.com/help?audience=guest");
  };
  return (
    <div>
      <div className="mouseEvent">
        <button
          className="btn1 glow-button"
          style={{ minWidth: "4.5rem", minHeight: "2.5rem" }}
          // onMouseEnter={() => setIsShown(true)}
          // onMouseLeave={() => setIsShown(false)}
          onClick={() => setIsShown(!isShown)}
        >
          <div className=" dir dir-ltr">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                margin: "2px",
                height: "20px",
                width: "20px",
                stroke: "grey",
                strokeWidth: "3",
                overflow: "visible",
                float: "left",
              }}
            >
              <g fill="none" fillRule="nonzero">
                <path d="m2 16h28"></path>
                <path d="m2 24h28"></path>
                <path d="m2 8h28"></path>
              </g>
            </svg>
          </div>
          <div className="fp36fst dir dir-ltr">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "30px",
                width: "30px",
                fill: "grey",
                float: "right",
              }}
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </div>
        </button>

        {/* {isShown && <div>I'll appear when you hover over the button.</div>} */}
      </div>

      <Dropdown.Menu
        id="dropdown-menu"
        align={"lg : end"}
        show={isShown}
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 1px 1px lightgrey",
        }}
      >
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
