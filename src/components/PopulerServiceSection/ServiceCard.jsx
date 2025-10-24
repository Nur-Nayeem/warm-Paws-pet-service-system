import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const ServiceCard = ({ service }) => {
  const { serviceId, serviceName, rating, price, image } = service;
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-base-200 shadow-lg hover:shadow-2xl overflow-hidden transition-all hover:-translate-y-0.5 duration-300">
      <img className="h-72 w-full" src={image} alt="" />
      <div className="flex flex-col flex-1 justify-between p-5">
        <div>
          <p className="text-2xl font-bold text-neutral">{serviceName}</p>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: Math.floor(rating) }).map((_, index) => (
                <FaStar key={index} />
              ))}

              {rating - Math.floor(rating) ? <FaStarHalfAlt /> : ""}
            </div>
            <span className="ml-2 text-sm text-gray-500">{rating}</span>
          </div>
          <p className="mt-3 text-xl font-semibold text-secondary">${price}</p>
        </div>
        <Link
          to={`/services/${serviceId}`}
          className="text-center py-3 text-white bg-primary/90 hover:bg-primary transition-colors duration-300 rounded-4xl my-3 cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
