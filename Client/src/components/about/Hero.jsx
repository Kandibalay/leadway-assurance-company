import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="about lg:mt-16 h-[450px]">
      <h1 className="py-1.5 container mx-auto  text-[40px] lg:text-[50px] font-bold">
        About Us
      </h1>
      <NavLink to="/" className="text-lg ">
        Home &gt; <span className="text-gray-300">About</span>
      </NavLink>
    </div>
  );
};

export default Hero;
