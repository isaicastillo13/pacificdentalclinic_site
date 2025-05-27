import React from "react";
import Card from "./Card"; // Import the Card component

import BlurText from "./animations/BlurText.jsx";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function OurTeam() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center pt-28">
        <BlurText
          text="Conoce a tus aliados de tu salud bucal"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="font-light mb-8"
        />
        <h2 className="text-[54px]  w-11/12">
          Este es el equipo de <b>profesionales</b> en nuestra Clínica Dental
        </h2>
      </div>
      <div className="flex justify-center items-center gap-4 pt-10">
        <Card name="Dra. Gloria Ho" specialization="Odontologa" />
        <Card name="Dra. Monica Shedden" specialization="Odontologa" />
        <Card name="Asistente" specialization="Odontologa" />
        <Card name="Asistente" specialization="Odontologa" />
      </div>

      <div className="flex gap-8 justify-around items-center text-neutral-50 bg-gradient-to-r from-[#121922] to-[#486488]  mt-16 p-8">
        <p className="font-light">Nuestros Profesionales</p>
        <h3 className="text-5xl">PACIFIC TEAM</h3>
        <p className="font-light">Para darte la mejor atencion</p>
      </div>
    </div>
  );
}
export default OurTeam;
