// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { IoMenuOutline } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import logo from "../assets/icons/Logo.svg";
// import { ChevronDown, Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isInsuranceDropdownOpen, setIsInsuranceDropdownOpen] = useState(false);
//   const [mobileInsuranceDropdowns, setMobileInsuranceDropdowns] = useState({
//     personal: false,
//     business: false,
//     auto: false
//   });
//   const [activePage, setActivePage] = useState('home'); // Track active page

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//     setIsDropdownOpen(false);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setIsInsuranceDropdownOpen(false);
//     setIsDropdownOpen(false);
//     setMobileInsuranceDropdowns({
//       personal: false,
//       business: false,
//       auto: false
//     });
//   };

//     const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };
//   const toggleMobileInsuranceDropdown = (type) => {
//     setMobileInsuranceDropdowns(prev => ({
//       ...prev,
//       [type]: !prev[type]
//     }));
//   };

//   const handlePageClick = (page) => {
//     setActivePage(page);
//     closeMobileMenu();
//   };

//   const getNavLinkClass = (page) => {
//     const baseClass = "px-3 py-2 text-sm font-medium transition-colors";
//     if (activePage === page) {
//       return `${baseClass} text-[#EA5B0C]`;
//     }
//     return `${baseClass} text-black hover:text-[#EA5B0C]`;
//   };
//   const getNavLinkClass2 = (page) => {
//     const baseClass = "py-2 text-base font-medium transition-colors";
//     if (activePage === page) {
//       return `${baseClass} text-[#EA5B0C]`;
//     }
//     return `${baseClass} text-black hover:text-[#EA5B0C]`;
//   };

//   const getMobileNavLinkClass = (page) => {
//     const baseClass = "block px-3 py-2 text-base font-medium transition-colors";
//     if (activePage === page) {
//       return `${baseClass} text-[#EA5B0C]`;
//     }
//     return `${baseClass} text-black hover:text-[#EA5B0C]`;
//   };

//   const toggleInsuranceDropdown = () => {
//     setIsInsuranceDropdownOpen(!isInsuranceDropdownOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <div className="flex items-center">
//               <div>
//                 <img src={logo} alt="Lead Assurance Logo" className="h-10 w-auto" />
//               </div>
//             </div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               <NavLink 
//                 to="/" 
//                 onClick={() => handlePageClick('home')}
//                 className={getNavLinkClass('home')}
//               >
//                 Home
//               </NavLink>
              
//               {/* Insurance Dropdown */}
//               <div className="relative group">
//                 <button 
//                    className="text-black hover:text-[#EA5B0C] font-medium flex items-center cursor-pointer transition-colors duration-200 py-2"
//                    >
//                   Insurance
//                   <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
//                 </button>
//                 <div className="absolute grid grid-cols-3 left-0 mt-5 w-200 bg-white rounded-3xl px-12 shadow-lg py-6 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                  {/* Business Insurance */}
//                  <div className="mb-4">
//                     <h3 onClick={() => handlePageClick('business-insurance')}
//                 className={getNavLinkClass2('business-insurance')}>Business Insurance</h3>
//                     <div className="py-2 flex flex-col gap-2">
//                       <NavLink to="/insurance/marine" onClick={() => handlePageClick('marine-insurance')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Marine Insurance</NavLink>
//                       <a href="#" onClick={() => handlePageClick('sme-insurance')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">SME Insurance</a>
//                       <a href="#" onClick={() => handlePageClick('business-property')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Property Insurance</a>
//                       <a href="#" onClick={() => handlePageClick('accident-policies')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Accident Policies</a>
//                     </div>
//                   </div>

//                   {/* Personal Insurance */}
//                   <div className="mb-4">
//                     <h3 onClick={() => handlePageClick('personal-insurance')}
//                 className={getNavLinkClass2('personal-insurance')}>Personal Insurance</h3>
//                     <div className="py-2 flex flex-col gap-2">
//                       <a href="#" onClick={() => handlePageClick('general-insurance')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">General Insurance</a>
//                       <a href="#" onClick={() => handlePageClick('savings-investment')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Savings & Investment</a>
//                       <a href="#" onClick={() => handlePageClick('travel-insurance')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Travel Insurance</a>
//                       <a href="#" onClick={() => handlePageClick('health-life')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Health & Life</a>
//                       <a href="#" onClick={() => handlePageClick('annuities-pension')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Annuities & Pension</a>
//                       <a href="#" onClick={() => handlePageClick('personal-property')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Property Insurance</a>
//                     </div>
//                   </div>

//                   {/* Auto Insurance */}
//                   <div>
//                     <h3 onClick={() => handlePageClick('auto-insurance')}
//                 className={getNavLinkClass2('auto-insurance')}>Auto Insurance</h3>
//                     <div className="py-2 flex flex-col gap-2">
//                       <a href="#" onClick={() => handlePageClick('comprehensive')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Comprehensive</a>
//                       <a href="#" onClick={() => handlePageClick('third-party')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Third Party</a>
//                       <a href="#" onClick={() => handlePageClick('third-party-auto-base')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Third Party (Auto Base)</a>
//                       <a href="#" onClick={() => handlePageClick('third-party-scratch-card')} className="block py-1 text-sm text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] transition-colors">Third Party (Scratch Card)</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <NavLink 
//                 to="/blog" 
//                 onClick={() => handlePageClick('blog')}
//                 className={getNavLinkClass('blog')}
//               >
//                 Blog
//               </NavLink>
//               <NavLink 
//                 to="/about" 
//                 onClick={() => handlePageClick('about')}
//                 className={getNavLinkClass('about')}
//               >
//                 About
//               </NavLink>
//               <NavLink 
//                 to="/contact" 
//                 onClick={() => handlePageClick('contact')}
//                 className={getNavLinkClass('contact')}
//               >
//                 Contact Us
//               </NavLink>
//             </div>
//           </div>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden lg:block w-1/5">
//             <div className="ml-4 flex items-center space-x-4">
              
//               <button className="w-full bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-3 font-medium transition-transform transform hover:scale-110 duration-200">
//               <NavLink to="/auth/signup">Sign Up</NavLink>
//               </button>
//               <button className="w-full border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-3 font-medium duration-200 transition-transform transform hover:scale-110">
//               <NavLink to="/auth/login">Login</NavLink>
//               </button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMobileMenu}
//               className="text-gray-700 hover:text-blue-600 inline-flex items-center justify-center p-2 rounded-md focus:outline-none "
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden px-6 md:px-10 ">
//           <div className=" pt-2 pb-3 space-y-1 flex flex-col md:items-center sm:px-3 bg-white border-t border-gray-200">
//             <NavLink 
//               to="/" 
//               onClick={() => handlePageClick('home')}
//               className={getMobileNavLinkClass('home')}
//             >
//               Home
//             </NavLink>
            
//             {/* Mobile Insurance Dropdown */}
//             <div>
//               <button 
//                 onClick={toggleInsuranceDropdown}
//                 className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-base font-medium transition-colors flex items-center justify-between"
//               >
//                 Insurance
//                 <ChevronDown className={`h-4 w-4 transition-transform ${isInsuranceDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>
//               {isInsuranceDropdownOpen && (
//                 <div className="pl-6 space-y-1">
//                    {/* Business Insurance Mobile */}
//                    <div>
//                     <button 
//                       onClick={() => toggleMobileInsuranceDropdown('business')}
//                       className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
//                     >
//                       Business Insurance
//                       <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.business ? 'rotate-180' : ''}`} />
//                     </button>
//                     {mobileInsuranceDropdowns.business && (
//                       <div className="pl-6 space-y-1 flex flex-col">
//                         <a href="#" onClick={() => handlePageClick('marine-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C]block px-3 py-2 text-sm font-medium transition-colors">Marine Insurance</a>
//                         <a href="#" onClick={() => handlePageClick('sme-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] px-3 py-2 text-sm font-medium transition-colors">SME Insurance</a>
//                         <a href="#" onClick={() => handlePageClick('business-property')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Property Insurance</a>
//                         <a href="#" onClick={() => handlePageClick('accident-policies')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Accident Policies</a>
//                       </div>
//                     )}
//                   </div>
//                   {/* Personal Insurance Mobile */}
//                   <div>
//                     <button 
//                       onClick={() => toggleMobileInsuranceDropdown('personal')}
//                       className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
//                     >
//                       Personal Insurance
//                       <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.personal ? 'rotate-180' : ''}`} />
//                     </button>
//                     {mobileInsuranceDropdowns.personal && (
//                       <div className="pl-6 space-y-1">
//                         <a href="#" onClick={() => handlePageClick('general-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">General Insurance</a>
//                         <a href="#" onClick={() => handlePageClick('savings-investment')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Savings & Investment</a>
//                         <a href="#" onClick={() => handlePageClick('travel-insurance')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Travel Insurance</a>
//                         <a href="#" onClick={() => handlePageClick('health-life')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Health & Life</a>
//                         <a href="#" onClick={() => handlePageClick('annuities-pension')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Annuities & Pension</a>
//                         <a href="#" onClick={() => handlePageClick('personal-property')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Property Insurance</a>
//                       </div>
//                     )}
//                   </div>

//                   {/* Auto Insurance Mobile */}
//                   <div>
//                     <button 
//                       onClick={() => toggleMobileInsuranceDropdown('auto')}
//                       className="text-black hover:text-[#EA5B0C] w-full text-left px-3 py-2 text-sm font-medium transition-colors flex items-center justify-between"
//                     >
//                       Auto Insurance
//                       <ChevronDown className={`h-3 w-3 transition-transform ${mobileInsuranceDropdowns.auto ? 'rotate-180' : ''}`} />
//                     </button>
//                     {mobileInsuranceDropdowns.auto && (
//                       <div className="pl-6 space-y-1">
//                         <a href="#" onClick={() => handlePageClick('comprehensive')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Comprehensive</a>
//                         <a href="#" onClick={() => handlePageClick('third-party')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party</a>
//                         <a href="#" onClick={() => handlePageClick('third-party-auto-base')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party (Auto Base)</a>
//                         <a href="#" onClick={() => handlePageClick('third-party-scratch-card')} className="text-black hover:bg-[#FDEFE7] hover:text-[#EA5B0C] block px-3 py-2 text-sm font-medium transition-colors">Third Party (Scratch Card)</a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <NavLink
//               to="/blog" 
//               onClick={() => handlePageClick('blog')}
//               className={getMobileNavLinkClass('blog')}
//             >
//               Blog
//             </NavLink>
//             <NavLink
//               to="/about" 
//               onClick={() => handlePageClick('about')}
//               className={getMobileNavLinkClass('about')}
//             >
//               About
//             </NavLink>
//             <NavLink
//               to="/contact" 
//               onClick={() => handlePageClick('contact')}
//               className={getMobileNavLinkClass('contact')}
//             >
//               Contact Us
//             </NavLink>
            
//             {/* Mobile Auth Buttons */}
//             <div className="md:w-1/3 pt-4 space-y-2">
//               <button 
//                 onClick={closeMobileMenu}
//                 className="w-full  bg-[#EA5B0C] hover:bg-orange-700 text-white rounded-lg py-2 font-medium transition-transform transform hover:scale-110 duration-200"
//               >
//                 <NavLink to="/auth/signup">Sign Up</NavLink>
//               </button>
//               <button 
//                 onClick={closeMobileMenu}
//                 className="w-full border border-[#EA5B0C] text-[#EA5B0C] rounded-lg py-2 font-medium duration-200 transition-transform transform hover:scale-110"
//               >
//                  <NavLink to="/auth/login">Login</NavLink>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// import React, { useState } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'Blog', href: '#blog' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact Us', href: '#contact' }
//   ];

//   const insuranceItems = [
//     { 
//       name: 'Personal Insurance', 
//       href: '#personal-insurance',
//       subPages: [
//         { name: 'Savings', href: '#savings' },
//         { name: 'Investment', href: '#investment' },
//         { name: 'Appliances', href: '#appliances' },
//         { name: 'House', href: '#house' }
//       ]
//     },
//     { 
//       name: 'Business Insurance', 
//       href: '#business-insurance',
//       subPages: [
//         { name: 'Corporation', href: '#corporation' },
//         { name: 'Partnership', href: '#partnership' },
//         { name: 'Limited', href: '#limited' }
//       ]
//     },
//     { 
//       name: 'Auto Insurance', 
//       href: '#auto-insurance',
//       subPages: [
//         { name: 'Car', href: '#car' },
//         { name: 'Truck', href: '#truck' },
//         { name: 'Machines', href: '#machines' }
//       ]
//     }
//   ];

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     setIsDropdownOpen(false); // Close dropdown when menu is toggled
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     setIsDropdownOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   const handleNavClick = () => {
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <a href="#" className="text-2xl font-bold text-blue-600">
//               Logo
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
//               Home
//             </a>
            
//             {/* Insurance Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 Insurance
//                 <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//               </button>
              
//               {isDropdownOpen && (
//                 <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200">
//                   {insuranceItems.map((item, index) => (
//                     <div key={index} className="border-b border-gray-100 last:border-b-0">
//                       <a
//                         href={item.href}
//                         onClick={handleNavClick}
//                         className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                       >
//                         {item.name}
//                       </a>
//                       <div className="bg-gray-50">
//                         {item.subPages.map((subItem, subIndex) => (
//                           <a
//                             key={subIndex}
//                             href={subItem.href}
//                             onClick={handleNavClick}
//                             className="block px-6 py-2 text-xs text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                           >
//                             {subItem.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {navItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="text-gray-700 hover:text-blue-600 transition-colors"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className="text-gray-700 hover:text-blue-600 transition-colors">
//               Login
//             </button>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//               Sign Up
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t border-gray-200">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a
//                 href="#home"
//                 onClick={closeMenu}
//                 className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//               >
//                 Home
//               </a>
              
//               {/* Mobile Insurance Dropdown */}
//               <div>
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                 >
//                   Insurance
//                   <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {isDropdownOpen && (
//                   <div className="ml-4 mt-1 space-y-1">
//                     {insuranceItems.map((item, index) => (
//                       <div key={index} className="space-y-1">
//                         <a
//                           href={item.href}
//                           onClick={handleNavClick}
//                           className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                         >
//                           {item.name}
//                         </a>
//                         <div className="ml-4 space-y-1">
//                           {item.subPages.map((subItem, subIndex) => (
//                             <a
//                               key={subIndex}
//                               href={subItem.href}
//                               onClick={handleNavClick}
//                               className="block px-3 py-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                             >
//                               {subItem.name}
//                             </a>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {navItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   onClick={closeMenu}
//                   className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                 >
//                   {item.name}
//                 </a>
//               ))}
              
//               {/* Mobile Auth Buttons */}
//               <div className="pt-4 border-t border-gray-200">
//                 <button
//                   onClick={closeMenu}
//                   className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
//                 >
//                   Login
//                 </button>
//                 <button
//                   onClick={closeMenu}
//                   className="block w-full text-left px-3 py-2 mt-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
      
//       {/* Overlay to close dropdown when clicking outside */}
//       {isDropdownOpen && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={closeDropdown}
//         />
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/Logo.svg";
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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

          {/* Desktop Auth Buttons */}
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
            
            {/* Mobile Auth Buttons */}
            <div className="md:w-1/3 pt-4 space-y-2">
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
          </div>
        </div>
      )}
    </nav>
  );
}