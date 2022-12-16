import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from './Calendar.jsx'
import './Reservation.css'


function Reservation() {
  
    const [isLoading, setLoading] = useState(false);
    const [start, startRef] = useState(null);
    const [end, endRef] = useState(null);
    const [defaultRate, setDefaultRate] = useState(1000);
    const [nightlyRate, setNightlyRate] = useState(null);
    const [numberOfNights, setNumberOfNights] = useState(2);
    const [refreshCalendar, setRefreshCalendar] = useState(null);

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    function LoadingButton() {
        
        useEffect(() => {
          if (isLoading) {
            simulateNetworkRequest().then(() => {
              setLoading(false);
            });
          }
        }, [isLoading]);
      
    const handleClick = () => setLoading(true);
      
        return (
          <Button
            id='reserveButton'
            disabled={isLoading}
            onClick={!isLoading ? handleClick : null}
            style={{fontSize: 'large'}}
          >
            {isLoading ? '...' : 'Reserve'}
          </Button>
        );
      }

      function minusAdult() {
        adults > 0 ? setAdults(adults - 1) : ""
      }

      function plusAdult() {
        adults + children < 10 ? setAdults(adults + 1) : ""
      }

      function minusChildren() {
        children > 0 ? setChildren(children - 1) : ""
      }

      function plusChildren() {
        adults + children < 10 ? setChildren(children + 1) : ""
      }

      function minusInfants() {
        infants > 0 ? setInfants(infants - 1) : ""
      }

      function plusInfants() {
        infants < 5 ? setInfants(infants + 1) : ""
      }

      function minusPets() {
        pets > 0 ? setPets(pets - 1) : ""
      }

      function plusPets() {
        pets < 5 ? setPets(pets + 1) : ""
      }

      let calendarProps = {
        numberOfNights, setNumberOfNights,
        nightlyRate, setNightlyRate,
        refreshCalendar, setRefreshCalendar
      }


    return (
    <html>
        <head>
        </head>
        <body>

            <div id="reservationCard"> 

            <div id="textbox">
                <span class="alignleft" id='nightlyRate' style={{fontSize:'xx-large', textDecoration:'none'}}>$<strong>{ nightlyRate ? nightlyRate.toLocaleString() : defaultRate.toLocaleString() }</strong>
                <text style={{fontSize:'medium'}}>&nbsp; night</text></span>
                <span class="alignright" style={{marginTop:'4%'}}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" v
                ersion="1.1" id="Layer_1" x="0px" y="0px" w
                idth="122.88px" height="116.864px" viewBox="0 0 122.88 116.864" 
                enable-background="new 0 0 122.88 116.864" xml:space="preserve"
                style={{height: '20px', width: '20px'}}>
                    <g><polygon fill-rule="evenodd" clip-rule="evenodd" 
                    points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"/>
                    </g>
                </svg>
                
                
                    <text style={{fontSize:'medium'}}> 4.8  • </text>
                    <text style={{textDecoration:'underline', fontSize:'medium'}}> 36 reviews </text> 
                </span>
            </div>
            <div style={{clear: 'both'}}></div>

            <div style={{borderStyle:'solid', borderColor: 'black', borderWidth: '2px', borderRadius: '12px', width:'auto', marginTop:'10%'}}>
                <div style={{marginTop:"-12%", borderBottomStyle:'solid', borderBottomColor: 'black', borderBottomWidth: '2px'}}>

                  <div id="textbox">
                <span class="alignleft" style={{textDecoration:"none", fontSize:"small"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CHECK-IN</span>
                <span class="alignright" style={{fontSize:"small"}}>CHECKOUT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            <div style={{clear: 'both'}}></div>

                <Calendar style={{width:'auto', overflow:'visible !important'}} {...calendarProps}/>
                </div>
        
                <div style={{marginTop: '1%', paddingBottom:'15%'}}>
                    <Dropdown className="d-inline mx-2" autoClose="outside" align="xl: start">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" style={{backgroundColor: 'white', color:'black', borderColor: 'white', float: 'left', minWidth:'20em'}}>
                        <text style={{fontSize:'large'}}>  
                        <span class="alignleft" style={{textDecoration:"none"}}>GUESTS</span>
                        <br></br>
                        <span class="alignleft" style={{textDecoration:"none"}}>{adults + children} guests { infants ? <>, {infants} infants </> : ""} { pets ? <>, {pets} pets</> : "" }</span></text>

                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{cursor:'default !important'}}>
                        <Dropdown.Item href="#" style={{cursor:'default !important'}}>
                        <div id="textbox" style={{marginRight:'15%'}}>
                            <span class="alignleft" style={{marginTop:'5%', cursor:'default'}}>Adults</span>
                            <span class="alignright">
                                <div>
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}
                                        onClick={()=> minusAdult()}
                                        >
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="adults" style={{margin:'15%'}}>{adults}</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}
                                        onClick={()=> plusAdult()}
                                        >
                                        
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28m-14-14v28"></path>
                                                </svg>
                                            
                                        </button>
                                </div> 
                            </span>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        <div id="textbox" style={{marginRight:'15%'}}>
                            <span class="alignleft" style={{marginTop:'5%'}}>Children</span>
                            <span class="alignright">
                                <div>
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}
                                         onClick={()=> minusChildren()}
                                        >
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="children" style={{margin:'15%'}}>{children}</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}
                                         onClick={()=> plusChildren()}
                                        >
                                        
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28m-14-14v28"></path>
                                                </svg>
                                            
                                        </button>
                                </div> 
                            </span>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        <div id="textbox" style={{marginRight:'15%'}}>
                            <span class="alignleft" style={{marginTop:'5%'}}>Infants</span>
                            <span class="alignright">
                                <div>
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}
                                         onClick={()=> minusInfants()}
                                        >
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="infants" style={{margin:'15%'}}>{infants}</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}
                                         onClick={()=> plusInfants()}
                                        >
                                        
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28m-14-14v28"></path>
                                                </svg>
                                            
                                        </button>
                                </div> 
                            </span>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        <div id="textbox" style={{marginRight:'15%'}}>
                            <span class="alignleft" style={{marginTop:'5%'}}>Pets</span>
                            <span class="alignright">
                                <div>
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}
                                         onClick={()=> minusPets()}
                                        >
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="pets" style={{margin:'15%'}}>{pets}</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}
                                         onClick={()=> plusPets()}
                                        >
                                        
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28m-14-14v28"></path>
                                                </svg>
                                            
                                        </button>
                                </div> 
                            </span>
                        </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#">This place has a maximum of 2 guests, not <br></br>
                        including infants. Pets aren't allowed.</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <LoadingButton id='reserveButton'/>

            <br></br>

            <div><text style={{fontSize:'large'}}>You won't be charged yet</text></div> <br></br>
            <div style={{clear: 'both'}}></div>
            <div id="textbox">
                <span class="alignleft">${ nightlyRate ? nightlyRate.toLocaleString() : defaultRate.toLocaleString() } x {numberOfNights} nights</span>
                <span class="alignright">${ nightlyRate ? (nightlyRate*numberOfNights).toLocaleString() : (defaultRate*numberOfNights).toLocaleString() }</span>
            </div>
            <div style={{clear: 'both'}}></div>

            <div id="textbox">
                <span class="alignleft">Cleaning fee</span>
                <span class="alignright">${ nightlyRate ? (nightlyRate*numberOfNights*0.22).toLocaleString() : (defaultRate*numberOfNights*0.22).toLocaleString() }</span>
            </div>
            <div style={{clear: 'both'}}></div>


            <div id="textbox">
                <span class="alignleft">Service fee</span>
                <span class="alignright">${ nightlyRate ? (nightlyRate*numberOfNights*0.17).toLocaleString() : (defaultRate*numberOfNights*0.17).toLocaleString() }</span>
            </div>
            <div style={{clear: 'both'}}></div>

            <hr></hr>

            <div id="textbox">
                <span class="alignleft" style={{textDecoration:'none'}}><strong>Total before taxes</strong></span>
                <span class="alignright"><strong>${ nightlyRate ? (nightlyRate*numberOfNights*0.17 + nightlyRate*numberOfNights*0.22 + nightlyRate*numberOfNights).toLocaleString() :
                (defaultRate*numberOfNights*0.17 + defaultRate*numberOfNights*0.22 + defaultRate*numberOfNights).toLocaleString() }</strong></span>
            </div>
            <div style={{clear: 'both'}}></div>
            
            </div>

        </body>
    </html>
    )
}

export default Reservation