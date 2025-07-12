import React from 'react'

const Hero = () => {
  return (
    <div className='marine-cargo  py-10 px-6 md:px-10 lg:px-14 h-[450px]'>
        <div className="container mx-auto">
          <h1 className='font-extrabold text-center  text-[25px] lg:text-[45px]'>Marine Cargo Insurance</h1>
          <p className='font-light text-[12px] lg:text-[20px] mt-4'>Protect Your Cargo, Every Mile of the Way</p>
          <div className='my-5'>
            <button className='text-white bg-orange-500 hover:bg-orange-800 rounded-md w-30 py-3 font-semibold button'>Get Quote</button>
          </div>
        </div>
    </div>
  )
}

export default Hero