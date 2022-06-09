import React from "react";
import AboutMe from "./AboutMe";
import Display from "./Display";
import Navbar from "./Navbar";
import Projects from "./Projects/Projects";
import Strong from "./Strong";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Display />
      <AboutMe />
      <Strong />
      <Projects />
    </div>
  );
};

export default Home;
