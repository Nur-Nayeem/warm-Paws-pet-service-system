import React, { useEffect } from "react";
import tharmalBad from "../../assets/Thermal_Pet_Bed.jpg";
import petSwiter from "../../assets/pet_switer.jpg";
import { Link } from "react-router";

import AOS from "aos";
import "aos/dist/aos.css";

const PetProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // animation speed + trigger once
  }, []);

  return (
    <div className="bg-white my-container md:px-10 lg:px-20 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-2/5" data-aos="fade-right">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-secondary">
            Winter Pet Product Showcase
          </h2>
          <p className="mt-6 text-lg text-accent ">
            Our top picks for a warm and wonderful winter. Keep your best friend
            cozy with our curated collection of must-have products, from thermal
            beds to protective paw balms.
          </p>
          <Link
            to="/products"
            className="mt-10 flex min-w-[84px] max-w-full sm:max-w-[350px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 sm:h-14 px-5 sm:px-8 bg-primary/90 text-white text-lg font-medium leading-normal hover:bg-primary transition-transform hover:scale-105 shadow-lg"
          >
            Shop All Products
          </Link>
        </div>
        <div
          className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6"
          data-aos="fade-left"
        >
          <div
            className="flex flex-col gap-4 rounded-xl bg-base-200 shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1"
            data-aos="zoom-in"
          >
            <img src={tharmalBad} className="w-full h-48 sm:h-64" />
            <div className="flex flex-col flex-1 p-4">
              <p className="font-bold text-lg text-accent">Thermal Pet Bed</p>
              <p className="text-accent text-sm mt-1">Self-warming core.</p>
            </div>
          </div>
          <div
            className="flex flex-col gap-4 rounded-xl bg-base-200 shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 mt-8"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={petSwiter} className="w-full h-48 sm:h-64" />
            <div className="flex flex-col flex-1 p-4">
              <p className="font-bold text-lg text-accent">Knit Pet Sweater</p>
              <p className="text-accent text-sm mt-1">Stylish and warm.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProducts;
