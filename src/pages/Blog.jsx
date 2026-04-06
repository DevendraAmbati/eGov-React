import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-50 font-sans">

      <section className="relative bg-black text-white pt-16 md:pt-24 pb-32 md:pb-48 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 lg:gap-2">

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight">
              1,000,000,100+
            </h1>

            <p className="max-w-sm text-sm opacity-80 mt-4 md:mt-0">
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-10 md:mt-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">1.1 Billion+</h3>
              <p className="text-xs opacity-70 uppercase tracking-wide">
                Public services delivered
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold">50+ partners</h3>
              <p className="text-xs opacity-70 uppercase tracking-wide">
                From technology, governments and NGOs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-4 md:px-6 -mt-20 md:-mt-32 pb-16 md:pb-20">

        <div className="bg-white shadow-2xl rounded-2xl md:rounded-[40px] p-6 md:p-10 grid lg:grid-cols-12 gap-6 md:gap-10">

          <div className="lg:col-span-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 leading-tight">
              Big problems need <br />
              <span className="font-bold text-blue-900 text-3xl sm:text-4xl md:text-5xl">
                bold approaches
              </span>
            </h2>

            <div className="mt-6 md:mt-10 space-y-3">
              {[
                "Public Health",
                "Public Finance",
                "Local Governance",
                "Water & Sanitation",
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full text-left px-5 md:px-8 py-2 md:py-3 rounded-full border text-sm md:text-base transition ${i === 0
                      ? "bg-blue-600 text-white border-blue-600 shadow"
                      : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>


          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 md:gap-6">


            <div className="bg-[#48C7C1] text-white p-6 md:p-8 rounded-2xl md:rounded-[32px] flex flex-col justify-between min-h-[250px] md:min-h-[350px]">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold">210+</h3>
                <p className="mt-2 text-sm md:text-lg">
                  cities LIVE with iODK/iDIU across India
                </p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-xs md:text-sm py-2 px-5 rounded-full self-start">
                Read More
              </button>
            </div>


            <div className="bg-[#1E88E5] text-white p-6 md:p-8 rounded-2xl md:rounded-[32px] flex flex-col justify-between min-h-[250px] md:min-h-[350px]">
              <div>
                <h3 className="text-3xl md:text-5xl font-bold">2 Bn</h3>
                <p className="mt-2 text-sm md:text-lg">
                  COVID-19 vaccination certificates issued
                </p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-xs md:text-sm py-2 px-5 rounded-full self-start">
                Read More
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;