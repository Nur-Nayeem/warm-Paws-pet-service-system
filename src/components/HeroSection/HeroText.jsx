import React from "react";
import { Link } from "react-router";

const HeroText = ({ slide }) => {
  return (
    <>
      <h2 className="text-center text-5xl sm:text-6xl font-semibold">
        {slide.title}
      </h2>
      <p className="text-lg text-center my-6">{slide.des}</p>
      <Link
        to={"/services"}
        className="bg-primary/90 font-semibold py-3 sm:py-4 leading-normal px-6 sm:px-8 rounded-4xl cursor-pointer hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-lg"
      >
        Explore Winter Care
      </Link>
    </>
  );
};

export default HeroText;
