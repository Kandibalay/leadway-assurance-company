import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/icons/Logo.svg';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext3'; // adjust the import path as needed


const ResetPassword = () => {
    const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);
  const searchParams = useSearchParams();
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setApiError('');
      const resetToken = searchParams.get('resetToken');
      if (!resetToken) {
        throw new Error('Invalid reset token');
      }
      
      await resetPassword(resetToken, {
        password: data.password,
        confirmPassword: data.confirmPassword
      });
      
      setSuccess(true);
      reset();
    } catch (error) {
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="signin w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
        <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
          <div className='space-y-4'>
             <NavLink to="/" className="flex justify-center mb-6">
                        <img src={logo} alt="Logo" className='w-[100px]' />
                        </NavLink>
            <h2 className="text-xl text-black font-bold mb-2">Password Reset Successful</h2>
            <p className="text-black mb-4 text-sm">
              Your password has been successfully reset. You can now login with your new password.
            </p>
            <NavLink href="/auth/signin" className="text-black underline flex items-center justify-center mt-4 text-sm">
              Go to Login
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
<div className="forgot-password w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
      <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
        <div className="space-y-4">
        <NavLink to="/" className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className='w-[100px]' />
            </NavLink>
          <h2 className="text-xl text-black font-bold mb-2">Reset Password</h2>

          {apiError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {apiError}
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div>

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
                           />
                           <button
                             type="button"
                             className="absolute right-3 top-3"
                             onClick={togglePasswordVisibilityOne}
                             
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
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            <div>
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
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="bg-[#18A532] text-white w-full py-2 rounded-md mb-2 disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword