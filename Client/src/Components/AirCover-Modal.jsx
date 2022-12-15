import React, { useState } from 'react';
import { Card, Button, Modal, CloseButton } from 'react-bootstrap';

const AirCoverModal = (props) => {
  
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  return (
    <Card className='property-card'>
      <Card.Header className="card-header">
        <img className='aircover-img' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"/>
      </Card.Header>
      <Card.Body className="card-body">
        Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
      </Card.Body>

      <Button variant="link" className='aircover-btn' onClick={handleShow}>
        Learn more
      </Button>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header >
          <CloseButton onClick={handleClose}/>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </Card>
  );
}

export default AirCoverModal