import React from "react";
import useServices from "../hooks/useServices";
import ServiceCard from "../components/PopulerServiceSection/ServiceCard";
import Loading from "../components/Loading";

const Services = () => {
  const { services, serviceLoading } = useServices();

  if (serviceLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-5 my-container py-32">
      <title>WarmPaws - Service</title>
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-secondary">
          Our Winter Services
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
            {services.map((service) => (
              <ServiceCard key={service.serviceId} service={service} />
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default Services;
