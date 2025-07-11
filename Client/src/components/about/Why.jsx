import React from 'react'
import img from '../../assets/icons/Fair.svg'
import img2 from '../../assets/icons/Trust.svg'
import img3 from '../../assets/icons/industry.svg'
import img4 from '../../assets/icons/marketing.svg'
import img5 from '../../assets/icons/innovative.svg'


const Why = () => {
  return (
     <div className='text-black py-12 px-6 md:px-10 lg:px-14 container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-4' >
            <h1 className='font-bold text-[28px] lg:text-[36px] text-center'>Why Choose US</h1>
            <p className='font-light text-base lg:text-base lg:w-[50%] text-center'>Our strong claims service and solid financial standing support the diverse clients who trust us to manage their risks</p>
        </div>
        <div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto py-10 '>
                    <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
                        <img src={img} alt="" />  
                        <h3 className='font-semibold text-[20px] mt-2.5 '>Fast and Fair</h3>
                        <p className='text-[#5A5A5A] mt-3 text-[14px] lg:text-base'>Fast, fair, and dependable claims handling with N67.1 billion paid in 2023 alone</p>
                    </div>
                    <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
                        <img src={img2} alt="" />
                        <h3 className='font-semibold text-[20px] mt-2.5'>Trustworthy</h3>
                        <p className='text-[#5A5A5A] mt-3 text-[14px] lg:text-base'>Decades of trust, from personal homes to businesses and farmers</p>
                    </div>
                    <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
                    <img src={img3} alt="" />
                        <h3 className='font-semibold text-[20px] mt-2.5'>Industry Recognize</h3>
                        <p className='text-[#5A5A5A] mt-3 text-[14px] lg:text-base'>Award-winning performance recognized by industry leaders</p>
                    </div>
            </div>
            <div className='w-full lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
                    <img src={img4} alt="" />
                        <h3 className='font-semibold text-[20px] mt-2.5'>Financial Stability</h3>
                        <p className='text-[#5A5A5A] mt-3 text-[14px] lg:text-base'>Strong financial backing and industry-leading creditworthiness</p>
                    </div>
                    <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
                        <img src={img5} alt="" />
                        <h3 className='font-semibold text-[20px] mt-2.5'>Innovative</h3>
                        <p className='text-[#5A5A5A] mt-3 text-[14px] lg:text-base'>Leading the way in innovative solutions for our clients</p>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Why