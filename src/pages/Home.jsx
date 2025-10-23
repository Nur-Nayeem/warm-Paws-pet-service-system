import React from "react";
import HeroSlider from "../components/HeroSection/HeroSlider";
import PopulerServices from "../components/PopulerServiceSection/PopulerServices";
import WinterCareTips from "../components/WinterCareTipssection/WinterCareTips";
import MeetOurExpert from "../components/MeetOurExpertVets/MeetOurExpert";
import useServices from "../hooks/useServices";
import PetProducts from "../components/PetProductShowSection/PetProducts";

import { MoonLoader } from "react-spinners";

const Home = () => {
  const { services, serviceLoading } = useServices();
  if (serviceLoading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-[80px] font-medium text-secondary flex items-center">
          <span>L</span>
          <MoonLoader color="#5f87a6" speedMultiplier={0.7} />
          <span>ADING...</span>
        </h2>
      </div>
    );
  }

  return (
    <div>
      <HeroSlider />
      <PetProducts />
      <PopulerServices services={services} serviceLoading={serviceLoading} />
      <WinterCareTips />
      <MeetOurExpert />
    </div>
  );
};

export default Home;
