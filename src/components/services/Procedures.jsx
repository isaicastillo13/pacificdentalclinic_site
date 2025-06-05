import CardProcedure from "../ui/CardProcedures.jsx";

function Procedures() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 py-16 md:justify-around">
            <div className="flex flex-col items-center justify-center gap-20">
                <h2 className="max-w-5/6 text-center text-2xl md:text-4xl lg:text-5xl">
                   Conoce cómo cuidamos tu sonrisa: {" "}
                    <b className="font-bold">procedimientos dentales en acción</b>
                </h2>
                <p className="max-w-5/6 text-xs md:text-sm lg:text-base text-center">
                    Conoce paso a paso cómo realizamos nuestros tratamientos dentales más solicitados. Videos reales de nuestros especialistas en acción, tecnología de vanguardia y resultados visibles.
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 p-4 md:flex-row">
                <CardProcedure
                    procedures="Ortodoncia"
                    description="We offer a wide range of medical procedures to ensure your health and well-being. Our team of experts is dedicated to providing the best care possible."
                />
                <CardProcedure
                    procedures="Periodoncia"
                    description="We offer a wide range of medical procedures to ensure your health and well-being. Our team of experts is dedicated to providing the best care possible."
                />
                <CardProcedure
                    procedures="Cirugias"
                    description="We offer a wide range of medical procedures to ensure your health and well-being. Our team of experts is dedicated to providing the best care possible."
                />
            </div>
        </section>
    );
}

export default Procedures;
