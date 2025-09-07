import React, { useRef } from "react";
import {
  FaGraduationCap,
  FaUniversity,
  FaLaptopCode,
  FaCalculator,
  FaUserGraduate,
} from "react-icons/fa";
import { IoSchoolSharp, IoCodeSlash, IoLibrarySharp } from "react-icons/io5";
const GlowCard = ({ card, children }) => {
  return (
    <div class="group relative cursor-pointer overflow-hidden bg-zinc-850/50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10  ">
      <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-zinc-800/50 transition-all duration-300 group-hover:scale-[10] "></span>
      <div class="relative z-10 mx-auto max-w-md">
        <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-zinc-850/50 mb-1 ">
          <div>
            <FaGraduationCap className="text-4xl" />
          </div>
        </span>
        <div>
          <h2 className="text-lg font-bold">{card.institution}</h2>
        </div>

        <div class=" pt-1 text-base  text-gray-400 transition-all duration-300 group-hover:text-white/90">
          <p className="font-semibold">{card.degree}</p>
        </div>

        <div class="pt-4 text-base font-semibold ">
          <p class="text-gray-500 transition-all duration-300 group-hover:text-white/60 ">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlowCard;
