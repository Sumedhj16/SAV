import React from 'react';
import './Box.css';
import home from '../../../resources/icons/home.png';
import hr from '../../../resources/icons/hr.png';
import vector from '../../../resources/icons/vector.png';


const Box = () =>{
    return(
        <div className="box">
            <div id="miniBox">
              <img src={home} alt="home"/><br />
                <span id="boxHeading">Remote Hiring</span>
                <p id="boxPara">Millions of candidate; seamless setup for any remote assignment</p>
            </div>
            <div id="miniBox">
                <img src={home} alt="home" /><br />
                <span id="boxHeading">Flexible Staffing</span>
                <p id="boxPara">Hire for one day, one week or as long as you need</p>
            </div>
            <div id="miniBox">
                <img src={hr} alt="hr" /><br />
                <span id="boxHeading">Full Time Hiring</span>
                <p id="boxPara">From early -careers professionals to executives</p>
            </div>
            <div id="miniBox">
                <img src={vector} alt="vector" /><br />
                <span id="boxHeading">Managed Solutions</span>
                <p id="boxPara">Find the right solutions to your complex business challenge</p>
            </div>
        </div>
    )
}

export default Box;