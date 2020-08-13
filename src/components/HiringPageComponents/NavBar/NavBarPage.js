import React from "react";
import "./NavBarPage.css";
import mob from '../../../resources/savana/savana.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import {DropdownButton, Dropdown} from 'react-bootstrap';

class LinksPages extends React.Component{
    render(){
    return (
        <div>
            <a href="#" id="subMenuPages1">Request Staff</a>
            <DropdownButton id="dropdown-basic-button" title="Specializations ↓">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="Services ↓">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <a href="#" id="subMenuPages2">Hiring Advice</a>
            <a href="#" id="subMenuPages3">Advice</a>
            <a href="#" id="subMenuPages4">Looking for a Job?</a>
            <a href="#" id="subMenuPages5">Contact</a>
        </div>
    );
    }
    Dropdown()
    {
       
    }

}


export default class NavBarPage extends React.Component {
    render() {
        return (
            <nav>
                <div className="navWidePages">
                    <div className="wideDivPages">
                        <LinksPages />
                    </div>
                </div>

                <div className="navNarrowPages" >
                    <img src={mob} className="mobSavPages" alt="mobsav" />
                    <FontAwesomeIcon icon={faBars} color="#6D6D6D" size="2x" className="bars" onClick={this.toggle} />
                    <FontAwesomeIcon icon={faTimes} size="2x" color="#6D6D6D" className="cross" onClick={this.toggle} />
                    <div className="narrowLinksPages hidden">
                        <LinksPages />
                    </div>
                </div>
            </nav>
        );
    }

    toggle() {
        let narrowLinksPages = document.querySelector(".narrowLinksPages");
        narrowLinksPages.classList.toggle("hidden");
        let bars = document.querySelector(".bars");
        bars.classList.toggle("hidden");
        let cross = document.querySelector(".cross");
        cross.classList.toggle("visible")
    }

}

