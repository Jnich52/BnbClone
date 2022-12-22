import React from "react";
import { useState, useEffect } from "react";
import {ratingCalculator, reviewCounter} from "./Ratings-Section-Function";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Calendar from "./Calendar.jsx";
import "./Reservation.css";


function Reservation(props) {
  const [isLoading, setLoading] = useState(false);
  const [defaultRate, setDefaultRate] = useState(1000);
  const [nightlyRate, setNightlyRate] = useState(null);
  const [numberOfNights, setNumberOfNights] = useState(2);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [getData, setGetData] = useState(false);
  const [reservationData, setReservationData] = useState([]);
  const [postData, setPostData] = useState({});

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const [reviews, setReviews] = useState(5);
  const [ratings, setRatings] = useState(5)

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  function LoadingButton() {
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          getCustomersData();
          setLoading(false);

          let reservation = {
            adults: adults,
            checkin: startDate,
            checkout: endDate,
            children: children,
            infants: infants,
            nightlyrate: nightlyRate,
            numberofnights: numberOfNights,
            pets: pets,
          };
          console.log(reservation);
          putCustomerData(reservation);
        });
      }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
      <Button
        id="reserveButton"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        style={{ fontSize: "large" }}
        className="glow-button"
      >
        {isLoading ? "..." : "Reserve"}
      </Button>
    );
  }

  function minusAdult() {
    adults > 0 ? setAdults(adults - 1) : "";
  }

  function plusAdult() {
    adults + children < 10 ? setAdults(adults + 1) : "";
  }

  function minusChildren() {
    children > 0 ? setChildren(children - 1) : "";
  }

  function plusChildren() {
    adults + children < 10 ? setChildren(children + 1) : "";
  }

  function minusInfants() {
    infants > 0 ? setInfants(infants - 1) : "";
  }

  function plusInfants() {
    infants < 5 ? setInfants(infants + 1) : "";
  }

  function minusPets() {
    pets > 0 ? setPets(pets - 1) : "";
  }

  function plusPets() {
    pets < 5 ? setPets(pets + 1) : "";
  }

  function handleRatings(){
    setTimeout(() => {setRatings(ratingCalculator(props.pageData))}, 1000);
    return ratings;
  }

  function handleReviews(){
    setTimeout(() => {setReviews(reviewCounter(props.pageData))}, 1000);
    return reviews;
  }

  let calendarProps = {
    numberOfNights,
    setNumberOfNights,
    nightlyRate,
    setNightlyRate,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  useEffect(() => {
    console.log(reservationData);
  }, [getData]);

  const getCustomersData = () => {
    axios
      .get("https://backendbnb.onrender.com/api/reservations/")
      // .get("http://localhost:5000/api/reservations/")
      .then((data) => {
        const fetchData = data.data;
        setReservationData(fetchData);
        setGetData(!getData);
      })
      .catch((error) => console.log(error));
  };

  const putCustomerData = (reservation) => {
    axios
      .post("https://backendbnb.onrender.com/api/reservations/", reservation)
      // .post("http://localhost:5000/api/reservations/", reservation)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div id="reservationCardContainer">
      <div id="reservationCard">
        <div id="textbox">
          <span
            className="alignleft"
            id="nightlyRate"
            style={{ fontSize: "xx-large", textDecoration: "none" }}
          >
            $
            <strong>
              {nightlyRate
                ? nightlyRate.toLocaleString()
                : defaultRate.toLocaleString()}
            </strong>
            <span style={{ fontSize: "medium" }}>&nbsp; night</span>
          </span>
          <span className="alignright" style={{ marginTop: "2%" }}>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="122.88px"
              height="116.864px"
              viewBox="0 0 122.88 116.864"
              enableBackground="new 0 0 122.88 116.864"
              xmlSpace="preserve"
              style={{ height: "20px", width: "20px" }}
            >
              <g>
                <polygon
                  fillRule="evenodd"
                  clipRule="evenodd"
                  points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"
                />
              </g>
            </svg> */}

            <div style={{ fontSize: "medium"}}>  &#9733; { handleRatings() } • { handleReviews() }
            </div>
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "12px",
            width: "auto",
            marginTop: "10%",
          }}
        >
          <div
            style={{
              marginTop: "-12%",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: "2px",
            }}
          >
            <div id="textbox">
              <span
                className="alignleft"
                style={{ textDecoration: "none", fontSize: "small" }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHECK-IN
              </span>
              <span className="alignright" style={{ fontSize: "small" }}>
                CHECKOUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
            <div style={{ clear: "both" }}></div>

            <Calendar
              style={{
                zIndex: "9999999999999999",
                width: "auto",
                overflow: "visible !important",
                position: "absolute",
              }}
              {...calendarProps}
            />
          </div>

          <div style={{ marginTop: "1%"}}>
            <Dropdown className="d-inline mx-2" autoClose="outside">
              <Dropdown.Toggle
                id="dropdown-autoclose-outside"
                style={{
                  backgroundColor: "transparent",
                  color: "black",
                  borderColor: "white"
                }}
              >
                <div style={{ fontSize: "large" }}>
                  <div className="alignleft" style={{ textDecoration: "none" }}>
                    GUESTS
                  </div>
                  <br></br>
                  <div className="alignleft" style={{ textDecoration: "none" }}>
                    {adults + children} guests{" "}
                    {infants ? <>, {infants} infants </> : ""}{" "}
                    {pets ? <>, {pets} pets</> : ""}
                  </div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  cursor: "default !important",
                }}
              >
                <Dropdown.Item
                  href="#"
                  style={{ cursor: "default !important" }}
                >
                  <div id="textbox" style={{ marginRight: "15%" }}>
                    <span
                      className="alignleft"
                      style={{ marginTop: "5%", cursor: "default" }}
                    >
                      Adults
                    </span>
                    <span className="alignright">
                      <div>
                        <button
                          className="minus"
                          type="button"
                          disabled=""
                          aria-label="subtract"
                          style={{ margin: "15%" }}
                          onClick={() => minusAdult()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28"></path>
                          </svg>
                        </button>

                        <span className="adults" style={{ margin: "15%" }}>
                          {adults}
                        </span>

                        <button
                          className="plus"
                          type="button"
                          aria-label="add"
                          style={{ margin: "15%" }}
                          onClick={() => plusAdult()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28m-14-14v28"></path>
                          </svg>
                        </button>
                      </div>
                    </span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div id="textbox" style={{ marginRight: "15%" }}>
                    <span className="alignleft" style={{ marginTop: "5%" }}>
                      Children
                    </span>
                    <span className="alignright">
                      <div>
                        <button
                          className="minus"
                          type="button"
                          disabled=""
                          aria-label="subtract"
                          style={{ margin: "15%" }}
                          onClick={() => minusChildren()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28"></path>
                          </svg>
                        </button>

                        <span className="children" style={{ margin: "15%" }}>
                          {children}
                        </span>

                        <button
                          className="plus"
                          type="button"
                          aria-label="add"
                          style={{ margin: "15%" }}
                          onClick={() => plusChildren()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28m-14-14v28"></path>
                          </svg>
                        </button>
                      </div>
                    </span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div id="textbox" style={{ marginRight: "15%" }}>
                    <span className="alignleft" style={{ marginTop: "5%" }}>
                      Infants
                    </span>
                    <span className="alignright">
                      <div>
                        <button
                          className="minus"
                          type="button"
                          disabled=""
                          aria-label="subtract"
                          style={{ margin: "15%" }}
                          onClick={() => minusInfants()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28"></path>
                          </svg>
                        </button>

                        <span className="infants" style={{ margin: "15%" }}>
                          {infants}
                        </span>

                        <button
                          className="plus"
                          type="button"
                          aria-label="add"
                          style={{ margin: "15%" }}
                          onClick={() => plusInfants()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28m-14-14v28"></path>
                          </svg>
                        </button>
                      </div>
                    </span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <div id="textbox" style={{ marginRight: "15%" }}>
                    <span className="alignleft" style={{ marginTop: "5%" }}>
                      Pets
                    </span>
                    <span className="alignright">
                      <div>
                        <button
                          className="minus"
                          type="button"
                          disabled=""
                          aria-label="subtract"
                          style={{ margin: "15%" }}
                          onClick={() => minusPets()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28"></path>
                          </svg>
                        </button>

                        <span className="pets" style={{ margin: "15%" }}>
                          {pets}
                        </span>

                        <button
                          className="plus"
                          type="button"
                          aria-label="add"
                          style={{ margin: "15%" }}
                          onClick={() => plusPets()}
                        >
                          <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{
                              display: "block",
                              fill: "none",
                              height: "12px",
                              width: "12px",
                              stroke: "currentcolor",
                              strokeWidth: "5.33333",
                              overflow: "visible",
                            }}
                          >
                            <path d="m2 16h28m-14-14v28"></path>
                          </svg>
                        </button>
                      </div>
                    </span>
                  </div>
                </Dropdown.Item>
                <Dropdown.Item>
                  This place has a maximum of 2 guests, not <br></br>
                  including infants. Pets aren't allowed.
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <LoadingButton id="reserveButton" />
        <br></br>
        <div>
          <span style={{ fontSize: "large" }}>You won't be charged yet</span>
        </div>{" "}
        <br></br>
        <div style={{ clear: "both" }}></div>
        <div id="textbox">
          <span className="alignleft">
            $
            {nightlyRate
              ? nightlyRate.toLocaleString()
              : defaultRate.toLocaleString()}{" "}
            x {numberOfNights} nights
          </span>
          <span className="alignright">
            $
            {nightlyRate
              ? (nightlyRate * numberOfNights).toLocaleString()
              : (defaultRate * numberOfNights).toLocaleString()}
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
        <div id="textbox">
          <span className="alignleft">Cleaning fee</span>
          <span className="alignright">
            $
            {nightlyRate
              ? Math.floor(nightlyRate * numberOfNights * 0.22).toLocaleString()
              : Math.floor(
                  (defaultRate * numberOfNights * 0.22).toLocaleString()
                )}
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
        <div id="textbox">
          <span className="alignleft">Service fee</span>
          <span className="alignright">
            $
            {nightlyRate
              ? Math.floor(nightlyRate * numberOfNights * 0.17).toLocaleString()
              : Math.floor(
                  (defaultRate * numberOfNights * 0.17).toLocaleString()
                )}
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
        <hr></hr>
        <div id="textbox">
          <span className="alignleft" style={{ textDecoration: "none" }}>
            <strong>Total before taxes</strong>
          </span>
          <span className="alignright">
            <strong>
              $
              {nightlyRate
                ? (
                    nightlyRate * numberOfNights * 0.17 +
                    nightlyRate * numberOfNights * 0.22 +
                    nightlyRate * numberOfNights
                  ).toLocaleString()
                : (
                    defaultRate * numberOfNights * 0.17 +
                    defaultRate * numberOfNights * 0.22 +
                    defaultRate * numberOfNights
                  ).toLocaleString()}
            </strong>
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>

      <div
        style={{
          border: "1px solid rgb(221, 221, 221)",
          borderRadius: "12px",
          padding: "25px",
          marginLeft: "5em",
        }}
      >
        <div id="textbox">
          <span
            className="alignleft"
            style={{ textDecoration: "none", maxWidth: "80%"}}
          >
            <strong>This is a rare find.</strong> Joe Dirt's place on Airbnb is
            usually fully booked.
          </span>
          <span className="alignright">
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "32px",
                width: "32px",
                fill: "rgb(227, 28, 95)",
                stroke: "currentcolor",
              }}
            >
              <g stroke="none">
                <path
                  d="m32.62 6 9.526 11.114-18.146 23.921-18.147-23.921 9.526-11.114z"
                  fillOpacity=".2"
                ></path>
                <path d="m34.4599349 2 12.8243129 14.9616983-23.2842478 30.6928721-23.28424779-30.6928721 12.82431289-14.9616983zm-17.9171827 16h-12.52799999l18.25899999 24.069zm27.441 0h-12.528l-5.73 24.069zm-14.583 0h-10.802l5.4012478 22.684zm-15.92-12.86-9.30799999 10.86h11.89399999zm19.253-1.141h-17.468l2.857 12.001h11.754zm1.784 1.141-2.586 10.86h11.894z"></path>
              </g>
            </svg>
          </span>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>

      <div>
        <div style={{ clear: "both" }}></div>
      </div>
    </div>
  );
}

export default Reservation;
