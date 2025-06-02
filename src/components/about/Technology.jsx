import CardFigure from "../ui/CardFigures.jsx";
import videoTecnology from "../../assets/video/Videotecnology.mp4";

function Technology() {
  return (
    <section className="flex flex-col justify-center items-center h-full overflow-hidden px-10 py-16 gap-8">
      <div className="flex flex-col justify-center md:items-start items-center gap-8">
        <h2 className="text-[32px] text-primary text-center md:text-left md:text-[40px] lg:text-[54px]">
          Avanzamos contigo, con lo último en odontología
        </h2>
        <p className="text-[10px] md:text-[12px] lg:text-[16px] md:w-3/6">
          Figma ipsum component variant main layer. Italic union select edit
          shadow inspect shadow variant layer. Vertical figma share variant
          star. Shadow vector auto layout asset bold blur.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
     
        <video className="md:w-3/6 rounded-lg p-2 shadow-lg"  src={videoTecnology}></video>
        <div className="flex flex-col gap-10 p-8">
          <CardFigure
            figures="17,8K"
            description="Procedimientos Realizados con Equipos Digitales"
            color="bg-[#A6B4BA]"
          />
          <CardFigure
            figures="1,2K"
            description="Procedimientos Realizados con Equipos de Radiología Convencional"
            color="bg-[#CBD3D6]"
          />
          <CardFigure
            figures="1,2K"
            description="Procedimientos Realizados con Equipos de Ultrasonido"
            color="bg-[#E3E8EA]"
            textColor="text-primary"
          />
          <CardFigure
            figures="1,2K"
            description="Procedimientos Realizados con Equipos de Ultrasonido"
            color="bg-[#F4F7F7]"
            textColor="text-primary"
          />
        </div>
      </div>
    </section>
  );
}

export default Technology;
