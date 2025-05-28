import fondoOla from "../assets/backgrounds/fondoOla.webp";
import React from "react";

function Banner() {
  return (
    <div
      className="flex flex-col justify-around items-center mx-auto h-screen bg-cover bg-center relative "
      style={{ backgroundImage: `url(${fondoOla})` }}
    >
      <div className="flex flex-col gap-5">
        <h2 className="text-6xl font-light">Más que una clínica dental en Panamá</h2>
        <p className="w-2/3 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          repellat ipsum eaque earum dolorum cumque deleniti consequatur minima
          quis qui atque aliquam, a aut quae quidem autem saepe quod
          consequuntur?
        </p>
      </div>
      <div className="flex justify-end pr-8 w-full">
        <p className='font-light'> -Pacific Dental Clinic </p>
      </div>
    </div>
  );
}

export default Banner;
