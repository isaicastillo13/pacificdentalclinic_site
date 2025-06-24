import ServicesDesc from "../ui/ServicesDesc";

function OurServices() {
  return (
    <section>
      <div className="flex flex-col gap-10 md:h-full md:items-center md:justify-center">
        <h2 className="px-4 text-center text-[32px] md:text-[40px] lg:text-[54px]">
          Tratamientos y servicios <b className="font-bold">odontológicos</b>
        </h2>
        <p className="text-center text-[10px] md:text-xs lg:text-base">
          Descubre todas las soluciones que ofrecemos para el cuidado completo de tu salud bucal, desde la prevención hasta la estética dental avanzada.
        </p>
        <div className="mx-auto grid w-2/3 gap-8 p-4 md:grid-cols-2">
          <ServicesDesc
            abreviatura="inv"
            servicio="Invisalign"
            descripcion="Ortodoncia invisible para alinear tus dientes sin brackets. Ideal para quienes buscan resultados estéticos y cómodos."
          />
          <ServicesDesc
            abreviatura="odo"
            servicio="Odontopediatría"
            descripcion="Atención dental especializada para niños, con enfoque preventivo, educativo y amigable."
          />
          <ServicesDesc
            abreviatura="bla"
            servicio="Blanqueamiento"
            descripcion="Recupera el brillo natural de tu sonrisa con nuestro tratamiento profesional de blanqueamiento dental. Utilizamos tecnología segura y efectiva para eliminar manchas causadas por café, vino, tabaco y otros factores."
          />
          <ServicesDesc
            abreviatura="car"
            servicio="Carillas"
            descripcion="Corrige imperfecciones estéticas como fracturas, manchas o separación entre dientes con carillas de porcelana o resina. Una solución rápida y duradera para transformar tu sonrisa."
          />
          <ServicesDesc
            abreviatura="dis"
            servicio="Diseño de sonrisa"
            descripcion="Renueva por completo la estética de tu boca con un diseño de sonrisa personalizado. Combinamos técnicas digitales, blanqueamiento, carillas y ortodoncia para lograr un resultado armónico y natural."
          />
          <ServicesDesc
            abreviatura="ort"
            servicio="Ortodoncia tradicional"
            descripcion="Corrección de la posición dental con técnicas convencionales, ideal para adolescentes y adultos."
          />
          <ServicesDesc
            abreviatura="imp"
            servicio="Implantes"
            descripcion="Solución permanente para reemplazar dientes perdidos con resultados funcionales y estéticos."
          />
          <ServicesDesc
            abreviatura="lim"
            servicio="Limpieza y profilaxis"
            descripcion="Eliminación de placa, sarro y manchas para mantener tus dientes y encías saludables."
          />
          <ServicesDesc
            abreviatura="cir"
            servicio="Cirugía oral"
            descripcion="Extracciones, tratamientos quirúrgicos y procedimientos dentales realizados por especialistas certificados."
          />
          <ServicesDesc
            abreviatura="urg"
            servicio="Urgencias dentales"
            descripcion="Atención inmediata para dolor agudo, fracturas dentales, infecciones y otras emergencias."
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
