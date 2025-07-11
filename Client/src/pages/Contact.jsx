import React from "react";
import Hero from "../components/Hero";

const Contact = () => {
  return (
    <section className="w-full">
      <Hero title="Contact Us" img="contact.png" text="Home >" page="Contact" />

      {/* Form & Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 px-4 md:px-10 lg:px-16 py-12">
        {/* Contact Form */}
        <form className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded text-gray-700"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-900">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us how we can help"
              className="w-full p-2 border border-gray-300 rounded text-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#EA5B0C] text-white py-2 rounded hover:bg-orange-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md  space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Have a Question? Connect With Us
            </h2>
            <p className="text-gray-700">
              Reach out to us with any questions or concerns.
            </p>
          </div>

          {[
            { icon: "/call-calling.svg", text: "+234 02-012800700" },
            { icon: "/sms.svg", text: "insure@leadway.com" },
            { icon: "/clock.svg", text: "Mon to Fri, 9AM - 5PM (GMT)" },
          ].map(({ icon, text }, index) => (
            <div key={index} className="flex items-center gap-3 text-[#EA5B0C]">
              <img src={icon} alt="" className="w-5 h-5" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="px-4 md:px-10 lg:px-16 pb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126831.34349359245!2d3.313149553046444!3d6.548376245325967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d76b27139fb%3A0x2d36fc0f0ec9a2fa!2sLagos!5e0!3m2!1sen!2sng!4v1685647909723!5m2!1sen!2sng"
          width="100%"
          height="300"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
