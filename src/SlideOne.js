import React from 'react'
import { Link } from "react-router-dom";
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';

  function SlideOne(props) {
  return (
    <div className="card crousel-inner-box">
    <img  src={props.url} />
    <div className="carousel_inner_text">
      <h1 >{props.heading}</h1>
      <Link to="">{props.days}</Link>
    </div>
  </div>
  )
}
 
export function SlideTwo(props) {
  return (
    <div className="card crousel-inner-box">
                <Link to="">
                  <img src={props.url}/>
                  <div className="carousel_inner_text1">
                    <h3>{props.heading}</h3>
                    <p>{props.des}</p>
                  </div>
                </Link>
              </div>
  )
}

export function SlideThree(props) {
  return (
    <div className='banner-slider-box'>
                <Link to="">
                    <img src={props.url}></img>
                </Link>
            </div>
  )
}
 
export function Top_Trandings(props) {
  return(
    <div className='Top-tran-inner-card'>
    <div className='img-box'>
        <img src={props.url}/>
    </div>
    <div className='content-box'>
        <h3>{props.heading}</h3>
        <div className='tranding-meta'>
            <h6>{props.tours}</h6>
            <p>{props.des}</p>
            <div className='total-guests'>
                <h5>{props.guest}</h5>
                <p>{props.des}</p>
            </div>
            <h4 className='rating'><span><StarBorderPurple500Icon/></span>{props.rating}</h4>
            <Link to="">{props.btn}</Link>
        </div>
    </div>

</div>
  )
}


export function Top_tours(props){
  return(
    <div className='top-tour-box'>
    <div className='img-box'>
        <img src={props.url}></img>

    </div>
    <div className='top-tour-box-content'>
        <span>{props.subheading}</span>
        <h3>{props.heading}</h3>
        <small>{props.des}</small>
        <p>{props.price}</p>
        <Link to="">{props.btn}</Link>
    </div>
</div>
  )
}

export default SlideOne 
