import React from "react";
import AboutMe from "./AboutMe";
import Display from "./Display";
import Navbar from "./Navbar";
import Strong from "./Strong";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Display />
      <AboutMe />
      <Strong />
    </div>
  );
};

export default Home;
