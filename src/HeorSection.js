import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "./herosection.css";
import "react-multi-carousel/lib/styles.css";
import SlideOne from "./SlideOne";
import { productData, productData2, responsive, responsive1,  } from "./Data";
// import SlideTwo from "./SlideTwo";
import { SlideTwo } from "./SlideOne";

function HeorSection() {
 
  const product = productData.map((item,index) =>(
    <SlideOne key={index} url={item.imgurl} heading={item.heading} days={item.days}/>
  ))
 const product2 = productData2.map((item,index)=>(
    <SlideTwo key={index} url={item.imgurl} heading={item.heading} des={item.des}/>
 ))
  return (
    <section >
      <div className="hero_inner-row">
        <div className="hero-left-side-box">
          <Carousel
           responsive={responsive}
           infinite={true}
           autoPlaySpeed={3000}
           autoPlay={true}
           customTransition="all .5"
           transitionDuration={1000}
          >
            {product}
          </Carousel>
        </div>
        <div className="hero-right-side-box">
          <div className="hero-right-side-heading">
            <h1>
              Let up plan you a perfect <span>India Holiday</span>
            </h1>
            <p>Personalised, well-crafted tour packages for best experiences</p>
          </div>

          <div className="right-side-crousel-main-box">
            <Carousel
              responsive={responsive1}
              itemClass="carousel-item-padding-40-px"
            >
              {product2}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeorSection;
