import React from "react";
import Reactjs from "../components/TechModels/React JS/Reactjs.jsx";
import ReactTech from "../components/TechModels/React JS/ReactTech.jsx";
const Skills = () => {
  const skillSet = [
    {
      id: 1,
      name: "React",
      image: "/images/think.png",
    },
    {
      id: 2,
      name: "Express",
      image: "/images/think.png",
    },
    {
      id: 3,
      name: "Node.js",
      image: "/images/think.png",
    },
    {
      id: 4,
      name: "Mongo Db",
      image: "/images/think.png",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      image: "/images/think.png",
    },
    {
      id: 6,
      name: "GSAP animation",
      image: "/images/think.png",
    },
  ];
  return (
    <div className="w-full min-h-screen overflow-hidden lg:px-6 px-0">
      <div className="flex justify-center items-center flex-col space-y-8 mb-10">
        <h1 className="text-center bg-gray-800 px-4 py-2 rounded-xl  text-lg tracking-wide">
          {" "}
          🖥️ What I Bring to the Table
        </h1>
        <h2 className="lg:text-6xl text-3xl font-bold tracking-widest ">
          Tech Stacks
        </h2>
      </div>
      {/* tech skills starts here */}
      <div className="flex justify-between items-center w-full h-full px-4">
        {/* left is frontend skills */}
        <div className="w-1/2 h-100 space-y-10  p-10 ">
          <h1 className="text-center text-2xl ">Frontend Skills</h1>
          {/* 3d here */}
          <div className="grid lg:grid-cols-3 gap-3 ">
            <figure className="h-full w-full bg-zinc-800/50 rounded-4xl ">
              <div className="flex flex-col items-center justify-center ">
                <ReactTech />
                <div className="pb-2">
                  <h1 className="uppercase font-semibold">React Js </h1>
                  <span>Developer</span>
                </div>
              </div>
            </figure>
            <figure className="h-full w-full bg-zinc-800/50 rounded-4xl ">
              <div className="flex flex-col items-center justify-center ">
                <ReactTech />
                <div className="pb-2">
                  <h1 className="uppercase font-semibold">React Js </h1>
                  <span>Developer</span>
                </div>
              </div>
            </figure>
            <figure className="h-full w-full bg-zinc-800/50 rounded-4xl ">
              <div className="flex flex-col items-center justify-center ">
                <ReactTech />
                <div className="pb-2">
                  <h1 className="uppercase font-semibold">React Js </h1>
                  <span>Developer</span>
                </div>
              </div>
            </figure>
          </div>
        </div>
        {/* right backend skills */}
        <div></div>
      </div>

      {/* <div className=" grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4  ">
        {skillSet.map((skills) => (
          // card
          <div className="flex items-center justify-center   ">
            <div className="md:w-full border shadow-xl rounded-xl flex flex-col justify-center items-center p-6 border-zinc-600/50 space-y-3 bg-zinc-700/50">
              <img
                src={skills.image}
                alt={skills.name}
                className="h-48 object-cover md:w-full "
              />
              <h1 className="font-modern text-lg">{skills.name}</h1>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Skills;
