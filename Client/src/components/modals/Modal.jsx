import React, { useState, useEffect } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useForm } from 'react-hook-form';

export default function Success() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    setShowFormModal(false);
    setShowSuccessModal(true);
  };



  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-80 p-4">
          <div className="relative w-[90%] lg:w-[45%] xl:w-[35%] px-10 py-12 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center gap-4 mx-auto inset-0 ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={20} />
            </button>
           
            <div className='max-w-3xl text-black '>
              <h2 className="font-bold text-xl">
                Request a Marine Cargo Insurance Quote
              </h2>
              <p className="text-center font-light-">
                Get tailored protection for your cargo in just a few steps. Fill
                in your details and a representative will reach out shortly.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4 items-start w-full "
              >
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Company Name{" "}
                    <span className="text-sm text-gray-300 font-light">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("CompanyName")}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Let us Know Who You Represent"
                  />
                </div>
                <div className="mt-4 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="We’ll get back to you here"
                  />
                </div>
                <div className="mt-4 w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Our Experts Would Reach Out to You on this Number"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setShowFormModal(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
