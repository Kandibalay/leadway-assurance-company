import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/icons/Logo.svg"
import NotFoundImage from "../assets/images/404 error.png"

const NotFound = () => {
  return (
    <div className='w-full flex flex-col items-center h-screen lg:h-full  justify-center container mx-auto'>
        <Link to="/" className="flex flex-col items-center justify-center mt-4 w-full shadow-md">
            <img src={Logo} alt="Logo"   />
        </Link>
        <div className='mt-2'>
            <img src={NotFoundImage} alt="404 Not Found" className='w-[90%] h-[90%]'/>
        </div>
        <div className="text-center flex flex-col items-center gap-2 mb-6">
            <h4 className="text-base font-semibold text-black">Oops!</h4>
            <h2 className="text-xl font-normal text-black">We can’t find the page you’re looking for.</h2>
            <Link to="/" className="my-2 text-base text-white bg-[#EA5B0C] hover:bg-orange-700 py-2 px-2 rounded-md">Back to Home</Link>
        </div>
    </div>
  )
}

export default NotFound