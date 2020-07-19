import React from "react"
import './App.css';
import Navbar from '../components/Navbar/Navbar.js';
import Header from '../components/Header/Header.js';
import Head from '../components/Head/Head.js';
import SearchBar from '../components/SearchBar/SearchBar.js';
import Team from '../components/Team/Team.js';
import Title from '../components/Title/Title.js';
import Talent from '../components/Talent/Talent.js';
import Work from '../components/Work/Work.js';
import Companies from '../components/Companies/Companies.js';
import JobBoard from '../components/JobBoard/JobBoard.js';
import Clients from '../components/Clients/Clients.js';
import Blogs from '../components/Blogs/Blogs.js';
import Hiring from '../components/Hiring/Hiring.js';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/Carousel/Carousel'

const IndexPage = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Head />
      <SearchBar />
      <Team />
      <Title title="TALENTS" subTitle="The choice is yours, we’ve got you covered" />
      <Talent />
      <Title title="OUR SCOPE OF WORK" subTitle="Why Savannah?" />
      <Work />
      <Title title="OUR PRIDE" subTitle="Companies We Worked With" />
      <Companies />
      <Title title="WORK" subTitle="Introducing our job board - HireXL" />
      <JobBoard />
      <Title title="TESTIMONIALS" subTitle="What Our Clients Say" />
      <Carousel />
      <Title title="SOME WORD FOR BLOG" subTitle="Our Blogs" />
      <Blogs />
      <Hiring />
      <Footer />
    </div>
  );}

export default IndexPage
