import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PrepModules = () => {
  return (
    <div className="w-full md:w-full bg-[#202866] mx-15 text-white py-10 px-6">
      <h2 className="text-2xl font-bold">Prep Modules</h2>
      <div className="w-16 h-1 bg-yellow-500 my-4"></div>
      
      <div className="grid grid-cols-3 gap-8">
        <ul className="space-y-2">
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>TWO YEAR PROGRAM</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>ONE YEAR PROGRAM</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>RETAKER PROGRAM</li>
        </ul>

        <ul className="space-y-2">
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>HYBRID PROGRAM</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>CRASH COURSE</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span> SAT® PREPARATION</li>
        </ul>

        <ul className="space-y-2">
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>ONLINE STUDY MATERIAL MATERIAL</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>ONLINE STUDY MATERIAL LAW</li>
          <li className="flex items-center"><span><MdKeyboardArrowRight/></span>COUNSELING DIVISION</li>
        </ul>
      </div>
    </div>
  );
};

export default PrepModules;
