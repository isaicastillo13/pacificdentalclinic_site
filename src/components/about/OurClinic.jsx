import fondoClinica from "../../assets/backgrounds/fondoClinica.webp";
import React from "react";

function OurClinic() {
  return (
    <section className="h-screen overflow-hidden bg-cover bg-center"  style={{ backgroundImage: `url(${fondoClinica})` }}>
      <div
        className="flex flex-col items-center justify-center h-full bg-cover bg-center bg-gradient-to-b from-gray-900/40 to-gray-900"
      >
        <div className="flex flex-col items-center justify-center gap-4 w-3/6 text-center z-10">
          <h2 className="text-[32px] text-neutralsligth md:text-[40px] lg:text-[54px]">
            Un Espacio Pensado para tu Comodidad y Bienestar
          </h2>
          <p className="text-[10px] font-light text-neutralsligth md:text-xs lg:text-base">
            En nuestra clínica, cada detalle ha sido cuidadosamente diseñado
            para ofrecerte una experiencia agradable desde el primer momento.
            Contamos con instalaciones modernas, amplias y climatizadas,
            equipadas con tecnología de vanguardia que garantiza diagnósticos
            precisos y tratamientos eficaces.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurClinic;
