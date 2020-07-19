import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component{
    
    render()
    {
        return(
                <div className="container">
                    <ul className="Navbar">
                        <li><a href="#">Job Seeker </a></li>
                        <li><a href="#">Employeer </a></li>
                        <li><a href="#">Blog </a></li>
                        <li><a href="#">Looking for a Job?</a></li>
                    </ul>
                </div>
        )
    }
}