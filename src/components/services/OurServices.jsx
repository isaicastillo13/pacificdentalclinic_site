import ServicesDesc from "../ui/ServicesDesc";

function OurServices() {
  return (
    <section>
      <div className="flex flex-col gap-10 md:h-full md:items-center md:justify-center">
        <h2 className="px-4 text-center text-[32px] md:text-[40px] lg:text-[54px]">
          Tratamientos y servicios <b className="font-bold">odontológicos</b>
        </h2>
        <p className="text-center text-[10px] md:text-xs lg:text-base">
          Descubre todas las soluciones que ofrecemos para el cuidado completo
          de tu salud bucal, desde la prevención hasta la estética dental
          avanzada.
        </p>
        <div className="mx-auto grid w-2/3 gap-8 p-4 md:grid-cols-2">
          <ServicesDesc
            abreviatura="BLA"
            servicio="Blanqueamiento"
            descripcion="Tratamiento estético para aclarar el tono de los dientes y mejorar la sonrisa."
          />

          <ServicesDesc
            abreviatura="PRO"
            servicio="Profilaxis Dental"
            descripcion="Limpieza profesional para eliminar placa, sarro y prevenir enfermedades bucales."
          />

          <ServicesDesc
            abreviatura="DIS"
            servicio="Diseño de Sonrisa"
            descripcion="Mejoramos la estética de tu sonrisa con tratamientos personalizados y digitales."
          />

          <ServicesDesc
            abreviatura="DIG"
            servicio="Odontología Digital"
            descripcion="Tecnología avanzada para diagnósticos precisos y tratamientos más eficientes."
          />

          <ServicesDesc
            abreviatura="ORT"
            servicio="Ortopedia Maxilar"
            descripcion="Corrección del desarrollo óseo de los maxilares en niños y adolescentes."
          />

          <ServicesDesc
            abreviatura="INV"
            servicio="Invisalign"
            descripcion="Alineadores transparentes y removibles para enderezar los dientes con comodidad."
          />

          <ServicesDesc
            abreviatura="BEB"
            servicio="Odontología del Bebé"
            descripcion="Cuidados dentales desde los primeros meses de vida para una sonrisa saludable."
          />

          <ServicesDesc
            abreviatura="BRU"
            servicio="Terapia para Bruxismo"
            descripcion="Tratamientos para aliviar el rechinar de dientes y sus efectos en la mandíbula."
          />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:h-full md:items-center md:justify-center mt-20">
        <h2 className="px-4 text-center text-[32px] md:text-[40px] lg:text-[54px]">
          Odontologia especializada <b className="font-bold">avanzada</b>
        </h2>
        <div className="mx-auto grid w-2/3 gap-8 p-4 md:grid-cols-2">
          <ServicesDesc
            abreviatura="PER"
            servicio="Periodoncia"
            descripcion="Tratamiento y prevención de enfermedades en las encías y tejidos que rodean los dientes."
          />

          <ServicesDesc
            abreviatura="IMP"
            servicio="Implantología"
            descripcion="Colocación de implantes dentales para reemplazar piezas perdidas de forma fija y funcional."
          />

          <ServicesDesc
            abreviatura="ORT"
            servicio="Ortodoncia"
            descripcion="Corrección de la alineación dental y la mordida mediante brackets o alineadores."
          />

          <ServicesDesc
            abreviatura="END"
            servicio="Endodoncia"
            descripcion="Tratamiento de conductos para salvar dientes con infecciones o daños en la raíz."
          />

          <ServicesDesc
            abreviatura="PED"
            servicio="Odontopediatría"
            descripcion="Atención dental especializada para niños, con enfoque preventivo y amigable."
          />

          <ServicesDesc
            abreviatura="CIR"
            servicio="Cirugía Maxilofacial"
            descripcion="Procedimientos quirúrgicos en boca, mandíbula y rostro para corregir patologías o traumas."
          />

          <ServicesDesc
            abreviatura="REB"
            servicio="Rehabilitación Bucal"
            descripcion="Restauración funcional y estética de la boca mediante tratamientos integrales."
          />

          <ServicesDesc
            abreviatura="COS"
            servicio="Odontología Cosmética"
            descripcion="Mejora de la apariencia dental mediante blanqueamientos, carillas y otros tratamientos estéticos."
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
