import React from "react";
import { CoreValuesData } from "../../Db";

const CoreValues = () => {
  return (
    <div className="text-[#5A5A5A] px-6 mx:px-10 lg:px-14 py-10 lg:py-2 container mx-auto">
      <h2 className="text-[28px] lg:text-[36px] text-black font-bold text-center mb-4">
        Our Core Values
      </h2>
      <p className="text-center text-[14px] w-[80%] lg:w-[70%] mx-auto lg:text-[14px] text-black mb-6">
        At Leadway Assurance, our daily operations and long-term vision are
        shaped by our unwavering core values collectively represented by iSCORE
      </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 md:space-y-0 md:gap-6 lg:gap-8">
            {CoreValuesData.map((value) => (
            <div
                key={value.id}
                className="bg-[#FDEFE7] p-5 rounded-lg"
            >
                <img src={value.icon} alt={value.title} className="flex items-start w-10 h-10" />
                <h3 className="text-left font-semibold text-[20px] mb-2">
                {value.title}
                </h3>
                <p className="text-left text-[14px]">{value.description}</p>
            </div>
            ))}
        </div>
    </div>
  );
};

export default CoreValues;
