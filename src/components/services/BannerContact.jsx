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
                    ¿Listo para transformar tu sonrisa?
                </h2>
                <p className="text-[10px] font-light text-neutralsligth md:text-xs lg:text-base">
                    Da el primer paso hacia una sonrisa más saludable y segura. Nuestro equipo de dentistas en Panamá te espera con atención personalizada, tecnología avanzada y un ambiente cálido que te hará sentir en confianza desde el primer momento.
                </p>
                <a href="https://api.whatsapp.com/message/LKGBJRM3FAVOO1?autoload=1&app_absent=0">
                < Buttom/>
                </a>
                
            </div>
        </div>
    </section>
);
}

export default OurClinic;
