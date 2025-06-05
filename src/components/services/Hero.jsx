import Navbar from "../ui/NavBar";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";


function Hero() {
    return (
        <section className="flex flex-col items-center justify-around gap-8 p-8 h-screen md:h-full overflow-hidden">
            <Navbar 
            color="text-primary"
            logoColor={logoClinicaDark}
        />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="self-stretch text-center justify-start">
                    <span className="text-[40px] md:text-[80px] lg:text-[108px] font-light uppercase text-primary">
                        NUESTROS{" "}
                    </span>
                    <span className="text-[40px] md:text-[80px] lg:text-[108px] font-medium uppercase bg-gradient-to-r from-primary via-[#486488] to-neutralsligth bg-clip-text text-transparent">
                        SERVICIOS
                    </span>
                </div>
                <h1 className="w-11/12 text-[10px] md:text-[12px] lg:text-[16px] font-light text-center">
                    Servicios odontológicos con atención personalizada y tecnología avanzada
                </h1>
            </div>
            <img
                className="rounded-3xl"
                src="https://placehold.co/1216x583"
                alt="Pacific Dental Clinic Team"
            />
        </section>
    );
}

export default Hero;
