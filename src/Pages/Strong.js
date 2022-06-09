import React from "react";
import {
  faBrain,
  faCoffee,
  faLightbulb,
  faPlugCircleBolt,
  faRectangleAd,
  faRocket,
  faShapes,
  faTachometer,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Strong = () => {
  return (
    <div className="flex justify-center mt-10 px-12">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        <div className="flex text-center">
          <div>
            <FontAwesomeIcon
              className=" bg-myColor p-4 text-white text-4xl rounded-full  text-center"
              icon={faTachometer}
            />
            <h3 className="text-2xl font-bold">Fast</h3>
            <p>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </div>
        <div className="flex text-center">
          <div>
            <FontAwesomeIcon
              className=" bg-myColor p-4 text-white text-4xl rounded-full  text-center"
              icon={faShapes}
            />
            <h3 className="text-2xl font-bold">Responsive</h3>
            <p>My layouts will work on any device, big or small.</p>
          </div>
        </div>
        <div className="flex text-center">
          <div>
            <FontAwesomeIcon
              className=" bg-myColor text-4xl p-4 text-white  rounded-full  text-center"
              icon={faBrain}
            />
            <h3 className="text-2xl font-bold">Intuitive</h3>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
          </div>
        </div>
        <div className="flex text-center">
          <div>
            <FontAwesomeIcon
              className=" bg-myColor text-4xl p-4 text-white text-4xl rounded-full  text-center"
              icon={faRocket}
            />
            <h3 className="text-2xl font-bold">Dynamic</h3>
            <p>
              Websites don't have to be static, I love making pages come to
              life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strong;
