import React from 'react';
import CountUp from 'react-countup';
import { counterItems } from '../constants';
const AnimatedCounter = () => {

  return (
    <div id='counter' className='px-5 md:px-10 lg:mt-0 mt-32'>
      <div className='mx-auto grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
        {
          counterItems.map((item) => (
            <div className='bg-zinc-900 rounded-lg p-8 flex flex-col justify-center'>
              <div key={counterItems.label} className='counter-number text-white text-4xl font-bold mb-2'>

                <CountUp suffix={item.suffix} end={item.value} />
              </div>
              <div className='text-wihte-50 text-md'>
                {item.label}
              </div>
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default AnimatedCounter;