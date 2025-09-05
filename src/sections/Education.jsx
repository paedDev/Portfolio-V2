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
      description:
        "Focused on software development, IoT systems, and embedded systems.",
    },
    {
      id: 2,
      institution: "Saint Louis College ",
      degree: "Senior High School Diploma",
      startDate: "2017",
      endDate: "2019",
      description: "Focused on accountancy, business, and management subjects.",
    },
    {
      id: 3,
      institution: "Tagudin National High School",
      degree: "High School Diploma",
      startDate: "2013",
      endDate: "2019",
      description:
        "Graduated with strong foundation in mathematics and computer science.",
    },
  ];
  return (
    <section
      id="education"
      className="min-h-dvh w-full mt-10 px-5 md:px-10 lg:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Education Background" sub="💼 My Career Overview" />
        <div className="mt-32 relative">
          <div className="relative z-50 lg:space-y-16 space-y-10">
            {timeLineData.map((card) => (
              <div
                key={card.id}
                className="flex flex-col-reverse lg:flex-row lg:gap-20 gap-10 justify-between"
              >
                <div className="lg:w-2/6">
                  <GlowCard card={card}></GlowCard>
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
