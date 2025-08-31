import React from "react";

function Universe() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          The Zerodha Universe
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt="Partner Logo"
              className="w-24 h-24 object-contain mb-3"
            />
            <p className="text-sm text-gray-500">
              Thematic investment platform
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700 transition">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
