import React from "react";

import dog from "../assets/dog.webp";
import { BsStar } from "react-icons/bs";
import { PiLineVerticalBold } from "react-icons/pi";
import BookNowForm from "../components/ServiceDetailsComponents/BookNowForm";
import ExtraDetails from "../components/ServiceDetailsComponents/ExtraDetails";

const ServiceDetails = () => {
  return (
    <section className="py-16 md:py-24 px-4 ">
      <div className="my-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="col-span-5 lg:col-span-3">
            <div className="bg-white overflow-hidden">
              <img src={dog} className="w-full h-[450px] rounded-md" />
              <div className="">
                <div className="flex justify-between items-start mb-4 my-3.5">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold text-neutral">
                      Winter Coat Grooming
                    </h1>
                    <p className="text-lg mt-1 text-secondary font-semibold">
                      Specialized Grooming
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-black text-accent">$75</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-1 mr-2.5">
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <span className="ml-1">5</span>
                  </div>

                  <PiLineVerticalBold />
                  <div className="ml-2.5">8 slots available</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5 block lg:hidden">
            <ExtraDetails />
          </div>

          <div className="col-span-5 lg:col-span-2 grid grid-cols-1 justify-end items-center">
            <BookNowForm />
          </div>

          <div className="col-span-5 hidden lg:block">
            <ExtraDetails />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
