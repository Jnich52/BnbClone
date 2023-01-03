import React, { useState, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
import HostedBy from "./Hosted-by";
import AboutThisSpaceModal from "./AboutThisSpace-Modal";
import AirCoverModal from "./AirCover-Modal";
import AmenitiesModal from "./Amenities-Modal";
import "./Property-Details.css";


const PropertyDetails = (props) => {
  return (
    <CardGroup className="card-group">
      <HostedBy />
      <Card className="property-card">
        <div>
          <div id="svg-div">
            <svg
              id="amenities-svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false">
              <path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path>
            </svg>
            <div id="amenities-desc">Self check-in
            <div id='amenities-desc-note'>Check yourself in with the keypad.</div>
            </div>
          </div>
          <div id="svg-div">
            <svg
              id="amenities-svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false">
              <path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path>
            </svg>
            <div id="amenities-desc">Joe Dirt is a Superhost
            <div id='amenities-desc-note'>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </div>
          </div>
        </div>
          <div id="svg-div">
            <svg
              id="amenities-svg"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false">
              <path d="M16 0c6.627 0 12 5.373 12 12 0 6.337-3.814 12.751-11.346 19.257L16 31.82l-1.076-.932C7.671 24.509 4 18.218 4 12 4 5.423 9.397 0 16 0zm0 2C10.504 2 6 6.525 6 12c0 5.44 3.249 11.118 9.831 17.02l.169.149.576-.518c6.178-5.65 9.293-11.092 9.42-16.318L26 12c0-5.523-4.477-10-10-10zm0 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
            </svg>
            <div id="amenities-desc">Unbelievable location
            <div id='amenities-desc-note'>
              95% of recent guests gave this location a rating of "Life's a
              garden, dig-it".
            </div>
          </div>
        </div>
        </div>
      </Card>
      <AirCoverModal />
      <AboutThisSpaceModal />
      <Card className="property-card">Sleeping Accommodations</Card>
      <AmenitiesModal />
    </CardGroup>
  );
};

export default PropertyDetails;
