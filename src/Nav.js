import React from "react";
// import logo from "../public/img/logo.png";
import './nav.css'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";


function Nav() {
  return (
    <header>
      <div className="header-top-row">
        <div className="header_log">
          <Link to=""><img src="../img/logo.png"/></Link> 
        </div>
        <div className="header_search_row">
            <form className="header_form">
              <div className="herder-search-box">

              <div className="header-search-location-box" ><span><PlaceOutlinedIcon/></span> <input type="text" placeholder="Where do you want to tarvel" /></div>  
               <div className="header-calender-box" ><span><CalendarMonthOutlinedIcon/></span><input type="date" placeholder="Month" /> </div> 
               <div className="header-rupess-box"><span> <CurrencyRupeeOutlinedIcon/></span><input type="text" placeholder="Budget"/> </div> 
                <button> <SearchOutlinedIcon/></button>
              </div>
            </form>
        </div>
        <div className="header_top_right_menu">
            <ul>
                <li> 
                 
                  <Link to=""> <LocalPhoneOutlinedIcon/> 
                  </Link>
                </li>
                <li>
                  <Link to=""><PersonOutlineOutlinedIcon/>
                  </Link>
                </li>
                <li>
                  <Link to=""><MenuOutlinedIcon/>
                  </Link>
                </li>
            </ul>
        </div>
      </div>
      <div className="header-bottom-nav-row">
        <div className="container">
          <nav>
            <ul>
              <li><Link to="">Destinations</Link></li>
              <li><Link to="">Speciality Tours</Link></li>
              <li><Link to="">Customized Holidays</Link></li>
              <li><Link to="">Corporate Travel</Link></li>
              <li><Link to="">Forex</Link></li>
              <li><Link to="">Inbound</Link></li>
              <li><Link to="">Contact Us</Link></li>
            </ul>

          </nav>
      
        </div>
      </div>
    </header>
  );
}

export default Nav;
