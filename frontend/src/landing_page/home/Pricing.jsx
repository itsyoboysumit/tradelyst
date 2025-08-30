import React from "react";

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Section */}
        <div className="md:col-span-5 ">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Unbeatable pricing</h1>
          <p className="text-gray-600 mb-4 ">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium inline-flex items-center hover:underline"
          >
            See Pricing{" "}
            <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h1 className="text-3xl font-bold mb-3">₹0</h1>
              <p className="text-gray-600">
                Free equity delivery and <br /> direct mutual funds
              </p>
            </div>
            <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h1 className="text-3xl font-bold mb-3">₹20</h1>
              <p className="text-gray-600">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
