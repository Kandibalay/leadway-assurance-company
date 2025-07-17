import React from 'react';
import GoogleIcon from "../../assets/icons/google-play-store-logo.svg";
import AppleIcon from "../../assets/icons/Apple-icon.svg";
import AppMockup from "../../assets/images/phone mockup.png";
import lineMockUp from "../../assets/icons/download mockuplines.svg"

const Download = () => {
  return (
    <section className="py-6 px-6 md:px-10 lg:px-14 font-Poppins">
      <div className="container mx-auto px-4 md:px-6 bg-[#FFF6F2]  rounded-3xl py-10 grid md:grid-cols-2 items-center gap-10 relative">
        {/* Left Content */}
        <div className="space-y-5 pl-2 lg:pl-6 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EA5B0C] leading-tight">
            <span className="block">Download our</span>
            <span className="block">Mobile App</span>
          </h2>

          <p className="font-poppins font-[600] text-[14px] text-[#000000] sm:text-base leading-relaxed max-w-md">
            <span className="block">Manage your Policies, file claims <br /> and get quote in one place</span>
          </p>

          <button className="bg-[#E6C2AA] max-w-[350px] text-[14px] lg:text-[18px] text-black w-full py-2 font-semibold rounded-md hover:bg-[#debda6]">
            SEAMLESS, EASY and CONVENIENT
          </button>

          <div className="flex flex-col md:flex-row gap-4 lg:max-w-[330px] pt-4">
            {/* Google Play */}
            <button className="w-full md:w-1/2 flex items-center bg-black text-white px-2 lg:px-2 py-2 rounded-lg hover:opacity-90">
              <img src={GoogleIcon} alt="Google Play" className="h-8 w-8 mr-3 md:mr-1  lg:mr-2" />
              <div className="text-left w-full leading-tight">
                <span className="block text-xs md:text-[10px] lg:text-xs">Get it on</span>
                <span className="block  text-sm md:text-[10px] lg:text-sm font-semibold">Google Play</span>
              </div>
            </button>

            {/* Apple Store */}
            <button className="w-full md:w-1/2 flex items-center bg-black text-white px-2 lg:px-2 py-2 rounded-lg hover:opacity-90">
              <img src={AppleIcon} alt="App Store" className="h-8 w-8 mr-3 md:mr-1 lg:mr-2" />
              <div className="text-left w-full leading-tight">
                <span className="block text-xs md:text-[10px] lg:text-xs">Download on the</span>
                <span className="block text-sm md:text-[10px] lg:text-sm font-semibold">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Mobile App Mockup */}
        <div className='hidden md:block'>
        <div className="w-full flex justify-center ">
          <img
            src={AppMockup}
            alt="Mobile App Mockup"
            className="w-full"
          />
        </div>
        </div>
        <div className='hidden md:block absolute lg:top-1/12 left-3/5 lg:left-2/6 pointer-events-none'>
          <img src={lineMockUp} alt="Download Mockup Lines" />
        </div>
      </div>
    </section>
  );
};

export default Download;
