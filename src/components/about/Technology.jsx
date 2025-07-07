import CardFigure from "../ui/CardFigures.jsx";
import videoTecnology from "../../assets/video/itero.mp4";

function Technology() {
  return (
    <section className="flex flex-col justify-center items-center h-full overflow-hidden px-10 py-16 gap-8">
      <div className="flex flex-col justify-center md:items-start items-center gap-8">
        <h2 className="text-[32px] text-primary text-center md:text-left md:text-[40px] lg:text-[54px] md:w-2/3 ">
          <b className="font-bold">Tecnología avanzada</b> para una odontología
          moderna en Panamá
        </h2>
        <p className="text-[14px] lg:text-[16px] md:w-3/6 md:text-left text-justify">
          En nuestra clínica dental contamos con tecnología de última generación
          para garantizar diagnósticos precisos, tratamientos efectivos y
          experiencias cómodas para cada paciente. Creemos en una odontología
          digital, segura y eficiente.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        <video
          className="h-[582px] rounded-lg p-2 shadow-lg"
          src={videoTecnology}
          type="video/mp4"
          preload="metadata" // Solo carga los metadatos del video
          controls
          autoPlay
          loop
          muted
          playsInline
          loading="lazy" // Carga diferida (solo si el video está cerca de la vista)
          poster="video-poster.jpg" // Imagen de vista previa antes de cargar el video
        />

        <div className="flex flex-col gap-10 p-8">
          <CardFigure
            figures="Escaneo 3D en tiempo real"
            description="Captura de modelos digitales de alta precisión de los dientes y encías."
            color="bg-[#A6B4BA]"
          />
          <CardFigure
            figures="Tecnología NIRI"
            description="Detecta caries interproximales sin radiación ionizante (no invasivo)."
            color="bg-[#CBD3D6]"
            textColor="text-primary"
          />
          <CardFigure
            figures="Imágenes intraorales"
            description="Actúa también como una cámara intraoral para documentar el estado bucal."
            color="bg-[#E3E8EA]"
            textColor="text-primary"
          />
        </div>
      </div>
    </section>
  );
}

export default Technology;
