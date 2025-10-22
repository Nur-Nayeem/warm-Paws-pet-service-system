import React from "react";
import HeroSlider from "../components/HeroSlider";
import PopulerServices from "../components/PopulerServiceSection/PopulerServices";
import WinterCareTips from "../components/WinterCareTipssection/WinterCareTips";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <PopulerServices />
      <WinterCareTips />
    </div>
  );
};

export default Home;
