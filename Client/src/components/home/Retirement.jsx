import React from "react";
import img1 from "../../assets/images/img1.png";
import icons from "../../assets/icons/Group 3.svg";

const Retirement = () => {
  return (
    <div className="flex flex-col gap-[55px] py-10 container mx-auto px-6 md:px-10 lg:px-14">
      <div className="flex flex-col justify-center items-center gap-4  text-black">
        <h1 className="font-bold text-[28px] lg:text-[36px] text-center ">
          Enjoy Retirement
        </h1>
        <p className="font-semibold text-base lg:text-[20px] lg:w-[70%] text-center">
          <span className="text-[#EC5B0C]">20+ years</span> helping Nigerians
          retire with confidence and peace of mind. Start your journey toward a
          secure and fulfilling retirement.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center md:justify-center md:items-center gap-16  text-black">
        <div className="p-6">
          <img src={img1} alt="" />
        </div>
        <div className="flex flex-col gap-8  py-4">
          <div className="flex gap-2  items-start">
            <img src={icons} alt="" className="pt-1.5" />
            <div>
              <h2 className="text-base lg:text-[18px] font-semibold">
                Guaranteed Retirement Income
              </h2>
              <p className="text-[14px] lg:text-base">
                Enjoy consistent payouts after your working years
              </p>
            </div>
          </div>
          <div className="flex gap-2  items-start">
            <img src={icons} alt="" className="pt-1.5" />
            <div>
              <h2 className="text-base lg:text-[18px] font-semibold">
                Flexible Contribution Plans
              </h2>
              <p className="text-[14px] lg:text-base">
                Save at your pace — monthly, quarterly, or annually
              </p>
            </div>
          </div>
          <div className="flex gap-2  items-start">
            <img src={icons} alt="" className="pt-1.5" />
            <div>
              <h2 className="text-base lg:text-[18px] font-semibold">
                Easy Access Anytime
              </h2>
              <p className="text-[14px] lg:text-base">
                Track your pension, earnings, and growth from your phone
              </p>
            </div>
          </div>
          <div className="flex gap-2  items-start">
            <img src={icons} alt="" className="pt-1.5" />
            <div>
              <h2 className="text-base lg:text-[18px] font-semibold">
                Dedicated Retirement Advisors
              </h2>
              <p className="text-[14px] lg:text-base">
                Get expert guidance tailored to your goals
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="text-white bg-orange-600 rounded-lg w-63 py-3 text-base lg:text-[18px] font-semibold button-1">
              Start Your Retirement Plans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Retirement;
