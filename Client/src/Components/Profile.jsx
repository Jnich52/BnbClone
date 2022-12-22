import React from "react";
import Image from "react-bootstrap/esm/Image";
// import { GiHamburgerMenu } from "react-icons/all";
// import { useContext } from "react";
// import { appContext } from "../../App";
import { useState } from "react";

const LoginDropdown = () => {
  const { showDropdown, setShowDropdown } = useState(true);
  const handleClick = () => {
    if (showDropdown === false) {
      setShowDropdown(true);
      document.querySelector("#share-button").style.zIndex = "-1";
      document.querySelector("#save-button").style.zIndex = "-1";
    } else {
      setShowDropdown(false);
      document.querySelector("#share-button").style.zIndex = "auto";
      document.querySelector("#save-button").style.zIndex = "auto";
    }
  };
  return (
    <div
      id="login-dropdown"
      onClick={handleClick}
      style={{
        src: "%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false' style='display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;'%3E%3Cg fill='none' fill-rule='nonzero'%3E%3Cpath d='m2 16h28'%3E%3C/path%3E%3Cpath d='m2 24h28'%3E%3C/path%3E%3Cpath d='m2 8h28'%3E%3C/path%3E%3C/g%3E%3C/svg%3E",
        height: "16px",
        width: "16px",
        fill: "#222222",
      }}
    >
      <div id="person-svg-wrapper">
        <Image
          id="person-svg"
          style={{
            height: "27px",
            width: "27px",
            src: "%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false' style='display: block; height: 100%25; width: 100%25; fill: currentcolor;'%3E%3Cpath d='m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z'%3E%3C/path%3E%3C/svg%3E",
          }}
        ></Image>
      </div>
      <Profile />
    </div>
  );
};

export default LoginDropdown;
