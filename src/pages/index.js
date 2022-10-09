import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection1 from "../components/InfoSection";
import InfoSection2 from "../components/InfoSection";
import InfoSection3 from "../components/InfoSection";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebars";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection1 {...HomeObjOne} />
      <InfoSection2 {...HomeObjTwo} />
      <Services />
      <InfoSection3 {...HomeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
