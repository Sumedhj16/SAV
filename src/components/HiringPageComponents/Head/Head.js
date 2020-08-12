import React from 'react';
import './Head.css';

const HiringPageHead = (props) =>{
    return(
        <div className="hiringPageHead">
            <p>{props.title}<br /> {props.subTitle}</p>
        </div>
    )
}

export default HiringPageHead;