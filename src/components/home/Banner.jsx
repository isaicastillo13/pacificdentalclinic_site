import fondoOla from "../../assets/backgrounds/fondoOla.webp";
import React from "react";

function Banner() {
  return (
    <section
      className="
        relative
        flex flex-col items-center justify-around
        h-screen mx-auto
        bg-cover bg-center
      "
      style={{ backgroundImage: `url(${fondoOla})` }}
    >
      <div className="mx-auto w-4/5 flex flex-col gap-5">
        <h2
          className="
          font-light
          text-[32px] md:text-[40px] lg:text-[54px]
        "
        >
          Más que una clínica dental en Panamá
        </h2>
        <p
          className="
          w-2/3
          font-light
          text-[10px] md:text-xs lg:text-base
        "
        >
          En nuestra clínica dental en Panamá ofrecemos atención personalizada,
          tecnología de punta y un equipo de especialistas en odontología.
          Brindamos servicios que van desde odontología general hasta
          ortodoncia, estética dental y odontopediatría. Confía en nosotros para
          cuidar tu salud bucal con calidad y compromiso.
        </p>
      </div>
      <div className="w-full flex justify-end pr-8">
        <p className="font-light text-[10px] md:text-xs lg:text-base">
          -Pacific Dental Clinic
        </p>
      </div>
    </section>
  );
}

export default Banner;
