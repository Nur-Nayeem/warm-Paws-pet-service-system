import React from "react";
import { CiLock } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLogin, MdOutlinePets } from "react-icons/md";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="py-32 my-container flex items-center justify-center">
      <div className="w-full max-w-md backdrop-blur-sm p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-1.5 text-secondary">
            <MdOutlinePets />
            <span>WarmPaws</span>
          </h1>
          <p className="text-lg text-neutral mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-neutral">
              Email or Username
            </label>
            <div className="relative">
              <IoPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
                placeholder="email@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-neutral">
              Password
            </label>
            <div className="relative text-accent">
              <CiLock className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
                placeholder="******"
                type="password"
              />
              <FaRegEye className="absolute right-3 top-1/2 -translate-y-1/2" />
              {/* <FaRegEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2"/> */}
            </div>
            <div className="text-right mt-2">
              <a className="text-sm text-secondary hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary/90 hover:bg-primary transition-all duration-300 transform hover:scale-105 text-white font-semibold  text-lg  leading-normal shadow-lg cursor-pointer">
            <MdOutlineLogin className="material-symbols-outlined mr-2" />
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t border-secondary/50 "></div>
          <span className="mx-4 text-neutral">Or SignIn with</span>
          <div className="flex-1 border-t border-secondary/50"></div>
        </div>

        <div className="mt-4">
          <button className="flex items-center justify-center gap-2.5 w-full h-12 rounded-full border-2 border-secondary/50 bg-white hover:bg-gray-100  transition-all duration-300 transform hover:scale-105 font-semibold">
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-neutral">
            Don't have an account?
            <Link
              to="/auth/sign-up"
              className="ml-1.5 font-medium text-secondary hover:underline"
              href="#"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
