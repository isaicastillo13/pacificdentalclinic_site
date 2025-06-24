import Navbar from "../ui/NavBar";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import imgAsistente from "../../assets/image/equipoPcd.webp";

function Hero() {
  return (
    <>
      <Navbar color="text-primary" logoColor={logoClinicaDark} />
      <section className="flex h-screen flex-col items-center justify-center overflow-hidden px-8 gap-8 ">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="self-stretch justify-start text-center">
            <span className="text-primary font-light uppercase text-[40px] md:text-[80px] lg:text-[108px]">
              PACIFIC{" "}
            </span>
            <span className="bg-gradient-to-r from-primary from-0% via-[#486488] via-60% to-neutralsligth to-90% bg-clip-text font-medium uppercase text-transparent text-[40px] md:text-[80px] lg:text-[108px]">
              TEAM
            </span>
          </div>
          <h1 className="w-11/12 justify-start text-center font-light text-[10px] md:text-[12px] lg:text-[16px]">
            Conoce al equipo de dentistas en Panamá que transforma sonrisas
          </h1>
        </div>
        <div
          className={`flex justify-center items-center w-full bg-img bg-cover bg-center bg-no-repeat md:hidden`}
        >
          <img
            className="rounded-3xl object-cover w-full max-w-4xl h-[400px]"
            src={imgAsistente}
            alt="Pacific Dental Clinic Team"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
