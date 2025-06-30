import React from "react";
import reportImg from "../assets/images/report-img.png";

const Report = () => {
  return (
    <>
      <main className="bg-white ">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between py-8 lg:py-16 mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
            <h2 className="font-bold text-[28px] lg:text-[36px] my-3 text-[#383838]">
              Annual Report
            </h2>

            <p className="text-[16px] lg:text-[18px] font-medium text-[#383838] text-center lg:text-left">
              Access detailed performance insights, strategic updates, and how
              we’re delivering long-term value to policyholders and partners.
            </p>
            <button className="my-3 bg-[#EA5B0C] text-whitew w-3/5 lg:w-1/3 py-3 rounded-md">
              View Annual Report
            </button>
          </div>
          <div>
            <img className="w-full" src={reportImg} alt="report image" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
