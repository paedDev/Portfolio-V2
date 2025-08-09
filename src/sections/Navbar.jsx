import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navLinks = [
    { id: "hero", title: "Home " },
    { id: "work", title: "Projects" },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "Contact",
      title: "Contact",
    },
  ];

  const handleClick = () => {
    setMenu(!menu);
  };
  console.log(menu);

  useGSAP(() => {
    let navTween = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".nav",
          start: "bottom top",
          scrub: true

        },
      })
      .to(".nav", {
        // ill be changing this bg
        background: 'red',
        transition: '1s',
        backgroundFilter: "blur(10px)",
        ease: "power1.inOut",
      });
  }, []);

  return (
    <nav className=" fixed top-0 left-0 w-full md:py-6 py-4 z-50 ">
      <div
        className={`nav w-[80%] mx-auto flex justify-between items-center h-16 md:px-10 px-6 bg-zinc-600/50 ${menu ? "rounded-t-xl" : "rounded-xl"
          } relative  `}
      >
        <div>
          <a
            href="https:github.com/paedDev"
            className="font-stylish text-lg hover:text-white-50 duration-500"
          >
            paedDev
          </a>
        </div>
        {/* mobile view */}
        {menu ? (
          <div className=" absolute top-16 left-0  w-full  bg-[#000] transition-all duration-400 rounded-b-2xl overflow-hidden ">
            <div className="flex flex-col items-center justify-center space-y-2     ">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={` hover:text-red-300 duration-500 hover:bg-zinc-600/50 w-full flex items-center justify-center p-2 transtion `}
                >
                  {item.title}
                </a>
              ))}
              <button className="px-4 py-2  rounded relative
              overflow-hidden group w-full ">
                <span className="absolute inset-0 bg-zinc-600/50  transtion-all duration-500 transform -translate-x-[100%] group-hover:translate-x-0">
                </span>
                <span className="relative z-10 w-full group-hover:text-green-100 transtion-colors-300">
                  Resume
                </span>
              </button>
            </div>
          </div>
        ) : (
          // desktop view
          <div className=" md:flex justify-center items-center md:gap-10 hidden">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm  hover:text-white-50 duration-500 `}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
        <button
          onClick={handleClick}
          className={"md:hidden block cursor-pointer"}>
          {menu ? <RxCross1 className="w-6 h-6" /> : <RxHamburgerMenu className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;