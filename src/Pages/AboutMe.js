import React from "react";
import myimg from "../img/mypic.png";
import resume from "../img/resume.pdf";
const AboutMe = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-12 mt-40">
        <div className="border-l-8 border-t-8 border-indigo-500">
          <img className="pl-5 pt-5" src={myimg} alt="" />
        </div>
        <div className="grid content-center ">
          <p>Who I am</p>
          <h3 className="text-2xl font-bold mt-5">About Me</h3>
          <h3 className="text-base w-96 mt-5">
            I’m Md Jabed Hossain Tusar, a junior web Developer. I honed my
            skills at web development. I develop websites with HTML, CSS,
            JavaScript and React. I have top skills in using Web Developing like
            HTML, CSS, JavaScript, ES6, React, Tailwind CSS, Bootstrap and
            PhotoShop; with familiar tools like GitHub, VS Code, Heroku, Netlify
            , Figma, Chrome Dev Tools, etc.
          </h3>
          <h3 className="text-base w-96 mt-5">
            Being a diligent, hardworking and result oriented man, I always work
            towards achieving best result on each project I lay my hands on.
          </h3>
          <div className="mt-5">
            <a href={resume} download>
              <button class="btn btn-wide btn-myColor">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
