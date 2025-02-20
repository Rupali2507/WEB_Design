import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Open_Source from "./Open_Source";

const Home = () => {
  return (
    <div className=" flex flex-col ">
      {/* HERO */}
      <div className="flex justify-between w-[100vw]">
        {/* Middle */}
        <div className="w-1/2">
          <div className="flex flex-col  justify-between h-[100vh]">
            {/* Nav icons */}
            <div className=" p-5 flex justify-between">
              <div className=" w-12 h-12 rounded-full overflow-hidden ">
                <img
                  className="w-full h-full object-cover"
                  src={assets.logo}
                  alt="logo"
                />
              </div>
              <div className=" flex  items-end text-xs font-medium">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `p-2 transition-all ${
                      isActive ? "text-black" : "text-gray-500"
                    }`
                  }
                >
                  <p>START</p>
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `p-2 transition-all ${
                      isActive ? "text-black" : "text-gray-500"
                    }`
                  }
                >
                  <p>ABOUT</p>
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `p-2 transition-all ${
                      isActive ? "text-black" : "text-gray-500"
                    }`
                  }
                >
                  <p>SERVICES</p>
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `p-2 transition-all ${
                      isActive ? "text-black" : "text-gray-500"
                    }`
                  }
                >
                  <p>BLOG</p>
                </NavLink>
                <NavLink
                  to="/open-source"
                  className={({ isActive }) =>
                    `p-2 transition-all ${
                      isActive ? "text-black" : "text-gray-500"
                    }`
                  }
                >
                  <p>OPEN SOURCE</p>
                </NavLink>
              </div>
            </div>
            {/* Hero content */}
            <div className=" flex flex-col     w-full gap-3 px-10 items-end">
              <div>
                <p className="text-4xl ">
                  <b>Hey, </b>I'm Charles
                </p>
                <br />
                <p className="text-xl">
                  I help start-ups developing <br /> outstanding web products.
                </p>
                <br />
                <button className="border-2 px-6 py-2 rounded-sm flex items-center gap-3 bg-blue-700 text-white ">
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </div>
                  <div className="text-xs px-3">WORK WITH ME</div>
                </button>
              </div>
            </div>
            {/* Footer icons */}
            <div className="flex gap-10 text-xs font-medium text-gray-500 mb-5 justify-end lg:justify-end  ">
              <div>GITHUB</div>
              <div>LINKED IN</div>
              <div>TWITTER</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-1/3">
          {/* Button */}
          <div className="flex   justify-end">
            <button className=" m-4 border-2 px-6 py-2 rounded-sm flex border-white justify-between items-center z-10">
              <div>
                <FontAwesomeIcon icon={faArrowRight} color="white" size="lg" />
              </div>
              <div className="text-xs px-3 text-white">WORK WITH ME</div>
            </button>
          </div>
          {/* top ribbon */}
          <div className="flex justify-center items-center ">
            <div className=" absolute  bg-gradient-to-r from-[#0052D4] to-[#4364F7] h-[90vh] -top-20.5 w-1/3 clip-strap scale-y-[-1] "></div>
          </div>

          <div className=" ">
            <div className=" absolute bg-gradient-to-r from-[#0052D4] to-[#4364F7] h-[94vh] w-1/3 bottom- clip-strap"></div>
          </div>
          <div className="z-10">
            <img
              className=" relative z-10 top-35.5   h-59.5"
              src={assets.Hero}
              alt=""
            />
          </div>
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
