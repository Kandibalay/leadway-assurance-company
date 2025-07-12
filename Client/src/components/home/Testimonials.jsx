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
  const visibleCards = 3;

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
    <section className="py-6  px-6 md:px-10 lg:px-14 bg-white text-black text-center overflow-hidden">
      <h2 className="text-[28px] lg:text-[36px] font-bold mb-4 lg:mb-10">Testimonials</h2>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-orange-500 text-white p-2 rounded-full z-10 hover:bg-orange-600"
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="flex gap-6 justify-center transition-transform duration-500 ease-in-out">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="w-[300px] bg-white shadow-md rounded-lg p-6"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-orange-500 text-white p-2 rounded-full z-10 hover:bg-orange-600"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-orange-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;