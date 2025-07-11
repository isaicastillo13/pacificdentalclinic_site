import React from "react";
import ContactForm from "./ContactForm";

function FormContact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-full bg-cover bg-center bg-gradient-to-b from-gray-900 to-gray-900/40 p-4 text-neutralsligth">
        <h3 className="text-[24px] md:text-[32px] lg:text-[40px] font-bold">¿Necesitas ayuda o quieres agendar una cita?</h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-light text-center mt-2 mb-4">
          Estamos aquí para cuidar de ti. Déjanos tus datos y te contactaremos
          lo antes posible
        </p>
        <ContactForm />
      </div>
    </>
  );
}

export default FormContact;
