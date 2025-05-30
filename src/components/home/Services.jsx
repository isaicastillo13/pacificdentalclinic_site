import React from "react";
import ServicesDesc from "../ui/ServicesDesc";
import iconoFlechaDerecha from "../../assets/icons/arrow-right.svg";
import videoServicios from "../../assets/video/apiceptiomia.mp4";

function Services() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 mx-auto md:w-11/12 md:flex-row md:justify-around lg:h-screen lg:py-0">
      <div className="flex w-full flex-col items-center justify-around gap-10 md:w-1/2">
        <div className="flex flex-col items-center gap-4">
          <span className="text-[32px] md:text-[40px] lg:text-[54px]">
            SERVICIOS
          </span>
          <h2 className="text-center font-light text-[10px] md:text-xs lg:text-base">
            Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae.
          </h2>
        </div>
        <div className="grid gap-8 p-4 lg:grid-cols-2">
          <ServicesDesc
            abreviatura="ORT"
            servicio="Odontologia General"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="PER"
            servicio="Odontologia Estetica"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="CIR"
            servicio="Ortodoncia"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="LIM"
            servicio="Implantes Dentales"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
        </div>
        <a
          href="#"
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
