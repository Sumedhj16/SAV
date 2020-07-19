import React from 'react';

import './Clients.css';

export default class Clients extends React.Component {

    render() {
        return (
            <div className="testimonials">
                <div>
                    <p>Savanna HR have always shown sincere interest in the deliverables for skills across levels. Their participation in requirement understanding commendable. I have always relied on for their round the clock availability.</p>
                    <span>Tanvi Jain</span><br />
                    <span>HR, Pearson Education</span><br />
                </div>
                <div>
                    <p>I have worked very closely with the Savanna HR team and they have helped us to close many niche hires. I find the team committed to quality service delivery and open to feedback.</p>
                    <span>Anustup Nayak</span><br />
                    <span>VP, XSEED Education</span>
                </div>
                <div>
                    <p>Savanna HR is an excellent Recruitment firm for EdTech Hiring. I was guided throughout and helped with an excellent opportunity in Education Industry. Team is very helpful with good network.</p>
                    <span>Monica Singh</span><br />
                    <span></span>
                </div>
            </div>            
        )
    }
}
