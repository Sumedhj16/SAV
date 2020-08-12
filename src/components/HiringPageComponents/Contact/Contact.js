import React from 'react';
import './Contact.css';

const Contact = () =>{
    return(
        <div className="contactContainer">
            <div className="contactInfo">
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
                    <button>Request Staff</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;