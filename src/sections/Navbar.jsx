import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { navLinks } from "../constants";

const Navbar = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#nav", {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(10px)",
      duration: 0.3,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "header",
        start: "bottom top",
        end: "bottom bottom",
        toggleActions: 'play none none reverse'
      },
    });
  }, []);
  return (
    <header
      id="nav"
      className={`fixed w-full left-1/2 py-6 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-500 ease-in-out text-sm`}
    >
      <div className="mx-auto flex items-center justify-between">
        <a
          href="#hero"
          className="text-white-50 text-xl md:text-xl font-semibold transition-transform duration-300 hover:scale-105"
        >
          Jn | Paed
        </a>
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-4">
            {navLinks.map((item, index) => (
              <li key={item.id} className="text-white relative group">
                <a href={`#${item.id}`} className="">
                  <span className="transition-colors duration-300 hover:text-white">
                    {item.title}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:bg-green-200"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="flex group">
          <div className="px-5 py-1 rounded-lg bg-white text-black group-hover:bg-gray-700 transition-colors duration-500 ">
            <span className="group-hover:text-white transition-colors duration-500 text-sm">
              Contact Me
            </span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";

// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const [scroll, setScroll] = useState(false);

//   const navLinks = [
//     { id: "hero", title: "Home" },
//     { id: "work", title: "Projects" },
//     { id: "experience", title: "Experience" },
//     { id: "Contact", title: "Contact" },
//   ];

//   const handleClick = () => {
//     setMenu(!menu);
//   };

//   // Close mobile menu when clicking on nav links
//   const handleNavClick = () => {
//     setMenu(false);
//   };

//   // Close mobile menu when resizing to desktop
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         // md breakpoint
//         setMenu(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Navbar scroll effect
//     gsap.to(".nav", {
//       backgroundColor: "rgba(0, 0, 0, 0.8)",
//       backdropFilter: "blur(10px)",
//       duration: 0.3,
//       ease: "power1.inOut",
//       scrollTrigger: {
//         trigger: "body",
//         start: "100px top",
//         end: "bottom top",
//         toggleActions: "play none none reverse",
//       },
//     });

//     // Mobile menu animation
//     if (menu) {
//       gsap.fromTo(
//         ".mobile-menu",
//         {
//           opacity: 0,
//           y: -20,
//           height: 0,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           height: "auto",
//           duration: 0.3,
//           ease: "power2.out",
//         }
//       );
//     }
//   }, [menu]);

//   return (
//     <nav className="fixed top-0 left-0 w-full md:py-6 py-4 z-50">
//       <div
//         className={`nav w-[90%] max-w-6xl mx-auto flex justify-between items-center h-16 md:px-10 px-6 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/30 ${
//           menu ? "rounded-t-xl" : "rounded-xl"
//         } relative transition-all duration-300`}
//       >
//         {/* Logo */}
//         <div>
//           <a
//             href="https://github.com/paedDev"
//             className="font-stylish text-lg hover:text-blue-400 transition-colors duration-300"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             paedDev
//           </a>
//         </div>

//         {/* Desktop Navigation - Always render, use CSS to hide/show */}
//         <div className="hidden md:flex justify-center items-center md:gap-8">
//           {navLinks.map((item) => (
//             <a
//               key={item.id}
//               href={`#${item.id}`}
//               className="text-sm text-gray-300 hover:text-white transition-colors duration-300 relative group"
//             >
//               {item.title}
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           ))}
//           <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-sm">
//             Resume
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={handleClick}
//           className="md:hidden block cursor-pointer p-2 hover:bg-zinc-700/50 rounded-lg transition-colors duration-300"
//           aria-label="Toggle menu"
//         >
//           {menu ? (
//             <RxCross1 className="w-6 h-6 transition-transform duration-300" />
//           ) : (
//             <RxHamburgerMenu className="w-6 h-6 transition-transform duration-300" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu - Separate from main nav */}
//       {menu && (
//         <div className="mobile-menu md:hidden absolute top-20 left-[5%] w-[90%] max-w-6xl mx-auto bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/30 rounded-b-xl overflow-hidden">
//           <div className="flex flex-col py-4">
//             {navLinks.map((item, index) => (
//               <a
//                 key={item.id}
//                 href={`#${item.id}`}
//                 onClick={handleNavClick}
//                 className="text-gray-300 hover:text-white hover:bg-zinc-800/50 px-6 py-3 transition-all duration-300 border-b border-zinc-700/30 last:border-b-0"
//                 style={{
//                   animationDelay: `${index * 0.1}s`,
//                 }}
//               >
//                 {item.title}
//               </a>
//             ))}
//             <div className="px-6 py-4">
//               <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 text-sm relative overflow-hidden group">
//                 <span className="relative z-10">Resume</span>
//                 <span className="absolute inset-0 bg-blue-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
