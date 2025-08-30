import React from "react";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="py-10 mt-10 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold text-center leading-snug">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 py-10 mt-10 border-t text-gray-600 text-lg leading-relaxed">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-4">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 space-y-4">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-blue-600 hover:underline">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
