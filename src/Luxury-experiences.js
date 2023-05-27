import React from 'react'
import { Link } from 'react-router-dom'
import './luxuryexperiences.css'

function Luxuryexperiences() {
  return (
    
    <section className='luxury-experiences'>
        <div className='container'>
            <div className='grid_list'>
                <div className='left-side'>
                    <div className='left-side-card'>
                        <Link to="">
                            <div className='img-box1 bg'>
                                <img src="./img/Andaman.jpg"></img>
                            </div>
                            <div className='img-content'>
                                <h1>Find Best Thing to Do</h1>
                                <p>Accross globe</p>
                                <button to="" className='book_now'>Book Now</button>

                            </div>
                        </Link>
                    </div>
                    <div className='left-side-card'>
                        <Link to="">
                            <div className='img-box2 bg'>
                                <img src="./img/Kerala.jpg"></img>
                            </div>
                            <div className='img-content'>
                                <h1>Find Best Thing to Do</h1>
                                <p>Accross globe</p>
                                <button to="" className='book_now'>Book Now</button>

                            </div>
                        </Link>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='right-side-inner-row'>
                        <div className='right-side-box'>
                           <div className='inner-box'>
                         <Link to="">
                          <div className='box1 bg'>
                            <img src="./img/jammu.jpg"></img>
                            <div className='content'>
                                <h1>Singapore</h1>
                            </div>
                            </div> 
                            </Link>
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/india-holiday-trekking.jpg"></img>
                            <div className='content'>
                                <h1>Italy</h1>
                                </div>
                            </div>
                            </Link>
        
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/adi-kailsah.jpg"></img>
                            <div className='content'>
                                <h1>Paris</h1>
                            </div>
                            </div>
                            </Link>
                          </div>

                        </div>
                        <div className='right-side-box'>
                          
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/Himachal2.jpg"></img>
                            <div className='content'>
                                <h1>Amsterdam</h1>
                                </div>
                            </div>
                            </Link>
        
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box1 bg'>
                            <img src="./img/dealsHoliday.jpg"></img>
                            <div className='content'>
                                <h1>Abu Dhabi</h1>
                            </div>
                            </div> 
                            </Link>
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/dealsDubaid.jpg"></img>
                            <div className='content'>
                                <h1>Malaysia</h1>
                            </div>
                            </div>
                            </Link>
        
                          </div>

                        </div>
                        <div className='right-side-box'>
                           <div className='inner-box'>
                          <Link to="">
                          <div className='box1 bg'>
                            <img src="./img/dealsKashmir.jpg"></img>
                            <div className='content'>
                                <h1>Thailand</h1>
                            </div>
                            </div> 
                            </Link>
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/dealsTurkey.jpg"></img>
                            <div className='content'>
                                <h1>Australia</h1>
                                </div>
                            </div>
                            </Link>
        
                          </div>
                          <div className='inner-box'>
                            <Link to="">
                          <div className='box2 bg'>
                            <img src="./img/Kerala.jpg"></img>
                            <div className='content'>
                                <h1>USA</h1>
                            </div>
                            </div>
                            </Link>
        
                          </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

export default Luxuryexperiences
