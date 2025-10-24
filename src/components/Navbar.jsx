import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { MdLogout, MdOutlinePets } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/Context";
import "animate.css";

const Navbar = () => {
  const { user, logOutUSer } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUSer()
      .then(() => {
        toast.success("Logout Successfull");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-between items-center  py-3 my-container relative z-50">
      <div className="flex items-center gap-2.5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <FaBars className="text-secondary hover:scale-105 cursor-pointer transition-all duration-300" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-neutral"
          >
            <NavLink
              className={
                "hover:text-secondary hover:scale-105 transition-all duration-300"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={
                "hover:text-secondary hover:scale-105 transition-all duration-300"
              }
              to="/services"
            >
              Services
            </NavLink>
            <NavLink
              className={
                "hover:text-secondary hover:scale-105 transition-all duration-300"
              }
              to="/profile"
            >
              My Profile
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-0.5 text-secondary animate__animated animate__pulse animate__infinite	infinite">
          <MdOutlinePets className="text-2xl " />
          <Link to="/" className="text-2xl font-bold ">
            WarmPaws
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-10 px-1 text-neutral">
          <NavLink
            className={
              "hover:text-secondary hover:scale-105 transition-all duration-300 "
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={
              "hover:text-secondary hover:scale-105 transition-all duration-300"
            }
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={
              "hover:text-secondary hover:scale-105 transition-all duration-300"
            }
            to="/profile"
          >
            My Profile
          </NavLink>
        </ul>
      </div>

      <div className="flex items-center gap-2.5">
        {user ? (
          <>
            <figure
              className={` ${
                user?.photoURL && "border-2 shadow-lg"
              } w-12 h-12 rounded-full border-secondary cursor-pointer`}
            >
              <img
                onClick={() => navigate("/profile")}
                src={user?.photoURL ? user?.photoURL : "/avatar.png"}
                alt="Profile"
                className="w-full h-full rounded-full"
                title={user?.displayName}
              />
            </figure>
            <button
              onClick={handleLogOut}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-accent hover:bg-secondary/20 transition-colors duration-300"
            >
              <MdLogout className="text-2xl" />
            </button>
          </>
        ) : (
          <>
            <Link
              to="/auth/sign-in"
              className="cursor-pointer bg-primary/90 py-2.5 px-6 rounded-4xl text-white font-medium hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Login
            </Link>
            <Link
              to="/auth/sign-up"
              className="cursor-pointer bg-accent py-2.5 px-6 rounded-4xl text-white font-medium hover:bg-secondary/50 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
