import React from "react";
import { useState } from "react";
import Reservation from "./Reservation.jsx";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Reservation.css";
import "./Reservation-Bar.css";

function Reservation_Bar(props) {
  const [barNightlyRate, setBarNightlyRate] = useState(null);
  const [barStartDate, setBarStartDate] = useState(null);
  const [barEndDate, setBarEndDate] = useState(null);
  const [lgShow, setLgShow] = useState(false);
  const defaultRate = 1000;

  let reservationProps = {
    barNightlyRate,
    setBarNightlyRate,
    barStartDate,
    setBarStartDate,
    barEndDate,
    setBarEndDate,
    lgShow,
    setLgShow
  };

  return (
    <div className="reservation-bar">
      <div style={{ clear: "both" }}></div>

      <div id="textbox">
        <span
          className="alignleft"
          style={{
            textDecoration: "none",
            marginLeft: "2em",
            marginTop: "1.5rem",
          }}
        >
          <span style={{ fontSize: "1.5em" }}>
            <strong>${defaultRate.toLocaleString()}</strong>
          </span>{" "}
          night <br></br>
          <span style={{ textDecoration: "underline" }}> 15 - 21 Jan</span>
        </span>

        <span
          className="alignright"
          style={{ marginRight: "2em", marginTop: "0.5em" }}
        >
          <Button id="reserveButton" onClick={() => setLgShow(!lgShow)}>
            Reserve
          </Button>
          <Modal
            show={lgShow}
            backdropClassName="reservation-bar-backdrop"
            contentClassName="reservation-bar-content"
            size="lg"
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Your Trip
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Reservation {...props} {...reservationProps} />
            </Modal.Body>
          </Modal>
        </span>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default Reservation_Bar;
