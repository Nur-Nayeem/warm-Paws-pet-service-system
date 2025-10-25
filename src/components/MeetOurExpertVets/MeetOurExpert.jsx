import React, { useEffect } from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "../../data/ExpertsData";
import AOS from "aos";
import "aos/dist/aos.css";

const MeetOurExpert = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="bg-base-300 ">
      <div className="py-20  space-y-5 my-container">
        <div className="text-center mb-16 py-8">
          <h2 className="text-5xl font-bold text-secondary">
            Meet Our Expert Vets
          </h2>
          <p className="mt-4 text-accent text-lg">
            Compassionate experts dedicated to your pet's winter health.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {experts.map((expert, index) => {
            let animation;
            if (index === 0) animation = "fade-right";
            else if (index === 1) animation = "fade-up";
            else animation = "fade-left";

            return (
              <div
                key={index}
                data-aos={animation}
                data-aos-delay={index * 150}
                data-aos-duration="800"
              >
                <ExpertCard expert={expert} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MeetOurExpert;
