import React from "react";
import { NavLink } from "react-router-dom";
import MarineQuoteModal from "../modals/marineQuoteModal";
import Success from "../modals/modal";



const Hero = () => {
  return (
    <div className="marine-cargo py-10 px-6 md:px-10 lg:px-14 h-[450px]">
      <div className="container mx-auto">
        <h1 className="font-extrabold text-center py-1.5 text-[25px] lg:text-[45px]">
          Marine Cargo
        </h1>

        <NavLink to="/" className="text-lg ">
          Home &gt;{" "}
          <NavLink to="/#" className="text-white">
            Insurance &gt;{" "}
            <NavLink to='/insurance/marine' >Marine Insurance &gt; <span className="text-[#ADADAD]">Marine Cargo</span></NavLink>{" "}
          </NavLink>
        </NavLink>
        <div className="my-5">
          {/* <button className="text-white bg-orange-500 hover:bg-orange-800 rounded-md w-30 py-3 font-semibold button">
          Get Quote
          </button> */}
          <MarineQuoteModal/>
          {/* <Success /> */}
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
