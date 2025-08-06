import React from 'react';

const ShowcaseSection = () => {
  return (
    <div id='work' className='w-full  mt-10 px-5 md:px-20 md:py-10 flex items-center justify-center '>
      <div className='w-full p-5  mx-auto  '>
        {/*top section */}
        <div className='grid md:grid-cols-12  md:gap-6 gap-4 md:mb-6 '>
          <div className=' md:col-span-4 group   '>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2 ' >
              <div className='relative overflow-hidden rounded-xl mb-6'>
                <img
                  src="images/petition.png"
                  alt="Project"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className='space-y-4 mt-6'>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Student/ Admin Petition System  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A comprehensive digital platform streamlining the petition process between students and administrators with real-time tracking and notifications.
                  </p>
                </div>


                <div className='flex flex-wrap gap-2 pt-2'>
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30'>Mongo Db</span>
                  <span className='px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30'>Express</span>
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30'>React</span>
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30'>Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className=' md:col-span-8 group   '>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2 ' >
              <div className='relative overflow-hidden rounded-xl mb-6 '>
                <img
                  src="images/Mojito.png"
                  alt="Project"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg "
                />
                {/* <div className='absolute inset-0 bg-gradient-to-t from-zinc-800/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div> */}
                <div className='space-y-4 mt-6'>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Mojito Website </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A comprehensive digital platform streamlining the petition process between students and administrators with real-time tracking and notifications.
                  </p>
                </div>


                <div className='flex flex-wrap gap-2 pt-2'>
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30'>React</span>
                  <span className='px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-lg border border-teal-500/30'>Tailwind Css</span>
                  <span className='px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-lg border border-emerald-500/30'>GSAP animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* bottom  section */}
        <div className='grid md:grid-cols-12  md:gap-6 gap-4 md:mb-6 '>
          <div className=' md:col-span-8 group   '>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2 ' >
              <div className='relative overflow-hidden rounded-xl mb-6'>
                <img
                  src="images/polling.png"
                  alt="Project"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />

                <div className='space-y-4 mt-6'>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Polling App  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A comprehensive digital platform streamlining the petition process between students and administrators with real-time tracking and notifications.
                  </p>
                </div>


                <div className='flex flex-wrap gap-2 pt-2'>
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30'>Mongo Db</span>
                  <span className='px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-lg border border-red-500/30'>Express</span>
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30'>React</span>
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-lg border border-green-500/30'>Node.js</span>
                </div>
              </div>
            </div>
          </div>

          <div className=' md:col-span-4 group   '>
            <div className='bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 h-full transition-all duration-500 hover:bg-zinc-700/50 hover:border-zinc-600/50 hover:shadow-2xl hover:shadow-zinc-900/20 hover:-translate-y-2 ' >
              <div className='relative overflow-hidden rounded-xl mb-6'>
                <img
                  src="images/donut.png"
                  alt="Project"
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 rounded-lg"
                />
                <div className='space-y-4 mt-6'>
                  <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Donut Website </h2>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    A comprehensive digital platform streamlining the petition process between students and administrators with real-time tracking and notifications.
                  </p>
                </div>
                <div className='flex flex-wrap gap-2 pt-2'>
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30'>React</span>
                  <span className='px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-lg border border-teal-500/30'>Tailwind Css</span>
                  <span className='px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-lg border border-emerald-500/30'>GSAP animation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ShowcaseSection;