import React from 'react'
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import ExploreIcon from '@mui/icons-material/Explore';
import SurfingIcon from '@mui/icons-material/Surfing';
import TerrainIcon from '@mui/icons-material/Terrain';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import "./categories.css"
function Categories() {
  return (

    <section className='categories-sec'>
        <div className='categories-heading'>
            <h3>Categories</h3>
            <h1>Theme to Explore</h1>
        </div>
        <div className='categories-box-main'>
            <div className='categories-inner-box'>
                <span className='categories-icons'><AirlineStopsIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
            <div className='categories-inner-box'>
                <span className='categories-icons'><ExploreIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
            <div className='categories-inner-box'>
                <span className='categories-icons'><PublishedWithChangesIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
            <div className='categories-inner-box'>
                <span className='categories-icons'><SurfingIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
            <div className='categories-inner-box'>
                <span className='categories-icons'><TerrainIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
            <div className='categories-inner-box'>
                <span className='categories-icons'><FavoriteBorderIcon fontSize="large"/></span>
                <h5>Adventure</h5>
                <ul>
                    <li><p>33 Tours</p></li>
                    <li><p>from <span>7999 <CurrencyRupeeIcon/> </span></p></li>
                    </ul>
            </div>
        </div>
    </section>
    
    
  )
}

export default Categories
