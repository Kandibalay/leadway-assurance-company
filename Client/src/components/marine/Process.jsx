import React from 'react'
import img1 from "../../assets/images/processImg.png"
import img2 from '../../assets/icons/arrow-right.svg'

const Process = () => {
  return (
    <div className='flex flex-col gap-[55px] py-10 container mx-auto px-6 md:px-10 lg:px-14 text-black'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center md:justify-center md:items-center gap-16  text-black'>
        <div className="">
          <img src={img1} alt="" />
        </div>

        <div className='flex flex-col justify-center items-start gap-4 lg:gap-6'>
          <div>
            <h1 className='font-extrabold text-[20px] lg:text-[35px]'>Fast, Fair, and Transparent Claims Process</h1>
            <p className='text-lg lg:my-6 font-semibold text-[16px] lg:text-[20px]'>We’re committed to resolving your claims quickly</p>
          </div>

          <div className='text-[14px] lg:text-[16px]'>
            <ul className='list-disc list-inside lg:mb-8'>
              <li className='mb-3 '>Claims acknowledged within 24–48 hours of notification</li>
              <li className='mb-3 '> Payments processed in as little as 24 hours for eligible claims</li>
              <li className='mb-3 '>Submit and track your claims easily via our online portal</li>
            </ul>
          </div>

          <div>
            <button className='flex justify-center gap-3 text-white bg-orange-600 hover:bg-orange-800 rounded-md w-55 py-3 font-semibold button'>
              View Procedures
              <div>
                <img src={img2} alt="" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Process