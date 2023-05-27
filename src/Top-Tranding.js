import React from 'react'
// import { Link } from 'react-router-dom'
import './top-tranding.css'
// import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { topTrandingData } from './Data';
import { Top_Trandings } from './SlideOne';



function Top_Tranding() {
const toursec= topTrandingData.map((item, index)=>(
    <Top_Trandings key={index} heading={item.heading} url={item.imgurl} tours={item.tours} des={item.toursdes} guest={item.guest} guestdes={item.guestdes} rating={item.rating} btn={item.btn}/>
    ))

  return (
    <section className='Top-Tranding-sec'>
        <div className='top-tranding-heading'>
            <h3>Top tranding</h3>
            <h1>Holiday Destinations</h1>
        </div>
        <div className='Top-tran-card-sec'> 
        {toursec}
        </div>
    </section>


   
    


  )
}

export default Top_Tranding