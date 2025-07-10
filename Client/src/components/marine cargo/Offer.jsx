import React from 'react'
import img1 from '../../assets/icons/box.svg'
import img2 from '../../assets/icons/lock.svg'
import img3 from '../../assets/icons/note.svg'
import img4 from '../../assets/icons/ship.svg'
import img5 from '../../assets/icons/timer.svg'
import img6 from '../../assets/icons/truck-fast.svg'




const Offer = () => {
  return (
    <div className='text-black py-12 px-6 md:px-10 lg:px-14 container mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4 p-6'>
        <h1 className='font-bold text-[28px] lg:text-[36px] text-center'>What We Offer</h1>
        <p className='font-light text-base lg:text-[20px] lg:w-[95%] text-center'>Reliable, tailored protection for your cargo against loss or damage during transit by sea, air, or land — whether importing, exporting, or moving locally.</p>
      </div>

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto py-10'>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img1} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>All-Risk Coverage for
            Goods in Transit</h3>
          <p className='text-[#5A5A5A] mt-3 '>Safeguard your goods from loss and damage during transit, whether by land, sea, or air.</p>
        </div>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img4} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>General Average and
            Salvage Charges</h3>
          <p className='text-[#5A5A5A] mt-3 '>Covers your share of expenses if the cargo or vessel requires salvage during transit..</p>
        </div>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img6} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>Warehouse-to-Warehouse
            Coverage</h3>
          <p className='text-[#5A5A5A] mt-3 '>Complete transit coverage — from pickup to delivery, across land, air, or sea.</p>
        </div>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img2} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>Theft, Piracy & Accidental
            Loss Protection</h3>
          <p className='text-[#5A5A5A] mt-3 '>Guard against risks like theft, piracy, water damage, or fire while cargo is in transit.</p>
        </div>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img3} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>Flexible and Customizable Policy Options</h3>
          <p className='text-[#5A5A5A] mt-3 '>Flexible plans tailored to your cargo type, volume, route, and frequency of shipments.</p>
        </div>
        <div className='border border-[#F6BC9B] rounded-lg py-5 px-7'>
          <img src={img5} alt="" />
          <h3 className='font-semibold text-[20px] mt-2.5 '>Prompt and Transparent Claims Processing</h3>
          <p className='text-[#5A5A5A] mt-3 '>Efficient claims handling with minimal disruption, so your operations stay on track.</p>
        </div>
      </div>
    </div>
  )
}

export default Offer