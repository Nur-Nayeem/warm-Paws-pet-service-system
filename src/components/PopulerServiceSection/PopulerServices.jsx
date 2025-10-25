import React, { useEffect } from "react";
import ServiceCard from "./ServiceCard";
import AOS from "aos";
import "aos/dist/aos.css";

const PopulerServices = ({ services, serviceLoading }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);
  return (
    <div className="bg-base-300 ">
      <div className="py-20 space-y-5 my-container">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-bold text-secondary">
            Popular Winter Care Services
          </h2>
          <p className="mt-4 text-accent text-lg">
            Tailored care to keep your pet thriving in the cold.
          </p>
        </div>
        <>
          {serviceLoading ? (
            <span>Loading...</span>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => (
                <div
                  className="h-[500px]"
                  key={service.serviceId}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 10}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default PopulerServices;
