import React from "react";
import ServiceCard from "./ServiceCard";

const PopulerServices = () => {
  return (
    <div className="my-10  space-y-5 my-container">
      <div className="text-center my-16">
        <h2 className="text-4xl font-bold text-secondary">
          Our Popular Winter Services
        </h2>
        <p className="mt-4 text-accent">
          Tailored care to keep your pet thriving in the cold.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default PopulerServices;
