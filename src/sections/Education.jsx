import React from "react";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Education = () => {
  const timeLineData = [
    {
      id: 1,
      institution: "University of the Cordilleras",
      degree: "BS in Computer Engineering",
      startDate: "2019",
      endDate: "Present",
      image: "",
      description:
        "Focused on software development, IoT systems, and embedded systems.",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Developed and maintained user-facing features for the Hostinger website.",
        "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
        "Optimized web applications for maximum speed and scalability.",
      ],
    },
    {
      id: 2,
      institution: "Saint Louis College ",
      degree: "Senior High School Diploma",
      startDate: "2017",
      endDate: "2019",
      image: "",
      description: "Focused on accountancy, business, and management subjects.",
      title: "Full Stack Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
        "Led the development of Docker's web applications, focusing on scalability.",
        "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
        "Contributed to open-source projects that were used with the Docker ecosystem.",
      ],
    },
    {
      id: 3,
      institution: "Tagudin National High School",
      degree: "High School Diploma",
      startDate: "2013",
      endDate: "2019",
      image: "",
      description:
        "Graduated with strong foundation in mathematics and computer science.",
      title: "Frontend Developer",
      date: "January 2023 - Present",
      responsibilities: [
        "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
        "Improved app performance and user experience through code optimization and testing.",
        "Coordinated with the product team to implement features based on feedback.",
      ],
    },
  ];
  const expCards = [{}, {}, {}];
  return (
    <section
      id="education"
      className="min-h-dvh w-full mt-10 px-5 md:px-10 lg:px-0 py-20"
    >
      <div className="w-[80%] mx-auto h-full md:px-20 px-5">
        <TitleHeader title="Education Background" sub="💼 My Career Overview" />
        <div className="mt-32 relative">
          <div className="relative z-50 lg:space-y-16 space-y-10 ">
            {timeLineData.map((card, index) => (
              <div
                key={card.id}
                className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-10 justify-between"
              >
                <div className="lg:w-3/6">
                  <GlowCard card={card} index={index}></GlowCard>
                </div>
                <div className="lg:w-4/6">
                  <div className="flex items-start">
                    <div className="absolute top-0 lg:left-[35vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="absolute z-30 h-full -top-10 w-14 md:w-28 bg-black">
                        <div className="gradient-line w-1 h-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-10 justify-between">
                        <div className="timeline-logo">
                          <p>logo</p>
                        </div>
                        <div>
                          <div className="" key={card}>
                            <h1 className="font-semibold">{card.title}</h1>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
