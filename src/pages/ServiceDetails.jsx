import React from "react";

import { PiLineVerticalBold } from "react-icons/pi";
import BookNowForm from "../components/ServiceDetailsComponents/BookNowForm";
import ExtraDetails from "../components/ServiceDetailsComponents/ExtraDetails";
import useServices from "../hooks/useServices";
import { useParams } from "react-router";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MoonLoader } from "react-spinners";

const ServiceDetails = () => {
  const { services, serviceLoading } = useServices();

  const { id } = useParams();

  const service = services.find((s) => s.serviceId == id);

  if (serviceLoading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-[80px] font-medium text-secondary flex items-center">
          <span>L</span>
          <MoonLoader color="#5f87a6" speedMultiplier={0.7} />
          <span>ADING...</span>
        </h2>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-[80px] font-medium text-secondary flex items-center">
          No Service Found
        </h2>
      </div>
    );
  }

  const { image, serviceName, category, price, rating, slotsAvailable } =
    service;

  return (
    <section className="py-24 md:py-32 px-0 sm:px-4 ">
      <div className="my-container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="col-span-5 lg:col-span-3">
            <div className="bg-white overflow-hidden">
              <img
                src={image}
                className="w-full h-[450px] md:h-[500px] rounded-xl"
              />
              <div className="">
                <div className="flex justify-between items-start mb-4 my-3.5">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-neutral">
                      {serviceName}
                    </h1>
                    <p className="text-lg mt-1 text-secondary font-semibold">
                      {category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-accent">${price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-1 mr-2.5">
                    <div className="flex text-yellow-500">
                      {Array.from({
                        length: Math.floor(rating),
                      }).map((_, index) => (
                        <FaStar key={index} />
                      ))}
                      {rating - Math.floor(rating) ? <FaStarHalfAlt /> : ""}
                    </div>
                    <span className="ml-1">{rating}</span>
                  </div>

                  <PiLineVerticalBold />
                  <div className="ml-2.5">{slotsAvailable} slots available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 block lg:hidden">
            <ExtraDetails service={service} />
          </div>

          <div className="col-span-5 lg:col-span-2 grid grid-cols-1 justify-end items-center">
            <BookNowForm />
          </div>

          <div className="col-span-5 hidden lg:block">
            <ExtraDetails service={service} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
