import React from 'react';
import TitleHeader from '../components/TitleHeader';

const Education = () => {
  const timeLineData = {
    education: [
      {
        id: 1,
        institution: "University of the Cordilleras",
        degree: "BS in Computer Engineering",
        startDate: "2019",
        endDate: "Present",
        description: "Focused on software development, IoT systems, and embedded systems."
      },
      {
        id: 2,
        institution: "Saint Louis College San Fernando Launion",
        degree: "Senior High School Diploma",
        startDate: "2017",
        endDate: "2019",
        description: "Focused on accountancy, business, and management subjects, developing skills in leadership, entrepreneurship, and financial literacy."
      },
      {
        id: 3,
        institution: "Tagudin National High School",
        degree: "High School Diploma",
        startDate: "2013",
        endDate: "2019",
        description: "Graduated with strong foundation in mathematics and computer science."
      }
    ]
  };
  return (
    <section id='education' className='min-h-dvh w-full mt-10 px-5 md:px-10 lg:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title='Education Background' sub='💼 My Career Overview' />
        <div className='mt-32 relative'>
          <div className='relative z-50 lg:space-y-32 space-y-10'>

          </div>
        </div>
      </div>



    </section>
  );
};

export default Education;