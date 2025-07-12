import React from "react";
import Logo from "../assets/icons/Logo.svg";
import FacebookIcon from "../assets/icons/fb-icon.svg";
import TwitterIcon from "../assets/icons/twitter-icon.svg";
import InstagramIcon from "../assets/icons/instagram-icon.svg";
import LinkedInIcon from "../assets/icons/linkedin-icon.svg";
import YoutubeIcon from "../assets/icons/youtube-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#FFFFFF] py-12">
      <div className="flex flex-col lg:flex-row gap-10 container px-6 md:px-10 lg:px-14 mx-auto">
        <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 xl:w-1/3 items-start">
          <img src={Logo} alt="Leadway Assurance Logo" className="h-16 mb-4" />

          {/* Social Icons */}
          <div className="flex space-x-4 -mt-2 mb-6">
            <img src={FacebookIcon} alt="Facebook" className="h-5 w-5" />
            <img src={TwitterIcon} alt="Twitter" className="h-5 w-5" />
            <img src={InstagramIcon} alt="Instagram" className="h-5 w-5" />
            <img src={YoutubeIcon} alt="YouTube" className="h-5 w-5" />
            <img src={LinkedInIcon} alt="LinkedIn" className="h-5 w-5" />
          </div>

          {/* Newsletter  */}
          <div className="w-full">
            <h3 className="font-poppins font-semibold text-base mb-4">
              Subscribe to our newsletter
            </h3>
            <form className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-2 py-2 bg-white text-[#000000] border border-gray-400 rounded-md placeholder:text-base lg:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="absolute top-0 bottom-0 right-0 w-1/3  rounded-md bg-[#EC5B0C] text-white text-sm font-semibold transition hover:bg-orange-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* All Links */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Our Company */}
          <div>
            <h3 className="font-poppins font-semibold text-[18px] mb-4">
              Our Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Boards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Investor Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-[18px] mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Personal Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Business Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Retirement Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-poppins font-semibold text-[18px] mb-4 ">
              Help & Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Claim/Complaints Procedure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Whistleblowing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Branches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Agent Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Media
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center font-poppins font-semibold text-[14px] text-[#FFFFFF] mt-12 pt-10">
        &copy; 2025 Leadway Assurance Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
