import React from "react";

function CreateTicket() {
  const links = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Zerodha",
    "Zerodha IDFC FIRST Bank 3-in-1 Account",
    "Getting Started",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-10 mt-10 mb-10">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-8">
          To create a ticket, select a relevant topic
        </h1>

        {/* Grid of Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                {/* Font Awesome v4 icon */}
                <i className="fa fa-plus-circle text-blue-600"></i>
                Account Opening
              </h4>
              <div className="flex flex-col space-y-2">
                {links.map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
