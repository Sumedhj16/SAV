import React from 'react';
import profile from '../../resources/work/hiring.png'
import social from '../../resources/work/social.png';
import network from '../../resources/work/team.png';

import './Work.css';

export default class Work extends React.Component {

    render() {
        return (
            <div className="Middle5">
                <div className="Mid5">
                    <img src={profile} alt="profile" /><br />
                    <span>Curated & Pre Assessed Profile</span>
                    <p>We are the leading company when it comes to providing curated jobs exclusively in EdTech Domain. We give you access to best jobs suitable for your skill set and preference.</p>
                    <span id="readmore">Read more</span>
                </div>
                <div className="Mid5">
                    <img src={social} alt="social" /><br />
                    <span>Social Media Hiring</span>
                    <p>We are the leading company when it comes to providing curated jobs exclusively in EdTech Domain. We give you access to best jobs suitable for your skill set and preference.</p>
                    <span id="readmore">Read more</span>
                </div>
                <div className="Mid5">
                    <img src={network} alt="network" /><br />
                    <span>Strong Industry Network</span>
                    <p>We are the leading company when it comes to providing curated jobs exclusively in EdTech Domain. We give you access to best jobs suitable for your skill set and preference.</p>
                    <span id="readmore">Read more</span>
                </div>
            </div>
        )
    }
}