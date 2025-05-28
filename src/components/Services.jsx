import React from "react";
import ServicesDesc from "./ServicesDesc";
import iconoFlechaDerecha from "../assets/icons/arrow-right.svg";
import videoServicios from "../assets/video/apiceptiomia.mp4";

function Services() {
  return (
    <div className="flex mx-auto h-screen w-11/12 items-center justify-around gap-4">
      <div className="flex w-1/2 flex-col items-center justify-around gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-[64px]">SERVICIOS</span>
          <h2 className="text-center font-light tex-[16px]">
            Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc
            pulvinar. Tellus pharetra imperdiet quis vitae.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 p-4">
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
          className="flex items-center gap-4 rounded-full bg-gradient-to-r from-[#121922] to-[#486488] p-4 text-neutral-50"
          href="#"
        >
          Ver todos los servicios
          <img
            className="flex w-4 items-center justify-center"
            src={iconoFlechaDerecha}
            alt="icono flecha derecha"
          />
        </a>
      </div>
      {/* Agregar Logica para cambiar videos */}
      <video className="w-96 p-2" autoPlay loop muted src={videoServicios}></video>
    </div>
  );
}

export default Services;
