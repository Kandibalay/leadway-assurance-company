import React from 'react';
import GoogleIcon from "../assets/google-play-store-logo.svg";
import AppleIcon from "../assets/Apple-icon.svg";
// import AppMockup from "../assets/mobile-app-mockup.png";

const Download = () => {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-14 -mt-15 font-Poppins">
      <div className="max-w-6xl mx-auto px-4 md:px-6 bg-[#FFF6F2]  rounded-3xl py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-5 pl-2 sm:pl-6 md:pl-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#EA5B0C] leading-tight">
            <span className="block">Download our</span>
            <span className="block">Mobile App</span>
          </h2>

          <p className="font-poppins font-[600] text-[20px] text-[#000000] sm:text-base leading-relaxed max-w-md">
            <span className="block">Manage your Policies, file claims</span>
            <span className="block">and get quote in one place</span>
          </p>

          <button className="bg-[#E6C2AA] text-black px-6 py-2 font-semibold rounded-md hover:bg-[#debda6]">
            SEAMLESS, EASY and CONVENIENT
          </button>

          <div className="flex flex-col lg:flex-row gap-4  pt-4">
            {/* Google Play */}
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:opacity-90">
              <img src={GoogleIcon} alt="Google Play" className="h-8 w-8 mr-3" />
              <div className="text-left leading-tight">
                <span className="block text-xs">Get it on</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </div>
            </button>

            {/* Apple Store */}
            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:opacity-90">
              <img src={AppleIcon} alt="App Store" className="h-8 w-8 mr-3" />
              <div className="text-left leading-tight">
                <span className="block text-xs">Download on the</span>
                <span className="block text-sm font-semibold">App Store</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right: Mobile App Mockup */}
        {/* <div className="flex justify-center">
          <img
            src={AppMockup}
            alt="Mobile App Mockup"
            className="max-w-xs w-full"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Download;
