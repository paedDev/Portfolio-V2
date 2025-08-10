import React from 'react';

const Skills = () => {
  const skillSet = [
    {
      id: 1,
      name: 'React',
      image: '/images/think.png',
    },
    {
      id: 2,
      name: 'Express',
      image: '/images/think.png',
    }
    ,
    {
      id: 3,
      name: 'Node.js',
      image: '/images/think.png',
    }
    , {
      id: 4,
      name: 'Mongo Db',
      image: '/images/think.png',
    }
    , {
      id: 5,
      name: 'Tailwind CSS',
      image: '/images/think.png',
    }
    ,
    {
      id: 6,
      name: 'GSAP animation',
      image: '/images/think.png',
    }
  ];
  return (
    <div className='w-full min-h-screen overflow-hidden lg:px-6 px-0'>
      <h1 className='text-center'>Skill Set</h1>
      <div className=' grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 lg:gap-6 gap-4  '>
        {
          skillSet.map((skills) => (
            // card
            <div className='flex items-center justify-center   '>
              <div className='md:w-full border shadow-xl rounded-xl flex flex-col justify-center items-center p-6 border-zinc-600/50 space-y-3 bg-zinc-700/50'>
                <img src={skills.image} alt={skills.name} className='h-48 object-cover md:w-full ' />
                <h1 className='font-modern text-lg'>{skills.name}</h1>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Skills;