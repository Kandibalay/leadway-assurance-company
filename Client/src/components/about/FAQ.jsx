import React, { useState } from "react";
import { CircleChevronDown } from "lucide-react";
import { faqs } from "../../Db";

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const handleSelected = (id) => {
    setSelected((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="max-w-[1200px] mx-auto text-black flex flex-col md:flex-row items-start md:items-center gap-8 px-4 md:px-8 py-16">
      {/* Left Content */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-10 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 ">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-gray-600">
          Find quick answers to common questions about our products, policies,
          and claims.
        </p>
      </div>

      {/* FAQ List */}
      <ul className="w-full md:w-1/2 space-y-4 bg-[#FFDDCA] md:bg-white">
        {faqs.map((faq) => (
          <li
            key={faq.id}
            className=" shadow-sm bg-[#FFDDCA]  md:bg-white transition hover:shadow-md"
          >
            <button
              onClick={() => handleSelected(faq.id)}
              className="flex justify-between items-center w-full text-left px-4 py-3 focus:outline-none"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-gray-500 transition-transform duration-300">
                {selected === faq.id ? (
                  "-"
                ) : (
                  <CircleChevronDown
                    className={`transform ${
                      selected === faq.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                selected === faq.id ? "max-h-40 px-4 py-3" : "max-h-0 px-4"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
