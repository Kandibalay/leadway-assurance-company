import React, { useState, useEffect, useRef } from 'react';
import one from "../../assets/images/familyone.png";
import two from "../../assets/images/womantwo.png";
import three from "../../assets/images/familythree.png";
import four from "../../assets/images/familyfour.jpg";


const cardData = [
  {
    title: "Family Benefit",
    description:
      "Provides financial support to your loved ones in the event of life’s uncertainties, helping them stay secure.",
    image: one,
  },
  {
    title: "Lifestyle Protection Plan",
    description:
      "Helps you maintain your lifestyle by offering financial support during major life disruptions or loss of income.",
    image: two,
  },
  {
    title: "Term Life",
    description:
      "Affordable life insurance that offers high coverage for a fixed term, giving your family peace of mind.",
    image: three,
  },
  {
    title: "Protection",
    description:
      "Life cover designed to support your loved ones and secure their future with ease.",
    image: four,
  },
  {
    title: "Family Benefit",
    description:
      "Provides financial support to your loved ones in the event of life’s uncertainties, helping them stay secure.",
    image: one,
  },
  {
    title: "Lifestyle Protection Plan",
    description:
      "Helps you maintain your lifestyle by offering financial support during major life disruptions or loss of income.",
    image: two,
  },
  {
    title: "Term Life",
    description:
      "Affordable life insurance that offers high coverage for a fixed term, giving your family peace of mind.",
    image: three,
  },
  {
    title: "Protection",
    description:
      "Life cover designed to support your loved ones and secure their future with ease.",
    image: four,
  },
];




const LifeProduct = () => {
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
          Life Products
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
        <div className="flex flex-col items-center justify-center mb-6 px-4">
          <h1 className="text-black text-center font-bold text-3xl">Life Products</h1>
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
                  className="bg-white text-black rounded-lg overflow-hidden shadow-md flex-shrink-0 w-84"
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


export default LifeProduct;