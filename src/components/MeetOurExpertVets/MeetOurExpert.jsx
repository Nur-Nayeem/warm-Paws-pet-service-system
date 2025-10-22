import React from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "../../data/ExpertsData";

const MeetOurExpert = () => {
  return (
    <div className="my-16  space-y-5 my-container">
      <div className="text-center mb-16 py-8">
        <h2 className="text-5xl font-bold text-secondary">
          Meet Our Expert Vets
        </h2>
        <p className="mt-4 text-accent text-lg">
          Compassionate experts dedicated to your pet's winter health.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {experts.map((expert, index) => (
          <ExpertCard key={index} expert={expert} />
        ))}
      </div>
    </div>
  );
};

export default MeetOurExpert;
