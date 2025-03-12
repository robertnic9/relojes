import React, { useState, useEffect, useRef } from "react";

const ProductCard = ({ title, size, description, link, reverse, image }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleZoom = () => {
      setIsZoomed(window.devicePixelRatio > 1);
    };

    window.addEventListener("resize", handleZoom);
    handleZoom();

    return () => {
      window.removeEventListener("resize", handleZoom);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        flex flex-col md:flex-row 
        ${reverse ? "md:flex-row-reverse" : ""} 
        md:max-h-[90vh]
        bg-black text-white 
        p-4 md:p-8
        xl:px-32
        rounded-lg
        mb-10
        ${isVisible ? "animate-fadeIn" : "opacity-0"}
      `}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className={`w-full h-full rounded object-cover xl:p-10 
            ${isZoomed ? "xl:p-10" : "xl:p-20"} 
          `}
        />
      </div>

      <div
        className={`relative w-full md:w-1/2 flex flex-col text-center
        ${isZoomed ? "md:p-[3rem]" : "md:p-[8rem] text-2xl"}`}
      >
        <div>
          <h1 className="text-3xl mt-5 xl:text-4xl tracking-wide">{title}</h1>
          <h2 className="text-lg md:text-xl font-raleway font-extralight italic text-white text-right">
            {size}
          </h2>
        </div>
        <div className="my-auto">
          <p className="text-base p-5 md:text-lg leading-relaxed text-gray-100 xl:p-18">
            {description}
          </p>

          {link && (
            <div className="mt-4 md:mt-6">
              <a
                href={link}
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors duration-200"
              >
                <span className="mr-2">Descubre más</span>
                <span>—</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;