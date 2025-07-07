import React from "react";
import Card from "../ui/Card.jsx";
import BlurText from "../animations/BlurText.jsx";
import imgGlroia from "../../assets/image/dragloria.webp";
import imgMonica from "../../assets/image/dramonica.webp";
import imgPasquale from "../../assets/image/drpasquale.webp";
import imgMoises from "../../assets/image/drmoises.webp";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

function OurTeam() {
  return (
    <section className="">
      {/* Header Section */}
      <div className="pt-28 flex flex-col items-center justify-center text-center p-6">
        <BlurText
          text="Disponemos de un equipo multidisciplinario de odontólogos, ortodoncistas y especialistas, todos comprometidos con tu salud bucal."
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="mb-8 font-light flex flex-row justify-center items-center text-[14px] lg:text-[16px]"
        />
        <h2 className="w-11/12 text-[32px] md:text-[40px] lg:text-[54px]">
          Conoce a nuestro equipo de <b className="font-bold">Expertos</b>
        </h2>
      </div>

      {/* Team Cards Section */}
      <div
        className="
          pt-10
          flex flex-col items-center justify-center gap-4
          md:grid md:grid-cols-2
          lg:flex lg:flex-row
          
        "
      >
        <Card img={imgGlroia} name="Dra. Gloria Ho" specialization="Ortodoncista" />
        <Card img={imgMonica} name="Dra. Monica Shedden" specialization="Periodoncista" />
        <Card img={imgPasquale} name="Dr. Pasquale Calvosa" specialization="Prostodoncista" />
        <Card img={imgMoises} name="Dr. Moises Lukowiecki" specialization="Endodoncista" />
      </div>

      {/* Footer Section */}
      <div className="mt-16 p-8 flex items-center justify-around gap-8 text-neutral-50 bg-gradient-to-r from-[#121922] to-[#486488]">
        <p className="text-center font-light text-[14px] lg:text-[16px]">
          Nuestros Profesionales
        </p>
        <h3 className="text-center text-2xl md:text-3xl lg:text-4xl">
          PACIFIC TEAM
        </h3>
        <p className="text-center font-light text-[14px] lg:text-[16px]">
         Para darte la mejor atención
        </p>
      </div>
    </section>
  );
}

export default OurTeam;
