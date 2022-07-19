import React from "react";
import video1 from "../../assets/video/Bite-de-Delish.mp4";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 ">
        <div>
          <video autoplay controls className="w-full">
            <source src={video1} type="video/mp4" />
          </video>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default About;
