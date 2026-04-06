import React from 'react';

const Reimagining = () => {
  return (
    <section className="bg-white py-16 px-6 md:py-24 relative">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-light text-slate-500 leading-tight">
            20 years of reimagining for citizens and
            <span className="block font-bold text-blue-900 relative mt-2">
              sustaining change
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-3 bg-blue-100/60 -z-10 rounded-full" />
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the 
            quality of life for every citizen. To have sustainable impact at scale, the collective energy of 
            local networks to solve local problems needs to be tapped into. Our partners & networks 
            bring this collective energy to life. The ecosystem already exists; our task is to facilitate and 
            amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful 
            change, so that no citizen is left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="group  relative bg-[#F3F4F6] rounded-3xl overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[380px] transition-transform hover:scale-[1.02] cursor-pointer">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxR2Mb7VHtM0X5trSOKsmKru1vzhNQUuPdtQ&s" 
              alt="Person speaking"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
            />
            <div className='absolute top-1/2'>
            <div className="relative m-6 px-8 flex items-center gap-4 bg-white/90 backdrop-blur-sm p-4  border-l-4 border-blue-600 self-start max-w-[60%] text-left">
              <p className="text-blue-900 text-xs md:text-sm font-medium italic">
                "Leveraging technology for sustainable development"
              </p>
              <div className="bg-red-600 rounded-full p-2 text-white shadow-md fixed -right-3 ">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            </div>
          </div>

          <div className="group relative bg-[#F3F4F6] rounded-3xl overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[380px] transition-transform hover:scale-[1.02] cursor-pointer">
            <img 
              src="data:image/jpeg;base64,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" 
              alt="Person speaking"
              className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80"
            />
            <div className='absolute top-1/2'>
            <div className="relative m-6 px-8 flex items-center gap-4 bg-white/90 backdrop-blur-sm p-4 border-l-4 border-blue-400 self-start max-w-[60%] text-left">
              <p className="text-blue-900 text-xs md:text-sm font-medium italic">
                "Digitizing civic services for better life"
              </p>
              <div className="bg-red-600 rounded-full p-2 text-white shadow-md fixed -right-3 ">
                <svg className="w-5 h-5 fill-current " viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reimagining;
