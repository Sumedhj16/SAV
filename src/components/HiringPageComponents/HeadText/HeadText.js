import React from 'react';
import './HeadText.css'

const HeadText = () =>{
    return(
        <div className="headText">
            <div className="headTextFirst">
                <span>Remote or on-site talent, at the ready</span>
                <p>Whether you want one person or an entire project team, and whether your needs are short-term or full-time, we match you to skilled professionals in accounting and finance, technology, creative and marketing, legal and administrative fields. Results matter and so does your time, so let us help you build the productive, engaged workforce that will keep your company moving forward.</p>
            </div>
            <div className="headTextSecond">
                <div>
                   <span>Get Started</span><br />
                   <button>Get Started</button><br />
                   <hr />OR<hr />
                   <span id="learningJob">Learning for a Job?</span><span>Search Jobs</span>
                </div>
            </div>
        </div>
    )
}

export default HeadText;