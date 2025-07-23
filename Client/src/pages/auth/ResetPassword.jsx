// import React from 'react'
// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { BiHide } from "react-icons/bi";
// import { BiShow } from "react-icons/bi";
// import logo from '../../assets/icons/Logo.svg';
// import { useSearchParams } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext3'; // adjust the import path as needed
// import { Link } from 'react-router-dom';


// const ResetPassword = () => {
//     const [loading, setLoading] = useState(false);
//   const [apiError, setApiError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const searchParams = useSearchParams();
//   const { resetPassword } = useAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm();

//   const togglePasswordVisibilityOne = () => {
//     setShowPassword(!showPassword);
//   };

//   const togglePasswordVisibilityTwo = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);
//       setApiError('');
//       const resetToken = searchParams.get('resetToken');
//       if (!resetToken) {
//         throw new Error('Invalid reset token');
//       }
      
//       await resetPassword(resetToken, {
//         password: data.password,
//         confirmPassword: data.confirmPassword
//       });
      
//       setSuccess(true);
//       reset();
//     } catch (error) {
//       setApiError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (success) {
//     return (
//       <div className="signin w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
//         <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
//           <div className='space-y-4'>
//              <Link to="/" className="flex justify-center mb-6">
//                         <img src={logo} alt="Logo" className='w-[100px]' />
//               </Link>
//             <h2 className="text-xl text-black font-bold mb-2">Password Reset Successful</h2>
//             <p className="text-black mb-4 text-sm">
//               Your password has been successfully reset. You can now login with your new password.
//             </p>
//             <Link to="/auth/signin" className="text-black underline flex items-center justify-center mt-4 text-sm">
//               Go to Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
// <div className="forgot-password w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
//       <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
//         <div className="space-y-4">
//         <Link to="/" className="flex justify-center mb-6">
//             <img src={logo} alt="Logo" className='w-[100px]' />
//             </Link>
//           <h2 className="text-xl text-black font-bold mb-2">Reset Password</h2>

//           {apiError && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//               {apiError}
//             </div>
//           )}

//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             noValidate
//             className="flex flex-col gap-4"
//           >
//             <div>

//             <div className="text-left text-gray-600 mb-4 relative">
//                          <div>
//                            <input
//                              {...register("password", {
//                                required: "This field is required",
//                                minLength: {
//                                  value: 8,
//                                  message: "Password must be at least 8 characters long",
//                                },
//                                pattern: {
//                                  value:
//                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                                  message:
//                                    "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
//                                },
//                              })}
//                              type={showPassword ? "text" : "password"}
//                              id="password"
//                              className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                              placeholder="Password"
//                            />
//                            <button
//                              type="button"
//                              className="absolute right-3 top-3"
//                              onClick={togglePasswordVisibilityOne}
                             
//                            >
//                              {showPassword ? (
//                                <BiShow className="text-[#8C8C8C]" />
//                              ) : (
//                                <BiHide className="text-[#8C8C8C]" />
//                              )}
//                            </button>
//                          </div>
//                          {errors.password && (
//                            <span className="text-red-500 text-[12px] ">
//                              {errors.password.message}
//                            </span>
//                          )}
//                        </div>
//               {errors.password && (
//                 <p className="text-red-600">{errors.password.message}</p>
//               )}
//             </div>

//             <div>
//               <div className="text-left text-gray-600 mb-4 relative">
//                             <div>
//                               <input
//                                 {...register("confirmPassword", {
//                                   required: "This field is required",
//                                   validate: (value) =>
//                                     value === watch("password") || "Passwords do not match",
//                                 })}
//                                 type={showConfirmPassword ? "text" : "password"}
//                                 id="confirmPassword"
//                                 className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
//                                 placeholder="Confirm Password"
                                
//                               />
//                               <button
//                                 type="button"
//                                 className="absolute right-3 top-3"
//                                 onClick={togglePasswordVisibilityTwo}
                                
//                               >
//                                 {showConfirmPassword ? (
//                                   <BiShow className="text-[#8C8C8C]" />
//                                 ) : (
//                                   <BiHide className="text-[#8C8C8C]" />
//                                 )}
//                               </button>
//                             </div>
//                             {errors.confirmPassword && (
//                               <span className="text-red-500 text-[12px] text-left">
//                                 {errors.confirmPassword.message}
//                               </span>
//                             )}
//                           </div>
//               {errors.confirmPassword && (
//                 <p className="text-red-600">{errors.confirmPassword.message}</p>
//               )}
//             </div>
            
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#EA5B0C] hover:bg-orange-700 text-white w-full py-2 rounded-md mb-2 disabled:opacity-50"
//             >
//               {loading ? 'Resetting...' : 'Reset Password'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResetPassword


import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiHide, BiShow } from "react-icons/bi";
import logo from '../../assets/icons/Logo.svg';
import { useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext3';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const togglePasswordVisibilityOne = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setApiError('');
      
      const resetToken = searchParams.get('resetToken');
      console.log('Reset Token from URL:', resetToken);
      console.log('Current URL:', window.location.href);
      
      if (!resetToken) {
        throw new Error('Invalid reset token. Please check your reset link.');
      }
      
      console.log('Submitting reset request...');
      await resetPassword(resetToken, {
        password: data.password,
        confirmPassword: data.confirmPassword
      });
      
      setSuccess(true);
      reset();
    } catch (error) {
      console.error('Reset password error:', error);
      setApiError(error.message || 'An error occurred while resetting password');
    } finally {
      setLoading(false);
    }
  };

  // Success screen
  if (success) {
    return (
      <div className="signin w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
        <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
          <div className='space-y-4'>
            <Link to="/" className="flex justify-center mb-6">
              <img src={logo} alt="Logo" className='w-[100px]' />
            </Link>
            <h2 className="text-xl text-black font-bold mb-2 text-center">Password Reset Successful</h2>
            <p className="text-black mb-4 text-sm text-center">
              Your password has been successfully reset. You can now login with your new password.
            </p>
            <Link 
              to="/auth/signin" 
              className="bg-[#EA5B0C] hover:bg-orange-700 text-white w-full py-2 rounded-md flex items-center justify-center mt-4 text-sm"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Reset form
  return (
    <div className="forgot-password w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
      <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
        <div className="space-y-4">
          <Link to="/" className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className='w-[100px]' />
          </Link>
          
          <h2 className="text-xl text-black font-bold mb-2">Reset Password</h2>

          {apiError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
              {apiError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            {/* Password Field */}
            <div className="text-left text-gray-600 mb-4 relative">
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full border-b border-b-[#ADADAD] py-2 focus:outline-none text-[14px] pr-10"
                placeholder="New Password"
              />
              <button
                type="button"
                className="absolute right-3 top-2"
                onClick={togglePasswordVisibilityOne}
              >
                {showPassword ? (
                  <BiShow className="text-[#8C8C8C]" />
                ) : (
                  <BiHide className="text-[#8C8C8C]" />
                )}
              </button>
              {errors.password && (
                <span className="text-red-500 text-[12px] block mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="text-left text-gray-600 mb-4 relative">
              <input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full border-b border-b-[#ADADAD] py-2 focus:outline-none text-[14px] pr-10"
                placeholder="Confirm New Password"
              />
              <button
                type="button"
                className="absolute right-3 top-2"
                onClick={togglePasswordVisibilityTwo}
              >
                {showConfirmPassword ? (
                  <BiShow className="text-[#8C8C8C]" />
                ) : (
                  <BiHide className="text-[#8C8C8C]" />
                )}
              </button>
              {errors.confirmPassword && (
                <span className="text-red-500 text-[12px] block mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="bg-[#EA5B0C] hover:bg-orange-700 text-white w-full py-2 rounded-md mb-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>

            <div className="text-center mt-4">
              <Link to="/auth/signin" className="text-[#EA5B0C] underline text-sm">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;