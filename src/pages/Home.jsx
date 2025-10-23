import React from "react";
import HeroSlider from "../components/HeroSection/HeroSlider";
import PopulerServices from "../components/PopulerServiceSection/PopulerServices";
import WinterCareTips from "../components/WinterCareTipssection/WinterCareTips";
import MeetOurExpert from "../components/MeetOurExpertVets/MeetOurExpert";
import useServices from "../hooks/useServices";
import PetProducts from "../components/PetProductShowSection/PetProducts";

const Home = () => {
  const { services, serviceLoading } = useServices();
  if (serviceLoading) {
    return (
      <div className="h-[500px] flex justify-center items-center">
        <h2 className="text-4xl font-bold text-red-500">Loading...</h2>
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
