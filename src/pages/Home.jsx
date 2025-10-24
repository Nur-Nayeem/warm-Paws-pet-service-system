import React from "react";
import HeroSlider from "../components/HeroSection/HeroSlider";
import PopulerServices from "../components/PopulerServiceSection/PopulerServices";
import WinterCareTips from "../components/WinterCareTipssection/WinterCareTips";
import MeetOurExpert from "../components/MeetOurExpertVets/MeetOurExpert";
import useServices from "../hooks/useServices";
import PetProducts from "../components/PetProductShowSection/PetProducts";

import Loading from "../components/Loading";

const Home = () => {
  const { services, serviceLoading } = useServices();
  if (serviceLoading) {
    return <Loading />;
  }

  return (
    <div>
      <title>WarmPaws - Home</title>
      <HeroSlider />
      <PetProducts />
      <PopulerServices services={services} serviceLoading={serviceLoading} />
      <WinterCareTips />
      <MeetOurExpert />
    </div>
  );
};

export default Home;
