import React from "react";
import { useState, useEffect, useRef } from "react";
import Reservation from './Reservation.jsx'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from './Calendar.jsx';
import Modal from 'react-bootstrap/Modal';
import './Reservation.css'
import './Reservation-Bar.css'

function Reservation_Bar() {

    const [lgShow, setLgShow] = useState(false);
    const defaultRate = 1000;

    return(
        <div class='reservation-bar'>

            <div style={{clear: 'both'}}></div>

            <div id="textbox">
                <span class="alignleft" style={{textDecoration:'none', marginLeft:'2em', marginTop:'1.5rem'}}>
                    <text style={{fontSize:'1.5em'}}><strong>${defaultRate.toLocaleString()}</strong></text> night <br></br> 
                    <text style={{textDecoration:"underline"}}> 15 - 21 Jan</text>
                </span>

                <span class="alignright" style={{marginRight:'2em', paddingTop:'0.5 rem'}}>

                    <Button id='reserveButton' onClick={() => setLgShow(true)}>Reserve</Button>
                    <Modal
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Your Trip
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>.
                            <Reservation/>
                        </Modal.Body>
                    </Modal>

                </span>
            </div>
            <div style={{clear: 'both'}}></div>

        </div>
    )
}

export default Reservation_Bar;