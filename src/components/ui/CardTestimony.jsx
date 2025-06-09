import React from 'react';

function CardTestimonios({ image, name, experience, patientOf}) {
    return (
        <div className='flex flex-col items-center justify-center p-5 gap-9 bg-neutralsligth'>
            <img className='rounded-full' src='' alt="imagen del cliente" />
            <span>Noel Ernser</span>
            <h3 className='text-[10px] md:text-[12px] lg:text-[16px]'>Estaba inseguro con mi sonrisa, pero desde que comencé mi tratamiento con Invisalign, he notado un cambio increíble. El proceso ha sido cómodo y los resultados han superado mis expectativas. El equipo fue muy atento en cada etapa.</h3>
            <span className='text-[10px] md:text-[12px] lg:text-[16px]'> -Paciente de Invisalign </span>
        </div>
    );
}

export default CardTestimonios;
