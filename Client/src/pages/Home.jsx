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

const Home = () => {
  const handleChatClick = () => {
    window.open("https://wa.me/2349030000000", "_blank");
  };
  return (
    <div className="pt-16 pb-8">
      <Hero />
      <div className="relative px-6 md:px-10 lg:px-14 max-w-7xl mx-auto">
        <div className="fixed bottom-4 -right-4 lg:right-4  z-50">
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
