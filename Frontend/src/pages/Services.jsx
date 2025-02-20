import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className="p-5 pt-30 ">
      {/* Heading */}
      <NavLink to="/services">
        <div className="flex  justify-center text-xl text-blue-900  ">
          SERVICES
        </div>
      </NavLink>
      <div className="flex gap-25 flex-col">
        {/* Service -1 */}
        <div className="flex gap-10  ">
          {/* Left */}
          <div className="w-1/2 flex justify-end">
            <img
              className="w-[40vw]  lg:w-[30vw]"
              src={assets.Service_I}
              alt=""
            />
          </div>
          {/* Right */}
          <div className="flex flex-col justify-center sm:w-1/2 lg:w-1/4  gap-3  ">
            <div className="text-lg font-medium">Backend Development</div>
            <div className=" text-xs font-sans">
              Translating vcur complex business logics into secure and maintain­
              able code. Cuslor,r.1vebsites or services development ,vilh
              Laravel or Syrnfony and integrations ,vith any Saas plalforrn like
              Stripe or Amazon Web Services.
            </div>
            <div>
              <button className="  border-2 px-6 py-2 rounded-sm flex justify-items-center  items-center z-10 bg-blue-700 text-white">
                <div>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </div>
                <div className="text-xs px-3 ">WORK WITH ME</div>
              </button>
            </div>
          </div>
        </div>
        {/* Service -2 */}
        <div className="flex gap-10  justify-between">
          {/* Left */}
          <div className="w-1/2  flex justify-end items-center">
            <div className="flex flex-col justify-end w-full lg:w-1/2 gap-3  ">
              <div className="text-lg font-medium ">Frontend Development</div>
              <div className=" text-xs font-sans">
                Building your av1escrr1e product from a visual concept lo a
                fully func­ tional application.Sketch integrations in 8ooslrap
                or Material Design and modern single page apps developn1enl
                ,vilh Vue, Reacl or Angular.
              </div>
              <div>
                <button className="  border-2 px-6 py-2 rounded-sm flex justify-items-center  items-center z-10 bg-blue-700 text-white">
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} size="lg" />
                  </div>
                  <div className="text-xs px-3 ">WORK WITH ME</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-1/2 flex justify-start">
            <img
              className="w-[40vw]  lg:w-[30vw]"
              src={assets.Service_II}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
