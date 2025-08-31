import React from "react";

function RightImage({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="w-full lg:px-30 py-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{productName}</h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            {productDesription}
          </p>
          <a
            href={learnMore}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 px-4">
          <img
            src={imageURL}
            alt={productName}
            className="w-full h-auto max-w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default RightImage;
