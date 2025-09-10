import React from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Education = () => {
  useGSAP(() => {
    // animate cards coming from the left side
    gsap.utils.toArray(".card-animate").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    // animate cards coming from the left side
    gsap.utils.toArray(".timeline-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power2.inOut",
          delay: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    gsap.utils.toArray(".timeline-line").forEach((line, index) => {
      gsap.fromTo(
        line,
        {
          scaleY: 0,
          transformOrigin: "top center",
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    gsap.utils.toArray(".timeline-dot").forEach((dot, index) => {
      gsap.fromTo(
        dot,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);
  const timeLineData = [
    {
      id: 1,
      institution: "University of the Cordilleras",
      degree: "BS in Computer Engineering",
      startDate: "2019",
      endDate: "Present",
      image: "/images/logo-images/uclogo.png",
      description:
        "Focused on software development, IoT systems, machine learning, and embedded systems.",
      title: "Frontend Developer / IoT Developer",
      date: "2021 - Present",
      responsibilities: [
        "Developed full-stack web applications using Node.js, Express, EJS, and React.",
        "Designed IoT systems with ESP32 and real-time monitoring via Blynk.",
        "Worked on thesis projects including Windmill Portable Generator (IoT + ML) and Math Playground (interactive learning tool).",
      ],
    },
    {
      id: 2,
      institution: "Saint Louis College San Fernando, La Union",
      degree: "Senior High School Diploma (ABM Strand)",
      startDate: "2017",
      endDate: "2019",
      image: "/images/logo-images/slc-logo.png",
      description:
        "Graduated with a strong foundation in business, management, and applied mathematics.",
      title: "Business & Management Track",
      date: "2017 - 2019",
      responsibilities: [
        "Applied business and management skills in group projects and case studies.",
        "Developed early interest in technology and computer engineering through coding and small research projects.",
      ],
    },
    {
      id: 3,
      institution: "Tagudin National High School",
      degree: "High School Diploma",
      startDate: "2013",
      endDate: "2017",
      image: "/images/logo-images/tnhs.png",
      description:
        "Graduated with strong foundation in mathematics, science, and computer literacy.",
      title: "High School Graduate",
      date: "2013 - 2017",
      responsibilities: [
        "Participated in science and math competitions at the school level.",
        "Engaged in school projects that built teamwork and leadership skills.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-dvh w-full mt-10 px-5 md:px-10 lg:px-0 py-20"
    >
      <div className="w-[80%] mx-auto h-full md:px-20 px-5">
        <TitleHeader title="Education Background" sub="💼 My Career Overview" />
        <div className="mt-32 relative timeline-container">
          {/* timeline line vertical */}

          <div className="relative z-50 lg:space-y-16 space-y-10 ">
            {timeLineData.map((card, index) => (
              <div
                key={card.id}
                className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-10 justify-between"
              >
                {/* Card Section */}
                <div className="lg:w-2/5 ml-10 card-animate">
                  <GlowCard card={card} index={index}></GlowCard>
                </div>
                {/* TIMELINE DOT and line */}
                <div className="absolute top-0 lg:left-[37.5%] md:left-10 left-5 h-full flex justify-center z-10">
                  <div className="timeline-line bg-gradient-to-b from-pink-400 via-blue-400 to-violet-400 w-1 h-full" />
                </div>
                <div className="timeline-dot absolute xl:left-[36%] lg:left-[34.5%] md:left-[4%] z-30">
                  <div className="size-12 bg-gradient-to-r from-gray-400 to-violet-400 rounded-full border-4 border-gray-900 shadow-lg">
                    <div className="w-full h-full bg-white rounded-full opacity-20"></div>
                  </div>
                </div>
                {/* Timeline Content */}
                <div className="lg:w-3/5 ml-10 md:ml-15 lg:ml-0 timeline-item">
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300   ">
                    <div>
                      <div>
                        <div className="" key={card}>
                          <h1 className="font-semibold text-3xl">
                            {card.title}
                          </h1>
                          <p className="my-5 text-white-50">{card.date}</p>
                          <p className="text-[#839cb5] italic">
                            Resposibilities
                          </p>
                          {card.responsibilities && (
                            <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                              {card.responsibilities.map(
                                (responsibility, i) => (
                                  <li key={i}>{responsibility}</li>
                                )
                              )}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
