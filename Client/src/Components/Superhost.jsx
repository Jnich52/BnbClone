import { BsDot } from "react-icons/all";
import { GiMedal } from "react-icons/all";
import { useState } from "react";
const Superhost = () => {
  return (
    <div id="superhost">
      <BsDot />
      <GiMedal />
      <span style={{ fontFamily: "Circular", fontSize: "14px" }}>
        {"Superhost"}
      </span>
    </div>
  );
};

export default Superhost;
