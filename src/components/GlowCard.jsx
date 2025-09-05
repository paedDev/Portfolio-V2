import React from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode,
  FaCalculator,
  FaUserGraduate,
} from "react-icons/fa";

import { IoSchoolSharp, IoCodeSlash, IoLibrarySharp } from "react-icons/io5";
const GlowCard = ({ card, children }) => {
  //  {
  //   id: 3,
  //   institution: "Tagudin National High School",
  //   degree: "High School Diploma",
  //   startDate: "2013",
  //   endDate: "2019",
  //   description:
  //     "Graduated with strong foundation in mathematics and computer science.",
  // },
  return (
    <div className="card timeline-card rounded-xl p-10 border border-black-50 bg-zinc-800/50">
      <div className="glow " />
      <div className="flex flex-col items space-y-2 group ">
        <div className="flex items-center space-x-4 relative ">
          <FaGraduationCap className="text-3xl  " />
          <h2 className="text-2xl font-semibold relative">
            {card.institution}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-pink-400 transition-all duration-300 ease-in-out group-hover:w-10"></span>
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <FaLaptopCode className="text-3xl " />
          <h2 className="text-md text-gray-300 ">{card.degree}</h2>
        </div>

        <div className="flex items-center space-x-4">
          <IoLibrarySharp className="text-3xl " />
          <h2 className="text-sm text-gray-400 ">{card.description}</h2>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
