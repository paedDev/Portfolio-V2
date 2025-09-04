import React from 'react';

const TitleHeader = ({ title, sub }) => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='bg-gray-800 py-2 px-4 rounded-xl text-sm w-fit md:text-base text-nowrap '>
        <p>{sub}</p>

      </div>
      <div>
        <h1 className='lg:text-6xl text-3xl  text-center font-modern tracking-wider font-semibold '>{title}</h1>
      </div>
    </div>
  );
};

export default TitleHeader;