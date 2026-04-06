const Hero = () => {
  return (
      <section className="bg-blue-50 py-20 flex items-center relative overflow-hidden">
        <div className="absolute right-[-10%] top-10 w-[60%] h-[80%] bg-gradient-to-r from-blue-500 to-teal-400 blur-3xl opacity-20 rounded-[40%_60%]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 px-6 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-light text-blue-900 leading-tight">
              20 years of digital transformation.
              <span className="block font-bold relative mt-2">
                It's possible
                <span className="absolute bottom-1 left-0 w-full h-6 bg-teal-200 -z-10" />
              </span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-lg">
              Catalysts. Ecosystem enablers. Problem Solvers.
            </p>

            <div className="flex gap-4 mt-6">
              <button className="bg-teal-400 text-white px-6 py-2 rounded-full shadow">
                Our Approach
              </button>
              <button className="border px-6 py-2 rounded-full">
                Our Impact
              </button>
            </div>
          </div>

          <div className="text-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/042/126/645/small/ai-generated-handsome-young-businessman-looking-at-his-phone-lifestyle-people-isolated-on-transparent-background-free-png.png"
              className="mx-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;