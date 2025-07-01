import React from "react";
import BlogImage1 from "../../assets/images/blog-image-1.png";
import BlogImage2 from "../../assets/images/blog-image-2.png";
import BlogImage3 from "../../assets/images/blog-image-3.png";
import DateIcon from "../../assets/icons/date-icon.svg";

const Blog = () => {
  return (
    <section className="py-12 lg:py-16 px-6 md:px-10 lg:px-14 bg-[#FFFFFF] container mx-auto">
      <h2 className="text-center mb-10 font-poppins font-bold text-[28px] md:text-[36px] text-[#000000]">
        Read Our Latest News & Articles
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Top Travel Insurance Plans For Nigerians",
            date: "Dec 12, 2024",
            author: "By IRIS",
            text: "Asides the excitement that comes with planning for a trip abroad and trying to figure out your itineraries, one important aspect you should never...",
            image: BlogImage1,
            link: "#",
          },
          {
            title: "Travel Medical Insurance: A Comprehensive Guide",
            date: "Nov 13, 2024",
            author: "By West",
            text: "Travelling exposes you to new places and cultures, but it can also bring challenges to your health and well-being. That’s why, in this travel medical...",
            image: BlogImage2,
            link: "#",
          },
          {
            title: "Understanding Comprehensive Auto Insurance Coverage",
            date: "Feb 16, 2024",
            author: "By ALLEN",
            text: "Imagine waking up to find your car stolen, or getting bashed by a Danfo bus on your way to work...",
            image: BlogImage3,
            link: "#",
          },
        ].map((a, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between min-h-[480px] space-y-3"
          >
            <div>
              <img
                src={a.image}
                alt={a.title}
                className="w-full object-contain rounded-md hover:scale-110 transition duration-500"
              />
              <h3 className="w-[80%] font-semibold text-[16px] text-[#000000] hover:text-orange-600 transition mt-3">
                {a.title}
              </h3>

              {/* Author & Date */}
              <div className="flex items-center font-poppins font-[400] text-[14px] text-[#000000] gap-x-4 mt-2">
                <span className="font-semibold">{a.author}</span>
                <div className="flex items-center gap-x-1 font-poppins font-[400] text-[14px] text-[#000000]">
                  <img src={DateIcon} alt="Date Icon" className="w-4 h-4" />
                  <span>{a.date}</span>
                </div>
              </div>

              <p className="font-poppins font-[400] text-[14px] text-[#000000] mt-2">
                {a.text}
              </p>
            </div>

            {/* Read More Link aligned at bottom */}
            <a
              href={a.link}
              className="text-[#F1602C] text- font-semibold hover:underline"
            >
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
