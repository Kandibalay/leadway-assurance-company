import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='marine lg:mt-16 h-[450px]'>
       <h1 className='py-1.5 container mx-auto  text-[40px] lg:text-[50px] font-bold'>Marine Insurance</h1>
       <NavLink to="/" className="text-lg ">
        Home &gt; <NavLink to="/#" className="text-white">Insurance &gt; <span className="text-[#ADADAD]">Marine Insurance</span> </NavLink>
      </NavLink>
    </div>
  )
}

export default Hero