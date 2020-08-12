import React from 'react';
import './InfoContact.css';

export default function InfoContact() {
    return (
        <div className="infoContactContainer">
           <div className="infoContact">
                <div className="infoContactHeading">
                    <p>We Make Hiring Easy. It's that simple.</p>
                    <p>Just give us a few details in the form below and one of our staffing professionals will contact you.</p>
                </div>
                <div className="infoContactDetails">
                    <span id="info">Contact Information</span>
                    <form>
                        <div>
                            <input placeholder="First name" name="fname" />
                            <input placeholder="Last name" name="lname" />
                        </div>
                        <div>
                            <input placeholder="Business Phone" name="Bphone" />
                            <input placeholder="Work Email" name="Wemail" />
                        </div>
                        <div>
                            <input placeholder="Company" name="Comp" />
                            <input placeholder="Job Title" name="Jtitle" />
                        </div>
                        <button>Request Staff</button><br />
                        <span>Or email to us at <a>savannahhr@gmail.com</a></span>
                    </form>
                    </div>
           </div>
        </div>
        )
    }