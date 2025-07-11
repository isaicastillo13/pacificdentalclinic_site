import fondoClinica from "../../assets/backgrounds/fondoClinica.webp";
import ContactSection from "../ui/Contact/ContactSection";
import React from "react";

function OurClinic() {
  return (
    <>
      <section
        className="h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${fondoClinica})` }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-center bg-cover bg-gradient-to-b from-gray-900/40 to-gray-900">
          <div className="z-10 flex flex-col items-center justify-center w-2/3 gap-4 text-center">
            <h2 className="text-[32px] text-neutralsligth md:text-[40px] lg:text-[54px] font-bold">
              ¡Diseñar sonrisas bellas es un arte que disfrutamos!
            </h2>
            <p className="text-[14px] lg:text-[16px] font-light text-neutralsligth text-justify">
              En nuestra clínica, cada detalle ha sido cuidadosamente diseñado
              para ofrecerte una experiencia agradable desde el primer momento.
              Contamos con instalaciones modernas, amplias y climatizadas,
              equipadas con tecnología de vanguardia que garantiza diagnósticos
              precisos y tratamientos eficaces.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurClinic;
