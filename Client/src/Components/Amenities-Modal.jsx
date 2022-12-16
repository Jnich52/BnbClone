import React, { useState } from 'react';
import { Card, Button, Modal, CloseButton } from 'react-bootstrap';

const AmenitiesModal = () => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className='property-card'>
      <Button variant="outline-dark" onClick={handleShow}>
        Show more
      </Button>

      <Modal show={show} size='xl' onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default AmenitiesModal