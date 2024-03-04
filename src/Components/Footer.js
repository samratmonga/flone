
import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Assets/Styles/Footer.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import downlodad from '../Assets/Images/download.png'
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-address ">
                            <h5> Address</h5>
                            <div className="f-1 d-flex">
                                <FaMapMarkerAlt className="footer-icon" />
                                <p>Helendo, Chicago, USA 2023</p>
                            </div>
                            <div className="f-2 d-flex">
                                <FaPhone className="footer-icon" />
                                <p>+846677028028</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-information">
                            <h3>Help & Information</h3>
                            <ul>
                                <li>Help & Contact Us</li>
                                <li>Returns & Refunds</li>
                                <li>Online Stores</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-information">
                            <h3>About Us </h3>
                            <ul>
                                <li>About us </li>
                                <li>what can we do </li>
                                <li> FAQ page </li>
                                <li>Contact us </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-legal">
                            <h5> Newsletter</h5>
                            <div className="footer-input">
                                <input type="text" placeholder='Enter email address ' />
                                <ArrowRightAltSharpIcon className='postion-a'/>
                            </div>
                            <ul className='d-flex lists '>
                                <li>Terms and conditions </li>
                                <li> Policy </li>
                                <li> Map </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-md-4">
                        <ul className='d-flex lists '>
                            <li>Terms and conditions </li>
                            <li> Policy </li>
                            <li> Map </li>
                        </ul>
                    </div>
                    <div className="col-md-4 heldenodo">
                        <div className="helenddo">
                            <img src={downlodad} alt=""  style={{paddingLeft:'50px'}}/>
                            <p className='helendo-des'>
                                © 2024 Helendo.
                                All Rights Reserved.
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="social">
                            <ul className='d-flex'>
                                <li> Follow us on social</li>
                                <li> <i class="fa-brands fa-facebook"></i> </li>
                                <li> <i class="fa-brands fa-twitter"></i></li>
                                <li> <i class="fa-brands fa-tumblr"></i></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
