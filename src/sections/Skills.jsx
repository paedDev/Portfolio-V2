import React from "react";
import Reactjs from "../components/TechModels/ReactJS/Reactjs.jsx";
import ReactCanvas from "../components/TechModels/ReactJS/ReactCanvas.jsx";
import ThreeJsCanvas from "../components/TechModels/ThreeJs/ThreeJsCanvas.jsx";
import NodeCanvas from "../components/TechModels/Node Model/NodeCanvas.jsx";
import CssCanvas from "../components/TechModels/CSS/CssCanvas.jsx";
import GithubCanvas from "../components/TechModels/Github Model/GithubCanvas.jsx";
import GitCanvas from "../components/TechModels/Git Model/GitCanvas.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const skillSet = [
    {
      id: 1,
      title: "React Js",
      subTitle: "Developer",
      model: <ReactCanvas />,
      description:
        "A powerful JavaScript library for building dynamic and responsive user interfaces in web apps.",
    },
    {
      id: 2,
      title: "Three.Js",
      subTitle: "Animation",
      model: <ThreeJsCanvas />,
      description:
        "A lightweight JavaScript 3D library that enables the creation of high-performance 3D web animations and visualizations.",
    },
    {
      id: 3,
      title: "Node.Js",
      subTitle: "Backend Developer",
      model: <NodeCanvas />,
      description:
        "A JavaScript runtime for building scalable and efficient server-side applications and REST APIs.",
    },
    {
      id: 4,
      title: "Github",
      subTitle: "Version Control",
      model: <GithubCanvas />,
      description:
        "A collaborative platform for managing and hosting Git repositories with code reviews and team workflows.",
    },
    {
      id: 5,
      title: "Git",
      subTitle: "Source Control System",
      model: <GitCanvas />,
      description:
        "The leading distributed version control system for tracking code changes and enabling collaboration across teams.",
    },
  ];
  const techLogo = [
    {
      name: "HTML",
      logo: <FaHtml5 />,
      position: "top-1/4 left-4 lg:left-1/4",
    },
    {
      name: "CSS",
      logo: <IoLogoCss3 />,
      position: "top-1/3 right-4 lg:right-1/4",
    },
    {
      name: "Javascript",
      logo: <IoLogoJavascript />,
      position: "top-1/3 left-8 lg:left-10",
    },
    {
      name: "Tailwind CSS",
      logo: <RiTailwindCssFill />,
      position: "top-1/3 right-8 lg:right-20",
    },
    {
      name: "MySQL",
      logo: <SiMysql />,
      position: "bottom-32 left-4 lg:bottom-20 lg:left-20",
    },
    {
      name: "MongoDB",
      logo: <DiMongodb />,
      position: "bottom-32 right-4 lg:bottom-20 lg:right-20",
    },
    {
      name: "Express Js",
      logo: <SiExpress />,
      position: "bottom-40 left-1/2 transform -translate-x-1/2 lg:bottom-20",
    },
  ];
  useGSAP(() => {
    document.fonts.ready.then(() => {
      let split = SplitText.create(".tech-title", {
        type: "chars",
        autoSplit: true,
      });
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skills",
          start: "top 70%",

          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".animate-techCards",
        { opacity: 0, yPercent: -100 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.2,
          ease: "back.inOut",
          duration: 1,
        }
      ).from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
      gsap.fromTo(
        ".floating-logo",
        { opacity: 0, scale: 0, y: 200 },
        {
          opacity: 0.3,
          scale: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: "#skills",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-screen overflow-hidden lg:px-6 px-0 mb-8 flex items-center justify-center flex-col relative"
    >
      {/* floating tech logo */}
      {techLogo.map((logo, index) => (
        <div
          key={index}
          className={`floating-logo absolute  ${logo.position} text-4xl text-gray-500 hover:text-white transition-colors duration-300 z-10 transform`}
        >
          <div className="flex items-center space-x-2 ">
            <span className="lg:block hidden">{logo.logo}</span>
            <h2 className="lg:block hidden">{logo.name}</h2>
          </div>
        </div>
      ))}
      <div className="h-full flex justify-center items-center flex-col space-y-8 mb-10">
        <h1 className="text-center bg-gray-800 px-4 py-2 rounded-xl  text-lg tracking-wide">
          {" "}
          🖥️ What I Bring to the Table
        </h1>
        <h2 className="tech-title lg:text-6xl text-3xl font-bold tracking-widest ">
          Tech Stacks
        </h2>
      </div>
      {/* tech skills starts here */}
      <div className="  max-w-8xl mx-auto h-full px-4">
        {/* left is frontend skills */}
        <div className="space-y-10  p-10 ">
          {/* <h1 className="text-center text-2xl ">Frontend Skills</h1> */}
          {/* 3d here */}
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-3 mx-auto ">
            {skillSet.map((skill, index) => (
              <figure
                key={skill.id}
                className="animate-techCards h-86 w-full bg-zinc-800/50 rounded-3xl overflow-hidden relative group z-50"
              >
                <div className="absolute bottom-0 left-0 w-full h-0 bg-gray-900 group-hover:h-full group-hover:w-full duration-600 ease-in-out ">
                  <div className="group-hover:absolute bottom-0 p-6 text-center">
                    <p className="text-gray-300 text-sm text-center ">
                      {skill.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center h-full ">
                  <div className="flex-1 p-4">{skill.model}</div>
                  <div className="pb-4 text-center">
                    <h1 className="uppercase font-semibold text-white text-lg">
                      {skill.title}
                    </h1>
                    <span className="text-gray-300">{skill.subTitle}</span>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
        {/* right backend skills */}
      </div>
      <div className="lg:hidden mt-16">
        <h3 className="text-xl font-semibold text-white text-center mb-8">
          Other Technologies I use
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {techLogo.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center space-x-3 bg-zinc-800/30 rounded-lg p-4 hover:bg-zinc-800/50 transition-colors duration-300"
            >
              <span className="text-2xl text-gray-400">{logo.logo}</span>
              <span className="text-sm text-gray-300">{logo.name}</span>
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default Skills;
