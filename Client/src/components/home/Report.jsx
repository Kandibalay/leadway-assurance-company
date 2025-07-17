import React from "react";
import reportImg from "../../assets/images/report-img.png";

const Report = () => {
  return (
    <>
      <main className="bg-white ">
        <div className=" container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-between py-8 lg:py-12 mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-3 items-center lg:items-start justify-center">
            <h2 className="font-bold text-[28px] lg:text-[36px] my-3 text-[#383838]">
              Annual Report
            </h2>

            <p className="sm:flex sm:flex-col text-[14px] lg:text-[18px] font-medium text-[#383838] text-center lg:text-left">
              Access detailed performance insights, strategic <span> updates, and how
              we’re delivering long-term </span> value to policyholders and partners.
            </p>
            <button className="my-3 text-[14px] lg:text-base bg-[#EA5B0C] hover:bg-orange-700 text-white w-2/3 lg:w-1/3 py-3 rounded-md">
              View Annual Report
            </button>
          </div>
          <div>
            <img className="w-full lg:w-[85%] lg:float-end" src={reportImg} alt="report image" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Report;
