import React from 'react';
import Title from '../components/Title/Title';
import Divide from "../components/GetInTouchComponents/Divide/Divide";
import Questions from "../components/GetInTouchComponents/Questions/Questions";
import Footer from '../components/Footer/Footer';
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'
import HeaderPage2 from '../components/HiringPageComponents/HeaderPage/HeaderPage2';


export default function GetInTouch() {
    return(
        <div>
            <HeaderPage2 />
            <NavBarPage />
            <Title title="GET IN TOUCH" subTitle="Contact Us" />
            <Divide />
            <Questions />
            <Footer />
        </div>
    )
}