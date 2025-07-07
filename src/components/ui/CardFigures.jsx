function CardFigures({ figures, description,color = 'bg-[#A6B4BA]', textColor = 'text-neutralsligth' }) {
  return (
    <div className={` md:h-32 lg:h-40 relative ${color} rounded-3xl overflow-hidden px-10 py-4`}>
      <div className="flex flex-col justify-center items-start h-full">
          <span className={`text-justify ${textColor} text-[20px] lg:text-[32px] font-bold`}>
            {figures}
          </span>
        <p className={`text-justify ${textColor} text-[14px] lg:text-[16px]`}>
          {description}
        </p>
      </div>
    </div>
  );
}
export default CardFigures;
