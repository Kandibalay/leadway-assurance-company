import React from "react";
import { useState, useRef, useEffect } from "react";
import Logo from "../assets/icons/Logo.svg";
import Button from "../components/reuseable/Button";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef();

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  const closeMenuBar = () => {
    setShowMenu(false);
  };

  const openMenuBar = () => {
    if (window.innerWidth < 1024);
    setShowMenu(!showMenu);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenuBar();
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav className="bg-white shadow fixed z-50 right-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 ">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <NavLink className="cursor-pointer" to="home">
              <img src={Logo} alt="logo" />
            </NavLink>
          </div>
          <div
            className="lg:hidden text-2xl flex items-center cursor-pointer"
            onClick={openMenuBar}
          >
            {showMenu ? (
              <IoCloseOutline className="text-black" />
            ) : (
              <RxHamburgerMenu className="text-black" />
            )}
          </div>
          <div
            className={`lg:static absolute bg-white top-16  ${
              showMenu
                ? "block opacity-100 w-full rounded-b-lg right-0 p-4 "
                : "hidden opacity-0 top-[100%]"
            } lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}
            ref={navRef}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-4  space-y-6  lg:space-y-0 items-center lg:items-start">
              <NavLink
                to="home"
                className={`px-3 py-2 mb-0 text-sm lg:text-[16px] font-medium cursor-pointer ${
                  activeLink === "home"
                    ? "text-[#EA5B0C]"
                    : "text-black hover:text-[#EA5B0C]"
                }`}
                onClick={() => {
                  handleActiveLink("home");
                  closeMenuBar();
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="insurance"
                className={`px-3 py-2 mb-0 text-sm lg:text-[16px] font-medium cursor-pointer ${
                  activeLink === "insurance"
                    ? "text-[#EA5B0C]"
                    : "text-black hover:text-[#EA5B0C]"
                }`}
                onClick={() => {
                  handleActiveLink("insurance");
                  closeMenuBar();
                }}
              >
                Insurance
              </NavLink>
              <NavLink
                to="blog"
                className={`px-3 py-2 mb-0 text-sm lg:text-[16px] font-medium cursor-pointer ${
                  activeLink === "blog"
                    ? "text-[#EA5B0C]"
                    : "text-black hover:text-[#EA5B0C]"
                }`}
                onClick={() => {
                  handleActiveLink("blog");
                  closeMenuBar();
                }}
              >
                Blog
              </NavLink>
              <NavLink
                className={`px-3 py-2 mb-0 text-sm lg:text-[16px] font-medium cursor-pointer ${
                  activeLink === "about"
                    ? "text-[#EA5B0C]"
                    : "text-black hover:text-[#EA5B0C]"
                }`}
                onClick={() => {
                  handleActiveLink("about");
                  closeMenuBar();
                }}
                to="about"
              >
                About
              </NavLink>
              <NavLink
                className={`px-3 py-2 mb-0 text-sm lg:text-[16px] font-medium cursor-pointer ${
                  activeLink === "contact"
                    ? "text-[#EA5B0C]"
                    : "text-black hover:text-[#EA5B0C]"
                }`}
                onClick={() => {
                  handleActiveLink("contact");
                  closeMenuBar();
                }}
                to="contact"
              >
                Contact us
              </NavLink>
              <div className="block lg:hidden ">
                <div className="flex flex-col gap-2">
                  <NavLink
                    className={`border  px-3 py-2 text-[16px] font-medium rounded-md cursor-pointer ${
                      activeLink === "signup"
                        ? "bg-white text-black border-[#EA5B0C] "
                        : "border-[#EA5B0C] text-white bg-[#EA5B0C] "
                    }`}
                    onClick={() => {
                      handleActiveLink("signup");
                      closeMenuBar();
                    }}
                    to="signup"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    className={`border  px-3 py-2 text-center text-[16px] font-medium rounded-md cursor-pointer ${
                      activeLink === "login"
                        ? "bg-[#EA5B0C] text-white"
                        : "border-[#EA5B0C] text-[#EA5B0C] bg-white "
                    }`}
                    onClick={() => {
                      handleActiveLink("login");
                      closeMenuBar();
                    }}
                    to="login"
                  >
                    Log In
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <NavLink
                className={`border px-3 py-2 text-[16px] font-medium rounded-md cursor-pointer ${
                  activeLink === "signup"
                    ? "bg-white text-black border-[#EA5B0C] "
                    : "border-[#EA5B0C] text-white bg-[#EA5B0C] "
                }`}
                onClick={() => {
                  handleActiveLink("signup");
                  closeMenuBar();
                }}
                to="signup"
              >
                Sign Up
              </NavLink>
              <NavLink
                className={`border px-3 py-2 text-[16px] text-center font-medium rounded-md cursor-pointer ${
                  activeLink === "login"
                    ? "bg-[#EA5B0C] text-white"
                    : "border-[#EA5B0C] text-[#EA5B0C] bg-white "
                }`}
                onClick={() => {
                  handleActiveLink("login");
                  closeMenuBar();
                }}
                to="login"
              >
                Log In
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
