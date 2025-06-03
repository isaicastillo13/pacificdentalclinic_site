import visionMisionBanner from "../../assets/image/visionMision.svg";
import fondoPlant2 from "../../assets/image/fondoPlant2.webp";
import logoClinicaOscuro from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import quotes from "../../assets/icons/quotes.svg";
import sun from "../../assets/icons/sun.svg";

function VisionMision() {
  return (
    <section className="h-full overflow-hidden">
      <div className="relative flex flex-col items-center justify-center p-10">
        <h2 className="absolute top-4 md:top-10 left-10 text-[16px] w-[250px] md:w-full text-primary md:text-[30px] lg:text-[52px]">
          {" "}
          Nuestra Sonrisa es <b className="font-bold">Cuidar la Tuya</b>
        </h2>
        <img src={visionMisionBanner} alt="" />
        <img
          className="absolute w-16 md:w-32 bottom-9 right-8 lg:w-52 lg:bottom-10 lg:right-10"
          src={logoClinicaOscuro}
          alt=""
        />
      </div>

      {/* Elementos ocultos (puedes descomentar si deseas usarlos) */}
      <div className="flex flex-col items-center justify-center gap-4 p-10 md:flex-row md:gap-10 lg:gap-20 lg:p-20 bg">
        {/* vision */}
        <div className="flex flex-col gap-10">
            <img className="w-8" src={quotes} alt="icono de comillas" />
            <p className="text-justify">
                Ser una clínica odontológica reconocida por transformar la
                experiencia dental en algo humano, confiable y accesible, donde cada
                sonrisa sea reflejo de nuestro compromiso con la salud bucal y la
                innovación constante.
                <br />
                <br />
                A lo largo de los años, hemos construido esa visión combinando
                tecnología de punta con un trato cálido y personalizado. Hemos
                formado un equipo de profesionales apasionados por su labor, que se
                actualizan constantemente para ofrecer tratamientos eficaces y
                mínimamente invasivos. Gracias a la confianza de nuestros pacientes
                y la mejora continua de nuestros procesos, hoy somos más que una
                clínica: somos un espacio donde las sonrisas se cuidan con
                dedicación y empatía.
            </p>
            <div
                className="self-stretch h-48 w-full rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: `url(${fondoPlant2})` }}
            />
        </div>
        {/* mision */}
        <div className="flex flex-col justify-center gap-10 bg-primary p-12 md:h-[700px] rounded-[20px] text-neutralsligth">
          <div className="flex items-center justify-end gap-2">
            <h3 className="font-medium">Mision</h3>
            <img src={sun} alt="" />
          </div>
          <p className="text-justify">
            Brindar atención odontológica integral, ética y de calidad, enfocada
            en la prevención, el diagnóstico preciso y tratamientos
            personalizados, para mejorar la salud bucal y la calidad de vida de
            cada paciente. 
            <br />
            <br />
            Desde nuestros inicios, hemos trabajado con pasión y
            profesionalismo para que cada visita al dentista sea una experiencia
            positiva. Nos apoyamos en tecnología de última generación y
            protocolos clínicos seguros, sin perder de vista la empatía y el
            respeto en cada consulta. Escuchamos a nuestros pacientes,
            entendemos sus necesidades y nos esforzamos por ofrecer soluciones
            que no solo resuelvan problemas, sino que promuevan sonrisas
            duraderas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMision;
