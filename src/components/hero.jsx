import React from "react";

const HeroSection = ({
  backgroundImage = "/media/hero.jpg",
  title = "NUESTRA NUEVA",
  subtitle = "COLLECION DE",
  year = "2024",
  ctaText = "Descubre más",
  ctaLink = "#",
}) => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-24 ">
        <div className="w-full max-w-6xl ">
          <div className="max-w-2xl text-center">
            <h1 className="text-white font-raleway">
              <span className="block text-3xl md:text-4xl  mb-2">
                {title}
              </span>
              <span className="block text-3xl md:text-4xl  mb-2">
                {subtitle}
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold">
                {year}
              </span>
            </h1>

            <a
              href={ctaLink}
              className="inline-flex items-center mt-8 text-white hover:text-gray-200 transition-colors duration-300"
            >
              <span className="text-lg md:text-xl border-b border-white">
                {ctaText}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
