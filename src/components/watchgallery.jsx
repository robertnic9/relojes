"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Search } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RelojesCash from "@/data/relojescash";

export default function WatchGallery() {
  const [search, setSearch] = useState("");
  const [selectedWatch, setSelectedWatch] = useState(null);

  const filteredWatches = RelojesCash.filter((watch) =>
    watch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:p-6 w-full md:w-[80%] md:mx-auto mt-28 font-cmu">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Buscar reloj..."
          className="w-full p-3 border-b-2 border-gray-300 focus:border-black focus:outline-none text-lg font-light bg-transparent placeholder-gray-400 pr-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Grid de relojes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {filteredWatches.map((watch) => (
          <motion.div
            key={watch.id}
            className="cursor-pointer border rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedWatch(watch)}
          >
            <img
              src={watch.images[0]}
              alt={watch.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold text-gray-800">
                {watch.brand}
              </p>
              <p className="text-sm text-gray-500">{watch.name}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de detalles del reloj */}
      {selectedWatch && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-50 inset-0 bg-black bg-opacity-75 flex items-center overflow-y-auto justify-center md:p-4"
        >
          <div className="bg-white px-8 py-12 sm:py-6 md:rounded-md md:max-w-7xl w-full">
            <div className="flex justify-end">
              <button
                className=" text-gray-500 hover:text-black transition-colors duration-200"
                onClick={() => setSelectedWatch(null)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-8 sm:mt-0">
              {/* Carrusel de imágenes */}
              <div className="md:w-1/2">
                <Carousel showThumbs={false} showStatus={false}>
                  {selectedWatch.images.map((img, index) => (
                    <div key={index}>
                      <img
                        src={img}
                        alt={selectedWatch.name}
                        className="rounded-md w-full h-auto max-h-[60vh] object-cover"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* Detalles del reloj */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedWatch.brand}
                </h2>
                <h3 className="text-xl text-gray-600 mb-8">
                  {selectedWatch.name}
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <span className="font-semibold">Tamaño:</span>{" "}
                    {selectedWatch.size}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Color:</span>{" "}
                    {selectedWatch.color}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Descripción:</span>
                    <br />
                    {selectedWatch.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
