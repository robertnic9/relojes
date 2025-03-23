'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function OurStoryPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <div className="mt-24 bg-black text-white font-cmu">
        {/* Sección de video con título */}
        <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0 "
            src="/media/relojes.mp4"
          ></video>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-6xl italic font-bold text-white">
              Nuestra Historia
            </h1>
            <p className="mt-4 text-xl text-white font-light">
              Descubre la esencia de nuestra marca.
            </p>
          </motion.div>
        </div>

        {/* Sección de texto e imagen */}
        <div className="container mx-auto px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mx-4"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider md:text-left uppercase">
                Orígenes
              </h2>
              <div className="mr-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Fundada en 1875, nuestra marca nació de la pasión por la
                  relojería de alta precisión y el diseño atemporal. Cada pieza
                  es un testimonio de artesanía excepcional y dedicación al
                  detalle.
                </p>
                <br />
                <p className="text-lg text-gray-300 leading-relaxed">
                  Desde nuestros humildes comienzos en un pequeño taller suizo,
                  hemos crecido para convertirnos en un referente mundial en
                  relojería de lujo.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <Image
                src="/media/origen.jpeg"
                alt="Orígenes"
                fill
                className="object-cover rounded-sm shadow-lg"
              />
            </motion.div>
          </div>
        </div>

        <section id="#timeline" className="py-28">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center max-w-7xl">
            <div className="w-full lg:w-3/5 p-4">
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="space-y-5">
                  <img
                    src="/media/leg1.avif"
                    alt="Historia"
                    className="w-full h-auto "
                  />
                  <img
                    src="/media/leg2.avif"
                    alt="Tradición"
                    className="w-full h-auto "
                  />
                </div>

                <div className="col-span-2">
                  <video
                    className="w-full h-full  object-cover"
                    autoPlay
                    muted
                    loop
                    src="/media/timeline.mp4"
                  ></video>
                </div>
                <div className="space-y-5">
                  <img
                    src="/media/leg4.avif"
                    alt="Retrato"
                    className="w-full h-auto "
                  />
                  <img
                    src="/media/leg5.avif"
                    alt="Detalle"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 p-4 lg:p-12 lg:pl-24 text-center ">
              <h1 className="text-4xl md:text-5xl font-light tracking-wider md:text-left leading-tight">
                A SPIRIT OF <br />
                INDEPENDENCE
              </h1>
              <h2 className="text-lg md:text-xl font-raleway font-light italic tracking-wider mt-3 leading-tight">
                FROM 1875 TO <br />
                THE PRESENT <br />
                DAY
              </h2>
              <div className="mt-8">
                <button className="border font-raleway uppercase border-white px-6 py-3 text-base font-light tracking-wider hover:bg-white hover:text-black transition duration-300">
                  Start the timeline
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de legado */}
        <div className="container mx-auto px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <Image
                src="/media/legado.avif"
                alt="Legado"
                fill
                className="object-cover rounded-sm shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 mx-4"
            >
              <h2 className="text-4xl md:text-5xl font-light tracking-wider md:text-left leading-tight uppercase">
                Legado
              </h2>
              <div className="mr-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Nuestro legado se construye sobre décadas de innovación y
                  dedicación. Cada reloj que creamos es un tributo a nuestra
                  historia y una promesa para el futuro.
                </p>
                <br />
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hoy, seguimos comprometidos con la excelencia, manteniendo
                  viva la tradición mientras miramos hacia adelante con visión y
                  ambición.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <section className="relative w-full h-[65vh]">
          {/* Imagen de fondo */}
          <img
            src="/media/cuote.avif"
            alt="Mecanismo de reloj La Vie Eternelle"
            className="absolute w-full h-full object-cover object-center brightness-20 "
          />

          {/* Contenedor para la cita y el nombre */}
          <div
            id="ourphilosophy "
            className="absolute inset-0 flex flex-col pb-20 justify-end items-start max-w-4xl px-8 md:px-16"
          >
            {/* Cita La vie Éternelle */}
            <blockquote className="text-white text-lg md:text-2xl font-light leading-relaxed mb-6 max-w-2xl">
              "La excelencia no es un acto, sino un hábito. Con los mejores
              maestros de la relojería suiza y una visión sin límites, cada
              pieza es una declaración de innovación y precisión. Así nació
              nuestra primera creación, donde el tiempo no solo se mide, sino
              que se redefine."
            </blockquote>

            <div className="flex flex-col items-start">
              <div className="h-px w-12 bg-white mb-2"></div>
              <p className="text-white text-sm md:text-base tracking-widest italic">
                La Vie Éternelle
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
