import React from "react";
import { useState, useEffect, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Calendar from './Calendar.jsx'
import './Reservation.css'


function Reservation() {
  
    const [isLoading, setLoading] = useState(false);
    const [start, startRef] = React.useState(null);
    const [end, endRef] = React.useState(null);

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


    return (
    <html>
        <head>
        </head>
        <body>

            <div id="reservationCard"> 
            <text><span id='nightlyRate'>$280</span> night &nbsp;&nbsp;&nbsp;</text>
            <text>
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
                
                
                    <text style={{fontSize:'medium'}}> 4.8</text> <a> <text style={{textDecoration:'underline', fontSize:'medium'}}> 36 reviews </text> </a></text><br></br>

            <div style={{borderStyle:'solid', borderColor: 'black', borderWidth: '2px', borderRadius: '12px', width:'auto', marginTop:'10%'}}>
                <div style={{borderBottomStyle:'solid', borderBottomColor: 'black', borderBottomWidth: '2px', paddingBottom:'5%'}}>
                    <Calendar style={{width:'auto'}}/>
                </div>
        
                <div style={{marginTop: '5%', paddingBottom:'15%'}}>
                    <Dropdown className="d-inline mx-2" autoClose="outside" align="xl: end">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" style={{backgroundColor: 'white', color:'black', borderColor: 'white', float: 'left', minWidth:'auto'}}>
                        <text style={{fontSize:'large'}}>  GUESTS <br></br>2 guests</text>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{cursor:'default !important'}}>
                        <Dropdown.Item href="#" style={{cursor:'default !important'}}>
                        <div id="textbox" style={{marginRight:'15%'}}>
                            <span class="alignleft" style={{marginTop:'5%', cursor:'default'}}>Adults</span>
                            <span class="alignright">
                                <div>
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}>
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="adults" style={{margin:'15%'}}>1</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}>
                                        
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
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}>
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="children" style={{margin:'15%'}}>1</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}>
                                        
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
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}>
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="infants" style={{margin:'15%'}}>1</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}>
                                        
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
                                
                                        <button class="minus" type="button" disabled="" aria-label="subtract" style={{margin:'15%'}}>
                                            
                                                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
                                                style={{display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: '5.33333', overflow: 'visible'}}>
                                                    <path d="m2 16h28"></path>
                                                </svg>
                                            
                                        </button>
                                    
                                        <text class="pets" style={{margin:'15%'}}>1</text>

                                        <button class="plus" type="button" aria-label="add" style={{margin:'15%'}}>
                                        
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
                <span class="alignleft">$770 x 7 nights</span>
                <span class="alignright">$3,850</span>
            </div>
            <div style={{clear: 'both'}}></div>

            <div id="textbox">
                <span class="alignleft">Cleaning fee</span>
                <span class="alignright">$300</span>
            </div>
            <div style={{clear: 'both'}}></div>


            <div id="textbox">
                <span class="alignleft">Service fee</span>
                <span class="alignright">$586</span>
            </div>
            <div style={{clear: 'both'}}></div>

            <hr></hr>

            <div id="textbox">
                <span class="alignleft" style={{textDecoration:'none'}}><strong>Total before taxes</strong></span>
                <span class="alignright"><strong>$4,736</strong></span>
            </div>
            <div style={{clear: 'both'}}></div>
            
            </div>

        </body>
    </html>
    )
}

export default Reservation