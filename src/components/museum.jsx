import Image from "next/image";

const Museum = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white md:px-20 pb-20">
      <div className="w-5/6">
        <Image
          src="/media/museum.jpeg" 
          alt="Galerie du Temps Vie Éternelle"
          width={900}
          height={700}
        />
      </div>
      <div className="md:w-1/2 px-14">
        <h2 className="text-4xl font-thin my-6">GALERIE <br /> DU TEMPS</h2>
        <h3 className="text-xl font-raleway font-light italic tracking-wide ">
          La Vie Éternelle
        </h3>
        <p className="mt-6 text-lg text-gray-300 font-raleway py-4">
          Descubra un santuario donde el arte de la relojería cobra vida. La
          Galerie du Temps de Vie Éternelle es un homenaje a la maestría, la
          innovación y la pasión que han definido nuestra historia. Un recorrido
          por el tiempo, diseñado para quienes aprecian la excelencia sin
          límites.
        </p>
        <div className="w-full flex justify-center">
          <button className="mt-6 text-lg font-light hover:text-gray-400">
            Explorar más <span>-</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Museum;
