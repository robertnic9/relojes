'use client';
import React, { useState, useEffect } from "react";
import Tiendas from "@/data/boutiques";

const Boutiques = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Tiendas.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Tiendas.length - 1 : prevIndex - 1
    );
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle touch events
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchStartX - touchEndX;
      if (deltaX > 50) {
        nextSlide(); // Swipe left
      } else if (deltaX < -50) {
        prevSlide(); // Swipe right
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section id="boutiques" className="relative w-full mt-24 mb-1">
      <div
        className="relative overflow-hidden shadow-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Tiendas.map((tienda, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <div className="relative h-[87vh] bg-gray-200">
                <img
                  src={tienda.img}
                  alt={tienda.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="w-full absolute bottom-0 left-0 sm:bottom-10 sm:left-20 sm:w-96 bg-white bg-opacity-70 text-black p-4">
                  <h3 className="text-xl font-bold italic pb-1">{tienda.nombre}</h3>
                  <p className="text-sm">{tienda.direccion}</p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">{tienda.dias}:</span>{" "}
                    {tienda.horario}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute  sm:block text-2xl z-10 top-1/2 left-2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-75"
        >
          &#10094;
        </button>

        <button
          onClick={nextSlide}
          className="absolute  sm:block text-2xl z-10 top-1/2 right-2 transform -translate-y-1/2 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none hover:bg-opacity-75"
        >
          &#10095;
        </button>

        <div className="absolute bottom-32 sm:bottom-2 left-0 right-0 flex justify-center space-x-2">
          {Tiendas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boutiques;
