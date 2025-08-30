import React from "react";

function OpenAccount() {
  return (
    <div className="px-6 py-12 mb-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5">
          Open a Zerodha account
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-medium rounded-lg shadow-md transition-all duration-300 w-full sm:w-auto"
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
