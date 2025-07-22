import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/icons/Logo.svg';
import { useAuth } from '../../context/AuthContext3'; // adjust the import path as needed
import { NavLink } from 'react-router-dom';


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const { forgotPassword } = useAuth();
  
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      setLoading(true);
      setApiError('');
      setSuccessMessage('');
      try {
        const response = await forgotPassword(data.email);
        setSuccessMessage(response.message || 'Password reset email sent successfully');
        reset();
      } catch (error) {
        setApiError(error.message || 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    };
  
  return (
    <div className="forgot-password w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
      <div className="w-[90%] max-w-lg bg-white my-6 py-6 px-4 md:py-12 md:px-16 rounded-3xl">
        <div className="space-y-4">
            <NavLink to="/" className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className='w-[100px]' />
            </NavLink>
        
          <h2 className="text-xl lg:text-xl font-bold mb-6 text-black">
            Forgot Password
          </h2>
          <p className="text-black text-sm ">
          Enter the email associated with your account and we will email you a verification code to reset your password
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div>
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
                    className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-black text-[14px]"
                    placeholder="Email Address"
                  />
            </div>
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email.message}</p>
            )}
            {apiError && (
              <p className="text-red-600 text-sm">{apiError}</p>
            )}
            {successMessage && (
              <p className="text-green-600 text-sm">{successMessage}</p>
            )}
            <button
              type="submit"
              className="bg-[#EA5B0C] w-full text-[#ffffff] py-2 md:py-3 mt-4 rounded-lg text-[14px] cursor-pointer transition-transform transform hover:scale-110 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>
          <NavLink to="/auth/signin" className="text-black underline flex items-center justify-center mt-4 text-sm">Back to Login</NavLink>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword