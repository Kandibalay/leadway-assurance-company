// import React from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NavBar from "./layouts/Navbar";
// import Footer from "./layouts/Footer";
// import Marine from "./pages/insurance/Marine";
// import MarineCargo from "./pages/insurance/MarineCargo";
// import SignUp from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";
// import Blog from "./pages/Blog";
// import CardCarousel from "./pages/Carousel";
// import { Routes, Route, useLocation } from "react-router-dom";
// import GetQuote from "./pages/GetQuote";
// import VerifyEmail from "./pages/auth/VerifyEmail";
// import ResetPassword from "./pages/auth/ResetPassword";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import NotFound from "./pages/NotFound";

// // Optional: import PrivateRoute if you want to protect routes
// // import PrivateRoute from "./components/PrivateRoute";

// function LayoutWrapper({ children }) {
//   const location = useLocation();
//   const pathname = location.pathname;
//   const noLayoutRoutes = [
//     "/auth/signin",
//     "/auth/signup",
//     "/auth/forgot-password",
//   ];
//   const hideLayout =
//     noLayoutRoutes.includes(location.pathname) ||
//     noLayoutRoutes.includes(pathname) ||
//     pathname.startsWith("/reset-password") ||
//     pathname.startsWith("/verify-email") ||
//     pathname === "/not-found" ||
//     pathname === "*"; 

//   return (
//     <>
//       {!hideLayout && <NavBar />}
//       {children}
//       {!hideLayout && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <LayoutWrapper>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/carousel" element={<CardCarousel />} />
//         <Route path="/get-quote" element={<GetQuote />} />

//         {/* Public Auth Routes */}
//         <Route path="/auth/signup" element={<SignUp />} />
//         <Route path="/auth/signin" element={<Login />} />
//         <Route path="/auth/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//         <Route path="/verify-email/:token" element={<VerifyEmail />} />

//         {/* Protected Routes (Optional: Wrap in <PrivateRoute>) */}
//         <Route path="/insurance/marine" element={<Marine />} />
//         <Route path="/insurance/marinecargo" element={<MarineCargo />} />

//         {/* 404 Catch-all route must come last */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </LayoutWrapper>
//   );
// }

// export default App;


import React from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Marine from "./pages/insurance/Marine";
import MarineCargo from "./pages/insurance/MarineCargo";
import SignUp from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Blog from "./pages/Blog";
import CardCarousel from "./pages/Carousel";
import { Routes, Route, useLocation } from "react-router-dom";
import GetQuote from "./pages/GetQuote";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ResetPassword from "./pages/auth/ResetPassword";
import ForgotPassword from "./pages/auth/ForgotPassword";
import NotFound from "./pages/NotFound";

// Optional: import PrivateRoute if you want to protect routes
// import PrivateRoute from "./components/PrivateRoute";

function LayoutWrapper({ children }) {
  const location = useLocation();
  const pathname = location.pathname;
  const noLayoutRoutes = [
    "/auth/signin",
    "/auth/signup",
    "/auth/forgot-password",
  ];
  
  const hideLayout =
    noLayoutRoutes.includes(location.pathname) ||
    noLayoutRoutes.includes(pathname) ||
    pathname.startsWith("/reset-password") ||
    pathname.startsWith("/verify-email") ||
    pathname === "/not-found" ||
    // This is the key addition - hide layout for any unmatched routes (404)
    !isValidRoute(pathname);

  return (
    <>
      {!hideLayout && <NavBar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

// Helper function to check if the current path matches any defined route
function isValidRoute(pathname) {
  const validRoutes = [
    "/",
    "/about",
    "/contact", 
    "/blog",
    "/carousel",
    "/get-quote",
    "/auth/signup",
    "/auth/signin", 
    "/auth/forgot-password",
    "/insurance/marine",
    "/insurance/marinecargo"
  ];
  
  // Check exact matches
  if (validRoutes.includes(pathname)) {
    return true;
  }
  
  // Check dynamic routes
  if (pathname.startsWith("/reset-password/") || pathname.startsWith("/verify-email/")) {
    return true;
  }
  
  return false;
}

function App() {
  return (
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carousel" element={<CardCarousel />} />
        <Route path="/get-quote" element={<GetQuote />} />

        {/* Public Auth Routes */}
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />

        {/* Protected Routes (Optional: Wrap in <PrivateRoute>) */}
        <Route path="/insurance/marine" element={<Marine />} />
        <Route path="/insurance/marinecargo" element={<MarineCargo />} />

        {/* 404 Catch-all route must come last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;