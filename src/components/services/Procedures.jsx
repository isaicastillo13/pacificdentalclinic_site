import CardProcedure from "../ui/CardProcedures.jsx";
import videoOrtondencia from "../../assets/video/ortodoncia.mp4";
import videoBlaqueamiento from "../../assets/video/blaqueamiento.mp4";
import videoApiceptiomia from "../../assets/video/apiceptiomia.mp4";

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
                    description="Corrección de la posición dental con técnicas convencionales, ideal para adolescentes y adultos."
                    video ={videoOrtondencia}

                />
                <CardProcedure
                    procedures="Blaqueamiento"
                    description="Recupera el brillo natural de tu sonrisa con nuestro tratamiento profesional de blanqueamiento dental."
                    video={videoBlaqueamiento}
                />
                <CardProcedure
                    procedures="Cirugias"
                    description="Extracciones, tratamientos quirúrgicos y procedimientos dentales realizados por especialistas certificados."
                    video={videoApiceptiomia}
                />
            </div>
        </section>
    );
}

export default Procedures;
