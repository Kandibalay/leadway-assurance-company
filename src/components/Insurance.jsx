import React from 'react'
import { insuredData } from '../Db'

const Insurance = () => {
  return (
    <div className='w-full container lg:w-[70%] mx-auto my-10'>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
            {insuredData.map((item) => (
            <div key={item.id} className='bg-[#FDEFE7] shadow-lg rounded-lg p-6 flex flex-col items-start'>
                <img src={item.image} alt={item.title} className='w-12 h-12 mb-4' />
                <h2 className='text-[18px] lg:text-xl  font-semibold mb-2 text-[#222222]'>{item.title}</h2>
                <p className='text-[14px] lg:text-base text-[#222222] text-left'>{item.desc}</p>
                <a href="#" type="button" className='mt-4 text-[14px] lg:text-base text-[#EA5B0C] rounded-md py-2 font-semibold underline'>View Details</a>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Insurance