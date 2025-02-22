import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[#081153] text-white flex justify-between items-center px-8 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <p className="text-xl">
            Registrations Open for CUET | CLAT | IPMAT 2025 and 2026
          </p>
        </div>
        <div className="space-x-3">
          <button className="bg-white text-[#081153] px-4 py-3 rounded-md">
            Pay Online
          </button>
          <button className="bg-white text-[#081153] px-4 py-3 rounded-md">
            Register
          </button>
        </div>
      </div>
      <nav className="bg-white shadow-custom visible animate-fadeInDown py-3  flex justify-center items-center">
        <ul className="flex space-x-6 text-[#081153] font-semibold uppercase">
        <li>
          <img
            src="https://prathamonline.com/images/pratham.png"
            alt="logo"
            className="h-10"
          />
        </li>
          <li><a href="#">About</a></li>
          <li><a href="#">Prep Modules</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Results</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
