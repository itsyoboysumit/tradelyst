import React from "react";

function Hero() {
  return (
    <div className="px-5 py-10 mb-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero"
          className="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mb-8 h-auto"
        />
        <h1 className="text-2xl md:text-4xl font-bold mt-5">
          Invest in everything
        </h1>
        <p className="text-gray-600 text-base md:text-lg mt-3">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition w-full sm:w-1/2 md:w-1/4">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
