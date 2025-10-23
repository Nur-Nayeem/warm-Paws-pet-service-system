import React from "react";
import { FaFireAlt } from "react-icons/fa";
import { IoSnowSharp } from "react-icons/io5";
import { MdSnowshoeing } from "react-icons/md";

const WinterCareTips = () => {
  return (
    <div className="my-16 py-8">
      <div className="my-container py-16">
        <h2 className="text-5xl font-bold text-secondary text-center pb-8">
          Essential Winter Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <MdSnowshoeing className="text-6xl text-primary mx-auto" />
            <h3 className="mt-5 text-2xl font-bold text-neutral">
              Paw Protection
            </h3>
            <p className="mt-3 text-accent">
              Wipe paws after outdoor adventures to remove salt and de-icers.
              Use pet-safe balms or booties for sensitive paws.
            </p>
          </div>
          <div className="p-6">
            <FaFireAlt className="text-6xl text-primary mx-auto" />
            <h3 className="mt-5 text-2xl font-bold text-neutral">
              Stay Hydrated & Fed
            </h3>
            <p className="mt-3 text-accent">
              Ensure constant access to fresh, unfrozen water. Your pet might
              need more food to generate body heat in the cold.
            </p>
          </div>
          <div className="p-6">
            <IoSnowSharp className="text-6xl text-primary mx-auto" />
            <h3 className="mt-5 text-2xl font-bold text-neutral">
              Know The Signs
            </h3>
            <p className="mt-3 text-accent">
              Watch for shivering or lethargy, signs of hypothermia. Create a
              warm, cozy spot indoors for them to retreat to.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterCareTips;
