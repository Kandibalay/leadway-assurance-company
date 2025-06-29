import React from 'react';
import Logo from '../assets/leadway-icon.svg';
import FacebookIcon from '../assets/fb-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import InstagramIcon from '../assets/instagram-icon.svg';
import LinkedInIcon from '../assets/linkedin-icon.svg';
import YoutubeIcon from '../assets/youtube-icon.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-[#FFFFFF] py-12 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Logo, Socials, Newsletter */}
        <div className="flex flex-col items-start lg:ml-10">
  {/* Logo */}
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
  <div className="w-80 lg:w-[320px] -mt-2 ">
    <h3 className="font-poppins font-semibold text-[25px] mb-4">Subscribe to our newsletter</h3>
    <form className="relative">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full lg:w-80 pl-4 pr-[120px] py-3 bg-white text-[#000000] border border-gray-400 rounded-md placeholder:text-base lg:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 right-0 w-[120px] rounded-md bg-[#EC5B0C] text-white text-sm font-semibold transition hover:bg-orange-700"
      >
        Subscribe
      </button>
    </form>
  </div>
</div>

        {/* All Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:-ml-15">
          {/* Our Company */}
          <div>
            <h3 className="font-poppins font-semibold text-[25px] mb-4">Our Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Our History</a></li>
              <li><a href="#" className="hover:text-white">Leadership</a></li>
              <li><a href="#" className="hover:text-white">Our Boards</a></li>
              <li><a href="#" className="hover:text-white">Investor Portal</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-[25px] mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Personal Insurance</a></li>
              <li><a href="#" className="hover:text-white">Business Insurance</a></li>
              <li><a href="#" className="hover:text-white">Auto Insurance</a></li>
              <li><a href="#" className="hover:text-white">Retirement Plans</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-poppins font-semibold text-[25px] mb-4 ">Help & Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Claim/Complaints Procedure</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Whistleblowing</a></li>
              <li><a href="#" className="hover:text-white">Our Branches</a></li>
              <li><a href="#" className="hover:text-white">Agent Login</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Media</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center font-poppins font-semibold text-[20px] text-[#FFFFFF] mt-12 pt-10">
        &copy; 2025 Leadway Assurance Company Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
