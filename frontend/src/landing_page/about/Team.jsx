import React from "react";

function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Title */}
      <div className="py-6 mt-10 border-t">
        <h1 className="text-center text-3xl font-bold">People</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 py-6 text-gray-600 text-lg leading-relaxed">
        {/* Left Side - Image & Name */}
        <div className="flex flex-col items-center md:w-1/2 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-full w-40 md:w-1/2"
          />
          <h4 className="mt-5 text-xl font-semibold">Nithin Kamath</h4>
          <h6 className="text-gray-500">Founder, CEO</h6>
        </div>

        {/* Right Side - Description */}
        <div className="md:w-1/2 space-y-4">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
