import React from 'react';
import team from '../../resources/teamwork/team.png';


import './Team.css';

export default class Team extends React.Component {

    render() {
        return (

            <div className="Container">
                <div className="Middle2">
                    <img src={team} className="team" alt="team" />
                    <div>
                        <span id="team1">Are you a fast growing tech startup?</span><br />
                        <span id="team2">Find a right fit talent quickly.</span>
                    </div>
                </div>
            </div>
               
            )
    }
}