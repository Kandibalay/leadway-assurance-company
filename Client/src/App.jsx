// import React from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NavBar from "./layouts/Navbar";
// import { BrowserRouter as Router, Routes, Route, useLocation,} from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext2";
// import Footer from "./layouts/Footer";
// import Marine from "./pages/insurance/Marine";
// import MarineCargo from "./pages/insurance/MarineCargo";
// import SignUp from "./pages/auth/Signup";
// import Login from "./pages/auth/Login";
// import Blog from "./pages/Blog";
// import CardCarousel from "./pages/Carousel";

// function LayoutWrapper({ children }) {
//   const location = useLocation();

//   // Pages where navbar/footer should NOT be shown
//   const noLayoutRoutes = ["/auth/login", "/auth/signup"];
//   const hideLayout = noLayoutRoutes.includes(location.pathname);

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
//     <div>
//       <Router>
//         <LayoutWrapper>
//         <AuthProvider >
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />

//             {/* <Route path="/insurance" element={<Insurance />} /> */}
//             <Route path="/insurance/marine" element={<Marine />} />
//             <Route path="/insurance/marinecargo" element={<MarineCargo />} />
//             <Route path="/auth/signup" element={<SignUp />} />
//             <Route path="/auth/login" element={<Login />} />
//           </Routes>
//         </AuthProvider>
//         </LayoutWrapper>
//       </Router>
//     </div>
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

// Optional: import PrivateRoute if you want to protect routes
// import PrivateRoute from "./components/PrivateRoute";

function LayoutWrapper({ children }) {
  const location = useLocation();
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
    <LayoutWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carousel" element={<CardCarousel />} />

        {/* Public Auth Routes */}
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />

        {/* Protected Routes (Optional: Wrap in <PrivateRoute>) */}
        <Route path="/insurance/marine" element={<Marine />} />
        <Route path="/insurance/marinecargo" element={<MarineCargo />} />
      </Routes>
    </LayoutWrapper>
  );
}

export default App;

