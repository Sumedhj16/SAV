import React from "react"
import Head from "../components/HiringPageComponents/Head/Head";
import HeadText from '../components/HiringPageComponents/HeadText/HeadText';
import Title from '../components/Title/Title';
import Box from '../components/HiringPageComponents/Box/Box';
import Hire from '../components/HiringPageComponents/Hire/Hire';
import Talent from '../components/Talent/Talent.js';
import Stats from '../components/HiringPageComponents/Stats/Stats';
import Work from '../components/Work/Work.js';
import Contact from '../components/HiringPageComponents/Contact/Contact';
import Hiring from '../components/Hiring/Hiring.js';
import Footer from '../components/Footer/Footer';
import HeaderPage from '../components/HiringPageComponents/HeaderPage/HeaderPage';
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'


export default function HiringPage() {
    return (
        <div>
            <HeaderPage />
            <NavBarPage />
            <Head title="Your Choice of Hiring" subTitle="Options"/>
            <HeadText />
            <Title title="THE BEST" subTitle="Choose the best hiring or consulting option for you" />
            <Box />
            <Hire />
            <Title title="TALENTS" subTitle="The choice is yours, we’ve got you covered" />
            <Talent />
            <Stats />
            <Title title="OUR SCOPE OF WORK" subTitle="Why Savannah?" />
            <Work />
            <Contact />
            <Hiring />
            <Footer />
        </div>
    )
}