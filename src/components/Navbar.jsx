import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, loading } = use(AuthContext);
  console.log(loading ? "Loading" : user);

  return (
    <div className="flex justify-between items-center  py-3 my-container relative z-50">
      <div className="flex items-center gap-2.5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <FaBars className="text-secondary" />
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-neutral"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/profile">My Profile</NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-0.5 text-secondary">
          <MdOutlinePets className="text-2xl" />
          <Link to="/" className="text-2xl font-bold">
            WarmPaws
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-10 px-1 text-neutral">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/profile">My Profile</NavLink>
        </ul>
      </div>
      <div className="flex items-center gap-1.5">
        <Link
          to="/auth/sign-in"
          className="cursor-pointer bg-primary py-2.5 px-6 rounded-4xl text-white text-lg font-medium hover:bg-[#d2600f] transition-colors duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
