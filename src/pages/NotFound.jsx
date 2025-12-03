import React from "react";
import { MdOutlinePets } from "react-icons/md";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-base-200 h-screen">
      <title>404 Not Found</title>
      <div className="my-container flex h-screen md:h-[75vh] items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-12 md:gap-24 w-full">
          <div className="flex flex-col items-start text-left gap-6">
            <div className="flex flex-col gap-2 mb-3.5">
              <h1 className="text-5xl md:text-7xl font-bold text-neutral">
                404
              </h1>
              <p className="text-2xl font-bold text-neutral">Page Not Found</p>
              <p className="text-accent">
                It seems you've wandered off the beaten path. Let's get you back
                to warmpaws.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                to="/"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white font-bold leading-normal hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto"
              >
                <span className="truncate">Go Home</span>
              </Link>
              <Link
                to={"/contact-us"}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gray-200  text-neutral text-base font-bold leading-normal w-full sm:w-auto hover:bg-background-dark/10 transition-colors duration-200"
              >
                <span className="truncate">Contact Support</span>
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary/30  rounded-full blur-2xl"></div>

            <MdOutlinePets className="text-9xl text-secondary transform -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
