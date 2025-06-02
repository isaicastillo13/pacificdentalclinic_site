function CardFigures({ figures, description,color = 'bg-[#A6B4BA]', textColor = 'text-neutralsligth' }) {
  return (
    <div className={`h-28 md:h-32 lg:h-40 relative ${color} rounded-3xl overflow-hidden px-10`}>
      <div className="">
          <span className={`text-justify justify-start ${textColor} text-[32px] md:text-[40px] lg:text-[54px]`}>
            {figures}
          </span>
        <p className={`text-justify justify-start ${textColor} text-[10px] md:text-[12px] lg:text-[16px]`}>
          {description}
        </p>
      </div>
    </div>
  );
}
export default CardFigures;
