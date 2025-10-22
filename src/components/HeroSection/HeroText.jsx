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
      <button className="bg-primary py-5 px-10 rounded-4xl cursor-pointer hover:bg-[#d2600f] transition-colors duration-300">
        Explore Winter Care
      </button>
    </>
  );
};

export default HeroText;
