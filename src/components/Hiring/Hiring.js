import React from 'react';
import savhr from '../../resources/savana/savhr.png';


import './Hiring.css';

export default class Hiring extends React.Component {

    render() {
        return (
            <div className="last">
                <p>Let's talk about your next hiring</p>
                <p>We Streamline your hiring</p>
                <img src={savhr} alt="savhr" /><br />
                <button>Get started</button>
            </div>
        )
    }
}