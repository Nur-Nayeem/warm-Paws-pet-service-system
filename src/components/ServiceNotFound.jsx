import React from "react";
import { Link } from "react-router";

const ServiceNotFound = () => {
  return (
    <div className="h-[620px] max-w-2xl mx-auto text-center flex flex-col justify-center items-center">
      <title>Service Not Found</title>
      <h2 className="text-5xl md:text-7xl font-medium text-secondary flex items-center">
        Oops! No Service Found
      </h2>
      <p className="text-accent mt-5">
        The service you are looking for is not available. You might have
        mistyped the service name or the service is not currently offered.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
        <Link
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-gray-200  text-neutral text-base font-bold leading-normal w-full sm:w-auto hover:bg-background-dark/10 transition-colors duration-200"
          to="/"
        >
          Back Home
        </Link>
        <Link
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white font-bold leading-normal hover:bg-primary/90 transition-colors duration-200 w-full sm:w-auto"
          to="/services"
        >
          Browe All Services
        </Link>
      </div>
    </div>
  );
};

export default ServiceNotFound;
