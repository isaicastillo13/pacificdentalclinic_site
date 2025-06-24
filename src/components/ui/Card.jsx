import React from 'react';
import iconRadioButtom from '../../assets/icons/radio-buttom.svg'; // Importa la imagen del icono
import imagenFondo from '../../assets/image/imgTest.jpg'; // Importa una imagen de fondo por defecto

function Card({ name, specialization, img = imagenFondo}) {
    return(
        <div className="relative w-80 h-96 rounded-lg overflow-hidden m-4">
            <img src={img} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                <p className="text-white text-lg font-bold">{name}</p>
                <span className="flex gap-2 items-center text-white text-sm backdrop-blur-sm bg-white/30 border-1 rounded-full p-2 w-48">
                <img src={iconRadioButtom} alt="" />
                {specialization}
                </span>
            </div>
        </div>
    );
}

export default Card;
