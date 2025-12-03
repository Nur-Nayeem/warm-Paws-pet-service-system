import React, { useState } from "react";
import useServices from "../hooks/useServices";
import ServiceCard from "../components/PopulerServiceSection/ServiceCard";
import Loading from "../components/Loading";

const Services = () => {
  const { services, serviceLoading } = useServices();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  if (serviceLoading) {
    return <Loading />;
  }
  //search
  const filteredServices = services.filter((service) => {
    const query = search.toLowerCase();
    return (
      service.serviceName.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query)
    );
  });

  // sorting low to high price
  const sortedServices = [...filteredServices].sort((a, b) => {
    if (sort === "lowToHigh") return a.price - b.price;
    if (sort === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-base-300">
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* search input */}
          <label className="input px-4 h-12  rounded-full border-2 border-secondary/50 bg-base-100/50  outline-none focus:outline-none w-full md:w-xs">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search services"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          {/* sort by price */}
          <select
            className="select select-primary  px-4 h-12 w-full md:w-xs   rounded-full border-2 border-secondary/50 outline-none focus:outline-none"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* services */}
        <>
          {sortedServices.length === 0 ? (
            <p className="text-center text-neutral text-xl py-20">
              No services found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {sortedServices.map((service) => (
                <ServiceCard key={service.serviceId} service={service} />
              ))}
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default Services;
