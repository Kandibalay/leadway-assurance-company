import React from 'react'
import img1 from '../../assets/images/marine machinery.png'
import img2 from '../../assets/images/marine cargo.png'
import img3 from '../../assets/images/Goods in transit.png'
import { NavLink } from 'react-router-dom'

const MarineProduct = () => (
  <div className='flex flex-col py-2 lg:py-10 container mx-auto px-6 md:px-10 lg:px-14 text-black'>
    <div className="flex flex-col justify-center items-center gap-4 ">
      <h1 className="font-bold text-[28px] lg:text-[36px] text-center ">
        Marine Products
      </h1>
      <p className="font-semibold text-base lg:text-[20px] lg:w-[58%] text-center">
        Comprehensive cover for your vessels, cargo, and goods in transit — locally and internationally.
      </p>
    </div>

    <div className='w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto py-10'>
      <div className='flex flex-col items-center justify-center gap-4 lg:gap-2'>
        <div className='hover:scale-110 transition duration-500'>
          <img src={img1} alt="" />
        </div>
        <div className='text-center '>
          <h1 className='text-[#EA5B0C] font-bold text-[16px] lg:text-[20px]'>Marine Hull & Machinery</h1>
            <p className='text-[#383838] text-[14px] lg:text-[16px] font-normal mt-3 '>Protect your vessel and machinery from damage, collisions, and maritime risks — from port to sea.</p>
        </div>
      </div>
      <NavLink to="/insurance/marinecargo" className='flex flex-col items-center justify-center gap-4 lg:gap-2'>
        <div className='hover:scale-110 transition duration-500'>
          <img src={img2} alt="" />
        </div>
        <div  className='text-center'>
          <h1 className='text-[#EA5B0C] font-bold text-[16px] lg:text-[20px]'>Marine Cargo  </h1>
          <p className='text-[#383838] text-[14px] lg:text-[16px] font-normal mt-3'>Secure your goods in transit against loss, theft, or damage — whether by sea, air, or land.</p>
        </div>
      </NavLink>
      <div className='flex flex-col items-center justify-center gap-4 lg:gap-2'>
        <div className='hover:scale-110 transition duration-500'>
          <img src={img3} alt="" />
        </div>
        <div className='text-center'>
          <h1 className='text-[#EA5B0C] font-bold text-[16px] lg:text-[20px]'>Goods in Transit</h1>
          <p className='text-[#383838] text-[14px] lg:text-[16px] font-normal mt-3'>Protect your goods while moving within Nigeria — from warehouse to final destination, by road or rail.</p>
        </div>
      </div>
    </div>
  </div>
)

export default MarineProduct