import React from "react";

const Contact = () => {
  return (
    <section className="w-full py-20 ">
      <div
        className="w-full relative h-[200px] md:h-[480px] px-4 text-white text-center bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("/contact.png")',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Content */}
        <div className="relative z-10 flex align-middle justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">Contact Us</h1>
        </div>
      </div>
      {/* form header  */}
      <div className="flex justify-center align-middle text-black py-6 text-center">
        <h1 className="font-bold text-2xl">
          Have a Question? We’re Just <br /> a Message Away
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-4 md:px-10 lg:px-14">
        <form className="w-full md:w-1/2 bg-[#adadadb6] p-6 rounded-lg shadow-md">
          <h2 className="text-black font-semibold py-2.5">
            Let’s Talk About Getting You Insured
          </h2>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold  text-gray-950">Name</label>
            <input
              type="text"
              className="p-2 border-2 text-gray-700 border-gray-400 rounded"
              placeholder="Full Name"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-gray-950">
              Email Address
            </label>
            <input
              type="email"
              className="p-2 border-2 text-gray-700 border-gray-400 rounded"
              placeholder="We’ll get back to you here"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold  text-gray-950">Subject</label>
            <input
              type="text"
              className="p-2 border-2 text-gray-700 border-gray-400 rounded"
              placeholder="What’s this about?"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="mb-2 font-semibold text-gray-950">Message</label>
            <textarea
              className="p-2 border-2 text-gray-700 border-gray-400 rounded"
              rows="4"
              placeholder="Tell us how we can help"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#EA5B0C] text-white p-2 rounded hover:bg-orange-600 transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>

        {/* map contact information  */}
        <div className="w-full md:w-1/2  p-6 rounded-lg ">
          <div>
            <h2 className="text-black font-semibold text-xl mb-2">
              Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              Reach out to us with any questions or concerns.
            </p>
          </div>

          <div className="mb-4 flex items-center gap-3 text-[#EA5B0C]">
            <img src="/call-calling.svg" alt="Phone Icon" className="w-5 h-5" />
            <p>+234 02-012800700</p>
          </div>

          <div className="mb-4 flex items-center gap-3 text-[#EA5B0C]">
            <img src="/sms.svg" alt="Email Icon" className="w-5 h-5" />
            <p>insure@leadway.com</p>
          </div>

          <div className="mb-4 flex items-center gap-3 text-[#EA5B0C]">
            <img src="/clock.svg" alt="Clock Icon" className="w-5 h-5" />
            <p>Mon to Fri, 9AM - 5PM (GMT)</p>
          </div>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126831.34349359245!2d3.313149553046444!3d6.548376245325967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d76b27139fb%3A0x2d36fc0f0ec9a2fa!2sLagos!5e0!3m2!1sen!2sng!4v1685647909723!5m2!1sen!2sng"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
