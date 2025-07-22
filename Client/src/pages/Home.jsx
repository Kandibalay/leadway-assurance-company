import React from "react";
import Hero from "../components/home/Hero";
import Insurance from "../components/home/Insurance";
import Report from "../components/home/Report";
import Testimonials from "../components/home/Testimonials";
import Companies from "../components/home/Companies";
import Blog from "../components/home/Blog";
import Download from "../components/home/Download";
import chatbox from "../assets/icons/chatbox.svg";
import Asset from "../components/home/Asset";
import Retirement from "../components/home/Retirement";
import GetQuote from "../pages/GetQuote";


const Home = () => {
  const handleChatClick = () => {
    window.open("https://wa.me/2349030000000", "_blank");
  };
  return (
    <div className="pt-16">
      <Hero />
      <div className="group px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
      <div className="fixed z-50 right-20 md:right-32 bottom-3 md:bottom-8 lg:bottom-4 bg-white text-black text-base font-semibold px-4 lg:px-6 py-4 lg:py-6 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hi, can we help you?
          <div className='w-0 h-0 border-l-[30px] border-l-white border-t-transparent border-t-[20px] border-b-[20px] border-b-transparent absolute -right-4 bottom-2 lg:bottom-4'>

</div>
        </div>

        <div className="fixed bottom-4 md:bottom-8 lg:bottom-4 -right-4 md:right-4  z-50">
          <img
            src={chatbox}
            alt="Chat"
            className="w-1/2 md:w-3/5 mx-auto lg:w-[70%] transition-transform transform hover:scale-110"
            onClick={handleChatClick}
          />
        </div>
      </div>

      
      <Insurance />
      <Asset />
      <Retirement />
      <Report />
      <Testimonials />
      <Blog />
      <Download />
      <Companies />
      
    </div>
  );
};

export default Home;
