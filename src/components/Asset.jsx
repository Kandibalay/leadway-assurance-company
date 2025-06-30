import React from 'react'

const Asset = () => {
  return (
    <div  className='asset py-10 px-6 md:px-10 lg:px-14 flex flex-col justify-center items-start'>
        <div>
           <h1 class='text-white font-bold text-[28px] lg:text-[36px]'>Asset Managment</h1>
            <p class='text-white text-[20px] lg:w-[55%] mb-5'>Diversify your portfolio with expert-managed mutual funds and investment plans tailored to your risk appetite</p>
            <button class='text-white bg-orange-600 hover:bg-orange-700 rounded-md w-35 py-3 font-bold button'>Explore Plans</button>
        </div>
    </div>
  )
}

export default Asset