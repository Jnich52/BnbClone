import React from "react";
// import "./SearchBar.css";

function SearchBar({ placeholder, data }) {
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          className="inputBox"
          type="text"
          placeholder={"Start your search"}
        />
        {/* <span> Start your search</span> */}
        <div className="searchIcon"></div>
      </div>
      <div className="dataResult"></div>
    </div>
  );
}

export default SearchBar;

{
  /* <div class="dprtsy3 g1rrwumj dir dir-ltr"></div>; */
}
