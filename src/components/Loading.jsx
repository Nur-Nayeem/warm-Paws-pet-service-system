import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <title>Loading</title>
      <h2 className="text-[80px] font-medium text-secondary flex items-center">
        <span>L</span>
        <MoonLoader color="#5f87a6" speedMultiplier={0.7} />
        <span>ADING...</span>
      </h2>
    </div>
  );
};

export default Loading;
