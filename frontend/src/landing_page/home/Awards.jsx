import React from "react";

function Awards() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="w-3/4 max-w-sm md:max-w-md lg:ml-10"
          />
        </div>

        {/* Right content */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            Largest stock broker in India
          </h1>
          <p className="text-gray-600">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* Two column list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Futures and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>

          {/* Press logos */}
          <div>
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
