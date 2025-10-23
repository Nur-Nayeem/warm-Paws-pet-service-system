import React, { use, useState } from "react";
import { CiLock, CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineLogin, MdOutlinePets } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext, EmailValueContext } from "../Context/Context";
import toast from "react-hot-toast";

const SignIn = () => {
  const { loginUser, signWithGoogle, loading } = use(AuthContext);
  const [eye, setEye] = useState(false);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { setTypedEmail } = use(EmailValueContext);

  const clearField = (e) => {
    e.target.email.value = "";
    e.target.password.value = "";
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoader(loading);
    const email = e.target.email.value;
    const password = e.target.password.value;

    clearField(e);

    loginUser(email, password)
      .then(() => {
        navigate(location.state || "/");
        setLoader(loading);
        toast.success("Login Succenfull");
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    signWithGoogle()
      .then(() => {
        navigate(location.state || "/");
        setLoader(loading);
        toast.success("Successfully SignIn with google");
      })
      .catch((err) => {
        setLoader(false);
        toast.error(err.message);
      });
  };

  return (
    <div className="py-32 my-container flex items-center justify-center">
      <div className="w-full max-w-lg backdrop-blur-sm p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-1.5 text-secondary">
            <MdOutlinePets />
            <span>WarmPaws</span>
          </h1>
          <p className="text-lg text-neutral mt-2">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-neutral">
              Email
            </label>
            <div className="relative">
              <CiMail className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
                placeholder="email@example.com"
                type="email"
                name="email"
                required
                onChange={(e) => setTypedEmail(e.target.value)}
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
                type={eye ? "text" : "password"}
                name="password"
                required
              />

              <span
                onClick={() => setEye(!eye)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {eye ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="text-right mt-2">
              <Link
                to="/auth/forget-password"
                className="text-sm text-secondary hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>
          <button className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary/90 hover:bg-primary transition-all duration-300 transform hover:scale-105 text-white font-semibold  text-lg  leading-normal shadow-lg cursor-pointer">
            <MdOutlineLogin className="material-symbols-outlined mr-2" />
            {loader ? "Loading.." : "Login"}
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t border-secondary/50 "></div>
          <span className="mx-4 text-neutral">Or SignIn with</span>
          <div className="flex-1 border-t border-secondary/50"></div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2.5 w-full h-12 rounded-full border-2 border-secondary/50 bg-white hover:bg-gray-100  transition-all duration-300 transform hover:scale-105 font-semibold"
          >
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
