import fondoClinica from "../../assets/backgrounds/fondoClinica.webp";
import ContactSection from "./Contact/ContactSection";
import React from "react";

function OurClinic() {
  return (
    <>
    <section className="h-screen bg-cover bg-center"  style={{ backgroundImage: `url(${fondoClinica})` }}>
      <div
        className="flex flex-col items-center justify-center h-full bg-cover bg-center bg-gradient-to-b from-gray-900/40 to-gray-900"
      >
        <div className="flex flex-col items-center justify-center gap-4 w-2/3 text-center z-10">
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
      <ContactSection/>
    
    </section>
    
    </>
  );
}

export default OurClinic;
