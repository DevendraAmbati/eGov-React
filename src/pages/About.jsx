import React from 'react';

const HeroSection = () => {
  return (
    <section className=" min-h-[400px] ">
        <div className='grid justify-center my-5'>
                <p className="px-6 py-1.5 border border-gray-400 text-gray-700 bg-white rounded-full text-sm font-medium hover:bg-gray-50 transition">
          About Us
        </p>
        </div>
    <div className='bg-[#0A1D56] overflow-hidden relative'>
      <div className="absolute top-6 left-0 right-0 flex justify-center z-20">

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 ">
        <div className="grid md:grid-cols-2  items-center gap-12">
        <div className="text-white z-10 space-y-6 order-2 md:order-1">
            <div className="flex items-center gap-2">
              <h2 className="text-4xl font-bold tracking-tight">DIGIT</h2>
            </div>
            <p className="text-sm opacity-80 -mt-4">by eGov Foundation</p>
            
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-light opacity-90">Our open source</h3>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                technology-for-good <br /> platform
              </h1>
            </div>

            <p className="max-w-md text-sm  opacity-70 leading-relaxed">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation 
              is eGov's open-source platform with reusable building blocks and shared data 
              registries that can be used to build solutions in multiple sectors.
            </p>

            <button className="mt-4 px-8 py-2 bg-white text-[#0A1D56] rounded-full font-semibold text-xs hover:bg-opacity-90 transition shadow-lg">
              Explore the platform
            </button>
          </div>

          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-full max-w-lg">
              <img 
                              src="https://static.vecteezy.com/system/resources/thumbnails/042/126/645/small/ai-generated-handsome-young-businessman-looking-at-his-phone-lifestyle-people-isolated-on-transparent-background-free-png.png"
                alt="Person using phone" 
                className="w-full h-auto object-cover rounded-b-full md:rounded-none  "
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D56] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
