import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ImMobile2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="bg-[#808080] text-white py-10 mt-1">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <img
            src="https://prathamonline.com/images/pratham-logo.png"
            alt="Pratham Test Prep"
            className="w-40 mb-4"
          />
          <p className="text-sm">
            PRATHAM is an educational institute that remains adamant in emerging
            as one of the leading institutes, enhancing the budding youth into
            successful individuals.
          </p>
          <h3 className="mt-4 text-lg font-semibold">We're Social</h3>
          <div className="flex space-x-3 mt-2">
            <FaFacebookF className="text-lg cursor-pointer hover:text-yellow-400" />
            <FaTwitter className="text-lg cursor-pointer hover:text-yellow-400" />
            <FaLinkedinIn className="text-lg cursor-pointer hover:text-yellow-400" />
            <FaGooglePlusG className="text-lg cursor-pointer hover:text-yellow-400" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">TOP COURSES</h3>
          <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          <ul className="text-sm space-y-2">
            <li>› CUET</li>
            <li>› CLAT</li>
            <li>› IIM Indore, IPM</li>
            <li>› IIM Rohtak, IPM</li>
            <li>› NLU Delhi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">PREP MODULE</h3>
          <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          <ul className="text-sm space-y-2">
            <li>› 2 Year Program</li>
            <li>› 1 Year Program</li>
            <li>› Online Program</li>
            <li>› Crash Course</li>
            <li>› International Education</li>
            <li>› Correspondence Course</li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-bold mb-2">GET IN TOUCH</h3>
          <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
          <p className="text-xl flex items-center gap-2"><FaMapMarkerAlt/> PRATHAM Head Office</p>
          <p className="text-sm">
            HS-13, 2nd Floor, Kailash Colony, Main Market, New Delhi 110048
          </p>
          <div className="flex items-center gap-2">
          <ImMobile2 />
         <div>
         <p className="text-sm mt-2"> +91-99999 75392</p>
         <p className="text-sm">011-42 666 000</p>
         </div>
          </div>
          <p className="text-sm mt-2"><span className="text-2xl">@</span> info@prathamonline.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
