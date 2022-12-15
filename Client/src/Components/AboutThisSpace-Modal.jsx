import React, { useState } from 'react';
import { Card, Button, Modal, CloseButton } from 'react-bootstrap';

const AboutThisSpaceModal = (props) => {
  
  const handleClose = () => props.setShow(false);
  const handleShow = () => props.setShow(true);

  return (
    <Card className='property-card'>
      <Button variant="link" onClick={handleShow}>
        Show more
      </Button>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header >
          <CloseButton />
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      </Modal>
    </Card>
  );
}

export default AboutThisSpaceModal