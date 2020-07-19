import React from 'react';
import lap from '../../resources/hirexl/lap.png';

import './JobBoard.css';

export default class JobBoard extends React.Component {

    render() {
        return (
            <div className="Middle8">
                <div className="text1">
                    <div className="jobseekers">
                        <span>For job seekers</span>
                        <ul>
                            <li>Explore jobs from 100+ Education Startups</li>
                            <li>Apply to relevant jobs with one click</li>
                            <li>Know the status of your applications anywhere, anytime</li>
                        </ul>
                    </div>
                    <div className="employers">
                        <span>For employers</span>
                        <ul>
                            <li>Post the job in few simple steps</li>
                            <li>Connect with lakhs of quality jobseekers online</li>
                            <li>Track all the applications in one dashboard</li>
                        </ul>
                        <span>To visit HireXL <a href="www.hirexl.in">www.hirexl.in</a></span>
                    </div>
                </div>
                <div className="lap">
                    <div><img src={lap} alt="lap" /></div>
                </div>
            </div>
        )
    }
}