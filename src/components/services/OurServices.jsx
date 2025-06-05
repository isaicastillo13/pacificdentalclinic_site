import ServicesDesc from "../ui/ServicesDesc";

function OurServices() {
  return (
    <section>
      <div className="flex flex-col gap-10 md:h-screen md:items-center md:justify-center">
        <h2 className="px-4 text-center text-[32px] md:text-[40px] lg:text-[54px]">
          Atención Integral para tu <b className="font-bold">Salud Bucal</b>
        </h2>
        <p className="text-center text-[10px] md:text-xs lg:text-base">
          Figma ipsum component variant main layer. Undo list comment create
          rectangle union.
        </p>
        <div className="mx-auto grid w-2/3 gap-8 p-4 md:grid-cols-2">
          <ServicesDesc
            abreviatura="ORT"
            servicio="Odontologia General"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="PER"
            servicio="Odontologia Estetica"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="CIR"
            servicio="Ortodoncia"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="LIM"
            servicio="Implantes Dentales"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="LIM"
            servicio="Implantes Dentales"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
          <ServicesDesc
            abreviatura="LIM"
            servicio="Implantes Dentales"
            descripcion="Lorem ipsum dolor sit amet consectetur. Morbi sagittis vestibulum nunc pulvinar. Tellus pharetra imperdiet quis vitae."
          />
        </div>
      </div>
    </section>
  );
}

export default OurServices;
