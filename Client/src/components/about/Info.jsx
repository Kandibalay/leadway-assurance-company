import React from 'react'
import abt from '../../assets/images/about-img.png'
import img from "../../assets/images/img-2.svg"
import img2 from "../../assets/images/img-3.svg"
import img3 from "../../assets/images/img-4.svg"
import img4 from "../../assets/images/img-5.svg"
import img5 from "../../assets/icons/starIcon.svg"
const Info = () => {
  return (
    <div className=' container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between py-8 lg:py-16 mx-auto px-6 md:px-10 lg:px-14  text-black'>
      <div className='flex flex-col gap-3 items-center lg:items-start justify-center'>
        <h1 className='font-extrabold text-[28px] lg:text-[36px] text-center lg:text-left '>About Leadway Assurance</h1>
        <p className='font-medium  mt-3 text-left sm:text-center lg:text-left '>For over 45 years, LEADWAY has honored its underwriting commitments and has earned its reputation of excellence in claims handling.  The evolution of LEADWAY since 1970 has mirrored the dramatic expansion of indigenous insurance service providers, with LEADWAY remaining in the forefront as an insurer of repute.</p>


          <div className="mt-7">
          <div className='flex justify-center'>
            <img src={img4} alt="" />
            <img src={img3} alt="" className='-ml-2'/>
            <img src={img2} alt="" className='-ml-2'/>
            <img src={img} alt="" className='-ml-2' />

            <div className='flex items-center mx-4'>
                <img src={img5} alt="" />
                <img src={img5} alt="" />
                <img src={img5} alt="" />
                <img src={img5} alt="" />
                <img src={img5} alt="" />
                <span className='text-[#EC5B0C]'>
                  <h6 className='mx-2'>5.0</h6>
                </span>
                
            </div>
          </div>
          </div>
             <div className=''>
              <h4 className='text-[#5A5A5A]'>From 2000+ reviews</h4>
            </div>
          
      </div>



        <div className='w-full'>
            <img src={abt} alt=""  />
        </div>
    </div>

  )
}

export default Info