import React from 'react';
import sav from '../../resources/savana/sav.png';
import fb from '../../resources/icons/fb.svg';
import twitter from '../../resources/icons/twitter.svg';
import insta from '../../resources/icons/insta.svg';
import linkedin from '../../resources/icons/link.svg';

import './Footer.css';

const Footer = () =>{

        return (
            <div className="end">
                <div className="sav">
                    <img src={sav} alt="sav" /><br />
                    <p>Hiring excellence with innovation</p>
                    <span>@2018 savannaHR.</span><br />
                    <span>All rights reserved.</span>
                </div>
                <div className="contact">
                    <span id="heading">Contact Us</span>
                    <div className="email"><span >Email: </span><p>hello@savannahr.com</p></div>
                    <span id="addspan">Address: </span><br />
                    <p id="add">90B, Delhi – Jaipur Expy, Sector 18 Gurugram<br /> Haryana 122008</p>
                </div>
                <div className="quicklinks">
                    <span id="heading">Quick Links</span><br />
                    <p>About us</p><br />
                    <p>Privacy policy</p>
                </div>
                <div className="links">
                    <span id="heading">Follow Us</span>
                    <div>
                        <img src={fb} alt="fb" />
                        <img src={twitter} alt="twitter" />
                        <img src={insta} alt="insta" />
                        <img src={linkedin} alt="linkedin" /> 
                    </div>
                </div>
            </div>
        )
    }

export default Footer;