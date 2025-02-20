import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="absolute w-[100vw]">
      <div className="flex justify-between">
        <div className="flex items-center justify-between  w-1/2  ">
          <div className=" w-12 h-12 rounded-full overflow-hidden m-5">
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
        <div>
          <button className=" m-4 border-2 px-6 py-2 rounded-sm flex  justify-between items-center relative z-10 mr-5">
            <div>
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </div>
            <div className="text-xs px-3 ">WORK WITH ME</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
