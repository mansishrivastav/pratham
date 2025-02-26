import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
 
      <div className="bg-[#081153] text-white flex justify-between items-center px-4 sm:px-8 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee hidden lg:block">
          <p className="text-xl">
            Registrations Open for CUET | CLAT | IPMAT 2025 and 2026
          </p>
        </div>

        <div className="flex w-full justify-between lg:justify-end lg:space-x-3 lg:w-auto">
          <button className="bg-white text-[#081153] px-3 py-2 sm:px-4 sm:py-3 rounded-md text-sm sm:text-base">
            Pay Online
          </button>
          <button className="bg-white text-[#081153] px-3 py-2 sm:px-4 sm:py-3 rounded-md text-sm sm:text-base">
            Register
          </button>
        </div>
      </div>

      <nav className="bg-white shadow-md py-3 px-4 sm:px-8 flex justify-between items-center">
      
        <div className="flex items-center">
          <img
            src="https://prathamonline.com/images/pratham.png"
            alt="logo"
            className="h-8 sm:h-10"
          />
        </div>

        <button 
          className="lg:hidden text-2xl text-[#081153] focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <RxHamburgerMenu />
        </button>

    
        <ul className="hidden lg:flex lg:space-x-6 text-[#081153] font-semibold uppercase">
          <li><a href="#" className="hover:text-blue-700">About</a></li>
          <li><a href="#" className="hover:text-blue-700">Prep Modules</a></li>
          <li><a href="#" className="hover:text-blue-700">Courses</a></li>
          <li><a href="#" className="hover:text-blue-700">Results</a></li>
          <li><a href="#" className="hover:text-blue-700">Blog</a></li>
          <li><a href="#" className="hover:text-blue-700">Contact</a></li>
          <li><a href="#" className="hover:text-blue-700">Career</a></li>
          <li><a href="#" className="hover:text-blue-700">Login</a></li>
          <li><a href="#" className="hover:text-blue-700">Partners</a></li>
        </ul>
      </nav>

     
      <div 
        className={`lg:hidden bg-white border-t border-gray-200 shadow-md absolute w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ 
          transform: isOpen ? "translateY(0)" : "translateY(-20px)"
        }}
      >
        <ul className="flex flex-col text-[#081153] font-semibold uppercase">
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">About</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Prep Modules</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Courses</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Results</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Blog</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Contact</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Career</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Login</a></li>
          <li><a href="#" className="block py-3 px-8 hover:bg-gray-100">Partners</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;