import React from 'react';
import logo from '../../../resources/savana/savana.png';

import './HeaderPage2.css';

const HeaderPage2 = () => {

    return (
        <div className="App2">
            <img src={logo} className="App-logo2" alt="logo" />
            <div className="headerMid"><a>Home</a><a>About</a><a>Blog</a><a>Contact</a></div>
            <div className="headerEnd"><a>Login</a><button>Get Started</button></div>
        </div>
    )
};

export default HeaderPage2;