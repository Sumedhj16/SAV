import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
    <div className="statsContainer">
       <div className="stats">
            <div>
              <span id="number">1000+</span>
                    <span>Top talents hired by us</span>
            </div>
            <div>
                <span id="number">100+</span>
                    <span>for fast growing startups</span>
            </div>
            <div>
                <span id="number">9 out of 10</span>
                    <span>clients recommend us</span>
            </div>
       </div>
    </div>
    )
}

export default Stats;