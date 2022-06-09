import React from "react";
import AboutMe from "./AboutMe";
import Display from "./Display";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Display />
      <AboutMe />
    </div>
  );
};

export default Home;
