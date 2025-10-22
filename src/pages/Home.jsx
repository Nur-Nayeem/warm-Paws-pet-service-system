import React from "react";
import HeroSlider from "../components/HeroSection/HeroSlider";
import PopulerServices from "../components/PopulerServiceSection/PopulerServices";
import WinterCareTips from "../components/WinterCareTipssection/WinterCareTips";
import MeetOurExpert from "../components/MeetOurExpertVets/MeetOurExpert";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopulerServices />
      <WinterCareTips />
      <MeetOurExpert />
    </div>
  );
};

export default Home;
