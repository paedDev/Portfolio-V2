import React from 'react';
import bg from '/images/bg.png';
import { words } from '../constants';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';

const Hero = () => {

  return (
    <section id='hero' className='w-dvw relative overflow-hidden min-h-screen '>
      <div className='absolute top-0 left-0 z-10'>
        <img src={bg} alt="background" />
      </div>
      <div className='relative z-10 lg:mt-20 mt-32 md:h-dvh h-[80vh] flex lg:items-center items-start justify-center'>
        {/* Left Hero Content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5 '>
          <div className='flex flex-col gap-7'>
            <div className='flex flex-col justify-center md:text-[40px] text-[30px] font-semibold relative z-10 pointer-events-none'>
              <h1>Transforming
                <span className='absolute pt-2 overflow-hidden md:h-[60px] h-[40px] py-[25px] md:px-5 px-2 translate-y-0 md:translate-y-1'>
                  <span className='wrapper flex flex-col'>
                    {words.map((word) => (
                      <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                        <img src={word.imgPath} alt={word.text} className='lg:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 object-contain' />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1> into Web Experiences</h1>
              <h1>that Drive Success</h1>
            </div>
            <p className='text-white-50 md:text-md relative z-10 pointer-events-none w-[40vw]'>I'm Jan Noel Sablaon Paed, a skilled frontend developer from the Philippines who combines modern frameworks with creative design to deliver exceptional user experiences.</p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text='See My work' />
          </div>
        </header>
        {/* Right for 3D Model */}
        <figure>
          <div className='lg:w-[60%] w-full h-full min-h-[50vh] absolute  lg:top-0 top-30 lg:translate-y-0 translate-y-30 lg:-right-10 right-0  '>
            <HeroExperience />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;