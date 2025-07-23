import React, { useState } from "react";
import backArrow from "../../assets/icons/back arrow.svg";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";

const MarineQuoteModal = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setShowFormModal(false);
    setShowSuccessModal(true);
    reset();
  };
  const modalOpen = showFormModal || showSuccessModal;
  return (
    <div className=" bg-transparent flex flex-col items-center justify-center relative">
      <div
        className={
          modalOpen ? "pointer-events-none blur-sm " : "pointer-events-auto"
        }
      >
        <button
          onClick={() => setShowFormModal(true)}
          className="text-white bg-orange-500 hover:bg-orange-800 rounded-lg w-30 py-3 font-semibold button transition z-10"
        >
          Get Quote
        </button>
      </div>

      {/* Form Modal */}
      {showFormModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-80">
          <div className="bg-black/70 text-black w-full min-h-screen pointer-events-auto">
           <div className="cargoModal1 bg-[url(/assets/images/MarineCargoModalbg1.png)] relative w-[90%] max-w-4xl text-black bg-white mx-auto p-12">
            <button
              onClick={() => setShowFormModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 border border-gray-700 rounded-md "
            >
              <IoIosClose size={40}  />
            </button>
            <div className="w-full max-w-xl mx-auto">
              <h2 className="font-bold text-xl">
                Request a Marine Cargo Insurance Quote
              </h2>
              <p className="text-center font-light mt-4">
                Get tailored protection for your cargo in just a few steps. Fill
                in your details and a representative will reach out shortly.
              </p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 items-start justify-start w-full mt-4 "
              >
                {/* <div className="w-full flex flex-col items-start">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className="w-full rounded-lg p-2 border text-sm border-gray-700  focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="w-full flex flex-col items-start">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Company Name{" "}
                    <span className="text-sm text-gray-300 font-light">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("CompanyName")}
                    className="w-full p-2 border text-sm border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Let us Know Who You Represent"
                  />
                </div> */}
                {/* <div className="w-full flex flex-col items-start">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full p-2 border text-sm border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="We’ll get back to you here"
                  />
                </div> */}
                <div className="w-full flex flex-col items-start">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNumber", {
                      required: "Phone Number is required",
                    })}
                    className="w-full p-2 border text-sm border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Our Experts Would Reach Out to You on this Number"
                  />
                </div>
                <div className="w-full flex flex-col items-start">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        {...register("message")}
                        className="w-full p-2 border text-sm border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Tell us how we can help"
                        rows="6"
                    ></textarea>
                </div>
                <div>
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement" className="ml-2 text-sm text-gray-600">
                        I agree to Leadway's <span className="text-orange-500">Terms & Privacy Policy</span> and consent to being contacted for this Quote
                    </label>
                </div>

                <div className="w-full">
                  <button
                    type="submit"
                    className="bg-[#EA5B0C] hover:bg-orange-700 text-white px-4 py-3 rounded-lg w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-80">
          <div className="bg-black/70 text-black w-full min-h-screen pointer-events-auto">
            <div  className="cargoModal2 relative bg-[url(/assets/images/MarineCargoGetSuccessModal.png)] mt-10 lg:mt-28 w-[90%] max-w-4xl text-black bg-white rounded-lg mx-auto p-12 flex-flex-col items-center justify-center gap-4">
                <h2 className="text-3xl font-semibold mb-2">Your Quote Request Has Been Received!</h2>
                <p className="mb-4">Thank you for reaching out to Leadway Assurance. Our marine insurance specialists are reviewing your request and will contact you within 24 hours. In the meantime, feel free to explore more about our marine insurance services or other coverage options we offer.</p>
                <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full text-[#EA5B0C] px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300"
                ><span><img src={backArrow} alt=""/></span>
               Back to Home
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarineQuoteModal;
