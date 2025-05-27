import React from "react";
import ServicesDesc from "./ServicesDesc";

function Services() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col justify-around items-center w-1/2 ">
      <div className="flex flex-col justify-center items-center gap-4">
<span className="text-[64px]">SERVICIOS</span>
        <h2 className="tex-[16px] text-center font-light">
          Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc
          pulvinar. Tellus pharetra imperdiet quis vitae.
        </h2>
      </div>
        
        <div className="grid grid-cols-2 p-4 gap-8">
          <ServicesDesc
            abreviatura="01"
            servicio="Odontologia General"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="02"
            servicio="Odontologia Estetica"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="03"
            servicio="Ortodoncia"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="04"
            servicio="Implantes Dentales"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
        </div>
        <button type="button">
          Ver todos los servicios
          <img src="" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Services;
