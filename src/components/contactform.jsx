function ContacthtmlForm (){
    return (
      <section className="bg-gray-100 flex pt-24">
        <div className="w-1/3">
          <img
            src="media/experto.avif"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 bg-white shadow-lg p-14">
          <h2 className="text-3xl font-light text-gray-800 text-center mb-6">
            Contacto
          </h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed px-6">
            Nuestro experto esta experando, no dude en ponerse en contacto con
            nosotros. Para consultas exclusivas o asistencia personalizada.
          </p>
          <htmlForm className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ingrese su número de teléfono"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Escriba su mensaje aquí"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </htmlForm>
        </div>
      </section>
    );
}

export default ContacthtmlForm;
