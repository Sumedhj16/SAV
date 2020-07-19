import React from 'react';
import content from '../../resources/choices/content.png';
import tech from '../../resources/choices/tech.png';
import market from '../../resources/choices/market.png';
import design from '../../resources/choices/mind.png'
import sales from '../../resources/choices/loss.png'
import operations from '../../resources/choices/cube.png'

import './Talent.css';

export default class Talent extends React.Component {

    render() {
        return (
            <div className="choices">
                <div className="choice1">
                    <img src={content} alt="contract" /><br />
                    <span>Content</span>
                    <ol>
                        <li>Curriculum Designers / SME</li>
                        <li>Editors</li>
                        <li>Project managers</li>
                        <li> Subject matter experts</li>
                        <li> Head of Departments</li>
                        <li>Faculty/ Tutors</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div>
                <div className="choice2">
                    <img src={tech} alt="tech" /><br />
                    <span>Technology & IT</span>
                    <ol>
                        <li>Software developer /Product development</li>
                        <li> Web developer</li>
                        <li>Data Science / Analysis</li>
                        <li> Project manager</li>
                        <li> Help Desk or Technicians</li>
                        <li> Business Intelligence</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div>
                <div className="choice3">
                    <img src={market} alt="tech" /><br />
                    <span>Marketing</span>
                    <ol>
                        <li>Digital marketing</li>
                        <li>Performance marketing</li>
                        <li>Content Strategist</li>
                        <li>Internet marketing</li>
                        <li>Marketing communication</li>
                        <li>Internal / External communication</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div><br />
                <div className="choice4">
                    <img src={design} alt="design" /><br />
                    <span>Design and Creatives</span>
                    <ol>
                        <li>UX/ UI Designers</li>
                        <li>Graphic Design</li>
                        <li>Visual designers</li>
                        <li>Animators</li>
                        <li>Instructional Designers</li>
                        <li>Merchandising</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div>
                <div className="choice5">
                    <img src={sales} alt="sales" /><br />
                    <span>Sales and Training</span>
                    <ol>
                        <li>Concept Selling</li>
                        <li>B2C Sales</li>
                        <li>Customer Success</li>
                        <li>Relationship management</li>
                        <li>Sales Training</li>
                        <li>Product training</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div>
                <div className="choice6">
                    <img src={operations} alt="operations" /><br />
                    <span>Marketing</span>
                    <ol>
                        <li>Administration</li>
                        <li>Warehouse and supply chain</li>
                        <li>Transportations and Logistics</li>
                        <li>Human Resources</li>
                        <li>Accounting and Finance</li>
                        <li>Legal</li>
                    </ol>
                    <span id="learnmore">Learn More</span>
                </div>
            </div>

        )
    }
}