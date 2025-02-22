import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div
      className={`flex flex-col  sm:flex-row  gap-15 ${
        location.pathname === "/about" ? "pt-30" : ""
      }`}
    >
      {/* Left */}
      <div className=" w-full sm:w-1/2 flex justify-center sm:justify-end items-center ">
        <img
          className="w-3/4 sm:w-[30vw] lg:w-[25vw]"
          src={assets.about}
          alt=""
        />
      </div>
      {/* Right */}
      <div className="m-5  sm:w-1/2 lg:w-1/4 flex gap-15 flex-col justify-center sm:justify-start items-center  sm:items-start">
        <NavLink to="/about">
          <h1 className="text-blue-900  text-xl">ABOUT ME</h1>
        </NavLink>
        <div className="text-xs px-4 sm:px-0 ">
          I arn valuelorem ipsurn dolor sit amel, eonsecteluer adipiscing elit.
          Aenean comrnodo ligula eget dolor. Aenean massa. Curn sociis natoque
          penatibus et rnagnis dis parturient rnontes, naseetur ridiculus mus.
          <br />
          <br />
          Donee quarn relis, ullrieies nee. pellenlesque eu, pretium quis. sem.
          Nulla eonsequal massa quis enirn. Donec pedejusto, fringilla vel.
          aliquel nee. vul­ pulate eget. areu. In enirn justo, rhoneus ut.
          irriperdiet a, venenalis vitae. justo. Nullarn dielurn felis eu pede
          mollis pretiurri. lnleger tineidunt. Cras dapibus. Vivarnus elemenlurn
          sernper nisi.
          <br /> <br />
          Aenean vulputate eleifend tellus. Aenean leo ligula. porltitor eu,
          consequal vitae, eleifend ac. enim
        </div>
      </div>
    </div>
  );
};

export default About;
