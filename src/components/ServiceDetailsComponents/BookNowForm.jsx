import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const BookNowForm = () => {
  return (
    <>
      <div className=" bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Book This Service</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Your Name</label>
            <input
              className="w-full h-12 px-4 rounded-3xl border-2 border-secondary/50 bg-white focus:outline-none"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2">Your Email</label>
            <input
              className="w-full h-12 px-4 rounded-3xl border-2 border-secondary/50 bg-white  focus:outline-none"
              id="email"
              placeholder="yourmail@example.com"
              type="email"
            />
          </div>
          <button className="w-full flex items-center justify-center rounded-full h-14 px-6 bg-primary/90 text-white text-lg font-bold leading-normal hover:bg-primary shadow-lg cursor-pointer transition-colors duration-300">
            <FaRegCalendarAlt className="mr-2" />
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

export default BookNowForm;
