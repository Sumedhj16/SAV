import React from 'react';
import HireTalent from '../../../resources/HiringPage/HireTalent.png'

import './Hire.css'

const Hire = () => {
    return (
       <div className="hireMidContainer">
           <div className="hireMid">
             <img src={HireTalent} alt="HireTalent" />
             <div>
                 <span>
                    Hiring Remote Talent ASAP
                 </span>
                 <p>
                    Get access to our millions of skilled remote workers. We make hiring easy.
                 </p>
             </div>
           </div>
       </div>
    )
}

export default Hire;