import videoHero from "../assets/video/HeroPDC.mp4";
import pageBg from "../assets/backgrounds/page-bg.svg";
import iconoFlechaAbajo from '../assets/icons/arrow-down-circle.svg';
import Navbar from "./NavBar";

function Hero() {
    return (
        <section className="relative h-screen p-6 overflow-hidden">
            <div
                className="relative w-full h-full overflow-hidden rounded-xl"
                style={{
                    background: `url(${pageBg}) lightgray 50% / cover no-repeat`,
                }}
            >
                {/* Navbar y Video de fondo */}
                <Navbar />
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={videoHero}
                    autoPlay
                    loop
                    muted
                />

                {/* Capa de gradiente */}
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-50"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(149, 167, 179, 0.00) 0%, rgba(106, 120, 128, 0.35) 50%, rgba(64, 72, 77, 0.70) 100%)",
                    }}
                />
            </div>

            {/* Contenido principal */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-around text-neutral-50">
                <span className="text-[40px] uppercase md:text-[80px] lg:text-[108px]">Pacific Dental</span>
                <span className="text-[40px] uppercase md:text-[80px] lg:text-[108px]">Clinic</span>
            </div>

            {/* Footer del Hero */}
            <div className="absolute top-0 left-0 z-10 flex h-full w-full items-end justify-between gap-8 p-10 text-neutral-50 md:gap-0">
                <h1 className="font-light text-[10px] md:w-44 md:text-[12px] lg:w-md lg:text-[16px]">
                    Tu Clínica Dental de Confianza en Panamá – Ortodoncia, Invisalign y Más
                </h1>
                <img
                    className="hidden md:block"
                    src={iconoFlechaAbajo}
                    alt="icono flecha hacia abajo"
                />
                <h2 className="font-light text-[10px] md:w-44 md:text-[12px] lg:w-md lg:text-[16px]">
                    Especialistas en odontología general, odontopediatría y tratamientos modernos como Invisalign. ¡Reserva tu cita con dentistas certificados cerca de ti!
                </h2>
            </div>
        </section>
    );
}

export default Hero;
