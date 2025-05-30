import fondoInvisalign from "../../assets/backgrounds/fondoInvisalign.webp";
import invisalignCase from "../../assets/image/invisalignCase.webp";

function Invisalign() {
  return (
    <section className="flex flex-col">
      {/* Hero Section */}
      <div
        className="
          flex items-center p-6 h-screen bg-cover bg-bottom text-primary
          md:justify-between md:gap-32 lg:justify-between
        "
        style={{ backgroundImage: `url(${fondoInvisalign})` }}
      >
        <p className="
          text-left font-light text-[10px] md:text-xs lg:text-base
          md:w-64 lg:w-80
        ">
          Con Invisalign, alinea tus dientes de forma discreta y cómoda, sin
          necesidad de brackets metálicos.
        </p>
        <h2 className="
          w-80 text-end font-light text-[32px] md:text-[40px] lg:text-[54px]
          md:pl-2
        ">
          CONOCE Y PRUEBA <b className="font-bold">INVISALIGN</b>
        </h2>
      </div>

      {/* Info Section */}
      <div className="
        flex flex-col items-center justify-center gap-8 p-6 min-h-[60vh] bg-secundary text-neutralsligth
        md:flex-row md:h-screen
      ">
        <div className="
          flex flex-col items-center w-full md:w-1/2
        ">
          <h2 className="
            mb-4 font-light text-[32px] md:text-[40px] lg:text-[54px]
          ">
            Invisalign Panamá: La Solución Perfecta para una Sonrisa Discreta
          </h2>
          <img
            src={invisalignCase}
            alt="Estuche de Invisalign"
            className="w-[600px] h-auto"
            loading="lazy"
          />
        </div>
        <div className="
          flex flex-col justify-end w-full h-full space-y-4 font-light md:w-1/2
        ">
          <p className="
            text-justify font-light text-[10px] md:text-xs lg:text-base
          ">
            Invisalign ha revolucionado la ortodoncia en Panamá, ofreciendo una
            alternativa estética y cómoda a los brackets tradicionales. Este
            sistema utiliza alineadores transparentes y removibles que permiten
            a los pacientes mejorar su sonrisa sin comprometer su apariencia. El
            tratamiento es personalizado y se basa en tecnología avanzada,
            garantizando resultados efectivos y rápidos. Cada vez más panameños
            optan por Invisalign, atraídos por sus múltiples beneficios y la
            posibilidad de mantener una buena higiene dental.
          </p>
          <h3 className="mt-2 text-4xl">
            ¿Qué es Invisalign y Cómo Funciona?
          </h3>
          <p className="
            text-justify font-light text-[10px] md:text-xs lg:text-base
          ">
            Este sistema de ortodoncia está basado en el uso de alineadores
            transparentes que, a través de un diseño digital personalizado,
            guían a los dientes a su posición deseada. Se utilizan varias
            férulas a lo largo del tratamiento, cambiándose cada una o dos
            semanas para ajustar el movimiento dental conforme avanza el
            proceso.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Invisalign;
