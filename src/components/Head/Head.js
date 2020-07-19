import React from 'react';

import img from '../../resources/icons/bg.svg';

import './Head.css';


export default class Head extends React.Component {

    render() {
        return (
            <div className="head">
                <div className="text">
                    <h1>Hiring Redefined</h1>
                    <h2>The Right Role,</h2>
                    <h2>The Right Person,</h2>
                    <h2>The Right Fit</h2>
                    <button className="But1">Get started</button>
                </div>
                <div className="images">
                    <img src={img} alt="img" />
                </div>
            </div>
        )
    }

}















