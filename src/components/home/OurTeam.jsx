import React from "react";
import Card from "../ui/Card.jsx";
import BlurText from "../animations/BlurText.jsx";
import imgGlroia from "../../assets/image/dragloria.webp";
import imgMonica from "../../assets/image/dramonica.webp";
import imgPasquale from "../../assets/image/drpasquale.webp";
import imgMoises from "../../assets/image/drmoises.webp";
import imgKira from "../../assets/image/drakira.webp";
import imgCarlos from "../../assets/image/drcarlos.webp";
import LogoCarousel from "../ui/LogoCarousel.jsx";


const handleAnimationComplete = () => {
  console.log("Animation completed!");
};



function OurTeam() {
  return (
    <>
    <section className="">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center p-6 text-center pt-28">
        <BlurText
          text="Disponemos de un equipo multidisciplinario de odontólogos, especialistas, todos comprometidos con tu salud bucal."
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
     <div className="w-full px-4 py-10 mx-auto max-w-7xl">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-center">
    {/* Tus tarjetas */}
    <Card img={imgGlroia} name="Dra. Gloria Ho" specialization="Ortodoncista" />
    <Card img={imgPasquale} name="Dr. Pasquale Calvosa" specialization="Prostodoncista" />
    <Card img={imgMonica} name="Dra. Monica Shedden" specialization="Periodoncista" />
    <Card img={imgMoises} name="Dr. Moises Lukowiecki" specialization="Endodoncista" />
    <Card img={imgKira} name="Dra. Kira Singh" specialization="Odontopediatra" />
    <Card img={imgCarlos} name="Dr. Carlos Salazar" specialization="Ortodoncista" />
  </div>
</div>




      {/* Footer Section */}
      <div className="mt-16 p-8 flex items-center justify-around gap-8 text-neutral-50 bg-gradient-to-r from-[#121922] to-[#486488]">
        <p className="text-center font-light text-[14px] lg:text-[16px]">
          Nuestros Profesionales
        </p>
        <h3 className="text-2xl text-center md:text-3xl lg:text-4xl">
          PACIFIC TEAM
        </h3>
        <p className="text-center font-light text-[14px] lg:text-[16px]">
         Para darte la mejor atención
        </p>
      </div>
    </section>
    </>
    
  );
}

export default OurTeam;
