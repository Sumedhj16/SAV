import React from 'react';
import team from '../../resources/teamwork/team.png';
import team1 from '../../resources/teamwork/team1.png';

import './Team.css';

const Team = () => {

        return (

            <div className="Container">
                <div className="Middle2">
                    <img src={team} className="team" alt="team" />
                    <div>
                        <span id="team1">Are you a fast growing tech startup?</span><br />
                        <span id="team2">Find a right fit talent quickly.</span>
                    </div>
                </div>
                <div className="middle2Hidden">
                    <img src={team1} /><br />
                    <span>Hire Remote Talent ASAP</span>
                    <p>Get access to our millions of skilled remote workers. We make hiring easy.</p>
                </div>
            </div>
               
            )
    };

export default Team;