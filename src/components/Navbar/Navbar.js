import React from "react";
import "./NavBar.css";
import mob from '../../resources/savana/mobsav.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


class Links extends React.Component {
    render() {
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
}

export default class Apo extends React.Component {
    render() {
        return (
            <nav>
                
                <div className="navWide">
                    <div className="wideDiv">
                        <Links />
                    </div>
                </div>

                <div className="navNarrow" onClick={this.toggle}>
                    <img src={mob} className="mobSav" alt="mobsav" />
                    <FontAwesomeIcon icon={faBars} color="#6D6D6D" size="2x" className="bars"/>
                    <div className="narrowLinks hidden">
                        <Links />
                    </div>
                </div>
            </nav>
        );
    }

    toggle() {
        let narrowLinks = document.querySelector(".narrowLinks");
        narrowLinks.classList.toggle("hidden");    }

}

