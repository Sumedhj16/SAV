import React from 'react';
import logo from '../../resources/savana/savana.png';

import './Header.css';

export default class Header extends React.Component {

    render(){
        return(
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="Contact">Contact</p>
            </div>
        )
    }
} 