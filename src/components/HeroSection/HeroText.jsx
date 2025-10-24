import React from "react";

const HeroText = () => {
  return (
    <>
      <h2 className="text-center text-6xl font-semibold">
        Cozy Season, Happy Paws
      </h2>
      <p className="text-lg my-6">
        Your ultimate guide to keeping your furry friends warm, safe, and joyful
        all winter long.
      </p>
      <button className="bg-primary/90 font-semibold py-5 leading-normal px-10 rounded-4xl cursor-pointer hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg">
        Explore Winter Care
      </button>
    </>
  );
};

export default HeroText;
