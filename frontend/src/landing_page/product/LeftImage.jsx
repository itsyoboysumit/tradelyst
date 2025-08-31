import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex flex-col md:flex-row items-center gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={imageURL}
            alt={productName}
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {productName}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {productDesription}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            <a
              href={tryDemo}
              className="text-blue-600 font-medium hover:underline"
            >
              Try Demo
            </a>
            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn More
            </a>
          </div>

          {/* Store Badges */}
          <div className="flex flex-wrap gap-6 mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-12"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
