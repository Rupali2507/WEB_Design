import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className=" flex flex-col sm:pt-30 gap-8 ">
      {/* Heading */}
      <NavLink to="/services">
        <div className="flex  justify-center text-xl text-blue-900  ">
          SERVICES
        </div>
      </NavLink>
      <div className="flex gap-25 flex-col">
        {/* Service -1 */}
        <div className="flex gap-10 flex-col sm:flex-row  ">
          {/* Left */}
          <div className=" w-full sm:w-1/2 flex justify-center sm:justify-end">
            <img className="w-3/4  lg:w-[30vw]" src={assets.Service_I} alt="" />
          </div>
          {/* Right */}
          <div className="flex flex-col justify-center w-full p-4  sm:w-1/2 lg:w-1/4  gap-3  ">
            <div className="text-lg font-medium text-center sm:text-start">
              Backend Development
            </div>
            <div className=" text-xs items-center sm:items-start font-sans">
              Translating tour complex business logics into secure and
              maintain­- able code. Custom, websites or services development
              ,with Laravel or Symfony and integrations,With any Saas plalforrn
              like Stripe or Amazon Web Services.
            </div>
            <div className="flex justify-center sm:justify-start">
              <button className="  border-2 px-6 py-2 rounded-sm flex justify-items-center  items-center z-10 bg-blue-700 text-white">
                <div>
                  <FontAwesomeIcon icon={faArrowRight} size="lg" />
                </div>
                <div className="text-xs px-3 ">WORK WITH ME</div>
              </button>
            </div>
          </div>
        </div>
        <hr className="sm:hidden" />
        {/* Service -2 */}
        <div className="flex gap-10 flex-col-reverse sm:flex-row  ">
          {/* Left */}
          <div className="flex flex-col  w-full p-4  sm:w-1/2 items-end  ">
            <div className=" lg:w-1/2 flex gap-6 flex-col ">
              <div className="text-lg text-center sm:text-start font-medium">
                Frontend Development
              </div>
              <div className=" text-xs font-sans">
                Building your awesome product from a visual concept to a fully
                func­tional application. Sketch integrations in Bootstrap or
                Material Design and modern single page apps development with
                Vue, React or Angular.
              </div>
              <div className="flex justify-center sm:justify-start">
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
          <div className=" w-full sm:w-1/2 flex justify-center sm:justify-start">
            <img
              className="w-3/4  lg:w-[30vw]"
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
