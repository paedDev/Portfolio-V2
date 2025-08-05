import React from 'react';

const Button = ({ className, id, text }) => {
  return (
    <a onClick={(e) => {
      e.preventDefault();
      const target = document.getElementById('counter');
      if (target && id) {
        const offset = window.innerHeight * 0.15;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }} className={`${className ?? ''} relative z-20 cursor-pointer`}>
      <div className='px-3 py-3 rounded-lg bg-white/10 flex justify-center items-center group relative cursor-pointer overflow-hidden'>
        <div className='absolute h-[100%] w-[120%] bg-white-50 -right-10 origin-center group-hover:size-10 group-hover:right-10 transition-all duration-500 rounded-full top-1/2 -translate-y-1/2' />
        <p className='uppercase md:text-lg text-black transition-all duration-500 group-hover:text-white-50 group-hover:-translate-x-5 lg:translate-x-0 -translate-x-5 font-semibold'>{text}</p>
        <div className='group-hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex items-center justify-center overflow-hidden'>
          <img src="/images/arrow-down.svg" alt="arrow" className='size-5 lg:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration50' />
        </div>
      </div>
    </a>
  );
};
// absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:right-10 rounded-full bg-white-50 translate-all duration-500

// uppercase md:text-lg text-black transition-all duration-500 group-hover:text-white-50 group-hover:-translate-x-5 lg:translate-x-0 -translate-x-5 font-semibold

// group-hover:bg-white-50 size-10 rounded-full absolute right-10 top-1/2 
//         -translate-y-1/2 flex justify-center items-center overflow-hidden

// size-5 lg:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500
export default Button;