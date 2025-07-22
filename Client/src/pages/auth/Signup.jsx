// import React from "react";
// import { useState } from "react";
// import { BiHide } from "react-icons/bi";
// import { BiShow } from "react-icons/bi";
// import { useForm } from "react-hook-form";
// import Logo from "../../assets/icons/Logo.svg";
// import Left from "../../assets/icons/left line.svg";
// import Right from "../../assets/icons/right line.svg";
// import Apple from "../../assets/icons/apple_icon.svg";
// import Google from "../../assets/icons/google_icon.svg";
// import Facebook from "../../assets/icons/facebook_icon.svg"; 
// import { NavLink } from "react-router-dom";  
// import { useAuth } from "../../context/AuthContext3"; // Adjust the import path as necessary

// const SignUp = () => {
//   const { signup } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     watch,
//   } = useForm();

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibilityOne = () => {
//     setShowPassword(!showPassword);
//   };

//   const togglePasswordVisibilityTwo = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const onSubmit = async (data) => {
//     try {
//       await signup(data);
//       alert('Signup successful!');
//       reset();
//     } catch (error) {
//       console.error('Failed to register user', error);
//       alert('Signup failed. Please try again.');
//     }
//   };

//   return (
//     <div className="signup min-h-screen w-full h-full  flex items-center justify-center bg-[#FFF6F2]">
//       <form
//         className="w-[90%] max-w-lg max-h-[90%] bg-white my-6 py-6 px-6 md:py-12 md:px-16 rounded-3xl"
//         onSubmit={handleSubmit(onSubmit)}
//       >
//         <NavLink to="/" className="flex justify-center mb-6">
//           <img src={Logo} alt="Logo" />
//         </NavLink>
//         <div className="flex flex-col w-full max-w-lg  mx-auto items-center justify-center">
//           <div className="w-full">
//             <h1 className="text-xl font-semibold text-left text-black my-4">
//               Create Account
//             </h1>
//             <div className="text-left text-gray-600 mb-4">
//               <input
//                 {...register("fullName", {
//                   required: "This Field is required",
//                   pattern: {
//                     value:
//                       /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
//                     message: "Please enter a valid name",
//                   },
//                 })}
//                 type="text"
//                 id="fullName"
//                 className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                 placeholder="Full Name"
//               />
//               {errors.fullName && (
//                 <span className="text-red-500 text-[12px]">
//                   {errors.fullName.message}
//                 </span>
//               )}
//             </div>
//             <div className="text-left text-gray-600 mb-4">
//               <input
//                 {...register("email", {
//                   required: "This field is requird",
//                   pattern: {
//                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                     message: "Please enter a valid email address",
//                   },
//                 })}
//                 type="email"
//                 id="email"
//                 className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                 placeholder="Email Address"
//               />
//               {errors.email && (
//                 <span className="text-red-500 text-[12px] text-start">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>
//             <div className="text-left text-gray-600 mb-4 relative">
//               <div>
//                 <input
//                   {...register("password", {
//                     required: "This field is required",
//                     minLength: {
//                       value: 8,
//                       message: "Password must be at least 8 characters long",
//                     },
//                     pattern: {
//                       value:
//                         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                       message:
//                         "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
//                     },
//                   })}
//                   type={showPassword ? "text" : "password"}
//                   id="password"
//                   className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                   placeholder="Password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3"
//                   onClick={togglePasswordVisibilityOne}
//                 >
//                   {showPassword ? (
//                     <BiShow className="text-[#8C8C8C]" />
//                   ) : (
//                     <BiHide className="text-[#8C8C8C]" />
//                   )}
//                 </button>
//               </div>
//               {errors.password && (
//                 <span className="text-red-500 text-[12px] ">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>
//             <div className="text-left text-gray-600 mb-4 relative">
//               <div>
//                 <input
//                   {...register("confirmPassword", {
//                     required: "This field is required",
//                     validate: (value) =>
//                       value === watch("password") || "Passwords do not match",
//                   })}
//                   type={showConfirmPassword ? "text" : "password"}
//                   id="confirmPassword"
//                   className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                   placeholder="Confirm Password"
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3"
//                   onClick={togglePasswordVisibilityTwo}
//                 >
//                   {showConfirmPassword ? (
//                     <BiShow className="text-[#8C8C8C]" />
//                   ) : (
//                     <BiHide className="text-[#8C8C8C]" />
//                   )}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <span className="text-red-500 text-[12px] text-left">
//                   {errors.confirmPassword.message}
//                 </span>
//               )}
//             </div>
//             <button
//               type="submit"
//               className="bg-[#EA5B0C] w-full text-[#ffffff] py-3 mt-4 rounded-lg text-[14px] cursor-pointer transition-transform transform hover:scale-110"
//             >
//               Sign Up
//             </button>
//             <div className="flex items-center justify-center my-5">
//               <img src={Left} alt="line" className="w-1/4 md:w-1/3" />
//               <p className="mx-2 text-[#969696] text-[12px]">Or Sign Up With</p>
//               <img src={Right} alt="line" className="w-1/4 md:w-1/3" />
//             </div>
//             <div className="flex gap-4 items-center justify-center">
//               <button type="button">
//                 <img src={Google} />
//               </button>
//               <button type="button">
//                 <img src={Facebook} />
//               </button>
//               <button type="button">
//                 <img src={Apple} />
//               </button>
//             </div>
//             <div className="text-center mt-4">
//                 <p className="text-[#969696] text-[12px] mt-4">
//                     Already have an account?{" "}
//                     <NavLink to="/auth/signin" className="text-[#EA5B0C] font-semibold">
//                     Login
//                     </NavLink>
//                 </p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React from "react";
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import Logo from "../../assets/icons/Logo.svg";
import Left from "../../assets/icons/left line.svg";
import Right from "../../assets/icons/right line.svg";
import Apple from "../../assets/icons/apple_icon.svg";
import Google from "../../assets/icons/google_icon.svg";
import Facebook from "../../assets/icons/facebook_icon.svg"; 
import { NavLink } from "react-router-dom";  
import { useAuth } from "../../context/AuthContext3"; // Adjust the import path as necessary

const SignUp = () => {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibilityOne = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await signup(data);
      
      // Show success toast first
      toast.success('Account created successfully! Welcome aboard! 🎉', {
        duration: 3000,
        position: 'top-center',
      });
      
      reset();
      
      // Add a small delay to ensure the toast is visible before any redirect
      // If your signup function redirects automatically, this gives time for the toast
      await new Promise(resolve => setTimeout(resolve, 1500));
      
    } catch (error) {
      console.error('Failed to register user', error);
      toast.error('Signup failed. Please check your details and try again.', {
        duration: 4000,
        position: 'top-center',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup min-h-screen w-full h-full  flex items-center justify-center bg-[#FFF6F2]">
      <Toaster
        toastOptions={{
          style: {
            background: '#fff',
            color: '#333',
            fontSize: '14px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
          success: {
            style: {
              border: '1px solid #10B981',
              background: '#F0FDF4',
              color: '#047857',
            },
            iconTheme: {
              primary: '#10B981',
              secondary: '#F0FDF4',
            },
          },
          error: {
            style: {
              border: '1px solid #EF4444',
              background: '#FEF2F2',
              color: '#B91C1C',
            },
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FEF2F2',
            },
          },
        }}
      />
      <form
        className="w-[90%] max-w-lg max-h-[90%] bg-white my-6 py-6 px-6 md:py-12 md:px-16 rounded-3xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NavLink to="/" className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className="flex flex-col w-full max-w-lg  mx-auto items-center justify-center">
          <div className="w-full">
            <h1 className="text-xl font-semibold text-left text-black my-4">
              Create Account
            </h1>
            <div className="text-left text-gray-600 mb-4">
              <input
                {...register("fullName", {
                  required: "This Field is required",
                  pattern: {
                    value:
                      /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                    message: "Please enter a valid name",
                  },
                })}
                type="text"
                id="fullName"
                className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
                placeholder="Full Name"
                disabled={isLoading}
              />
              {errors.fullName && (
                <span className="text-red-500 text-[12px]">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="text-left text-gray-600 mb-4">
              <input
                {...register("email", {
                  required: "This field is requird",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
                id="email"
                className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
                placeholder="Email Address"
                disabled={isLoading}
              />
              {errors.email && (
                <span className="text-red-500 text-[12px] text-start">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="text-left text-gray-600 mb-4 relative">
              <div>
                <input
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
                  placeholder="Password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={togglePasswordVisibilityOne}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <BiShow className="text-[#8C8C8C]" />
                  ) : (
                    <BiHide className="text-[#8C8C8C]" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500 text-[12px] ">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="text-left text-gray-600 mb-4 relative">
              <div>
                <input
                  {...register("confirmPassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
                  placeholder="Confirm Password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={togglePasswordVisibilityTwo}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <BiShow className="text-[#8C8C8C]" />
                  ) : (
                    <BiHide className="text-[#8C8C8C]" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-500 text-[12px] text-left">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-[#ffffff] py-3 mt-4 rounded-lg text-[14px] cursor-pointer transition-all duration-200 flex items-center justify-center ${
                isLoading 
                  ? 'bg-[#EA5B0C]/70 cursor-not-allowed' 
                  : 'bg-[#EA5B0C] hover:scale-110'
              }`}
            >
              {isLoading ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </>
              ) : (
                'Sign Up'
              )}
            </button>
            <div className="flex items-center justify-center my-5">
              <img src={Left} alt="line" className="w-1/4 md:w-1/3" />
              <p className="mx-2 text-[#969696] text-[12px]">Or Sign Up With</p>
              <img src={Right} alt="line" className="w-1/4 md:w-1/3" />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <button type="button" disabled={isLoading}>
                <img src={Google} />
              </button>
              <button type="button" disabled={isLoading}>
                <img src={Facebook} />
              </button>
              <button type="button" disabled={isLoading}>
                <img src={Apple} />
              </button>
            </div>
            <div className="text-center mt-4">
                <p className="text-[#969696] text-[12px] mt-4">
                    Already have an account?{" "}
                    <NavLink to="/auth/signin" className="text-[#EA5B0C] font-semibold">
                    Login
                    </NavLink>
                </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;