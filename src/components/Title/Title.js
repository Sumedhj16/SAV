import React from 'react';

import './Title.css';

const Title = (props) =>{

 
        return (
            <div className="Middle3">
                <div>
                    <span id="big">{props.title}</span><br />
                </div>
                <span id="small">{props.title}</span>
                <span id="middle">{props.subTitle}</span>
            </div>
        )
}

export default Title;