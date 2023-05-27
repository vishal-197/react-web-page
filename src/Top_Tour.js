import React from 'react'

import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./top-tour.css";
import {Top_tours } from './SlideOne'; 
import { responsive4, topTour } from './Data';


function Top_Tour() {
   const tour=  topTour.map((item,index)=>(
    <Top_tours key={index} url={item.imgurl} heading={item.heading} subheading={item.subheading} des={item.des} price={item.price} btn={item.btn}/>

    ))
  

  return (
    <section className='top-tour-sec'>
        <div className='top-tour-row'>
            <div className='top-tour-heading'>
                <h1>
                Top Tour Category
                </h1>
            </div>
        <Carousel       
        responsive={responsive4}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        customTransition="all .5"
        transitionDuration={1000}
        >
        {tour}
            </Carousel>
        </div>

    </section>
  
  )
}

export default Top_Tour