import videoHero from "../assets/video/HeroPDC.mp4";
import pageBg from "../assets/backgrounds/page-bg.svg";
import iconoFlechaAbajo from '../assets/icons/arrow-down-circle.svg';
import Navbar from "./NavBar";

function Hero() {
    return (
        <div className="relative h-screen p-6 overflow-hidden">
            <div
                className="relative w-full h-full overflow-hidden rounded-xl"
                style={{
                    background: `url(${pageBg}) lightgray 50% / cover no-repeat`,
                }}
            >
                {/* Video de fondo */}
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
                ></div>
            </div>

            {/* Contenido encima del gradiente y el video */}
            <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-around w-full h-full text-white">
                <span className="text-[108px] uppercase">Pacific Dental</span>
                <span className="text-[108px] uppercase">Clinic</span>
            </div>

            <div className="absolute top-0 left-0 z-10 flex items-end justify-between w-full h-full p-10 text-white">
                <h1 className="w-md text-s">
                    Tu Clínica Dental de Confianza en Panamá – Ortodoncia, Invisalign y Más
                </h1>
                <img src={iconoFlechaAbajo} alt="icono flecha hacia abajo" />
                <h2 className="w-md text-s">
                    Especialistas en odontología general, odontopediatría y tratamientos modernos como Invisalign. ¡Reserva tu cita con dentistas certificados cerca de ti!
                </h2>
            </div>
        </div>
    );
}

export default Hero;
