import React from 'react'
import img1 from '../../assets/icons/timer-start.svg'
import img2 from '../../assets/icons/ship-icon.svg'
import img3 from '../../assets/icons/flash.svg'
import img4 from '../../assets/icons/global.svg'


const Achievement = () => (
  <div className='text-black py-4  md:px-10 lg:px-14 gap-12 bg-[#EBEBEB]'>
    <div className='grid grid-cols-1 lg:grid-cols-4 container px-17 gap-4 mx-auto py-2'>
      <div className=' border-b lg:border-b-0 lg:border-r border-b-[#969696] lg:border-[#969696] py-8 px-7  text-center'>
        <div className='flex justify-center'>
          <img src={img1} alt="" />
        </div>
        <div className='mt-7'>
          <h3 className='text-[20px]'><span className='font-extrabold text-[20px]'>50+</span> Years of Trusted</h3>
          <p className='text-[20px] '>Marine Coverage</p>
        </div>
      </div>
      <div className='border-b lg:border-b-0 lg:border-r border-b-[#969696] lg:border-[#969696] py-8 px-7  text-center'>
        <div className='flex justify-center'>
          <img src={img2} alt="" />
        </div>
        <div className='mt-7'>
          <h3 className=''><span className='font-extrabold text-[20px]'>Tailored policies </span></h3>
          <p className='text-[20px] '>for Every Shipment</p>
        </div>
      </div>
      <div className='border-b lg:border-b-0 lg:border-r border-b-[#969696] lg:border-[#969696] py-8 px-7  text-center'>
        <div className='flex justify-center'>
          <img src={img3} alt="" />
        </div>
        <div className='mt-7'>
          <h3 className='text-[20px]'><span className='font-extrabold text-[20px]'>Swift & Transparent </span></h3>
          <p className='text-[20px] '>Claims Process</p>
        </div>
      </div>
      <div className='lg:border-r lg:border-[#969696]py-8 px-7  text-center'>
        <div className='flex justify-center'>
          <img src={img4} alt="" />
        </div>
        <div className='mt-7'>
          <h3 className='text-[20px]'><span className='font-extrabold text-[20px]'>Global Reach</span></h3>
          <p className='text-[20px] '>Local Support</p>
        </div>
      </div>

    </div>
  </div>
)

export default Achievement