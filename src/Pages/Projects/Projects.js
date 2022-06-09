import React from "react";
import "./Projects.css";
import img1 from "../../img/myimg.jpg";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
import p5 from "../../img/p5.png";
import p6 from "../../img/p6.png";
import p7 from "../../img/p7.png";

const Projects = () => {
  return (
    <div className="mt-20 bg-gray-200 pt-20">
      <h3 className="text-center">PROJECTS</h3>

      <section class="campus ">
        <div class="row grid lg:grid-cols-3 grid-cols-1 gap-4">
          <div>
            <div class="campus-col">
              <img src={p2} alt="" />
              <div class="layer">
                <div class="group">
                  <h3 className="opacity-0 hover:opacity-100 ">ABC TOOLS</h3>
                  <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                    Live side
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="campus-col">
            <img src={p3} alt="" />
            <div class="layer">
              <div class="group">
                <h3 className="opacity-0 hover:opacity-100 ">CAR VALLEY</h3>
                <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                  Live side
                </button>
              </div>
            </div>
          </div>
          <div class="campus-col">
            <img src={p4} alt="" />
            <div class="layer">
              <div class="group">
                <h3 className="opacity-0 hover:opacity-100 ">GYM WORLD</h3>
                <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                  Live side
                </button>
              </div>
            </div>
          </div>
          <div class="campus-col">
            <img src={p5} alt="" />
            <div class="layer">
              <div class="group">
                <h3 className="opacity-0 hover:opacity-100 ">GADGET REVIEW</h3>
                <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                  Live side
                </button>
              </div>
            </div>
          </div>
          <div class="campus-col">
            <img src={p6} alt="" />
            <div class="layer">
              <div class="group">
                <h3 className="opacity-0 hover:opacity-100 ">
                  Online Laptop Shop
                </h3>
                <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                  Live side
                </button>
              </div>
            </div>
          </div>
          <div class="campus-col">
            <img src={p7} alt="" />
            <div class="layer">
              <div class="group">
                <h3 className="opacity-0 hover:opacity-100 ">
                  Dhaka Engineers
                </h3>
                <button class="project-btn absolute inset-x-0 bottom-0   text-white font-bold ">
                  Live side
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
