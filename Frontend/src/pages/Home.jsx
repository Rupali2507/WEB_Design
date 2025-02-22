import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Open_Source from "./Open_Source";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      {/* HOME */}
      <div className="mb-20 flex flex-col gap-15">
        <div className="flex flex-col-reverse pt-40 sm:pt-0 sm:flex-row w-[100vw] gap-15 sm:h-[100vh]">
          {/* Left */}
          <div className="flex items-center justify-center sm:justify-end w-full sm:w-1/2  ">
            <div className=" flex flex-col  gap-3 px-10 ">
              <div className="flex flex-col justify-center sm:justify-start">
                <p className="text-3xl ">
                  <b>Hey, </b>I'm Charles
                </p>
                <br />
                <p className="text-xl">
                  I help start-ups developing <br /> outstanding web products.
                </p>
                <br />
                <button className="border-2 px-6 py-2 rounded-sm flex items-center justify-center  gap-3 bg-blue-700 text-white z-10 ">
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </div>
                  <div className="text-xs px-3">WORK WITH ME</div>
                </button>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="h-full w-full sm:w-1/2 flex justify-start items-center">
            {/*top ribbon */}
            <div
              className=" absolute 
            hidden sm:block  bg-gradient-to-r from-[#0052D4] to-[#4364F7] h-[90vh] -top-7 lg:-top-19 w-1/2 clip-strap scale-y-[-1] "
            ></div>
            {/* Bottom ribbon */}
            <div
              className=" absolute sm:block 
            hidden bg-gradient-to-r from-[#0052D4] to-[#4364F7] h-[90vh]  w-1/2 clip-strap -bottom-11 lg:-bottom-23 "
            ></div>
            {/* image */}
            <div className=" w-full flex justify-center sm:justify-start ">
              <img
                className=" relative z-1 w-[70vw] sm:w-[40vw]  lg:w-[30vw]"
                src={assets.Hero}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex gap-10 text-xs items-center  font-medium text-gray-500 justify-center lg:justify-end  sm:w-1/2 ">
          <div>GITHUB</div>
          <div>LINKED IN</div>
          <div>TWITTER</div>
        </div>
      </div>
      {/* ABOUT */}
      <About />
      {/* SERVICES */}
      <Services />
      {/* BLOG */}
      <Blog />
      {/* OPEN SOURCE */}
      <Open_Source />
    </div>
  );
};

export default Home;
