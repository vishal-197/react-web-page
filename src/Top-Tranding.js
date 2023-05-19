import React from 'react'
import { Link } from 'react-router-dom'
import './top-tranding.css'
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

function Top_Tranding() {
  return (
    <section className='Top-Tranding-sec'>
        <div className='top-tranding-heading'>
            <h3>Top tranding</h3>
            <h1>Holiday Destinations</h1>
        </div>
        <div className='Top-tran-card-sec'>
            <div className='Top-tran-inner-card'>
                <div className='img-box'>
                    <img src='./img/europe.jpg'/>
                </div>
                <div className='content-box'>
                    <h3>Europe</h3>
                    <div className='tranding-meta'>
                        <h6>84 tours</h6>
                        <p>352 departures available</p>
                        <div className='total-guests'>
                            <h5>58,656 Guests</h5>
                            <p>already travelled</p>
                        </div>
                        <h4 className='rating'><span><StarBorderPurple500Icon/></span>5.0</h4>
                        <Link to="">Show Tours</Link>
                    </div>
                </div>

            </div>
            <div className='Top-tran-inner-card'>
                <div className='img-box'>
                    <img src='./img/jammu.jpg'/>
                </div>
                <div className='content-box'>
                    <h3>Europe</h3>
                    <div className='tranding-meta'>
                        <h6>84 tours</h6>
                        <p>352 departures available</p>
                        <div className='total-guests'>
                            <h5>58,656 Guests</h5>
                            <p>already travelled</p>
                        </div>
                        <h4 className='rating'><span><StarBorderPurple500Icon/></span>5.0</h4>
                        <Link to="">Show Tours</Link>
                    </div>
                </div>

            </div>
            <div className='Top-tran-inner-card'>
                <div className='img-box'>
                    <img src='./img/sikkim.jpg'/>
                </div>
                <div className='content-box'>
                    <h3>Europe</h3>
                    <div className='tranding-meta'>
                        <h6>84 tours</h6>
                        <p>352 departures available</p>
                        <div className='total-guests'>
                            <h5>58,656 Guests</h5>
                            <p>already travelled</p>
                        </div>
                        <h4 className='rating'><span><StarBorderPurple500Icon/></span>5.0</h4>
                        <Link to="">Show Tours</Link>
                    </div>
                </div>

            </div>
            <div className='Top-tran-inner-card'>
                <div className='img-box'>
                    <img src='./img/himachal.jpg'/>
                </div>
                <div className='content-box'>
                    <h3>Europe</h3>
                    <div className='tranding-meta'>
                        <h6>84 tours</h6>
                        <p>352 departures available</p>
                        <div className='total-guests'>
                            <h5>58,656 Guests</h5>
                            <p>already travelled</p>
                        </div>
                        <h4 className='rating'><span><StarBorderPurple500Icon/></span>5.0</h4>
                        <Link to="">Show Tours</Link>
                    </div>
                </div>

            </div>
            <div className='Top-tran-inner-card'>
                <div className='img-box'>
                    <img src='./img/jammu.jpg'/>
                </div>
                <div className='content-box'>
                    <h3>Europe</h3>
                    <div className='tranding-meta'>
                        <h6>84 tours</h6>
                        <p>352 departures available</p>
                        <div className='total-guests'>
                            <h5>58,656 Guests</h5>
                            <p>already travelled</p>
                        </div>
                        <h4 className='rating'><span><StarBorderPurple500Icon/></span>5.0</h4>
                        <Link to="">Show Tours</Link>
                    </div>
                </div>

            </div>


        </div>


    </section>


   
    


  )
}

export default Top_Tranding