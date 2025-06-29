import React from 'react'
import reportImg from "../assets/images/report-img.png";



const Report = () => {
  
  
    return (
    <>
    <main className='bg-white '>
        <div className=' container gap-10 md:flex  hidden items-center mx-auto my-10'>
            <div className='mx-30'>
              <h2 className='font-bold text-[45px] my-3'>Annual Report</h2>

              <p className='text-[20px] font-semibold text-[#383838]'>Access detailed performance insights, strategic
                </p>
                <p className='text-[20px] font-semibold text-[#383838]'>updates, and how we’re delivering long-term </p>
                <p  className='text-[20px] font-semibold text-[#383838]'>value to policyholders and partners.</p>
                <button className='my-3 bg-[#EA5B0C] text-white w-40 h-10 rounded-md'>View Annual Report</button>
            </div>
            <div>
              <img className='w-[400px] hidden md:block' src={reportImg} alt="" />
            </div>
        </div>

         <div className=' '>
            <div className=' container mx-auto items-center p-5 md:hidden'>
              <h2 className='font-bold text-[35px]  my-3 text-center'>Annual Report</h2>
              <div>
              <img className='w-[400px] md:hidden' src={reportImg} alt="" />
            </div>

              <p className='text-[20px] font-semibold text-[#383838] text-center'>Access detailed performance insights, strategic
                updates, and how we’re delivering long-term 
                value to policyholders and partners.
                </p>
                <button className='my-3 mx-20 bg-[#EA5B0C] text-white w-40 h-10 rounded-md'>View Annual Report</button>
            </div>
           
        </div>
    </main>
    </>
  )
}

export default Report