import fondoServicio from "../../assets/backgrounds/fondoServicio.webp";
import Buttom from "../ui/Buttom";


function OurClinic() {
return (
    <section className="h-screen overflow-hidden relative">
        {/* Blurred background image */}
        <div
            className="absolute inset-0 z-0 bg-center bg-cover blur-sm"
            style={{ backgroundImage: `url(${fondoServicio})` }}
            aria-hidden="true"
        ></div>
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full z-10">
            <div className="flex flex-col items-center justify-center gap-4 w-3/6 text-center">
                <h2 className="text-[32px] text-neutralsligth md:text-[40px] lg:text-[54px]">
                    Un Espacio Pensado para tu Comodidad y Bienestar
                </h2>
                <p className="text-[10px] font-light text-neutralsligth md:text-xs lg:text-base">
                    En nuestra clínica, cada detalle ha sido cuidadosamente diseñado
                    para ofrecerte una experiencia agradable desde el primer momento.
                    Contamos con instalaciones modernas, amplias y climatizadas,
                    equipadas con tecnología de vanguardia que garantiza diagnósticos
                    precisos y tratamientos eficaces.
                </p>
                < Buttom/>
            </div>
        </div>
    </section>
);
}

export default OurClinic;
