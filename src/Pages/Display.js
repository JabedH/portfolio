import React from "react";
import img1 from "../img/bg.jpg";
const Display = () => {
  return (
    <div
      style={{ hight: "1000px" }}
      className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-12 mt-10"
    >
      <div className="grid content-center">
        <div>
          <h3 className=" text-xl mb-5">HI THEREI'M </h3>
          <h1 className=" text-6xl font-bold">MD JABED HOSSAIN TUSAR </h1>
          {/* style={{ color: "blue" }} */}
          <p className="text-2xl font-bold mt-5">
            I’m a Junior front end Developer{" "}
          </p>
        </div>
      </div>
      <div className="grid content-center ">
        <img className="lg:w-screen" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Display;
