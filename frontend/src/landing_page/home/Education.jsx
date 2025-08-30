import React from "react";

function Education() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Image Section */}
        <div >
          <img
            src="media/images/education.svg"
            alt="Education"
            className="w-3/4 md:w-2/3"
          />
        </div>

        {/* Right Content Section */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            Free and open market education
          </h1>
          <p className="text-gray-700 mb-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium flex items-center gap-2"
          >
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>

          <p className="mt-6 text-gray-700">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-blue-600 hover:underline font-medium flex items-center gap-2"
          >
            TradingQ&A{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
