import React from 'react';
import './Divide.css'

export default function Divide() {
    return(
        <div className="divideContainer">
            <div className="divide1">
                <span id="headingDivide">Employers</span>
                <span id="subHeading">Looking for the right candidate?</span>
                <button>Request Talent</button>
                <button>Search Candidates</button>

            </div>
            <div className="divide2">
                <span id="headingDivide">Job Seekers</span>
                <span id="subHeading">Looking for the right job? We can help</span>
                <button>Submit Your Resume</button>
                <button>Search Jobs</button>
            </div>
        </div>
    )
}