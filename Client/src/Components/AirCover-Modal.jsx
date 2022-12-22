import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const AirCoverModal = () => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className='property-card'>
      <Card.Header className="card-header">
        <img className='aircover-img' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"/>
      </Card.Header>
      <Card.Body className="card-body">
        Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.
      </Card.Body>

      <Button variant='link' className='prop-details-btn' onClick={handleShow}>
        Learn more
      </Button>

      <Modal className='properties-modal' size='lg' fullscreen ='lg-down'  style={{color: '#717171',}}  scrollable centered  show={show} onHide={handleClose}>
        <Modal.Header className = 'properties-modal-header' closeButton style={{justifyItems: 'left',}}>
        </Modal.Header>
        <Modal.Body className='properties-modal-body'>
          <div className='first-para'>
            <img className='modal-img' src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg" alt="AirCover"/>
            <p>
              AirCover is comprehensive protection included for free with every booking.
            </p>
            </div>
            <div className='modal-para'>
            <h4>Booking Protection Guarantee</h4>
            <p>
              In the unlikely event a Host needs to cancel your booking within 30 days of check-in, we’ll find you a similar or better home, or we’ll refund you.
            </p>
            </div>
            <div className='modal-para'>
            <h4>Check-In Guarantee</h4>
            <p>
              If you can’t check into your home and the Host cannot resolve the issue, 
              we’ll find you a similar or better home for the length of your original stay, or we’ll refund you.
            </p>
            </div>
            <div className='modal-para'>
            <h4>Get-What-You-Booked Guarantee</h4>
            <p>
              If at any time during your stay you find your listing isn't as advertised—for example, 
              the refrigerator stops working and your Host can’t easily fix it, 
              or it has fewer bedrooms than listed—you'll have three days to report it 
              and we’ll find you a similar or better home, or we’ll refund you.
            </p>
            </div>
            <div className='modal-para'>
            <h4>24-hour Safety Line</h4>
            <p>
              If you ever feel unsafe, you’ll get priority access to specially-trained safety agents, day or night.
            </p>
            </div>
            <p className='last-line'>
              Find complete details on how AirCover protects your booking in our{' '}
            <a target="_blank" href="https://www.airbnb.com/help/article/3218">Help Center</a>
            </p>
            
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default AirCoverModal