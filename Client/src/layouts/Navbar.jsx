import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/Logo.svg";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropDown, setDropDown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  const toggleDropdownMenu = (dropdownName) => {
    setDropDown(dropDown === dropdownName ? null : dropdownName);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="shadow fixed z-50 right-0 left-0 w-full">
      {/* Desktop Navbar */}
      <div className="bg-white text-black shadow-sm">
        <div className="px-14 container mx-auto flex justify-between items-center py-2">
          <div className=" w-auto">
            <img src={logo} alt="Lead assurance logo" />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-8">
            <NavLink to="/">
              <p className="hover:text-[#EA5B0C] font-medium cursor-pointer transition-colors duration-200 py-2">
                Home
              </p>
            </NavLink>

            <div className="relative">
              <p
                onClick={() => toggleDropdown("insurance")}
                className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
              >
                Insurance
                <RiArrowDropDownLine
                  className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                    activeDropdown === "insurance" ? "rotate-180" : ""
                  }`}
                />
              </p>

              {/* Insurance Dropdown */}
              {activeDropdown === "insurance" && (
                <div className="absolute -left-30 mt-4 w-240 rounded-xl bg-white shadow-lg z-50 text-black px-14 pt-10 pb-16">
                  <div className="py-2 grid grid-cols-3 gap-4">
                    <div className="flex flex-col gap-5">
                      <a
                        href="#"
                        className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                      >
                        Business Insurance
                      </a>
                      <ul className="flex flex-col gap-3 text-[14px]">
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Marine Insurance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            SME Insurance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Property Insurance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Accident Policies
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <a
                        href="#"
                        className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                      >
                        Personal Insurance
                      </a>
                      <ul className="flex flex-col gap-3 text-[14px]">
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            General Insurance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Savings & Investment
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Travel Insurance
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Health & Life
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Annuities & Pension
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Property Insurance
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col gap-5">
                      <a
                        href="#"
                        className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                      >
                        Auto Insurance
                      </a>
                      <ul className="flex flex-col gap-3 text-[14px]">
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Comprehensive
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Third Party
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Third Party(Auto Base)
                          </a>
                        </li>
                        <li>
                          <a href="#" className="cursor-not-allowed">
                            Third Party(Scratch Card)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Blog */}
            <NavLink to="/blog">
              <p
                onClick={() => toggleDropdown("services")}
                className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
              >
                Blog
              </p>
            </NavLink>

            {/* About */}
            <NavLink to="/about">
              <p
                onClick={() => toggleDropdown("info")}
                className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
              >
                About
              </p>
            </NavLink>

            {/* Contact Us */}
            <NavLink to="/contact">
              <p
                onClick={() => toggleDropdown("self")}
                className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
              >
                Contact Us
              </p>
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="flex gap-3 w-1/6">
            <NavLink to="/auth/signup" className="hidden w-1/2 lg:block">
              <button className="w-full bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-2 font-medium transition-transform transform hover:scale-110 duration-200">
                Sign up
              </button>
            </NavLink>
            <NavLink to="/auth/login" className="hidden w-1/2 lg:block">
              <button className="w-full border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-2 font-medium duration-200 transition-transform transform hover:scale-110">
                Login
              </button>
            </NavLink>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex justify-center items-center w-10 text-black hover:text-green-600 transition-colors duration-200"
          >
            {isMobileMenuOpen ? (
              <IoClose className="w-3 h-3" />
            ) : (
              <IoMenuOutline className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex justify-end ">
          <div
            ref={mobileMenuRef}
            className="w-full h-[100%] rounded-b-lg bg-white flex flex-col transform transition-transform duration-300 ease-in-out shadow-2xl "
          >
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center py-2 px-6 ">
              <div className=" w-auto">
                <img src={logo} alt="logo" />
              </div>
              <button
                onClick={toggleMobileMenu}
                className="flex justify-center items-center w-10 h-10 text-white hover:text-green-200 transition-colors duration-200"
              >
                <IoClose className="w-8 h-8 text-black" />
              </button>
            </div>
            {/* Mobile Menu Items */}
            <div className="flex flex-col items-center justify-center px-4 pb-1 space-y-2 overflow-y-auto">
              {/* Home */}
              <div className="pb-1 ">
                <NavLink
                  to="/"
                  className="block text-black text-base font-medium  hover:text-[#EA5B0C] py-2 transition-colors duration-200"
                >
                  Home
                </NavLink>
              </div>

              {/* Insurance */}
              <div className="pb-1 ">
                <div
                  onClick={() => toggleDropdown("insurance")}
                  className="flex justify-between py-2 items-center text-black text-base font-medium cursor-pointer hover:text-[#EA5B0C] transition-colors duration-200"
                >
                  <span>Insurance</span>
                  <RiArrowDropDownLine
                    className={`h-6 w-6 transition-transform duration-200 ${
                      activeDropdown === "insurance" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {activeDropdown === "insurance" && (
                  <div className="mt-2 space-y-2 pl-4 transform transition-all duration-300 ease-in-out">
                    <div className="py-2 grid grid-cols-1 lg:grid-cols-3 gap-4  text-black text-center">
                      <div className="flex flex-col gap-5">
                        <div>
                          <div
                            onClick={() => toggleDropdownMenu("business")}
                            className="flex justify-between items-center cursor-pointer"
                          >
                            <span>
                              <a
                                href="#"
                                className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                              >
                                Business Insurance
                              </a>
                            </span>
                            <RiArrowDropDownLine
                              className={`h-6 w-6 transition-transform duration-200 ${
                                dropDown === "business" ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {dropDown === "business" && (
                            <ul className="pl-4 flex flex-col gap-3 text-[14px] text-left">
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Marine Insurance
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  SME Insurance
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Property Insurance
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Accident Policies
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div>
                          <div
                            onClick={() => toggleDropdownMenu("personal")}
                            className="flex justify-between items-center cursor-pointer"
                          >
                            <span>
                              <a
                                href="#"
                                className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                              >
                                Personal Insurance
                              </a>
                            </span>
                            <RiArrowDropDownLine
                              className={`h-6 w-6 transition-transform duration-200 ${
                                dropDown === "personal" ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {dropDown === "personal" && (
                            <ul className="pl-4 flex flex-col gap-3 text-[14px] text-left">
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  General Insurance
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Savings & Investment
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Travel Insurance
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Health & Life
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Annuities & Pension
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Property Insurance
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-5">
                        <div>
                          <div
                            onClick={() => toggleDropdownMenu("auto")}
                            className="flex justify-between items-center cursor-pointer"
                          >
                            <span>
                              {" "}
                              <a
                                href="#"
                                className="block text-[16px] font-medium  hover:text-[#EA5B0C] transition-colors duration-200"
                              >
                                Auto Insurance
                              </a>
                            </span>
                            <RiArrowDropDownLine
                              className={`h-6 w-6 transition-transform duration-200 ${
                                dropDown === "auto" ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                          {dropDown === "auto" && (
                            <ul className="pl-4 flex flex-col gap-3 text-[14px] text-left">
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Comprehensive
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Third Party
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Third Party(Auto Base)
                                </a>
                              </li>
                              <li>
                                <a href="#" className="cursor-not-allowed">
                                  Third Party(Scratch Card)
                                </a>
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Blog */}
              <div className="pb-1">
                <NavLink
                  to="/blog"
                  className="flex justify-between items-center text-black text-base font-medium cursor-pointer hover:text-[#EA5B0C] transition-colors duration-200"
                >
                  <span>Blog</span>
                </NavLink>
              </div>

              {/* About */}
              <div className="pb-1 ">
                <NavLink
                  to="/about"
                  className="flex justify-between items-center py-2 text-black text-base font-medium cursor-pointer hover:text-[#EA5B0C] transition-colors duration-200"
                >
                  <span>About</span>
                </NavLink>
              </div>

              {/* Contact Us */}
              <div className="pb-4">
                <NavLink
                  to="/contact"
                  className="flex justify-between items-center py-2 text-black text-base font-medium cursor-pointer hover:text-[#EA5B0C] transition-colors duration-200"
                >
                  <span>Contact Us</span>
                </NavLink>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col mx-auto gap-3 w-1/2">
                <NavLink to="/auth/signup" className="lg:hidden">
                  <button className="  bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-2 font-medium transition-transform transform hover:scale-110 duration-200">
                    Sign up
                  </button>
                </NavLink>
                <NavLink to="/auth/login" className="lg:hidden">
                  <button className=" border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-2 font-medium duration-200 transition-transform transform hover:scale-110">
                    Login
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
