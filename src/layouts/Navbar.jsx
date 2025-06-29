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
      <div className="max-w-7xl mx-auto px-4 lg:px-12 ">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <NavLink
              className="text-xl font-bold text-gray-600 flex items-center cursor-pointer"
              to="home"
            >
              <img src={Logo} alt="" />
            </NavLink>
          </div>
          <div
            className="lg:hidden text-2xl flex items-center cursor-pointer"
            onClick={openMenuBar}
          >
            {showMenu ? <IoCloseOutline /> : <RxHamburgerMenu />}
          </div>
          <div
            className={`lg:static absolute bg-white top-16  ${
              showMenu
                ? "block opacity-100 w-[280px] right-0 p-8 "
                : "hidden opacity-0 top-[100%]"
            } lg:opacity-100 lg:flex lg:items-center lg:w-auto  font-bold  z-50 gap-5`}
            ref={navRef}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-12  space-y-10  lg:space-y-0">
              <NavLink
                to="home"
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "home"
                    ? "text-purple-500"
                    : "text-gray-800 hover:text-gray-500"
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
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "insurance"
                    ? "text-purple-500"
                    : "text-gray-800 hover:text-gray-500"
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
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "blog"
                    ? "text-purple-500"
                    : "text-gray-800 hover:text-gray-500"
                }`}
                onClick={() => {
                  handleActiveLink("blog");
                  closeMenuBar();
                }}
              >
                Blog
              </NavLink>
              <NavLink
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "about"
                    ? "text-purple-500"
                    : "text-gray-800 hover:text-gray-500"
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
                className={`px-3 py-2 mb-0 text-sm lg:text-lg font-medium cursor-pointer ${
                  activeLink === "contact"
                    ? "text-purple-500"
                    : "text-gray-800 hover:text-gray-500"
                }`}
                onClick={() => {
                  handleActiveLink("contact");
                  closeMenuBar();
                }}
                to="contact"
              >
                Contact us
              </NavLink>
              <div className="block lg:hidden">
                <NavLink
                  className={`border  px-3 py-2 text-lg font-medium rounded-md cursor-pointer ${
                    activeLink === "signup"
                      ? "bg-purple-500 text-white"
                      : "border-purple-500 text-purple-500 bg-white "
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
                  className={`border  px-3 py-2 text-lg font-medium rounded-md cursor-pointer ${
                    activeLink === "login"
                      ? "bg-purple-500 text-white"
                      : "border-purple-500 text-purple-500 bg-white "
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
          <div className="hidden lg:block">
            <NavLink
              className={`border  px-3 py-2 text-lg font-medium rounded-md cursor-pointer ${
                activeLink === "contact"
                  ? "bg-purple-500 text-white"
                  : "border-purple-500 text-purple-500 bg-white "
              }`}
              onClick={() => {
                handleActiveLink("contact");
                closeMenuBar();
              }}
              to="contact"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
