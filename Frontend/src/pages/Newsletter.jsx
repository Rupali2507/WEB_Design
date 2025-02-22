import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className=" flex flex-col text-center sm:text-start  w-[100vw] h-[30vh]  items-center justify-center gap-4 sm:gap-[25vw] sm:flex-row  lg:gap-[20vw] ">
      <div>
        <div className="text-xl text-blue-600">
          Need help developing your application?
        </div>
        <div className="text-sm text-gray-600">Let's get in touch!</div>
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
  );
};

export default Newsletter;
