import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import AboutPhoto from '../../images/about-main.jpg'
import AboutBackground from '../../images/about-bg.jpg'

const About = () => {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      <img
        src={AboutBackground}
        alt=""
        className="h-full w-full object-cover opacity-30 absolute bottom-0 z-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20">
        <h1 className="flex text-dark text-2xl lg:text-4xl gap-2 font-bold">
          About
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-4/5">
          <span className="flex flex-col gap-3 text-dark items-start  text-base justify-center font-semibold lg:text-lg">
            <p className="text-center mt-3 mx-auto md:mx-0">
              Hi Everyone, I am <span className="text-[#027fb5]"> Christofora Diana Yuliawati</span>{" "}
              from <span className="text-[#027fb5]">Lampung, Indonesia.</span>
            </p>
            <p className="flex text-dark-200 text-base lg:text-lg gap-2 font-semibold ">
              Apart from coding, some other activities that I love to do!
            </p>
            <span className="flex items-center justify-center gap-3 font-sans text-dark-200">
              <FaHandPointRight /> Playing Games
            </span>
            <span className="flex items-center justify-center gap-3 font-sans text-dark-200">
              <FaHandPointRight /> Watching Movies
            </span>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center z-20">
        <img
          src={AboutPhoto}
          alt=""
          className="lg:p-10 object-cover lg:w-3/4 w-full"
        />
      </div>
    </div>
  );
};

export default About;
