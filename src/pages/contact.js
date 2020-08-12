import React from 'react';
import Title from '../components/Title/Title';
import InfoContact from '../components/ContactPageComponents/InfoContact/InfoContact'
import Questions from "../components/GetInTouchComponents/Questions/Questions";
import Footer from '../components/Footer/Footer';
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'


export default function Contact() {
    return (
        <div>
            <NavBarPage />
            <Title title="GET IN TOUCH" subTitle="Contact Us" />
            <InfoContact />
            <Questions />
            <Footer />
        </div>
        )
    }
