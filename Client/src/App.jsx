import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './layouts/Navbar'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Footer from './layouts/Footer'
import SignUp from './pages/auth/Signup'
import Login from './pages/auth/Login'

function LayoutWrapper({ children }) {
  const location = useLocation();

  // Pages where navbar/footer should NOT be shown
  const noLayoutRoutes = ["/auth/login", "/auth/signup"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  
  return (
    <div>
      <Router>
        <LayoutWrapper>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/auth/signup' element={<SignUp />} />
            <Route path='/auth/login' element={<Login />} />
          </Routes>
        </LayoutWrapper>
      </Router>  
    </div>
  )
}

export default App
