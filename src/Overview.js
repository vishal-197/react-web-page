import React from 'react'
import OverviewTab from './Home_Overview_Tab'
import './overview.css'
import { Link } from 'react-router-dom'

function Overview() {
  return (
   <section className='overview-sec'>
        <div className='overview-main-box'>
            <div className='overview-left-side-box'>
                <img src="./img/about-img.jpg"></img>
          
            </div>
            <div className='overview-right-side-box'>
                <div className='overview-heading'>
                    <h3>Overview</h3>
                    <h1>About Destination vibes</h1>
                </div>
                <div className='overview-right-side-tab'>
                    <OverviewTab/>
                    <Link to="">
                        Explore More
                    </Link>
                    
                </div>


            </div>

        </div>

   </section>
  )
}

export default Overview
