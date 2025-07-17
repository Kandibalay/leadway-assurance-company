import React from 'react'

const Asset = () => {
  return (
    <div  className='asset flex flex-col justify-center items-start'>
        <div className='py-10 px-6 md:px-10 lg:px-14 container mx-auto'>
           <h1 className='text-white font-bold text-[28px] lg:text-[36px]'>Asset Managment</h1>
            <p className='sm:flex sm:flex-col text-white text-[14px] lg:text-[20px]  lg:w-[55%] mb-5'>Diversify your portfolio with expert-managed <span> mutual funds and investment plans tailored to </span> your risk appetite</p>
            <button className='text-white text-[14px] text-base bg-[#EA5B0C] hover:bg-orange-700 rounded-md w-35 py-3 font-bold button'>Explore Plans</button>
        </div>
    </div>
  )
}

export default Asset