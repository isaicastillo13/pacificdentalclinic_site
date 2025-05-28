import fondoInvisalign from "../assets/backgrounds/fondoInvisalign.webp";
import invisalignCase from "../assets/image/invisalignCase.webp";

function Invisalign() {
  return (
    <section className="flex flex-col">
      <div
        className="flex items-center justify-between h-screen bg-cover bg-bottom text-primary p-6"
        style={{ backgroundImage: `url(${fondoInvisalign})` }}
      >
        <p className="text-left font-light w-80">
          Con Invisalign, alinea tus dientes de forma discreta y cómoda, sin
          necesidad de brackets metálicos.
        </p>
        <h2 className="text-6xl w-80 font-light">
          CONOCE Y PRUEBA <b className="font-bold">INVISALIGN</b>
        </h2>
      </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] md:h-screen bg-secundary text-neutralsligth p-6 gap-8">
            <div className="md:w-1/2 w-full flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-light  mb-4">
                    Invisalign Panamá: La Solución Perfecta para una Sonrisa Discreta
                </h2>
                <img
                    src={invisalignCase}
                    alt="Estuche de Invisalign"
                    className="w-[600px] h-auto"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col justify-end md:w-1/2 w-full h-full space-y-4 font-light">
                <p className="text-justify">
                    Invisalign ha revolucionado la ortodoncia en Panamá, ofreciendo una
                    alternativa estética y cómoda a los brackets tradicionales. Este
                    sistema utiliza alineadores transparentes y removibles que permiten
                    a los pacientes mejorar su sonrisa sin comprometer su apariencia. El
                    tratamiento es personalizado y se basa en tecnología avanzada,
                    garantizando resultados efectivos y rápidos. Cada vez más panameños
                    optan por Invisalign, atraídos por sus múltiples beneficios y la
                    posibilidad de mantener una buena higiene dental.
                </p>
                {/* <h3 className="mt-2 text-4xl">
                    Invisalign: La Revolución de la Ortodoncia en Panamá
                </h3>
                <p>
                    La ortodoncia en Panamá ha dado un giro innovador con la
                    introducción de Invisalign, un tratamiento que ha ganado popularidad
                    por su enfoque estético y cómodo. Este sistema permite a los
                    pacientes alinear sus dientes sin la necesidad de los tradicionales
                    brackets metálicos.
                </p> */}
                <h3 className="mt-2 text-4xl">¿Qué es Invisalign y Cómo Funciona?</h3>
                <p className="text-justify">
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
