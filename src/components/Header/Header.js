import React from 'react';
import logo from '../../resources/savana/savana.png';

import './Header.css';

 const Header = () => {

        return(
            <div className="App1">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Contact">Contact</p>
            </div>
        )
    };

export default Header

