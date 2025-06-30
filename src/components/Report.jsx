import React from "react";
import reportImg from "../assets/images/report-img.png";

const Report = () => {
  return (
    <>
      <main className="bg-white ">
        <div className=" container grid grid-cols-1 md:grid-cols-2 items-center justify-between py-16 mx-auto px-6 md:px-10 lg:px-14">
          <div>
            <h2 className="font-bold text-[40px] my-3 text-[#383838]">
              Annual Report
            </h2>

            <p className="text-[18px] font-medium text-[#383838]">
              Access detailed performance insights, strategic updates, and how
              we’re delivering long-term value to policyholders and partners.
            </p>
            <button className="my-3 bg-[#EA5B0C] text-white w-1/3 py-3 rounded-md">
              View Annual Report
            </button>
          </div>
          <div>
            <img className="w-full hidden md:block" src={reportImg} alt="report image" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
