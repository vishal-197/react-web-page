import React from 'react'
import { Link } from 'react-router-dom'
import './trendingi-tours.css'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';




function Trending_Tour() {
  return (
   
    <section className='Trending-Tours'>
        <div className='tranding-tour-heading'>
            <h1>Trending Tour Packages</h1>
            </div>

            <div className='tranding-tour-packegs'> 
                <div className='tranding-tour-card'>
                   <div className='tranding-tour-card-packegs'>
                        <img src='./img/Andaman.jpg'/>
                        
                        <span className='dis'> Upto 25% off</span>
                    </div>
                   <div className='card-detials'>
                    <h1 >OBLU Select Xperience Ailafushi, Maldives</h1>
                    <p>7Night / 8Days</p>
                   <div className='card-book'>
                    <ul>
                        <li>
                            <p>from</p>
                            <span> <strong><CurrencyRupeeIcon/></strong>2000</span>
                        </li>
                        <li><Link to="" className='book-now'>Book Now</Link></li>
                    </ul>
                   </div>
                    </div>
                </div>
                <div className='tranding-tour-card'>
                   <div className='tranding-tour-card-packegs'>
                        <img src='./img/Himachal2.jpg'/>
                        <span className='dis'> Upto 25% off</span>
                    </div>
                   <div className='card-detials'>
                    <h1>OBLU Select Xperience Ailafushi, Maldives</h1>
                    <p>7Night / 8Days</p>
                   <div className='card-book'>
                   <ul>
                        <li>
                            <p>from</p>
                            <span> <strong><CurrencyRupeeIcon/></strong>2000</span>
                        </li>
                        <li><Link to="" className='book-now'>Book Now</Link></li>
                    </ul>
                   </div>
                    </div>
                </div>
                <div className='tranding-tour-card'>
                   <div className='tranding-tour-card-packegs'>
                        <img src='./img/Kerala.jpg'/>
                        
                        <span className='dis'> Upto 25% off</span>
                    </div>
                   <div className='card-detials'>
                    <h1>OBLU Select Xperience Ailafushi, Maldives</h1>
                    <p>7Night / 8Days</p>
                   <div className='card-book'>
                   <ul>
                        <li>
                            <p>from</p>
                            <span> <strong><CurrencyRupeeIcon/></strong>2000</span>
                        </li>
                        <li><Link to="" className='book-now'>Book Now</Link></li>
                    </ul>   
                   </div>
                    </div>
                </div>
            </div>
    
    </section>
  )
}

export default Trending_Tour