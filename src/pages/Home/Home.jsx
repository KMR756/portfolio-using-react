import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
