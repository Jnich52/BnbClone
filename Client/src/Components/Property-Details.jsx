import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from 'react-bootstrap';
import AboutThisSpaceModal from "./AboutThisSpace-Modal";
import AirCoverModal from "./AirCover-Modal";
import AmenitiesModal from "./Amenities-Modal";
import './Property-Details.css'

const PropertyDetails = (props) => {

return(
  <CardGroup className='card-group'>
    <Card>Property Hosted By: WHITE'S TEST</Card>
    <Card className='data-box'>Check-In, Host Experience, Cancellation</Card>
    <AirCoverModal />
    <AboutThisSpaceModal />
    <Card className='data-box'>Sleeping Accommodations</Card>
    <AmenitiesModal />
  </CardGroup>
)

}

export default PropertyDetails

