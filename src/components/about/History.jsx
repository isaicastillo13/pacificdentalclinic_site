import React from "react";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import fotoVieja from "../../assets/image/fotoVieja.webp";

function History() {
return (
    <section className="flex flex-col justify-center items-center h-screen overflow-hidden p-10">
        <div className="flex flex-col items-center justify-center">
            <img
                src={logoClinicaDark}
                alt="Logo Clínica"
                className="w-1/2 md:w-1/3 lg:w-1/4"
            />
            <div className="mt-10 flex flex-col items-center justify-center gap-8 md:flex-row">
                <div className="flex flex-col items-center justify-center gap-8">
                    <h2 className="text-[32px] text-primary md:text-[40px] lg:text-[54px]">
                        <span className="font-bold text-zinc-700">Nuestra Historia</span>
                        <span>, Tu Confianza</span>
                    </h2>
                    <p className="w-fit text-justify text-[10px] font-light text-primary md:text-xs lg:text-base">
                        Nacimos con el sueño de cambiar la forma en que las personas viven
                        su salud bucal. Desde nuestros inicios, hemos crecido con el
                        compromiso de ofrecer atención odontológica de calidad, combinando
                        experiencia, innovación y un trato humano que nos ha permitido
                        ganarnos la confianza de cada paciente.
                        <br />
                        <br />
                        con mas de 20 años, nuestra clínica nació con el propósito de
                        brindar atención odontológica de calidad en un ambiente cálido y
                        profesional. Con el paso del tiempo, nos hemos consolidado como un
                        referente en salud bucal en Panamá, gracias al compromiso
                        constante con nuestros pacientes y al enfoque humano que nos
                        caracteriza.
                        <br />
                        <br />
                        A lo largo de los años, hemos incorporado tecnología avanzada,
                        ampliado nuestros servicios y formado un equipo de especialistas
                        apasionados por su labor. Cada sonrisa que atendemos refleja
                        nuestra evolución y reafirma la confianza que las familias
                        panameñas han depositado en nosotros desde el primer día.
                    </p>
                </div>
                <img
                className="h-auto w-1/3 rounded-[20px] grayscale"
                    src={fotoVieja}
                    alt="Foto Antigua"
                    
                />
            </div>
        </div>
    </section>
);
}

export default History;
