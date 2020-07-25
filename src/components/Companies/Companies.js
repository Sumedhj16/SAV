import React from 'react';
import comp1 from '../../resources/companies/comp1.png';
import comp2 from '../../resources/companies/comp2.png';

import './Companies.css';

 const Companies = () => {

        return (
            <div className="companies">
                <img src={comp1} alt="company1" />
                <img src={comp2} alt="company2" />
            </div>            
        )
}

export default Companies;