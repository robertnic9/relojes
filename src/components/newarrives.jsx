"use client";
import React, { useState } from "react";
import watches from "@/data/newarrives";

const WatchesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);
  const visibleDesktopItems = 4;

  const nextSlide = () => {
    if (currentIndex < watches.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextDesktopSlide = () => {
    if (desktopIndex < watches.length - visibleDesktopItems) {
      setDesktopIndex(desktopIndex + 1);
    }
  };

  const prevDesktopSlide = () => {
    if (desktopIndex > 0) {
      setDesktopIndex(desktopIndex - 1);
    }
  };

  return (
    <div className="bg-black text-white p-4 md:py-12 md:p-8">
      {/* Mobile */}
      <div className="md:hidden flex flex-col">
        <div className="my-8 text-center">
          <h1 className="text-4xl font-raleway font-thin mb-4">
            NUESTROS
            <br />
            RELOJES
            <br />
            <span className="text-white font-bold">DE 2025</span>
          </h1>
          <p className="text-sm mb-4">Descubra nuestras novedades</p>
        </div>

        {/* Mobile Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {watches.map((watch) => (
                <div key={watch.id} className="w-full flex-shrink-0 px-2">
                  <div className="flex flex-col space-y-4">
                    <img
                      src={watch.image}
                      alt={watch.name}
                      className="w-full aspect-square object-cover"
                    />
                    <h2 className="text-lg font-medium">{watch.name}</h2>
                    <p className="text-sm text-gray-300">{watch.description}</p>
                    <button className="border-b border-white text-sm pb-1 w-fit">
                      Descubrir más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between absolute top-1/3 w-full px-2">
            <button
              onClick={prevSlide}
              className={`p-2 border bg-gray-500/50 border-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? "opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className={`p-2 border bg-gray-500/50 border-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                currentIndex === watches.length - 1
                  ? "opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
            >
              &#10095;
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {watches.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pc */}
      <div className="hidden md:flex my-8">
        <div className="w-1/4 pr-8 mb-10">
          <h1 className="text-5xl font-raleway font-thin mb-4">
            NUESTROS
            <br />
            RELOJES
            <br />
            <span className="text-white font-bold">DE 2025</span>
          </h1>
          <button className="border-b border-white text-lg pb-1 mt-5">
            Descubre nuestras novedades
          </button>
        </div>

        {/* Pc Carousel  */}
        <div className="w-3/4 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${
                  (desktopIndex * 100) / visibleDesktopItems
                }%)`,
              }}
            >
              {watches.map((watch) => (
                <div
                  key={watch.id}
                  className={`w-1/${visibleDesktopItems} flex-shrink-0 px-3`}
                  style={{ width: `${100 / visibleDesktopItems}%` }}
                >
                  <div className="flex flex-col space-y-4">
                    <div className="relative overflow-hidden group">
                      <img
                        src={watch.image}
                        alt={watch.name}
                        className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                    </div>
                    <h2 className="text-lg font-medium">{watch.name}</h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {watch.description}
                    </p>
                    <button className="border-b border-white text-sm pb-1 w-fit transition-colors hover:text-gray-300">
                      Descubrir más
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex w-full absolute top-[12vh] justify-between px-10">
              <button
                onClick={prevDesktopSlide}
                className={`p-2 border bg-gray-500/50 border-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                  desktopIndex === 0
                    ? "opacity-0 invisible"
                    : "opacity-100 visible"
                }`}
              >
                &#10094;
              </button>
              <button
                onClick={nextDesktopSlide}
                className={`p-2 border bg-gray-500/50 border-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ${
                  desktopIndex >= watches.length - visibleDesktopItems
                    ? "opacity-0 invisible"
                    : "opacity-100 visible"
                }`}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchesSection;
