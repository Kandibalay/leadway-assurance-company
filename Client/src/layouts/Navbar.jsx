import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoutModal from "../components/modals/LogoutModal";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/Logo.svg";
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from "../context/AuthContext3";
import { useModal } from "../context/modalContext";
import Profile  from "../assets/icons/profile.svg"
import Privacy from "../assets/icons/privacy.svg"
import Help from "../assets/icons/helpcenter.svg"
import LogoutIcon from "../assets/icons/logout.svg"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropOpen, setDropOpenMenu] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isInsuranceDropdownOpen, setIsInsuranceDropdownOpen] = useState(false);
  const [isDesktopInsuranceDropdownOpen, setIsDesktopInsuranceDropdownOpen] = useState(false);
  const [mobileInsuranceDropdowns, setMobileInsuranceDropdowns] = useState({
    personal: false,
    business: false,
    auto: false
  });
  const [activePage, setActivePage] = useState('home'); // Track active page
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const { openModal } = useModal();


  const openMenu = () => setDropOpenMenu(!dropOpen);
  const closeMenu = () => setDropOpenMenu(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsInsuranceDropdownOpen(false);
    setIsDropdownOpen(false);
    setMobileInsuranceDropdowns({
      personal: false,
      business: false,
      auto: false
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const closeDesktopInsuranceDropdown = () => {
    setIsDesktopInsuranceDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsDesktopInsuranceDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsDesktopInsuranceDropdownOpen(false);
    }, 200); // 200ms delay before closing
  };

  const toggleMobileInsuranceDropdown = (type) => {
    setMobileInsuranceDropdowns(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handlePageClick = (page) => {
    setActivePage(page);
    closeMobileMenu();
    closeDesktopInsuranceDropdown(); // Close desktop dropdown when any page is clicked
  };

  const handleSubpageClick = (page) => {
    setActivePage(page);
    closeDesktopInsuranceDropdown(); // Close dropdown when subpage is clicked
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopInsuranceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const getNavLinkClass = (page) => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors";
    if (activePage === page) {
      return `${baseClass} text-[#EA5B0C]`;
    }
    return `${baseClass} text-black hover:text-[#EA5B0C]`;
  };

  const getNavLinkClass2 = (page) => {
    const baseClass = "py-2 text-base font-medium transition-colors cursor-pointer";
    if (activePage === page) {
      return `${baseClass} text-[#EA5B0C]`;
    }
    return `${baseClass} text-black hover:text-[#EA5B0C]`;
  };

  const getMobileNavLinkClass = (page) => {
    const baseClass = "block px-3 py-2 text-base font-medium transition-colors";
    if (activePage === page) {
      return `${baseClass} text-[#EA5B0C]`;
    }
    return `${baseClass} text-black hover:text-[#EA5B0C]`;
  };

  const toggleInsuranceDropdown = () => {
    setIsInsuranceDropdownOpen(!isInsuranceDropdownOpen);
  };

  const getInitials = (fullName) => (!fullName? '' : `${fullName.charAt(0)}`);

  const handleLogout = () => {
    logout();
   // Clear tokens / localStorage / reset state
  localStorage.removeItem('token'); // or whatever you're storing

  // Navigate to login page
  navigate('/auth/signin');

  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 md:px-10 lg:px-14">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img src={logo} alt="Lead Assurance Logo" className="h-10 w-auto" />
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink 
                to="/" 
                onClick={() => handlePageClick('home')}
                className={getNavLinkClass('home')}
              >
                Home
              </NavLink>
              
              {/* Insurance Dropdown */}
              <div 
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
                  onClick={() => setIsDesktopInsuranceDropdownOpen(!isDesktopInsuranceDropdownOpen)}
                >
                  Insurance
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDesktopInsuranceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDesktopInsuranceDropdownOpen && (
                  <div className="absolute grid grid-cols-3 left-0 mt-5 w-200 bg-white rounded-3xl px-12 shadow-lg py-6 z-50">
                    {/* Business Insurance */}
                    <div className="mb-4">
                      <h3 
                        onClick={() => handleSubpageClick('business-insurance')}
                        className={getNavLinkClass2('business-insurance')}
                      >
                        Business Insurance
                      </h3>
                      <div className="py-2 flex flex-col gap-2">
                        <NavLink 
                          to="/insurance/marine" 
                          onClick={() => handleSubpageClick('marine-insurance')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded "
                        >
                          Marine Insurance
                        </NavLink>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('sme-insurance')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          SME Insurance
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('business-property')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Property Insurance
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('accident-policies')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Accident Policies
                        </a>
                      </div>
                    </div>

                    {/* Personal Insurance */}
                    <div className="mb-4">
                      <h3 
                        onClick={() => handleSubpageClick('personal-insurance')}
                        className={getNavLinkClass2('personal-insurance')}
                      >
                        Personal Insurance
                      </h3>
                      <div className="py-2 flex flex-col gap-2">
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('general-insurance')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded "
                        >
                          General Insurance
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('savings-investment')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded "
                        >
                          Savings & Investment
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('travel-insurance')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Travel Insurance
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('health-life')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Health & Life
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('annuities-pension')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Annuities & Pension
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('personal-property')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Property Insurance
                        </a>
                      </div>
                    </div>

                    {/* Auto Insurance */}
                    <div>
                      <h3 
                        onClick={() => handleSubpageClick('auto-insurance')}
                        className={getNavLinkClass2('auto-insurance')}
                      >
                        Auto Insurance
                      </h3>
                      <div className="py-2 flex flex-col gap-2">
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('comprehensive')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Comprehensive
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('third-party')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Third Party
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('third-party-auto-base')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Third Party (Auto Base)
                        </a>
                        <a 
                          href="#" 
                          onClick={() => handleSubpageClick('third-party-scratch-card')} 
                          className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors rounded"
                        >
                          Third Party (Scratch Card)
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink 
                to="/blog" 
                onClick={() => handlePageClick('blog')}
                className={getNavLinkClass('blog')}
              >
                Blog
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => handlePageClick('about')}
                className={getNavLinkClass('about')}
              >
                About
              </NavLink>
              <NavLink 
                to="/contact" 
                onClick={() => handlePageClick('contact')}
                className={getNavLinkClass('contact')}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
          {auth.user != null ? (
                <div className="hidden lg:block w-1/5 relative">
                  <div className="flex gap-[4px] justify-between items-center">
                    <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
                      <h1>{getInitials(auth?.user?.fullName)}</h1>
                    </div>
                    <div className="text-base text-[#3C3C3C]"><h3 className="flex text-[14px] font-medium">{`${auth?.user?.fullName}`}</h3></div>
                    <div className="text-[#4F4F4F] text-2xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
                  </div>
                  {dropOpen && (
                    <div className="w-[230px] py-[4px] absolute top-16 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
                      <div><ul className="px-3 py-8 grid gap-[10px] text-sm">
                        <li className="flex items-center gap-2 border rounded-lg p-2 border-gray-300  hover:text-[#EA5B0C] hover:border-[#EA5B0C]"><span><img src={Profile} alt="" className="w-4"/></span>Profile Details</li>
                        <li className="hover:text-[#EA5B0C] hover:border-[#EA5B0C]  flex items-center gap-2 border rounded-lg p-2 border-gray-300"><span><img src={Privacy} alt="" className="w-4"/></span>Privacy Policy</li>
                        <li className="hover:text-[#EA5B0C] hover:border-[#EA5B0C] flex items-center gap-2 border rounded-lg p-2 border-gray-300"><span><img src={Help} alt="" className="w-4"/></span>Help Center</li>
                        <li className="hover:text-[#EA5B0C] hover:border-[#EA5B0C]  flex items-center gap-2 border rounded-lg p-2 border-gray-300" onClick={() => openModal('logout', { onLogout: handleLogout })}>
                        <span><img src={LogoutIcon} alt="" className="w-4"/></span> Log Out
                        </li>
                      </ul></div>
                    </div>
                  )}
                </div>
              ) : (
              <div className="hidden lg:block w-1/5">
                <div className="ml-4 flex items-center space-x-4">
                  <button className="w-full bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-2.5 font-medium transition-transform transform hover:scale-110 duration-200">
                  <NavLink to="/auth/signup">Sign Up</NavLink>
                  </button>
                  <button className="w-full border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-2.5 font-medium duration-200 transition-transform transform hover:scale-110">
                  <NavLink to="/auth/signin">Login</NavLink>
                  </button>
                </div>
              </div>
              )}
          

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none "
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 md:px-10 ">
          <div className=" pt-2 pb-3 space-y-1 flex flex-col md:items-center sm:px-3 bg-white border-t border-gray-200">
            <NavLink 
              to="/" 
              onClick={() => handlePageClick('home')}
              className={getMobileNavLinkClass('home')}
            >
              Home
            </NavLink>
            
            {/* Mobile Insurance Dropdown */}
            <div>
              <button 
                onClick={toggleInsuranceDropdown}
                className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-base font-medium transition-colors flex items-center justify-between"
              >
                Insurance
                <ChevronDown className={`h-4 w-4 transition-transform ${isInsuranceDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isInsuranceDropdownOpen && (
                <div className="pl-6 space-y-1">
                   {/* Business Insurance Mobile */}
                   <div>
                    <button 
                      onClick={() => toggleMobileInsuranceDropdown('business')}
                      className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
                    >
                      Business Insurance
                      <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.business ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileInsuranceDropdowns.business && (
                      <div className="pl-6 space-y-1 flex flex-col">
                        <a href="#" onClick={() => handlePageClick('marine-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C]block px-3 py-2 text-sm font-medium transition-colors">Marine Insurance</a>
                        <a href="#" onClick={() => handlePageClick('sme-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] px-3 py-2 text-sm font-medium transition-colors">SME Insurance</a>
                        <a href="#" onClick={() => handlePageClick('business-property')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Property Insurance</a>
                        <a href="#" onClick={() => handlePageClick('accident-policies')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Accident Policies</a>
                      </div>
                    )}
                  </div>
                  {/* Personal Insurance Mobile */}
                  <div>
                    <button 
                      onClick={() => toggleMobileInsuranceDropdown('personal')}
                      className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
                    >
                      Personal Insurance
                      <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.personal ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileInsuranceDropdowns.personal && (
                      <div className="pl-6 space-y-1">
                        <a href="#" onClick={() => handlePageClick('general-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">General Insurance</a>
                        <a href="#" onClick={() => handlePageClick('savings-investment')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Savings & Investment</a>
                        <a href="#" onClick={() => handlePageClick('travel-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Travel Insurance</a>
                        <a href="#" onClick={() => handlePageClick('health-life')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Health & Life</a>
                        <a href="#" onClick={() => handlePageClick('annuities-pension')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Annuities & Pension</a>
                        <a href="#" onClick={() => handlePageClick('personal-property')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Property Insurance</a>
                      </div>
                    )}
                  </div>

                  {/* Auto Insurance Mobile */}
                  <div>
                    <button 
                      onClick={() => toggleMobileInsuranceDropdown('auto')}
                      className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
                    >
                      Auto Insurance
                      <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.auto ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileInsuranceDropdowns.auto && (
                      <div className="pl-6 space-y-1">
                        <a href="#" onClick={() => handlePageClick('comprehensive')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Comprehensive</a>
                        <a href="#" onClick={() => handlePageClick('third-party')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party</a>
                        <a href="#" onClick={() => handlePageClick('third-party-auto-base')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party (Auto Base)</a>
                        <a href="#" onClick={() => handlePageClick('third-party-scratch-card')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party (Scratch Card)</a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/blog" 
              onClick={() => handlePageClick('blog')}
              className={getMobileNavLinkClass('blog')}
            >
              Blog
            </NavLink>
            <NavLink
              to="/about" 
              onClick={() => handlePageClick('about')}
              className={getMobileNavLinkClass('about')}
            >
              About
            </NavLink>
            <NavLink
              to="/contact" 
              onClick={() => handlePageClick('contact')}
              className={getMobileNavLinkClass('contact')}
            >
              Contact Us
            </NavLink>
            {auth.user != null ? (
                <div className="md:w-1/3 pt-4 space-y-2 hidden">
                  <div className="flex gap-[4px] justify-between items-center">
                    <div className="h-[51px] w-[51px] flex items-center justify-center text-lg text-[#006B14] text-center rounded-full bg-[#F0F7F6]">
                      <h1>{getInitials(auth?.user?.fullName)}</h1>
                    </div>
                    <div className="text-base text-[#3C3C3C]"><h3 className="flex text-[14px] font-medium">{`${auth?.user?.fullName}`}</h3></div>
                    <div className="text-[#4F4F4F] text-2xl cursor-pointer" onClick={openMenu}><RiArrowDropDownLine /></div>
                  </div>
                  {dropOpen && (
                    <div className="w-[166px] py-[4px] absolute top-14 right-0 bg-white rounded-[10px] text-[#111014] text-[16px] drop-shadow shadow-[#00000026] cursor-pointer">
                      <div><ul className="px-[10px] py-[10px] grid gap-[10px]">
                        <li className="hover:text-[#006B14]">My Tickets</li>
                        <li className="hover:text-[#006B14]" onClick={() => openModal('resetPassword')}>
                          Reset Password
                        </li>
                        <li className="text-[#DB3E3E] hover:text-[#006B14]" onClick={() => openModal('logout', { onLogout: handleLogout })}>
                          Log Out
                        </li>
                      </ul></div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="md:w-1/3 pt-4 space-y-2 ">
                <button 
                  onClick={closeMobileMenu}
                  className="w-full  bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-2 font-medium transition-transform transform hover:scale-110 duration-200"
                >
                  <NavLink to="/auth/signup">Sign Up</NavLink>
                </button>
                <button 
                  onClick={closeMobileMenu}
                  className="w-full border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-2 font-medium duration-200 transition-transform transform hover:scale-110"
                >
                   <NavLink to="/auth/signin">Login</NavLink>
                </button>
              </div>
              )}
          
          </div>
        </div>
      )}
    </nav>
  );
}