function CardFigures({ figures, description }) {
  return (
    <div className="w-[472px] h-40 relative bg-gray-400 rounded-3xl overflow-hidden">
      <div className="w-96 h-28 left-[42px] top-[23px] absolute">
        <div className="w-80 h-28 left-0 top-0 absolute">
          <div className="left-0 top-0 absolute text-justify justify-start text-gray-100 text-6xl font-normal font-['Poppins']">
            17,8K
          </div>
        </div>
        <div className="left-[2px] top-[96px] absolute text-justify justify-start text-gray-100 text-base font-['Poppins']">
          Procedimientos Realizados con Equipos Digitales
        </div>
      </div>
    </div>
  );
}
export default CardFigures;
