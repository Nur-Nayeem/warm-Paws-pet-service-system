import React from "react";

const ExtraDetails = ({ serviceDetails }) => {
  return (
    <>
      <p className="text-accent text-lg">{serviceDetails?.description}</p>
      <hr className="my-6 text-gray-300" />
      <div>
        <h2 className="text-neutral text-2xl font-semibold mb-2.5">
          Provider Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
          <div className="col-span-1">
            <h3 className="text-neutral font-semibold text-lg">Provider:</h3>
            <p className="text-accent text-lg">
              {serviceDetails?.providerName}
            </p>
          </div>
          <div className="col-span-3">
            <h3 className="text-neutral font-semibold text-lg">Contact:</h3>
            <p className="text-accent text-lg">
              {serviceDetails?.providerEmail}
            </p>
          </div>
          <div className="col-span-1 mt-2.5">
            <h3 className="text-neutral font-semibold text-lg">Service ID:</h3>
            <p className="text-accent text-lg">
              WP-00{serviceDetails?.serviceId}
            </p>
          </div>

          <div className="col-span-3 mt-2.5">
            <h3 className="text-neutral font-semibold text-lg">Category:</h3>
            <p className="text-accent text-lg">{serviceDetails?.category}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExtraDetails;
