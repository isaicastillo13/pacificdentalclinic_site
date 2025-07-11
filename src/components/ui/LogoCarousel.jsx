import { motion } from "framer-motion";
import logoSociedadEspanola from "../../assets/logo/logoSociedadEspanola.svg";
import logoAmericnaAcademy from "../../assets/logo/logoAmericnaAcademy.webp";
import logoEuropeanFederation from "../../assets/logo/logoEuropeanFederation.webp";
import logoSpo from "../../assets/logo/logoSpo.webp";
import logoWorldFederation from "../../assets/logo/logoWorldFederation.webp";
import logoAsociacionOdontologica from "../../assets/logo/logoAsociacionOdontologica.webp";

const logos = [
  {
    src: logoSociedadEspanola,
    alt: "Sociedad Española de Periodoncia",
  },
  {
    src: logoAmericnaAcademy,
    alt: "American Academy of Periodontology",
  },
  {
    src: logoEuropeanFederation,
    alt: "European Federation of Periodontology",
  },
  {
    src: logoSpo,
    alt: "Sociedad Panameña de Ortodoncia",
  },
  {
    src: logoWorldFederation,
    alt: "World Federation of Orthodontics",
  },
  {
    src: logoAsociacionOdontologica,
    alt: "Asociación Odontológica Panameña",
  },
];

const LogoCarousel = () => {
  return (
    <div className="w-full my-10 overflow-hidden ">
      <h2 className="mb-6 text-2xl text-center text-[32px] md:text-[40px] lg:text-[54px]">
        Miembros de <b className="font-bold">Asociaciones Profesionales</b>
      </h2>
      <motion.div
        className="flex gap-10 animate-scroll whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[120px] max-w-[160px]"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-auto h-12"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
