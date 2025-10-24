import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <title>Loading</title>
      <h2 className="text-[80px] font-medium text-secondary flex items-center">
        <span className="hidden sm:block">L</span>
        <MoonLoader color="#5f87a6" speedMultiplier={0.7} />
        <span className="hidden sm:block">ADING...</span>
      </h2>
    </div>
  );
};

export default Loading;
