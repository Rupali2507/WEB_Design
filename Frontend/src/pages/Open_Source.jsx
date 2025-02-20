import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Open_Source = () => {
  return (
    <div className="h-[70vh] w-[100vw] flex flex-col justify-center items-center gap-10">
      {/* Heading */}

      {/* Open-source */}
      <div className="grid grid-cols-3 gap-4 p-6">
        {/* open-source - 1 */}
        <div className="flex gap-3">
          <div>
            <FontAwesomeIcon icon={faCode} size="xl" />
          </div>
          <div className="">
            <div>Swap</div>
            <div className="text-xs text-gray-500">
              Currency exchange rates library for PHP.
            </div>
            <div className="text-sm pt-5 text-gray-500">* 645 V 324</div>
          </div>
        </div>
        {/* open-source - 2 */}
        <div className="flex gap-3">
          <div>
            <FontAwesomeIcon icon={faCode} size="xl" />
          </div>
          <div className="">
            <div>Swap</div>
            <div className="text-xs text-gray-500">
              Currency exchange rates library for PHP.
            </div>
            <div className="text-sm pt-5 text-gray-500 ">* 645 V 324</div>
          </div>
        </div>
        {/* open-source - 1 */}
        <div className="flex gap-3">
          <div>
            <FontAwesomeIcon icon={faCode} size="xl" />
          </div>
          <div className="">
            <div>Swap</div>
            <div className="text-xs text-gray-500">
              Currency exchange rates library for PHP.
            </div>
            <div className="text-sm pt-5 text-gray-500">* 645 V 324</div>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <FontAwesomeIcon icon={faEllipsisH} size="2xl" color="blue" />
      </div>
    </div>
  );
};

export default Open_Source;
