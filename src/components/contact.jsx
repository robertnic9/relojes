import React from "react";

const ContactSection = ({
  image = "/media/contact.png",
  title = "¿LE GUSTARÍA DESCUBRIR NUESTROS RELOJES EN PERSONA?",
  description = "Nuestro Servicio de Atención al Cliente está a su disposición tanto si tiene una consulta sobre un reloj como si desea concertar una cita en una de nuestras boutiques. Si tiene alguna duda, póngase en contacto con nosotros.",
  buttonText = "CONTACTO",
  buttonLink = "#",
}) => {
  return (
    <div className="w-full min-h-[90vh] bg-white py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-40 p-4 md:p-8">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-cmu tracking-wider leading-relaxed">
            {title}
          </h2>

          <p className="text-base md:text-lg font-cmu leading-relaxed max-w-lg mx-auto px-10 md:px-20 md:py-16">
            {description}
          </p>

          <a
            href={buttonLink}
            className="inline-block mt-6 px-12 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 font-cmu tracking-wider"
          >
            {buttonText}
          </a>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Boutique interior"
            className="w-full h-70vh object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
