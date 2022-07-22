import React from "react";
import video1 from "../../assets/video/Bite-de-Delish.mp4";

const About = () => {
  return (
    <div className="container mx-auto bg-warning">
      <div className="md:grid md:grid-cols-2 ">
        <div className="p-5">
          <video autoplay controls className=" w-full rounded-lg">
            <source src={video1} type="video/mp4" className="rounded" />
          </video>
        </div>
        <div className="">
          <h2 className="text-base-100 text-3xl font-bold text-center py-5">
            Why Choose US?
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
