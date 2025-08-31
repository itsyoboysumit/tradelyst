import React from "react";

function Hero() {
  // Data for quick links and featured articles for easier management
  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
  ];

  const featuredArticles = [
    {
      title: "Current Takeovers and Delisting - January 2024",
      href: "#",
    },
    {
      title: "Latest Intraday leverages - MIS & CO",
      href: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pb-8 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Support Portal</h1>
          <a
            href="#"
            className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <i className="fa fa-ticket mr-2" aria-hidden="true"></i>
            Track Tickets
          </a>
        </div>

        {/* Content Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16">
          {/* Left Section (takes 3 of 5 columns) */}
          <div className="md:col-span-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How can we help?
            </h2>
            <p className="text-lg text-gray-500 mb-8">
              Search our knowledge base or browse help topics to find answers.
            </p>

            {/* Enhanced Search Bar with Font Awesome */}
            <div className="relative group mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600">
                <i className="fa fa-search" aria-hidden="true"></i>
              </span>
              <input
                type="text"
                placeholder="Eg. how do I activate F&O"
                className="w-full pl-10 pr-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Quick Links as Pills */}
            <div className="flex flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section (takes 2 of 5 columns) */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Featured Articles
            </h3>
            <ul className="space-y-4">
              {featuredArticles.map((article) => (
                <li key={article.title}>
                  <a
                    href={article.href}
                    className="group flex justify-between items-center text-blue-600 hover:text-blue-800"
                  >
                    <span className="font-medium group-hover:underline">
                      {article.title}
                    </span>
                    <i
                      className="fa fa-chevron-right transform transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;