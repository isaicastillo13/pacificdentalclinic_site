import fondoPlanta from "../../assets/backgrounds/fondoPlanta.webp";


function OurNumbers() {
    return (
        <section className="flex flex-col items-center justify-center gap-20 p-6 md:h-screen">
            <h2 className="w-4/5 text-center font-light text-[32px] md:text-[40px] lg:text-[54px]">
                Nuestra trayectoria como <b className="font-bold">dentistas en Panamá</b> nos respalda.
            </h2>
            <div className="mx-auto flex flex-col items-center justify-center md:w-11/12 md:flex-row md:gap-10">
                {/* Experiencia */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[10px] font-light md:text-xs lg:text-base">
                        Al servicio de tu salud bucal
                    </p>
                    <p className="text-[32px] md:text-[40px] lg:text-[54px]">
                        <span>+20</span>AÑOS
                    </p>
                </div>
                {/* Sonrisas */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[10px] font-light md:text-xs lg:text-base">
                        Cada una con su propia historia.
                    </p>
                    <p className="text-[32px] md:text-[40px] lg:text-[54px]">
                        <span>+1K</span>SONRISAS
                    </p>
                </div>
                {/* Especialistas */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[10px] font-light md:text-xs lg:text-base">
                        Para darte la mejor atención nuestros
                    </p>
                    <p className="text-[32px] md:text-[40px] lg:text-[54px]">
                        EXPERTOS
                    </p>
                </div>
            </div>
            {/* imagen planta */}
            <div
                className="h-[400px] w-11/12 rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${fondoPlanta})` }}
            />
        </section>
    );
}

export default OurNumbers;
