import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  learnMoreSection: React.RefObject<HTMLDivElement>;
}

const Hero: React.FC<Props> = ({ learnMoreSection }) => {
  const handleGoToLearnSection = () => {
    window.scrollTo({
      top: learnMoreSection.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-blue-900 flex md:flex-row gap-24 flex-col justify-between items-center md:px-24 md:py-36 px-16 py-16">
      <div className="md:w-1/2 flex flex-col space-y-8">
        <p className="text-blue-100 font-mono">Modern dashboards & tracking</p>
        <h2 className="text-white font-bold text-4xl">
          Understand Your Earnings
        </h2>
        <h4 className="text-white">
          Simple, easy to use earnings dashboard thoughtfully designed for
          delivery drivers of all kinds
        </h4>
        <div className="flex gap-4 items-center">
          <NavLink
            to="/signup"
            className="text-white py-3 px-6 w-1/2 text-center bg-blue-500 rounded-md hover:bg-blue-400 hover:-translate-y-0.5 transform transition"
          >
            Sign Up
          </NavLink>
          <button
            onClick={handleGoToLearnSection}
            className="text-blue-500 py-3 px-6 w-1/2 text-center bg-white rounded-md hover:text-blue-600"
          >
            Learn More
          </button>
        </div>
      </div>
      <video
        className="md:h-80 md:w-80 h-56 w-56 rounded-full shadow-lg hover:scale-105 transition"
        autoPlay
        loop
        muted
      >
        <source src="./src/assets/deliveryLog.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
