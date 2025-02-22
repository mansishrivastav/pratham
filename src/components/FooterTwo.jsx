import React from "react";

const FooterTwo = () => {
  return (
    <div className="w-full bg-[#3b3c3e] text-white py-10 px-6">
      <h2 className="text-lg font-bold">PARTNERS</h2>
      <div className="w-10 h-1 bg-yellow-500 my-2"></div>

      <div className="grid grid-cols-5 gap-6 text-sm">
        <span>IIFM</span>
        <span>NCFM Derivatives</span>
        <span>FIREFISH</span>
        <span>PRIMARY OLYMPIAD</span>
        <span>WORLD GK OLYMPIAD</span>
      </div>

      <div className="grid grid-cols-3 gap-6 text-sm mt-4">
        <span>INTERNATIONAL FINANCE OLYMPIAD</span>
        <span>GLOBAL ECONOMICS OLYMPIAD</span>
        <span>GLOBAL OLYMPIAD ON APTITUDE</span>
      </div>
    </div>
  );
};

export default FooterTwo;
