import React from "react"
import Head from "../components/HiringPageComponents/Head/Head";
import HeadText from '../components/HiringPageComponents/HeadText/HeadText';
import Title from '../components/Title/Title';
import Box from '../components/HiringPageComponents/Box/Box';
import Talent from '../components/Talent/Talent.js';
import Work from '../components/Work/Work.js';
import Contact from '../components/HiringPageComponents/Contact/Contact';
import Hiring from '../components/Hiring/Hiring.js';
import Footer from '../components/Footer/Footer';
import Cube from '../components/HirePageComponents/Cube/Cube'
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'
import HeaderPage from '../components/HiringPageComponents/HeaderPage/HeaderPage';

export default function HirePage() {
    return(
        <div>
            <HeaderPage />
            <NavBarPage />
            <Head title="Hire #1" subTitle="Content Employers"/>
            <HeadText />
            <Title title="THE BEST" subTitle="Choose the best hiring or consulting option for you" />
            <Box />
            <Title title="OUR SCOPE OF WORK" subTitle="Why Savannah?" />
            <Work />
            <Title title="DIVERSITIES" subTitle="Roles we offer" />
            <Cube first="Curriculum Designers / SME" second="Editors" third="Project Managers"/>
            <Cube first="Subject matter Experts" second="Head of Departments" third="Faculty Tutors" />
            <Title title="TALENTS" subTitle="The choice is yours, we’ve got you covered" />
            <Talent />
            <Contact />
            <Hiring />
            <Footer />
        </div>
        )
    }