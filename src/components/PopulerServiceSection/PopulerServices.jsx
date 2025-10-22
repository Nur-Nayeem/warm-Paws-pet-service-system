import React from "react";
import ServiceCard from "./ServiceCard";
import useServices from "../../hooks/useServices";

const PopulerServices = () => {
  const { services, loading } = useServices();
  return (
    <div className="my-16  space-y-5 my-container py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-secondary">
          Our Popular Winter Services
        </h2>
        <p className="mt-4 text-accent text-lg">
          Tailored care to keep your pet thriving in the cold.
        </p>
      </div>
      <>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.serviceId} service={service} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default PopulerServices;
