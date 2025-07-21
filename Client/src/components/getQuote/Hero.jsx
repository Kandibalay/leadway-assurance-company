import React from 'react';
import bgImage from "../../assets/images/HeroGetqoute.jpg"; 

const Hero = () => {
  return (
    <section
      className="relative h-[450px] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, #EA5B0C, #000000)',
          opacity: 0.7, // Optional: You can remove this if you want full solid overlay
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="mt-2 text-lg">
          <span className="text-[#ADADAD]">Home</span>
          <span className="mx-2">{'>'}</span>
          <span className="text-white">Get Quote</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
