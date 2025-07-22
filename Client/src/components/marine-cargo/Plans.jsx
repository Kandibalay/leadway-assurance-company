import React from 'react'
import img1 from '../../assets/images/investmentPlan.png'
import img2 from '../../assets/images/happyFamily.png'
import img3 from '../../assets/images/travelInsurance.png'

const Plans = () => (
    <div className='lg:w-[90%] flex flex-col pt-10 pb-2 container mx-auto px-6 md:px-10 lg:px-14 text-black'>
        <div className="flex flex-col justify-center items-center gap-4  ">
        <h1 className="font-bold text-[28px] lg:text-[36px] text-center ">
          Recommended Plans
        </h1>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto py-10'>
        <div >
            <div className='hover:scale-110 transition duration-500'>
                <img src={img1} alt="" />
            </div>
            <div className='text-center my-2'>
                <h1 className='text-[#EA5B0C] font-bold text-[18px] lg:text-[20px]'>Leadway Investment Plan</h1>
                <p className='text-[#383838] text-[14px] lg:text-base font-normal mt-3'>Enjoy the benefits of steady returns and life cover with a flexible, long-term investment plan.</p>
            </div>
        </div>
        <div>
            <div className='hover:scale-110 transition duration-500'>
                <img src={img2} alt="" />
            </div>
            <div className='text-center my-2'>
                <h1 className='text-[#EA5B0C] font-bold text-[18px] lg:text-[20px]'>Family Benefit</h1>
                <p className='text-[#383838] text-[14px] lg:text-base font-normal mt-3'>Provides financial support to your loved ones in the event of life’s uncertainties, helping them stay secure.</p>
            </div>
        </div>
        <div>
            <div className='hover:scale-110 transition duration-500'>
                <img src={img3} alt="" />
            </div>
            <div className='text-center my-2'>
                <h1 className='text-[#EA5B0C] font-bold text-[18px] lg:text-[20px]'>Travel Insurance </h1>
                <p className='text-[#383838] text-[14px] lg:text-base font-normal mt-3'>Stay protected during local or international trips with cover for medical emergencies, delays, and lost baggage.</p>
            </div>
        </div>
      </div>
    </div>
)

export default Plans