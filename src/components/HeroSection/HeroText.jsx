import React from "react";

const HeroText = ({ slide }) => {
  return (
    <>
      <h2 className="text-center text-6xl font-semibold">{slide.title}</h2>
      <p className="text-lg my-6">{slide.des}</p>
      <button className="bg-primary/90 font-semibold py-5 leading-normal px-10 rounded-4xl cursor-pointer hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg">
        Explore Winter Care
      </button>
    </>
  );
};

export default HeroText;
