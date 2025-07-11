import React from "react";

export default function Hero({ title, img, text, page }) {
  return (
    <section
      className="w-full relative h-[200px] md:h-[480px] px-4 text-white text-center bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url("/${img}")` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#EA5B0C]/40 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {text && (
          <p className="mt-4 text-lg md:text-xl ">
            {text} <span className="text-gray-300">{page}</span>
          </p>
        )}
      </div>
    </section>
  );
}
