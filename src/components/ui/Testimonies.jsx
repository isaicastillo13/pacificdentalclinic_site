import logoPcd from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";

function Testimonies() {
  return (
    <section className=" h-screen flex justify-center items-center relative isolate overflow-hidden bg-neutralsligth px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-neutralsligth shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex flex-col items-center mb-10 gap-10">
          <h2 className="text-center text-primary  text-[32px] md:text-[40px] lg:text-[54px] normal-case">
            ¿Somos <b className="font-bold">la mejor clinica</b> dental de
            Panamá ?
          </h2>
          {/* <p className='font-light'>ESTO DICEN NUESTRO PACIENTES</p> */}
        </div>
        {/* 
        <img
          alt=""
          src={logoPcd}
          className="mx-auto h-12"
        /> 
        */}

        {/* Improved and organized Tailwind CSS classes */}
        <img
          alt="Pacific Dental Clinic Logo"
          src={logoPcd}
          className="h-12 mx-auto"
        />
        <figure className="mt-10">
          <blockquote className="font-semibold text-primary">
            <p className="font-light text-[14px] lg:text-[16px]">
              “I was in Panama and had tooth pain. I called and got an
              appointment within a couple of days. It was discovered that my
              tooth was broken in half. I received a crown lengthening, bonding,
              and a cleaning—all at a great price. I'm glad this happened in
              Panama and not at home. When the bonding came off, it was replaced
              free of charge, with no further issues. The staff and the doctor
              were very friendly and respectful. I think it's definitely worth
              returning to Panama for my dental care."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29_%28Pantone%29.svg.png"
              className="mx-auto size-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <p className="font-semibold text-primary text-[10px] md:text-[12px] lg:text-[16px]">
                Rut Davis
              </p>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-pritext-primary"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              {/* <p className="text-primary text-[10px] md:text-[12px] lg:text-[16px]">CEO of Workcation</p> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonies;
