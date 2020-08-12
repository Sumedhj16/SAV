import React from 'react';
import Head from "../components/HiringPageComponents/Head/Head";
import Title from '../components/Title/Title';
import LeftText from '../components/AboutPageComponents/LeftText/LeftText'
import RightText from '../components/AboutPageComponents/RightText/RightText'
import Footer from '../components/Footer/Footer';
import NavBarPage from '../components/HiringPageComponents/NavBar/NavBarPage'
import HeaderPage from '../components/HiringPageComponents/HeaderPage/HeaderPage';


export default function HiringPage() {
    return (
        <div>
            <HeaderPage />
            <NavBarPage />
            <Head />
            <Title title="ABOUT" subTitle="About Us" />
            <LeftText title="How can we help you?"/>
            <RightText one="yesImg" two="noImg"/>
            <LeftText title="Our strength" />
            <RightText one ="noImg" two="yesImg"/>
            <Footer />
            
        </div>
        )
}