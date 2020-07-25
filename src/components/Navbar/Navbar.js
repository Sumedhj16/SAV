import React from "react";
import "./NavBar.css";
import mob from '../../resources/savana/mobsav.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Links = () => {
        return (
            <div>
                <a href="#" id="subMenu1">Job Seeker</a>
                <a href="#" id="subMenu2">Employeer</a>
                <a href="#" id="subMenu3">Blog</a>
                <a href="#" id="subMenu4">Looking for a Job?</a>
                <a href="#" id="subMenu5">Contact</a>
            </div>
        );
}

export default class NavBar extends React.Component {
    render() {
        return (
            <nav>
                
                <div className="navWide">
                    <div className="wideDiv">
                        <Links />
                    </div>
                </div>

                <div className="navNarrow" >
                    <img src={mob} className="mobSav" alt="mobsav" />
                    <FontAwesomeIcon icon={faBars} color="#6D6D6D" size="2x" className="bars" onClick={this.toggle}/>
                    <FontAwesomeIcon icon={faTimes} size="2x" color="#6D6D6D" className="cross" onClick={this.toggle}/> 
                    <div className="narrowLinks hidden">
                        <Links />
                    </div>
                </div>
            </nav>
        );
    }

    toggle() {
        let narrowLinks = document.querySelector(".narrowLinks");
        narrowLinks.classList.toggle("hidden");
        let bars = document.querySelector(".bars");
        bars.classList.toggle("hidden");   
        let cross = document.querySelector(".cross");
        cross.classList.toggle("visible")
    }

}

