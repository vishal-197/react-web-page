import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Footer() {
  return (
   
    <footer className='footer-sec'>
        <div className='footer-header'>
            <div className='footer-logo'>
                <h5>Excellent <span><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarHalfIcon/></span></h5>
                <p><strong>2,773</strong> reviews on <span><StarIcon/>Trustpilot</span></p>
            </div>
            <div className='footer-associated'>
                <h5>Associated With</h5>
            </div>
            <div className='footer-associated-img'>
              <span>  <img src='./img/client-logo1.png'></img> </span>
              <span>  <img src='./img/client-logo2.png'></img></span>
              <span> <img src='./img/client-logo3.png'></img></span>
              <span> <img src='./img/client-logo5.png'></img></span>
              <span> <img src='./img/client-logo6.png'></img></span>
            </div>
        </div>
        <div className="footer-body">
            <div className='footer-company-profile'>
                <h5>company</h5>
                <ul>
                    <li> <Link to="">About us</Link></li>
                    <li> <Link to="">Careers <span>Apply now!</span></Link></li>
                </ul>
                <h5>travelers</h5>
                <ul>
                    <li> <Link to="">Days to come magazine</Link></li>
                    <li> <Link to="">win an adventure<span>enter now!</span></Link></li>
                    <li> <Link to="">after your booking</Link></li>
                    <li> <Link to="">cancellation Policy</Link></li>
                </ul>

            </div>
            <div className='footer-company-partners'>
                <h5>partners</h5>
                <ul>
                    <li> <Link to="">Distribution Partners Solutions</Link></li>
                    <li> <Link to="">partner log in</Link></li>
                    <li> <Link to="">marketing soloutions </Link></li>
                </ul>
            </div>
            <div className='footer-tour-oper'>
                <h5>tour operators</h5>
                <ul>
                    <li> <Link to="">working with TourRadar</Link></li>
                    <li> <Link to="">operator log in</Link></li>
                </ul>
                <h5>travel Advisors</h5>
                <ul>
                    <li> <Link to="">Travel Advisors/Agents</Link></li>
                    <li> <Link to="">Advisor Log in</Link></li>
                </ul>
            </div>
            <div className='footer-comp-support'>
                <h5>support</h5>
                <ul>
                    <li> <Link to="">contact us</Link></li>
                    <li> <Link to="">Help center</Link></li>
                    <li> <Link to="">United States & Canada +1 9876543210</Link></li>
                    <li> <Link to="">Great Britain +44 9976543210</Link></li>
                    <li> <Link to="">Australia +61 8876543210</Link></li>
                </ul>
            </div>

        </div>
        <div className='footer-bottom'>
            <div className='footre-follows-us'>
                <h5> follow us </h5>
                <ul>
                    <li> <Link to=""><img src='./img/facebook-icon.svg'></img></Link></li>
                    <li> <Link to=""><img src='./img/twitter-icon.svg'></img></Link></li>
                    <li> <Link to=""><img src='./img/instagram-icon.svg'></img></Link></li>
                    <li> <Link to=""><img src='./img/youtube-icon.svg'></img></Link></li>
                    </ul>
                </div>
            <div className='footer-payment-methods'>
                <h5>payment methods</h5>
                <h1>img</h1>

            </div>
            <div className='footer-download'>
                <h1>img</h1>                
            </div>


        </div>
        <div className='footer-copy-right'>
            <p>copyright @ TourRadar. all rights reserved</p>
            <span>
                <ul>
                    <li><Link to="">legal notice</Link></li>
                    <li><Link to="">privacy policy</Link></li>
                    <li><Link to="">cookies</Link></li>
                    <li><Link to="">terms & conditions</Link></li>
                </ul>
            </span>
        </div>

    </footer>
  )
}

export default Footer