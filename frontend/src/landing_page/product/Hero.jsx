import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto border-b mb-10">
      <div className="text-center mt-12 px-4 py-6">
        <h1 className="text-4xl md:text-5xl font-bold">Technology</h1>
        <h3 className="text-gray-500 mt-4 text-lg md:text-xl">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-4 mb-8 text-base md:text-lg">
          Check out our{" "}
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            investment offerings
            <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
