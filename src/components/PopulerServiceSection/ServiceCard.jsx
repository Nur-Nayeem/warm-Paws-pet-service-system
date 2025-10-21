import React from "react";
import { BsStar } from "react-icons/bs";
import dog from "../../assets/dog.webp";
const ServiceCard = () => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white  shadow-lg overflow-hidden transition-transform hover:-translate-y-0.5 duration-300">
      <img className="h-64 w-full" src={dog} alt="" />
      <div className="flex flex-col flex-1 justify-between p-5">
        <div>
          <p className="text-2xl font-bold text-neutral">
            Winter Coat Grooming
          </p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </div>
            <span className="ml-2 text-sm text-gray-500">4.5</span>
          </div>
          <p className="mt-3 text-xl font-semibold text-secondary">$55</p>
        </div>
        <button className="py-3 text-white bg-secondary hover:bg-[#50738e] transition-colors duration-300 rounded-4xl my-3 cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
