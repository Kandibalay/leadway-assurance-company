import React from "react";
import { useState, useEffect } from "react";
import logo1 from "../assets/icons/company logo1.svg";
import logo2 from "../assets/icons/company logo2.svg";
import logo3 from "../assets/icons/company logo3.svg";
import logo4 from "../assets/icons/company logo4.svg";
import logo5 from "../assets/icons/company logo6.svg";
import logo6 from "../assets/icons/company logo7.svg";

const Companies = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  // Sample logos - replace with your actual logo data
  const logos = [
    { id: 1, name: "Apple", icon: logo1 },
    { id: 2, name: "Google", icon: logo2 },
    { id: 3, name: "Microsoft", icon: logo3 },
    { id: 4, name: "Amazon", icon: logo4 },
    { id: 5, name: "Meta", icon: logo5 },
    { id: 6, name: "Netflix", icon: logo6 },
    { id: 7, name: "Tesla", icon: logo1 },
    { id: 8, name: "Adobe", icon: logo2 },
    { id: 9, name: "Spotify", icon: logo3 },
  ];

  const logosPerView = 6;

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we've shown all possible combinations
        return nextIndex > logos.length - logosPerView ? 0 : nextIndex;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [logos.length]);

  // Get currently visible logos
  const getVisibleLogos = () => {
    const visibleLogos = [];
    for (let i = 0; i < logosPerView; i++) {
      const logoIndex = (currentStartIndex + i) % logos.length;
      visibleLogos.push(logos[logoIndex]);
    }
    return visibleLogos;
  };

  const visibleLogos = getVisibleLogos();

  // Manual navigation
  const goToPrevious = () => {
    setCurrentStartIndex(
      currentStartIndex === 0
        ? logos.length - logosPerView
        : currentStartIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentStartIndex(
      currentStartIndex >= logos.length - logosPerView
        ? 0
        : currentStartIndex + 1
    );
  };

  return (
    <div>
      <div className="w-full container mx-auto p-4 bg-white">
        <div className="text-center">
          <h2 className="text-center text-[45px] font-bold my-6">
            Associated Companies
          </h2>
        </div>

        {/* Main Logo Display - 6 logos in a row */}
        <div className="relative bg-white rounded-2xl p-3 mb-4 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-white"></div>
          </div>

          {/* Logo Row - Straight Line */}
          <div className="relative z-10 flex items-center justify-between">
            {visibleLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${currentStartIndex}-${index}`}
                className="flex-1 flex flex-col items-center transform transition-all duration-500 ease-in-out hover:scale-110 group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <img src={logo.icon} alt="" className="w-30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
