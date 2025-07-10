import React from "react";
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
import { NavLink } from "react-router-dom";  

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibilityOne = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityTwo = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="signup w-full h-full flex items-center justify-center bg-[#FFF6F2]">
      <form
        className="w-[90%] max-w-3xl bg-white my-10 p-6 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <NavLink to="/" className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className="flex flex-col w-full max-w-sm  mx-auto items-center justify-center">
          <div className="w-full">
            <h1 className="text-xl font-semibold text-left text-black my-4">
              Create Account
            </h1>
            <div className="text-left text-gray-600 mb-4">
              <input
                {...register("name", {
                  required: "This Field is required",
                  pattern: {
                    value:
                      /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                    message: "Please enter a valid first name",
                  },
                })}
                type="text"
                id="name"
                className="w-full border-b border-b-[#ADADAD] py-1 focus:outline-none text-[14px]"
                placeholder="Full Name"
              />
              {errors.name && (
                <span className="text-red-500 text-[12px]">
                  {errors.name.message}
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
                />
                <button
                  type="button"
                  className="absolute right-3 top-3"
                  onClick={togglePasswordVisibilityTwo}
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
              className="bg-[#EA5B0C] w-full text-[#ffffff] py-3 mt-4 rounded-lg text-[14px]"
            >
              Sign Up
            </button>
            <div className="flex items-center justify-center my-5">
              <img src={Left} alt="line" className="w-1/4 md:w-1/3" />
              <p className="mx-2 text-[#969696] text-[12px]">Or Sign Up With</p>
              <img src={Right} alt="line" className="w-1/4 md:w-1/3" />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <button type="button">
                <img src={Google} />
              </button>
              <button type="button">
                <img src={Facebook} />
              </button>
              <button type="button">
                <img src={Apple} />
              </button>
            </div>
            <div className="text-center mt-4">
                <p className="text-[#969696] text-[12px] mt-4">
                    Already have an account?{" "}
                    <a href="/auth/login" className="text-[#EA5B0C] font-semibold">
                    Login
                    </a>
                </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
