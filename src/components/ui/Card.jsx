import React from 'react';
import iconRadioButtom from '../../assets/icons/radio-buttom.svg'; // Importa la imagen del icono// Importa una imagen de fondo por defecto

function Card({ name, specialization, img = imagenFondo}) {
    return(
        <div className="relative overflow-hidden rounded-lg shadow-lg w-80 h-96">
  <img src={img} alt={name} className="object-cover w-full h-full" />
  <div className="absolute inset-0 flex flex-col justify-end gap-4 p-4 ">
    <p className="text-lg font-bold text-white">{name}</p>
    <span className="flex items-center gap-1 p-2 text-sm text-white border rounded-full backdrop-blur-sm bg-white/30 border-white/50">
      <img src={iconRadioButtom} alt="" className="w-4 h-4" />
      {specialization}
    </span>
  </div>
</div>

    );
}

export default Card;
