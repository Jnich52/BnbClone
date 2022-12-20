import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from 'react-bootstrap';
import AboutThisSpaceModal from "./AboutThisSpace-Modal";
import AirCoverModal from "./AirCover-Modal";
import AmenitiesModal from "./Amenities-Modal";
import './Property-Details.css'

const PropertyDetails = (props) => {

return(
  <CardGroup className='card-group'>
    <Card>Property Hosted By:</Card>
    <Card className='property-card'>Check-In, Host Experience, Cancellation</Card>
    <AirCoverModal />
    <AboutThisSpaceModal />
    <Card className='property-card'>Sleeping Accommodations</Card>
    <AmenitiesModal />
  </CardGroup>
)

}

export default PropertyDetails

