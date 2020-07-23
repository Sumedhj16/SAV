import React from 'react';
import blog1 from '../../resources/blog/blog1.png';
import blog2 from '../../resources/blog/blog2.png';
import blog3 from '../../resources/blog/blog3.png';

import './Blogs.css';

const blog =() => {

        return (
        <div>
            <div className="blog">
                <div>
                    <img src={blog1} alt="blog1" />
                    <p>6 Tips for Getting Big Benefits by Using a Staffing Agency</p>
                    <span>8 min read</span><span id="swatisinha">by swati sinha</span>
                </div>
                <div>
                    <img src={blog2} alt="blog2" />
                    <p>Hiring? Here’s How to Work With a Staffing Agency</p>
                    <span>5 min read</span><span id="swatisinha">by swati sinha</span>
                </div>
                <div>
                    <img src={blog3} alt="blog3" />
                    <p>How to use Quora for Recruitment</p>
                    <span>8 min read</span><span id="swatisinha">by swati sinha</span>
                </div>
            </div>
            <div className="viewButton">
               <button className="viewAll">View All</button>
            </div>
        </div>
        )
    };

export default blog;