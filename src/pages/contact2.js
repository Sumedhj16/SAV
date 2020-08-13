import React from 'react';
import Title from '../components/Title/Title';
import InfoContact from '../components/ContactPageComponents/InfoContact/InfoContact'
import Hiring from '../components/Hiring/Hiring.js';
import Footer from '../components/Footer/Footer';
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'
import HeaderPage2 from '../components/HiringPageComponents/HeaderPage/HeaderPage2';


export default function Contact() {
    return (
        <div>
            <HeaderPage2 />
            <NavBarPage />
            <Title title="GET IN TOUCH" subTitle="Contact Us" />
            <InfoContact />
            <Hiring />
            <Footer />
        </div>
    )
}

