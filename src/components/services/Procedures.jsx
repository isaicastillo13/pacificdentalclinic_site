import CardProcedure from "../ui/CardProcedures.jsx";

function Procedures() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-16 md:justify-around">
            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="max-w-5/6 text-center text-2xl md:text-4xl lg:text-5xl">
                    Detrás de cada sonrisa, hay un{" "}
                    <b className="font-bold">equipo comprometido</b>
                </h2>
                <p className="max-w-5/6 text-xs md:text-sm lg:text-base">
                    Figma ipsum component variant main layer. Undo list comment create rectangle union.
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
