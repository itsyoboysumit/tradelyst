import React from "react";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center border-b py-10 mt-10">
        <h1 className="text-4xl font-bold">Pricing</h1>
        <h3 className="text-gray-500 mt-3 text-lg">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 text-center">
        {/* Card 1 */}
        <div className="p-6 flex flex-col items-center">
          <img src="media/images/pricingEquity.svg" alt="Equity Delivery" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold">Free equity delivery</h2>
          <p className="text-gray-500 mt-2">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 flex flex-col items-center">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trades" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold">Intraday and F&O trades</h2>
          <p className="text-gray-500 mt-2">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday
            trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 flex flex-col items-center">
          <img src="media/images/pricingEquity.svg" alt="Mutual Funds" className="w-24 h-24 mb-4" />
          <h2 className="text-xl font-semibold">Free direct MF</h2>
          <p className="text-gray-500 mt-2">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
