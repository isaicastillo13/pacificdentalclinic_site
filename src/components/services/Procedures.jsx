import CardProcedure from "../ui/CardProcedures.jsx";

function Procedures() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-16 md:justify-around">
        <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-[32px] md:text-[40px] lg:text-[54px] max-w-5/6 text-center">Detrás de cada sonrisa, hay un <b className="font-bold">equipo comprometido</b></h2>
            <p className="text-[10px] md:text-xs lg:text-base max-w-5/6">Figma ipsum component variant main layer. Undo list comment create rectangle union.</p>
        </div>

    <div className="flex md:flex-row justify-center items-center flex-wrap gap-4 p-4">
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
