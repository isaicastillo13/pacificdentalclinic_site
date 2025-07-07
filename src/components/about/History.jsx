import React from "react";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";

function History() {
  return (
    <section className="flex flex-col justify-center items-center h-full overflow-hidden p-10  ">
      <div className="flex flex-col items-center justify-center">
        <img
          src={logoClinicaDark}
          alt="Logo Clínica"
          className="w-1/2 md:w-1/12"
        />
        <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row w-fit md:w-2/3">
          <div className="flex flex-col items-center justify-center gap-8 ">
            <h2 className="text-[32px] text-primary md:text-[40px] lg:text-[54px]">
              <span className="font-bold text-zinc-700">Nuestra Historia</span>
              <span>, Tu Confianza</span>
            </h2>
            <p className=" text-justify font-light text-primary text-[14px] lg:text-[16px]">
              En 2006, con la inauguración del Hospital Pacífica Salud en Punta
              Pacífica, nació también nuestra clínica dental, con un sueño
              claro: ofrecer atención odontológica de calidad mundial en el
              corazón de Panamá.
              <br />
              <br />
              Desde el primer día, nos propusimos ir más allá de un servicio
              clínico. Queríamos construir un espacio donde cada paciente se
              sintiera cuidado, escuchado y tratado con respeto. Un lugar donde
              la salud bucal no solo se atiende, sino que se transforma en
              bienestar, confianza y una sonrisa renovada.
              <br />
              <br />
              Nos enorgullece ofrecer instalaciones modernas, limpias y seguras,
              cumpliendo con los más altos estándares de bioseguridad. Cada
              espacio está cuidadosamente diseñado para brindar comodidad y
              tranquilidad, porque sabemos que una buena experiencia también
              comienza por un entorno impecable.
              <br />
              <br />
              Con el paso del tiempo, nuestro equipo de especialistas fue
              creciendo, así como la confianza de nuestros pacientes.
              Incorporamos tecnología de punta, técnicas modernas y un enfoque
              centrado en el paciente, sin perder nunca nuestro trato humano y
              cercano.
              <br />
              <br />
              Hoy, después de casi dos décadas, seguimos acompañando a cada
              persona que entra por nuestra puerta con el mismo compromiso que
              nos impulsó en 2006: cuidar tu sonrisa como si fuera la nuestra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
