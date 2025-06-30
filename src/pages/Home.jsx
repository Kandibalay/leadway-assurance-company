import React from 'react'
import Hero from '../components/Hero'
import Insurance from '../components/Insurance'
import Report from '../components/Report'
import Testimonials from '../components/Testimonials'
import Companies from '../components/Companies'
import chatbox from "../assets/icons/chatbox.svg"

const Home = () => {
  const handleChatClick = () => {
    window.open('https://wa.me/2349030000000', '_blank');
  }
  return (
    <div className='py-16'>
        <Hero />
        <div className="fixed bottom-4 right-4 z-50">
            <img src={chatbox} alt="Chat" className="w-[70%] transition-transform transform hover:scale-110" onClick={handleChatClick} />
        </div>
        <Insurance />
         {/* <Asset/>
        <Retirement /> */}
        <Report />
        <Testimonials />
        {/* <Blog />
        <Download /> 
        <Companies /> */}
    </div>
  )
}

export default Home