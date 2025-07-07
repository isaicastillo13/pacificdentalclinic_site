function CardProcedures({ procedures, description, video }) {
  return (
    <div class="max-w-[396px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-primary dark:border-gray-700 flex flex-row overflow-hidden">
      <a href="#">
        <video
                  className="h-[282px] rounded-l-lg"
                  src={video}
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
      </a>
      <div class="w-2/4 px-2">
          <h3 class="mb-2 text-[20px] md:text-[28px] font-bold text-primary w-full">
            {procedures}
          </h3>
        <p class="text-primary text-[10px] md:text-[12px] lg:text-[16px] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CardProcedures;
