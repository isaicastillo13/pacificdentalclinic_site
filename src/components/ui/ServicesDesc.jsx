import React from "react";

function ServicesDesc({abreviatura,servicio, descripcion})  {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-2">
                <span className="bg-primary text-neutralsligth font-bold p-2 rounded-s-2xl">{abreviatura}</span>
                <p className="font-bold">{servicio}</p>
            </div>
            <p className="text-justify font-light">{descripcion}</p>
        </div>
    );
}

export default ServicesDesc;