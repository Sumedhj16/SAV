import React from 'react';
import Ltext from '../../../resources/AboutUs/Ltext.png'
import team from '../../../resources/AboutUs/team.png'

import './RightText.css';

export default function RightText(props) {
    return (

        <div className="rightTextContainer">
            <div className={props.one}>
                <img src={Ltext} alt="Ltext" />
            </div>
            <div className={props.two}>
                <img src={team} alt="Ltext" />
            </div>
            <div className="rightText">
                <span>Our story</span>         
                <p>Whether you want one person or an entire project team, and whether your needs are short-term or full-time, we match you to skilled professionals in accounting and finance, technology, creative and marketing, legal and administrative fields. Results matter and so does your time, so let us help you build the productive, engaged workforce that will keep your company moving forward.</p>       
                <span id="readMore">Read more -></span>
            </div>
        </div>
        
        )
}

