import React from "react";
import { useState, useEffect} from "react";
import '../Assets/Styles/Navbar.scss'
import { NavLink } from "react-router-dom";
// images
import helando from '../Assets/Images/dark-logo.png';
// icon
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function Navbar() {
  const [navbarColor, setNavbarColor] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      // Change the color based on the scroll position
      if (window.scrollY > 100) {
        setNavbarColor('#fff'); // Change this to the desired color
      } else {
        setNavbarColor('#F4F5F7');
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
 
  
  return (
    <div>
      <nav className="fixed-top"  style={{ backgroundColor: navbarColor, padding: '10px', transition: 'background-color 0.5s' }} >
      <div className="navbar navbar-expand-lg custom-navbar"style={{ backgroundColor: navbarColor, transition: 'background-color 0.5s' }} id="for-color">
  <div className="container-fluid">
   <div className="for-arrangment">
  <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Anything" aria-label="Search" style={{boxShadow:'none'}}/>
        <SearchIcon className="search-icon"/>
      </form>
      <div className="brand">
      <a className="navbar-brand " href="#" > <img src={helando} alt="" /></a>

      </div>

    
    <div className="for-wrap">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="icons">
    <PersonIcon/>
    <NavLink to='whistle' >  <FavoriteBorderIcon style={{color:"#000"}}/> </NavLink>
    <LegendToggleIcon/>
    <LocalMallIcon/>
      
    </div>
    </div>
  </div>
  <div/>
  </div>
  </div>

</nav>
      
    </div>
  )
}
