import React from 'react'

import './App.css'
import chatbox from "./assets/icons/chatbox.svg"
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './layouts/Footer'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/instant' element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  )
}

export default App
