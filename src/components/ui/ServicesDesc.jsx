import React from "react";

function ServicesDesc({abreviatura,servicio, descripcion})  {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2">
                <span className="bg-primary text-neutralsligth font-bold p-2 rounded-s-2xl uppercase ">{abreviatura}</span>
                <h3 className="font-bold">{servicio}</h3>
            </div>
            <p className="text-justify font-light text-[10px] md:text-[12px] lg:text-[16px]">{descripcion}</p>
        </div>
    );
}

export default ServicesDesc;