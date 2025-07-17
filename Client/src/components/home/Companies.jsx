import React from "react";
import { useState, useEffect } from "react";
import logo1 from "../../assets/icons/company logo1.svg";
import logo2 from "../../assets/icons/company logo2.svg";
import logo3 from "../../assets/icons/company logo3.svg";
import logo4 from "../../assets/icons/company logo4.svg";
import logo5 from "../../assets/icons/company logo6.svg";
import logo6 from "../../assets/icons/company logo7.svg";

const Companies = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  // Sample logos - replace with your actual logo data
  const logos = [
    { id: 1, name: "Leadway Capital", icon: logo1 },
    { id: 2, name: "Leadway Hotels", icon: logo2 },
    { id: 3, name: "Leadway Pensure", icon: logo3 },
    { id: 4, name: "Leadway Properties", icon: logo4 },
    { id: 5, name: "Leadway Asset Management", icon: logo5 },
    { id: 6, name: "Leadway Health", icon: logo6 }
  ];


  return (
    <div className="bg-white flex flex-col items-center justify-center pb-12">
      <h1 className="w-full text-black text-center font-bold text-[28px] lg:text-[36px] my-6">
        Associated Companies
      </h1>
      
      {/* Marquee Container */}
      <div className="overflow-hidden bg-white w-full"> 
        <div className="marquee flex">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="w-32 md:w-40 lg:w-52 flex-shrink-0 flex justify-center items-center mx-2">
              <img src={logo.icon} alt={`logo-${index}`} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
