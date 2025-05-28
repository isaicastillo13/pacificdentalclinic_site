import fondoPlanta from "../assets/backgrounds/fondoPlanta.webp";


function OurNumbers() {
    return (
        
        <div className="flex flex-col items-center justify-center h-screen p-6 gap-20">

            <h2 className="w-4/5 text-center text-6xl font-light">
                Nuestra trayectoria como <b>dentistas en Panamá</b> nos respalda.
            </h2>
            <div className="flex items-center gap-10">
                {/* Experiencia */}
                <div className="flex flex-col items-center gap-4">
                    <p className="font-light">Al servicio de tu salud bucal</p>
                    <p className="text-7xl">
                        <span>+20</span>AÑOS
                    </p>
                </div>
                {/* Sonrisas */}
                <div className="flex flex-col items-center gap-4">
                    <p className="font-light">Cada una con su propia historia.</p>
                    <p className="text-7xl">
                        <span>+1K</span>SONRISAS
                    </p>
                </div>
                {/* Especialistas */}
                <div className="flex flex-col items-center gap-4">
                    <p className="font-light">Para darte la mejor atención nuestros</p>
                    <p className="text-7xl">ESPECIALISTAS</p>
                </div>
            </div>
            {/* imagen planta */}
            <div
                className="w-11/12 h-[400px] rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${fondoPlanta})` }}
            ></div>
        </div>
    );
}

export default OurNumbers;
