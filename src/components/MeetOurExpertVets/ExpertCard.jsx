import React from "react";
const ExpertCard = ({ expert }) => {
  const { image, name, designation, experties } = expert;
  return (
    <div className="text-center">
      <img
        src={image}
        className=" w-48 h-48 rounded-full mx-auto shadow-lg border-4 border-secondary"
      />
      <h3 className="mt-6 text-2xl font-bold ">{name}</h3>
      <p className="text-secondary font-semibold text-lg">{designation}</p>
      <p className="mt-2 text-accent ">{experties}</p>
    </div>
  );
};
export default ExpertCard;
