import videoHero from "../../assets/video/heroPdc.mp4";
import pageBg from "../../assets/backgrounds/page-bg.svg";
import iconoFlechaAbajo from '../../assets/icons/arrow-down-circle.svg';
import Navbar from "../ui/NavBar";

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
                    type="video/mp4"
                  preload="metadata" // Solo carga los metadatos del video
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  loading="lazy" // Carga diferida (solo si el video está cerca de la vista)
                  poster="video-poster.jpg"
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
        </section>
    );
}

export default Hero;
