import React from "react";
import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "./herosection.css";
import "react-multi-carousel/lib/styles.css";

function HeorSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive1 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section>
      <div className="hero_inner-row">
        <div className="hero-left-side-box">
          <Carousel responsive={responsive}>
            <div className="card crousel-inner-box">
              <img src="./img/adi-kailsah.jpg" />
              <div className="carousel_inner_text">
                <h1>Frozen kailah Temple</h1>
                <Link to="">06 Nights - 07 Days</Link>
              </div>
            </div>
            <div>
              <img src="./img/adi-kailsah.jpg" />
              <div className="carousel_inner_text">
                <h1>Frozen kailah Temple</h1>
                <Link to="">06 Nights - 07 Days</Link>
              </div>
            </div>
            <div>
              <img src="./img/adi-kailsah.jpg" />
              <div className="carousel_inner_text">
                <h1>Frozen kailah Temple</h1>
                <Link to="">06 Nights - 07 Days</Link>
              </div>
            </div>
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
              <div className="card crousel-inner-box">
                <Link to="">
                  <img src="./img/india-holiday-heritage.jpg" />
                  <div className="carousel_inner_text1">
                    <h3>Wildlife</h3>
                    <p>70+ packages</p>
                  </div>
                </Link>
              </div>
              <div className="card crousel-inner-box">
                <Link to="">
                  <img src="./img/india-holiday-pilgrimage.jpg" />
                  <div className="carousel_inner_text1">
                    <h3>heritage</h3>
                    <p>25+ packages</p>
                  </div>
                </Link>
              </div>
              <div className="card crousel-inner-box">
                <Link to="">
                  <img src="./img/india-holiday-trekking.jpg" />
                  <div className="carousel_inner_text1">
                    <h3>Frozen kailah Temple</h3>
                    <p>70+ packages</p>
                  </div>
                </Link>
              </div>
              <div className="card crousel-inner-box">
                <Link to="">
                  <img src="./img/india-holiday-wildlife.jpg" />
                  <div className="carousel_inner_text1">
                    <h3>Frozen kailah Temple</h3>
                    <p>65+ packages</p>
                  </div>
                </Link>
              </div>
              <div className="card crousel-inner-box">
                <Link to="">
                  <img src="./img/india-holiday-wildlife.jpg" />
                  <div className="carousel_inner_text1">
                    <h3>Frozen kailah Temple</h3>
                    <p>35+ packages</p>
                  </div>
                </Link>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeorSection;
