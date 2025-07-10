import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './layouts/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './layouts/Footer'
import Marine from './pages/Marine'
import MarineCargo from './pages/MarineCargo'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/marine' element={<Marine />} />
          <Route path='/marinecargo' element={<MarineCargo />} />
        </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  )
}

export default App
