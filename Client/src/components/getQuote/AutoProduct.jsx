import React, { useState, useEffect, useRef } from 'react';
import one from "../../assets/images/crashone.png";
import two from "../../assets/images/mantwo.png";
import three from "../../assets/images/carmancrash.png";
import four from "../../assets/images/dollar.jpg";


const cardData = [
  {
    title: "Comprehensive",
    description: "Complete protection for your vehicle — covering accidents, theft, fire, and third-party damages.",
    image: one,
  },
  {
    title: 'Third Party (Auto Base)',
    description:
      'Affordable cover that protects against damage or injury caused to others by your vehicle.',
    image: two,
  },
  {
    title: 'Third Party',
    description:
      'Essential legal cover for third-party injuries or property damage from your vehicle..',
    image:  three,
  },
  {

    title: 'protection',
    description:
      'Convenient life cover designed to support your loved ones and secure their future with ease.',
    image: four,
  },
  {
    title: "Comprehensive",
    description: "Complete protection for your vehicle — covering accidents, theft, fire, and third-party damages.",
    image: one,
  },
  {
    title: 'Third Party (Auto Base)',
    description:
      'Affordable cover that protects against damage or injury caused to others by your vehicle.',
    image: two,
  },
  {
    title: 'Third Party',
    description:
      'Essential legal cover for third-party injuries or property damage from your vehicle..',
    image:  three,
  },
  {

    title: 'protection',
    description:
      'Convenient life cover designed to support your loved ones and secure their future with ease.',
    image: four,
  },
];




const Autoproduct = () => {
  const [showAll, setShowAll] = useState(false);
  const carouselRef = useRef(null);

  // Optional: Auto-scroll carousel effect
  useEffect(() => {
    if (!showAll) {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [showAll]);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="text-black py-10 px-6 md:px-10 lg:px-14 container mx-auto hidden md:block">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-black font-bold text-3xl md:text-4xl text-start">
          Auto Products
          </h1>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 font-semibold px-6 py-3 rounded hover:bg-orange-500 hover:text-white transition-all"
          >
            {showAll ? "Show Less ←" : "See All →"}
          </button>
        </div>

        {showAll ? (
          <div className="grid grid-cols-4 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-center text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll gap-8 scroll-smooth no-scrollbar"
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md flex-shrink-0 w-[calc(100%/3.5)]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 flex flex-col gap-2 items-center justify-center">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-center text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MOBILE VIEW */}
      <div className="text-black py-10 container mx-auto md:hidden block">
        <div className="flex items-center justify-between mb-6 px-4">
          <h1 className="text-black font-bold text-3xl">General Products</h1>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-orange-500 font-semibold px-4 py-2 text-sm rounded hover:bg-orange-500 hover:text-white transition-all"
          >
            {showAll ? "Back" : "See All →"}
          </button>
        </div>

        {showAll ? (
          <div className="grid grid-cols-1 gap-4 px-4">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-orange-500 font-bold text-md mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-scroll no-scrollbar px-4">
            <div className="flex gap-4">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="bg-white text-black rounded-lg overflow-hidden shadow-md flex-shrink-0 w-64"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-orange-500 font-bold text-md mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Autoproduct