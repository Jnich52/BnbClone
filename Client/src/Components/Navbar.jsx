import React, { useState } from "react";
import Bnb from "./Bnb";
import Globe from "./Globe";
import Yourhome from "./Yourhome";
import SearchBar from "./Searchbar";

function Navbar(props) {
  return (
    <nav className="navbar">
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
      <Globe />

      {/* globe icon*/}
      <p>&nbsp;&nbsp;&nbsp;</p>
      <li>Profile</li>
      {/* user icon with three line drop down*/}
    </nav>
  );
}
<img id="airbnb-logo" src="./airbnb.svg" class></img>;
export default Navbar;
