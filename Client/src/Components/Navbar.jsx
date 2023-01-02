import React, { useState } from "react";
import Bnb from "./Bnb";
import Globe from "./Globe";
import Yourhome from "./Yourhome";
import SearchBar from "./Searchbar";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Profile from "./Profile";
import Languagedrop from "./Languagedrop";
import Dropdownmenu from "./Dropdownmenu";
// import Prodrop from "./Prodrop";
// import DropdownMenu from "./Prodrop";

function Navbar(props) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <nav className="navbar" style={{ paddingRight: "10%" }}>
      <ul className="navbar-nav">{props.children}</ul>
      {/* <li> Up In the Air Bnb </li> */}
      {/* <Bnb /> */}
      {/* button above maybe?  */}
      {/* how to add a blank space below */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      {/* <li>Start your Search </li> */}
      <Bnb />
      {/* above needs to be a search bar */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

      <p>&nbsp;&nbsp;&nbsp;</p>
      <SearchBar />
      {/* <li>Language and Region</li> */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

      <Yourhome />
      {/* <Globe /> */}

      {/* globe icon*/}
      {/* <Profile /> */}
      {/* user icon with three line drop down*/}
      <Button onClick={() => setLgShow(true)}>
        <Globe />
        {/* <Dropdownmenu /> */}
      </Button>
      <Modal
        show={lgShow}
        size="lg"
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Your Trip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          .
          <Languagedrop />
        </Modal.Body>
      </Modal>
      <Dropdownmenu />
    </nav>
  );
}
{
  /* <img id="airbnb-logo" src="./airbnb.svg" className></img>; */
}
//why wont this work
export default Navbar;
