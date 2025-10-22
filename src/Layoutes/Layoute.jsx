import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Layoute = () => {
  return (
    <div>
      <header>
        <nav className="bg-base-200 shadow-sm w-full z-50 fixed ">
          <Navbar />
        </nav>
      </header>
      <main className="min-h-[calc(100vh-409px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layoute;
