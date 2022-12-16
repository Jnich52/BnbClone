import React, { useState } from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
      <li> Up In the Air Bnb </li>
      {/* button above maybe?  */}
      {/* how to add a blank space below */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <li>Start your Search </li>
      {/* above needs to be a search bar */}
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <li> Air Bnb your home</li>
      <p>&nbsp;&nbsp;&nbsp;</p>
      <li>
        Language and Region
        <i class="fa fa-globe" aria-hidden="true"></i>
      </li>
      {/* globe icon*/}
      <p>&nbsp;&nbsp;&nbsp;</p>
      <li>Profile</li>
      {/* user icon with three line drop down*/}
    </nav>
  );
}

export default Navbar;
