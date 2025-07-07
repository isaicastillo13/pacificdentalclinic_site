import Navbar from "../ui/NavBar";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";


function Hero() {
    return (
        <>
            <Navbar 
            color="text-primary"
            logoColor={logoClinicaDark}
        />
        <section className="flex h-screen flex-col items-center justify-around overflow-hidden px-8 gap-8">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="self-stretch text-center justify-start">
                    <span className="text-[40px] md:text-[80px] lg:text-[108px] font-light uppercase text-primary">
                        NUESTROS{" "}
                    </span>
                    <span className="text-[40px] md:text-[80px] lg:text-[108px] font-medium uppercase bg-gradient-to-r from-primary via-[#486488] to-neutralsligth bg-clip-text text-transparent">
                        SERVICIOS
                    </span>
                </div>
                <h1 className="w-11/12 text-[14px] lg:text-[16px] font-light text-center">
                    Servicios odontológicos con atención personalizada y tecnología avanzada
                </h1>
            </div>

        </section>
        </>
        
    );
}

export default Hero;
