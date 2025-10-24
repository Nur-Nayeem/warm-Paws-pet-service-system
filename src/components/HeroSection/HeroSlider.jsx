import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroText from "./HeroText";
import { SliderDAta } from "../../data/SLiderData";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[600px]"
      >
        {SliderDAta.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
              <HeroText slide={slide} />
            </div>
            <img
              className="h-full w-full object-cover object-center"
              src={slide.image}
              alt={`slide-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
