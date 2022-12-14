import React, { useState, useEffect } from "react";
import { Card, Button, CardGroup } from 'react-bootstrap';
import 'Property_Details.css'

const PropertyDetails = (props) => {
return(
  <CardGroup>
    <Card>Property Hosted By:</Card>
    <Card>Check-In, Host Experience, Cancellation</Card>
    <Card>aircover</Card>
    <Card>About this space </Card>
    <Card>Sleeping Accommodations</Card>
    <Card>What this place offers(amenities)
      <Button style={outline-dark}></Button>
    </Card>
  </CardGroup>
)
}

export default PropertyDetails