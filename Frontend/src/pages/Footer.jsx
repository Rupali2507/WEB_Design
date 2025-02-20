import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex justify-center gap-[28vw] h-[20vh] mt-20">
      <div className="flex items-center gap-5">
        <div className=" w-12 h-12 rounded-full overflow-hidden ">
          <img
            className="w-full h-full object-cover"
            src={assets.logo}
            alt="logo"
          />
        </div>
        <div className="flex flex-col text-xs">
          <span>Charles Von der Hejden</span>
          <span className="text-[10px]">© 2018 -All righb reserved</span>
        </div>
      </div>
      <div className="flex gap-10 text-xs items-center  font-medium text-gray-500 justify-end lg:justify-end  ">
        <div>GITHUB</div>
        <div>LINKED IN</div>
        <div>TWITTER</div>
      </div>
    </div>
  );
};

export default Footer;
