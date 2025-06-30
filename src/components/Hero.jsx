import React from 'react'
import Img from "../assets/images/hero img.png"

const Hero = () => {
  return (
    <div className='hero '>
        <div className='py-10 w-full h-[500px] container mx-auto flex flex-col items-center justify-center gap-3'>
        <h1 className='text-[40px] w-[95%] lg:w-full lg:text-[50px] leading-[1.2] lg:leading-none'>Insurance that puts you first.</h1>
        <p className='text-[18px] w-[80%] lg:w-full lg:text-[25px] font-medium'>Confidence in every claim. Support at every step.</p>
        <div className=' flex flex-col lg:flex-row gap-4 mt-8 w-full md:w-1/2 lg:w-[25%] xl:w-[20%] '>
            <button type="button" className='bg-[#EC5B0C] rounded-md mx-auto lg:mx-0 py-3 w-1/2 font-semibold'>Get Quote</button>
            <button type="button" className='border rounded-md mx-auto lg:mx-0 py-3 w-1/2 font-semibold'>Explore Plans</button>
        </div>
    </div>
    </div>
  )
}

export default Hero