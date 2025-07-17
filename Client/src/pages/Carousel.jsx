import React, { useState, useRef, useEffect } from 'react';
import { Eye } from 'lucide-react';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const scrollContainerRef = useRef(null);

  // Sample card data - replace with your actual data
  const cards = [
    { id: 1, title: 'Card 1', content: 'Content for card 1', color: 'bg-blue-500' },
    { id: 2, title: 'Card 2', content: 'Content for card 2', color: 'bg-green-500' },
    { id: 3, title: 'Card 3', content: 'Content for card 3', color: 'bg-purple-500' },
    { id: 4, title: 'Card 4', content: 'Content for card 4', color: 'bg-red-500' },
    { id: 5, title: 'Card 5', content: 'Content for card 5', color: 'bg-yellow-500' },
    { id: 6, title: 'Card 6', content: 'Content for card 6', color: 'bg-pink-500' },
    { id: 7, title: 'Card 7', content: 'Content for card 7', color: 'bg-indigo-500' },
    { id: 8, title: 'Card 8', content: 'Content for card 8', color: 'bg-teal-500' },
    { id: 9, title: 'Card 9', content: 'Content for card 9', color: 'bg-orange-500' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  const Card = ({ card }) => (
    <div className={`${card.color} rounded-lg p-6 text-white shadow-lg transform transition-transform duration-200 hover:scale-105`}>
      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
      <p className="text-sm opacity-90">{card.content}</p>
    </div>
  );

  if (showAll) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
        
        {/* See Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span>See Less</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Card Carousel</h2>
      
      {/* Carousel Container */}
      <div className="relative">
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className="overflow-hidden"
        >
          {/* Mobile: Show only first 3 cards */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-6">
              {cards.slice(0, 3).map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
          
          {/* Desktop: Auto-scrolling carousel */}
          <div className="hidden md:block">
            <div className="flex transition-transform duration-1000 ease-in-out">
              {cards.concat(cards.slice(0, 2)).map((card, index) => (
                <div
                  key={`${card.id}-${index}`}
                  className="w-1/3 flex-shrink-0 px-3"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                  }}
                >
                  <Card card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Eye className="w-5 h-5" />
          <span>See More</span>
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;