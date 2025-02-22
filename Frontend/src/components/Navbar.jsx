import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faChevronLeft,
  faCross,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="absolute w-[100vw]">
      <div className="flex justify-between">
        <div className="flex items-center justify-between  w-1/2  ">
          <NavLink
            to="/"
            className=" w-12 h-12 rounded-full overflow-hidden m-5"
          >
            <img
              className="w-full h-full object-cover"
              src={assets.logo}
              alt="logo"
            />
          </NavLink>
          <div className="  hidden sm:flex items-end text-xs font-medium">
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
          <button className=" hidden m-4 border-2 px-6 py-2 rounded-sm sm:flex  justify-between items-center relative z-10 mr-5 ">
            <div>
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </div>
            <div className="text-xs px-3  ">WORK WITH ME</div>
          </button>
        </div>
        <div
          onClick={() => setVisible(true)}
          className=" flex items-center pr-7 sm:hidden cursor-pointer"
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
      </div>
      <div
        className={`absolute right-0 top-0 overflow-hidden transition-all   z-10 ${
          visible ? "w-3/4" : "w-0"
        }`}
      >
        <div className="bg-blue-100 px-10">
          <NavLink
            onClick={() => setVisible(false)}
            className="flex justify-start items-center gap-5 pt-5"
          >
            <FontAwesomeIcon className="" icon={faChevronLeft} /> BACK
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            to="/"
            className={({ isActive }) =>
              `p-2 transition-all ${isActive ? "text-black" : "text-gray-500"}`
            }
          >
            <p>START</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/about"
            className={({ isActive }) =>
              `p-2 transition-all ${isActive ? "text-black" : "text-gray-500"}`
            }
          >
            <p>ABOUT</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/services"
            className={({ isActive }) =>
              `p-2 transition-all ${isActive ? "text-black" : "text-gray-500"}`
            }
          >
            <p>SERVICES</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/blog"
            className={({ isActive }) =>
              `p-2 transition-all ${isActive ? "text-black" : "text-gray-500"}`
            }
          >
            <p>BLOG</p>
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to="/open-source"
            className={({ isActive }) =>
              `p-2 transition-all ${isActive ? "text-black" : "text-gray-500"}`
            }
          >
            <p>OPEN SOURCE</p>
          </NavLink>

          <div className="pb-5 ">
            <button className=" flex w-full border justify-center border-blue-800 bg-blue-700  text-white">
              <div>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </div>
              <div className="text-[10px] px-3 flex items-center ">
                WORK WITH ME
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
