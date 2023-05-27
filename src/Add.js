import React from 'react'
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./add.css"
import { productData3, responsive3 } from './Data';
// import SlideThree from './SlideThree';
import { SlideThree } from './SlideOne';

function Add() {   
    const product3 = productData3.map((item, index)=>(
      <SlideThree key={index} url={item.imgurl}/>
    ))
  return (
    <section className='home-banner-sec' >
        <div className='home-banner-row'>
        <Carousel       
        responsive={responsive3}
        infinite={true}
        autoPlaySpeed={3000}
        autoPlay={true}
        customTransition="all .5"
        transitionDuration={1000}
        >    
          {product3}
          </Carousel>
        </div>
    </section>
    
    
  )
}

export default Add