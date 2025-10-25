import React, { use, useState } from "react";
import { CiLink, CiLock, CiMail } from "react-icons/ci";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/Context";
import { MoonLoader } from "react-spinners";

const SignUp = () => {
  const { createUser, updateUserProfile, signWithGoogle, loading } =
    use(AuthContext);

  const [eye, setEye] = useState(false);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const clearField = (e) => {
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.photourl.value = "";
    e.target.password.value = "";
  };

  const handleRagistration = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    let photourl = e.target.photourl.value;
    const password = e.target.password.value;

    const upperCaseRegEx = /[A-Z]/;

    const LowerCaseRegEx = /[a-z]/;

    if (name.length < 3) {
      setError("Userame must have at least 3 latter");
      return;
    }
    if (password.length < 6) {
      setError("Password Length must be at least 6 character");
      return;
    }
    if (!LowerCaseRegEx.test(password)) {
      setError("Must have a Lowercase letter in the password");
      return;
    }
    if (!upperCaseRegEx.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }

    setLoader(true);
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photourl)
          .then(() => {
            navigate("/");
            toast.success("Registration Succenfull");
            setLoader(loading);
            clearField(e);
          })
          .catch((err) => {
            toast.error(err.message);
            setLoader(false);
          });
      })
      .catch(() => {
        toast.error("Registration Faild! Try again later");
        setError("Registration Faild! Try again later");
        setLoader(false);
      });
    setError("");
  };

  const handleGoogleSignIn = () => {
    setError("");
    signWithGoogle()
      .then(() => {
        navigate("/");
        toast.success("Successfully SignIn with google");
      })
      .catch(() => {
        toast.error("Google SignIn Faild! Try again later");
        setError("Google SignIn Faild! Try again later");
      });
  };

  return (
    <div className="py-32 my-container flex items-center justify-center">
      <title>WarmPaws - SignUp</title>
      <div className="w-full max-w-lg backdrop-blur-sm p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-secondary">
            Create Your Account
          </h1>
          <p className="text-lg text-neutral mt-2">
            Join WarmPaws and keep your pet cozy!
          </p>
        </div>
        <form onSubmit={handleRagistration}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-neutral">
              Username
            </label>
            <div className="relative">
              <IoPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
                placeholder="Enter your name"
                type="text"
                name="name"
                required
              />
            </div>
          </div>
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
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-neutral">
              Photo Url
            </label>
            <div className="relative">
              <CiLink className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                className="w-full h-12 pl-10 pr-4 rounded-lg border-2 border-secondary/50  bg-white text-accent focus:outline-none"
                placeholder="Photo URL"
                type="text"
                name="photourl"
                required
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
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {eye ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
          </div>
          <p className="text-sm text-rose-500 mb-2.5">{error}</p>
          <button className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary/90 hover:bg-primary transition-all duration-300 transform hover:scale-105 text-white font-semibold  text-lg  leading-normal shadow-lg cursor-pointer">
            <MdOutlineLogin className="material-symbols-outlined mr-2" />
            {loader ? (
              <MoonLoader color="#ffffff" size={24} speedMultiplier={0.7} />
            ) : (
              "Register"
            )}
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t border-secondary/50 "></div>
          <span className="mx-4 text-neutral">Or</span>
          <div className="flex-1 border-t border-secondary/50"></div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center gap-2.5 w-full h-12 rounded-full border-2 border-secondary/50 bg-white hover:bg-gray-100  transition-all duration-300 transform hover:scale-105 font-semibold cursor-pointer"
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-neutral">
            Already have an account?
            <Link
              to="/auth/sign-in"
              className="ml-1.5 font-medium text-secondary hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
