import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Joan Eva",
    text: "I felt more in control. Their coverage options are clear, affordable, and actually match your needs.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Dr. Diatah Femi",
    text: "They saved me hundreds and gave me better coverage. Switching was the best decision I made this year!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Chris Mark",
    text: "Customer service is outstanding. I got real answers from real people—no endless wait times.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    name: "Eli Ahmed",
    text: "Their mobile app makes managing my policy a breeze. Insurance has never been this convenient.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 4,
  },
  {
    name: "Sydney Wang",
    text: "After my claim, they handled everything swiftly and compassionately. Truly appreciated!",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    rating: 5,
  },
  {
    name: "Michael Ade",
    text: "I’ve never had such seamless claims before. They made the process so easy and stress-free!",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
    rating: 5,
  },
  
  {
    name: "Henry Lawson",
    text: "Great experience with their customer support. It really felt like talking to a friend.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 4,
  },
  
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-4">
      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating ? "text-orange-400" : "text-orange-200"
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm md:text-base mb-4 max-w-xs">{testimonial.text}</p>
      <div className="flex items-center mt-2">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <span className="font-semibold text-gray-800">{testimonial.name}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const visibleCards = 5;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(autoSlide);
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(current + i) % testimonials.length]);
    }
    return visible;
  };

  return (
   <section className="py-16 bg-white text-black text-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-10">Testimonials</h2>

      <div className="flex items-center justify-center max-w-6xl mx-auto">
        <div className="flex gap-6 justify-center transition-transform duration-500 ease-in-out">
          {getVisibleTestimonials().map((testimonial, index) => {
            // index 2 is the middle card when showing 5
            let cardClass = "";
            if (index === 2) {
              cardClass = "shadow-2xl scale-110 z-10";
            } else if (index === 1 || index === 3) {
              cardClass = "shadow-lg scale-100 opacity-80 z-0";
            } else {
              cardClass = "shadow-md scale-95 opacity-50 blur-[1px] z-0";
            }
        return (
              <div
                key={index}
                className={`
                  w-[260px] bg-white rounded-lg p-6
                  transition-all duration-500
                  ${cardClass}
                `}
                style={{
                  fontWeight: index === 2 ? "bold" : "normal",
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            );
          })}
        </div>
      </div>

    {/* Pagination with arrows */}
    <div className="flex justify-center items-center mt-6 space-x-4">
      <button
        onClick={prevSlide}
        className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
      >
        <FiChevronLeft size={24} />
      </button>

      <div className="flex space-x-2">
        {getVisibleTestimonials().map((_, idx) => {
          // Middle dot is always index 1
          const isMiddle = idx === 1;
          return (
            <div
              key={idx}
              className={`w-4 h-4 rounded-full flex items-center justify-center cursor-pointer transition-all
                ${isMiddle ? "bg-orange-500 font-bold scale-125 text-white shadow-lg" : "bg-gray-300 text-gray-400"}
              `}
              style={{
                fontWeight: isMiddle ? "bold" : "normal",
                fontSize: isMiddle ? "1.25rem" : "1rem",
              }}
              // Optional: allow clicking dots to jump to testimonial
              onClick={() => setCurrent((current + idx) % testimonials.length)}
            >
              {/* Use a dot or leave empty for just a circle */}
              {isMiddle ? <span className="block w-2 h-2 rounded-full bg-white" /> : ""}
            </div>
          );
        })}
      </div>

      <button
        onClick={nextSlide}
        className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600"
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  </section>
);

};

export default Testimonials;