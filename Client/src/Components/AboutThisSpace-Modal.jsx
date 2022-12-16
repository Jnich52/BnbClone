import React, { useState } from 'react';
import { Card, Button, Modal, CloseButton } from 'react-bootstrap';

const AboutThisSpaceModal = () => {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card className='property-card'>
      <Button variant="link" onClick={handleShow}>
        Show more
      </Button>

      <Modal show={show} size='xl' onHide={handleClose}>
        <Modal.Header className='modal-header' closeButton>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <h2>About this space</h2>
          <p>
            Come make long-lasting memories by the lake, take in these amazing sunsets and enjoy 
            lots of fun activities for the whole family - hiking, kayaking, horseback riding, swimming.
          </p>
          <p>
            Relax in this amazing Tree House right on Sayersbrook lake. You’ll have a private hot tub, 
            fireplace, fully furnished kitchen, beautiful handmade furniture, huge deck, and yes, those 
            views of the 60-acre lake!!
          </p>
          
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
          Horseback riding, kayak rental, hiking trails are available.
          </p>
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default AboutThisSpaceModal