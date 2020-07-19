import React from 'react';
import search from '../../resources/icons/search.png'
import './SearchBar.css';




export default class Header extends React.Component {
    render() {
        return (
                
                <div className="Middle">
                    <div className="Mid1">
                        <span id="head1">Find your next job</span>
                        <form>
                           <input type="text" className="search1" placeholder="Job Title, Skills or Keywords" /> 
                           <input type="text" className="search2" placeholder="City or Zip" />
                           <button>s</button>
                        </form>
                        <p><span id="pwdby">Powered by </span><span id="hirexl">HireXL</span></p>
                        <span id="last">No. 1 Job portal for startups and Edtech</span>
                    </div>
                    <div className="Mid2">
                         <span id="head2">Hire Talent</span><br />
                         <button href="#">Request Staff</button><br />
                         <span>Learn more about our hiring options</span>
                    </div>
                </div>
        )
    }
}



























