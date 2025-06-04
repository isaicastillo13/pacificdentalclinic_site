import ServicesDesc from "../ui/ServicesDesc";

function OurServices() {
  return (
    <section className="">
      <div className="flex flex-col md:items-center md:justify-center md:h-screen gap-10">
        <h2 className="text-center text-[32px] md:text-[40px] lg:text-[54px] px-4">Atención Integral para tu <b className="font-bold">Salud Bucal</b></h2>
        <p className="text-[10px] md:text-xs lg:text-base text-center">
          Figma ipsum component variant main layer. Undo list comment create
          rectangle union.
        </p>
        <div className="grid gap-8 p-4 md:grid-cols-2 w-2/3 mx-auto">
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
