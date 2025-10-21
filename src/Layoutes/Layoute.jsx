import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
const Layoute = () => {
  return (
    <div>
      <header>
        <nav className="bg-base-200 shadow-sm">
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layoute;
