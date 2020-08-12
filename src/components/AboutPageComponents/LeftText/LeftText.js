import React from 'react';
import './LeftText.css'
import Ltext from '../../../resources/AboutUs/Ltext.png'

export default function LeftText(props) {
    return (
       <div className="leftTextContainer">
           <div className="leftText">
                <span>{props.title}</span>
                <p>Whether you want one person or an entire project team, and whether your needs are short-term or full-time, we match you to skilled professionals in accounting and finance, technology, creative and marketing, legal and administrative fields. Results matter and so does your time, so let us help you build the productive, engaged workforce that will keep your company moving forward.</p>
                <span id="readMore">Read more -></span>
           </div>
            <div className="imgCont">
             <div className="leftImg">
              <img src={Ltext} alt="Ltext" />
             </div>
           </div>
       </div>
    )
}
