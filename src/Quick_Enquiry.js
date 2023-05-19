import React from 'react'
import { Link } from 'react-router-dom'
import './quick_Enquiry.css'

function Quick_Enquiry() {
  return (
    <section className='enquiry-sec'>
        <div className='enquiry-row'>
            <div className='enquriy-left-side'>
              <div className='enquriy-left-inner-box'>

              <img src='./img/plan-trip.jpg'></img>
               <h1>Plan your <span>Custom Trip</span> with us ?</h1>
              <p>Plan your day by day itinerary for your vacation with Private Car and Driver or Tour Packages.</p>
              <Link to="">Plan a trip now</Link>
              </div>
            </div>
            <div className='enquriy-right-side'>
                <div className='enquriy-form'>
                  <h1>Quick Enquiry</h1>
                  <form>
                    <label> Country</label>
                    <input tabIndex="text" placeholder='Country'></input>
                    <label>Date of Arrival</label>
                    <input tabIndex="text" placeholder='Date of Arrival'></input>
                    <label>NO of days</label>
                    <input tabIndex="text" placeholder='No of Days'></input>
                    <label>NO of Travelers</label>
                    <input tabIndex="text" placeholder='No of Travels'></input>
                    <button className='enquriy-btn' type='submit'>Submit</button>
                  </form>
                </div>



            </div>
        </div>
    </section>
  
    
  )
}

export default Quick_Enquiry