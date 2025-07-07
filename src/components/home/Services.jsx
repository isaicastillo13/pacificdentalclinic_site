import React from "react";
import ServicesDesc from "../ui/ServicesDesc";
import iconoFlechaDerecha from "../../assets/icons/arrow-right.svg";
import videoServicios from "../../assets/video/apiceptiomia.mp4";

function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 p-6 mx-auto md:w-11/12 md:flex-row md:justify-around h-full lg:py-0">
      <div className="flex w-full flex-col items-center justify-around gap-10 md:w-1/2">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-[32px] md:text-[40px] lg:text-[54px] capitalize">
            Servicios <b className="font-bold">odontológicos especializados</b>
          </h2>
          <h3 className="font-light text-[14px] lg:text-[16px] text-justify">
            Atendemos todas tus necesidades dentales con tecnología de punta y profesionales altamente capacitados
          </h3>
        </div>
        <div className="mx-auto grid w-2/3 gap-8 p-4 md:grid md:gap-8 md:p-4 md:w-full lg:grid-cols-2">
          <ServicesDesc
            abreviatura="INV"
            servicio="Invisalign"
            descripcion="Corrige tu sonrisa con ortodoncia invisible. Somos especialistas certificados en Invisalign en Panamá."
          />
          <ServicesDesc
            abreviatura="PER"
            servicio="Odontopediatra"
            descripcion="Odontología infantil con enfoque preventivo y atención amigable para los más pequeños."
          />
          <ServicesDesc
            abreviatura="CIR"
            servicio="Estética y salud dental"
            descripcion="Blanqueamiento, carillas, limpieza profunda y tratamientos personalizados para lucir una sonrisa radiante."
          />
          <ServicesDesc
            abreviatura="LIM"
            servicio="Emergencias dentales"
            descripcion="Atención inmediata por dentistas en Panamá para dolor, fracturas y otras urgencias odontológicas."
          />
        </div>
        <a
          href="/servicios"
          className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#121922] to-[#486488] p-4 text-neutral-50 transition-colors hover:from-[#486488] hover:to-[#121922]"
        >
          Ver todos los servicios
          <img
            src={iconoFlechaDerecha}
            alt="icono flecha derecha"
            className="w-4"
          />
        </a>
      </div>
      {/* Agregar Logica para cambiar videos */}
      <video
        className="w-96 rounded-lg p-2 shadow-lg"
        autoPlay
        loop
        muted
        src={videoServicios}
      ></video>
    </section>
  );
}

export default Services;
