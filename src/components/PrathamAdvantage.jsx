import React from 'react';
import { FaLeaf, FaLaptop, FaBullseye, FaRegHandPointer } from 'react-icons/fa';
import { TbCircleChevronLeft } from "react-icons/tb";

const PrathamAdvantage = () => {
  const advantages = [
    {
      icon: <TbCircleChevronLeft  className="w-8 h-8 text-[#081153]" />,
      title: "Experienced Faculty",
      description: "Get personalized mentoring from our highly qualified and experienced faculty members."
    },
    {
      icon: <FaLaptop className="w-8 h-8 text-[#081153]" />,
      title: "Extensive Study Material",
      description: "Our extensive study material are regularly updated as per CLAT standards."
    },
    {
      icon: <FaBullseye className="w-8 h-8 text-[#081153]" />,
      title: "Well-Curated Mock Tests",
      description: "We provide well-structured CLAT Mock tests for in-depth and complete preparation."
    },
    {
      icon: <FaRegHandPointer className="w-8 h-8 text-[#081153]" />,
      title: "Doubt Solving Sessions",
      description: "Get regular doubt solving sessions with experienced educators."
    }
  ];

  return (
    <div className="mt-16 w-full max-w-7xl mx-auto px-6">
      <h2 className="text-[#081153] text-2xl font-bold">Get the PRATHAM Advantage</h2>
      <div className="w-48 h-1 bg-yellow-500 my-4"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {advantages.map((advantage, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#081153] flex items-center justify-center mb-4">
              {advantage.icon}
            </div>
            <h3 className="text-[#081153] text-lg font-semibold mb-2">{advantage.title}</h3>
            <p className="text-gray-600 text-sm">{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrathamAdvantage;