import React, { useState } from 'react';
import { Card, Button, Modal, } from 'react-bootstrap';

const AmenitiesModal = () => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className='property-card'>
      <Card.Body>
        <svg viewBox="0 0 32 32" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" role="presentation" 
        focusable="false" 
        style={{display: 'block', height: '1.5em', width: '1.5em', fill: 'currentcolor',}}>
          <path d="M28 2a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2H4v15.499l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 18c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 18c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 18c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 20c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 20c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 20c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 21.5v2.999l.187-.007c.371-.033.72-.161 1.005-.372l.137-.111A3.975 3.975 0 0 1 8 23c.988 0 1.945.352 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.492A3.974 3.974 0 0 1 16 23c.988 0 1.945.351 2.671 1.009.35.316.826.49 1.33.491.502 0 .979-.175 1.328-.491A3.975 3.975 0 0 1 23.999 23c.989 0 1.946.351 2.672 1.009.35.316.827.49 1.33.491l-.001 2-.228-.006a3.96 3.96 0 0 1-2.443-1.003A1.978 1.978 0 0 0 24 25c-.502 0-.978.175-1.328.491a3.977 3.977 0 0 1-2.67 1.009 3.977 3.977 0 0 1-2.672-1.009A1.978 1.978 0 0 0 16 25c-.503 0-.98.175-1.329.491a3.978 3.978 0 0 1-2.67 1.009 3.978 3.978 0 0 1-2.672-1.008A1.978 1.978 0 0 0 8 25c-.503 0-.98.175-1.33.491A3.976 3.976 0 0 1 4 26.5V28h24zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
            </path>
            </svg>
      </Card.Body>
      <Button variant='link' className='amenities-btn' onClick={handleShow}>
        Show all amenities
      </Button>

      <Modal className='properties-modal' size='lg' fullscreen ='lg-down'  scrollable centered  show={show} onHide={handleClose}>
        <Modal.Header className='properties-modal-header' closeButton>
        </Modal.Header>
        <Modal.Body className='properties-modal-body'>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default AmenitiesModal