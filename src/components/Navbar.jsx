import React, { use } from "react";
import { FaBars } from "react-icons/fa";
import { MdLogout, MdOutlinePets } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logOutUSer } = use(AuthContext);
  console.log(loading ? "Loading" : user);

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
        {user ? (
          <>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHOeKOR2h6NeIsh9ZKiNf3svHtXeHrPVtTjCZs9ZhuHM6sBPNHyNaIxuucAGH23JyT6y2f46ti6utGRqxxk0OosxFPh5B5RP9gqnF063HNtWRRa7Eajx4TdR8aTjKtSyD7S9uviWpEGZRwmXwpZV5p0B0ZdZrX4c2uILghwTOKFthA5KvbZCpHwjHcecPU7G4aunHixdVSXe5T8ZnQlnmaMVoLQl8IadGOUToUtxtU9z1M_zrb9_rEXstG5OPZnZGhlhvCekCI9d0"
              alt="Profile"
              className="aspect-square rounded-full size-12 border-2 border-secondary"
            />
            <button
              onClick={handleLogOut}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-accent hover:bg-secondary/20 transition-colors"
            >
              <MdLogout className="text-2xl" />
            </button>
          </>
        ) : (
          <Link
            to="/auth/sign-in"
            className="cursor-pointer bg-primary py-2.5 px-6 rounded-4xl text-white text-lg font-medium hover:bg-[#d2600f] transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
