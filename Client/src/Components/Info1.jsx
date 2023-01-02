import ShareButton from "./Share";
import React from "react";
import Star from "./Star";
import SaveButton from "./Save";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./Info1.css";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Titlerow = () => {
  return (
    <div>
      <div id="title-module-container">
        <Modal.Dialog
          className="modal-dialog"
          style={{
            backgroundColor: "transparent",
            position: "-moz-initial",
          }}
        >
          <Modal.Body
            className="modal-body"
            style={{
              backgroundColor: "transparent",
              position: "-moz-initial",
            }}
          >
            {/* <div id="title-title">{rentalData.title}</div> */}
            <div id="row-formatter">
              <div id="title-details">
                <Star />
              </div>
              <div id="title-buttons">
                <ShareButton />
                &nbsp; &nbsp;
                <SaveButton />
              </div>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default Titlerow;
