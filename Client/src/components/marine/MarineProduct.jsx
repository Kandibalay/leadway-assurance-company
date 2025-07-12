import React from 'react'
import img1 from '../../assets/images/familyimg.png'
import img2 from '../../assets/images/cargo.png'
import img3 from '../../assets/images/Shipment.png'

const MarineProduct = () => (
  <div className='flex flex-col py-10 container mx-auto px-6 md:px-10 lg:px-14 text-black'>
    <div className="flex flex-col justify-center items-center gap-4  ">
      <h1 className="font-bold text-[28px] lg:text-[36px] text-center ">
        Marine Products
      </h1>
      <p className="font-semibold text-base lg:text-[20px] lg:w-[58%] text-center">
        Comprehensive cover for your vessels, cargo, and goods in transit — locally and internationally.
      </p>
    </div>

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto py-10'>
      <div>
        <div className='p-6'>
          <img src={img1} alt="" />
        </div>
        <div className='text-center my-5'>
          <h1 className='text-[#EA5B0C] font-bold text-[20px] lg:text-[25px]'>Marine Hull & Manchinary</h1>
            <p className='text-[#383838] font-normal mt-4 '>Protect your vessel and machinery from damage, collisions, and maritime risks — from port to sea.</p>
        </div>
      </div>
      <div>
        <div className='p-6'>
          <img src={img2} alt="" />
        </div>
        <div className='text-center my-5'>
          <h1 className='text-[#EA5B0C] font-bold text-[20px] lg:text-[25px]'>Marine Cargo  </h1>
          <p className='text-[#383838] font-normal mt-4'>Secure your goods in transit against loss, theft, or damage — whether by sea, air, or land.</p>
        </div>
      </div>
      <div>
        <div className='p-6'>
          <img src={img3} alt="" />
        </div>
        <div className='text-center my-5'>
          <h1 className='text-[#EA5B0C] font-bold text-[20px] lg:text-[25px]'>Goods in Transit</h1>
          <p className='text-[#383838] font-normal mt-4'>Protect your goods while moving within Nigeria — from warehouse to final destination, by road or rail.</p>
        </div>
      </div>
    </div>
  </div>
)

export default MarineProduct