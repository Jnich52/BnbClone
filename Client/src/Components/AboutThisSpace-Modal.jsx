import React, { useState } from 'react';
import { Card, Button, Modal, CloseButton } from 'react-bootstrap';

const AboutThisSpaceModal = () => {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Card className='property-card'>
      
      <Card.Body><p>
            Come make long-lasting memories by the lake, take in these amazing sunsets and enjoy 
            lots of fun activities for the whole family - hiking, kayaking, horseback riding, swimming.
          </p>
          <p>
            Relax in this amazing Tree House right on Sayersbrook lake. You’ll have a private hot tub, 
            fireplace, fully furnished kitchen, beautiful handmade furniture, huge deck, and yes, those 
            views of the 60-acre lake!!...
          </p></Card.Body>

          <Button  variant='link' className='aircover-btn' onClick={handleShow}>
            Show more
            <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" 
            style={{height: '12px', width: '12px', display: 'flex', fill: '#222222', marginLeft:'.25rem'}}>
            <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" 
            fill-rule="evenodd"></path></svg>
          </Button>

      <Modal show={show} size='lg' fullscreen='lg-down' style={{color: '#222222', fontSize: '16px !important',}} onHide={handleClose}>
        
        <Modal.Header className='modal-header' closeButton>
        </Modal.Header>
        <Modal.Title>About this space</Modal.Title>
        <Modal.Body className='modal-body'>
          <p>
            Come make long-lasting memories by the lake, take in these amazing sunsets and enjoy 
            lots of fun activities for the whole family - hiking, kayaking, horseback riding, swimming.
          </p>
          <br/>
          <p>
            Relax in this amazing Tree House right on Sayersbrook lake. You’ll have a private hot tub, 
            fireplace, fully furnished kitchen, beautiful handmade furniture, huge deck, and yes, those 
            views of the 60-acre lake!!
          </p>
          <br/>
          <h4>The space</h4>
          <p>
          Dancing under Red Skies is a beautiful fully furnished luxury treehouse elevated 12 feet above 
          the ground with a large deck overlooking Sayersbrook lake. The Wagner family spared no expense 
          in this build. This treehouse is handcrafted with cedar meticulously milled at our ranch. We designed 
          this treehouse to capture every inch of nature's beauty with oversized bay windows in the living and 
          master bedrooms. Enjoy the 15 x 10 deck while admiring the gorgeous sunsets or taking a dip in the 
          lake just below. This treehouse is perfect for relaxing after a day on the lake fishing or hiking or 
          just taking a break away from city life. Enjoy a soak in the private hot tub just below the tree house. 
          Includes a luxury kitchen with a full-size fridge and oven for cooking and preparing a meal. This 
          treehouse offers so many more amenities, not enough space to mention here, we would love it if you 
          could experience this dream; book today!
          <br/>
          Horseback riding, kayak rental, hiking trails are available.
          </p>
        </Modal.Body>
      
      </Modal>
    
    </Card>
  );
}

export default AboutThisSpaceModal