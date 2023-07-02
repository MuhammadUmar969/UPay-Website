import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HomeWorks from "./HomeWorks";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HomeWorks />
      <AboutUs />
      <OurServices />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;