import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero({ title, img, text, page }) {
  return (
    <section
      className="w-full relative lg:mt-16 h-[450px] px-4 text-white text-center bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url("/${img}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EA5B0C]/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl py-2 font-bold">{title}</h1>
        {text && (
          <NavLink to="/" className="mt-2 text-lg ">
            {text} <span className="text-gray-300">{page}</span>
          </NavLink>
        )}
      </div>
    </section>
  );
}
