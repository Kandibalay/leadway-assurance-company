import React from 'react'
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Logo from "../../assets/icons/Logo.svg";
import Left from "../../assets/icons/left line.svg";
import Right from "../../assets/icons/right line.svg";
import Apple from "../../assets/icons/apple_icon.svg";
import Google from "../../assets/icons/google_icon.svg";
import Facebook from "../../assets/icons/facebook_icon.svg";   
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext3.jsx';


const Login = () => {
  const {login: loginUser}= useAuth();
     const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const [showPassword, setShowPassword] = useState(false);
    
      const togglePasswordVisibilityOne = () => {
        setShowPassword(!showPassword);
      };
      const onSubmit = async (data) => {
        try {
          await loginUser(data);
          alert('Login successful!');
          reset();
        } catch (error) {
          console.error('Failed to login user', error);
          alert('Login failed. Please try again.');
        }
      };
  return (
      <div className="signin w-full min-h-screen h-full flex items-center justify-center bg-[#FFF6F2]">
          <form
            className="w-[90%] max-w-lg bg-white my-6 py-6 px-6 md:py-12 md:px-16 rounded-3xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <NavLink to="/" className="flex justify-center mb-6">
              <img src={Logo} alt="Logo" />
            </NavLink>
            <div className="flex flex-col w-full max-w-lg mx-auto items-center justify-center">
              <div className="w-full">
                <h1 className="text-xl font-semibold text-left text-black my-4">
                  Sign in
                </h1>
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
                <div className='flex items-center justify-between mb-1 text-white bg-wite'>
                   <div className='flex items-center'>
                    <input {...register("remember", { required: true })}
                    className="w-3 lg:w-4 cursor-pointer h-3 lg:h-4 text-white bg-white" 
                    type='checkbox' name="remember" id="remember" /> 
                    <label htmlFor="remember" className="ml-2 text-[12px] lg:text-[14px] text-[#222222]">Remember me
                    </label>
                    {errors.remember && (
                      <span className="text-red-500 text-[12px]">
                        {errors.remember.message}
                      </span>
                    )}
                   </div>
                   <div>
                    <NavLink to="/auth/forgot-password" className="underline text-[#222222] text-[12px] lg:text-[14px]">Forgot Password</NavLink>
                   </div>

                </div>
                <button
                  type="submit"
                  className="bg-[#EA5B0C] w-full text-[#ffffff] py-2 md:py-3 mt-4 rounded-lg text-[14px] cursor-pointer transition-transform transform hover:scale-110"
                >
                  Sign In
                </button>
                <div className="flex items-center justify-center my-5">
                  <img src={Left} alt="line" className="w-1/4 md:w-1/3" />
                  <p className="mx-2 text-[#969696] text-[12px]">Or Sign In With</p>
                  <img src={Right} alt="line" className="w-1/4 md:w-1/3" />
                </div>
                <div className="flex gap-4 items-center justify-center">
                  <button type="button" className='cursor-pointer'>
                    <img src={Google} />
                  </button>
                  <button type="button" className='cursor-pointer'>
                    <img src={Facebook} />
                  </button>
                  <button type="button" className='cursor-pointer'>
                    <img src={Apple} />
                  </button>
                </div>
                <div className="text-center mt-4">
                    <p className="text-[#969696] text-[12px] mt-4">
                        Don’t have an account??{" "}
                        <NavLink to="/auth/signup" className="text-[#EA5B0C] font-semibold">
                        Sign Up
                        </NavLink>
                    </p>
                </div>
              </div>
            </div>
          </form>
        </div>
  )
}

export default Login