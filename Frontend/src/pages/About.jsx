import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex h-[90vh]">
      {/* Left */}
      <div className="w-1/2 flex justify-end items-center ">
        <img className="w-[30vw] lg:w-[25vw]" src={assets.about} alt="" />
      </div>
      {/* Right */}
      <div className="pl-10 sm:w-1/2 lg:w-1/4 flex gap-7 flex-col justify-center">
        <NavLink to="/about">
          <h1 className="text-blue-900  text-xl">ABOUT ME</h1>
        </NavLink>
        <div className="text-xs ">
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
