import React from 'react'
import Hero from '../components/Hero'
import Insurance from '../components/Insurance'
import Report from '../components/Report'
import Testimonials from '../components/Testimonials'
import Companies from '../components/Companies'

const Home = () => {
  const handleChatClick = () => {
    window.open('https://wa.me/2349030000000', '_blank');
  }
  return (
    <div>
        <Hero />
        <div className="fixed bottom-4 right-4 z-50">
          <button onClick={handleChatClick} className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            <img src="/assets/icons/chatbox.svg" alt="Chat" className="w-6 h-6" />
          </button>
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