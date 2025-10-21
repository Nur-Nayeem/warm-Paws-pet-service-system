import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slide1.jpeg";
import slide2 from "../assets/slide2.jpeg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide6 from "../assets/slide6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroText from "./HeroText";

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
        <SwiperSlide className="relative">
          <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
            <HeroText />
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
            <HeroText />
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={slide2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
            <HeroText />
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={slide3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
            <HeroText />
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={slide4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute h-full w-full bg-black/30 flex flex-col items-center justify-center text-white">
            <HeroText />
          </div>
          <img
            className="h-full w-full object-cover object-center"
            src={slide6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
