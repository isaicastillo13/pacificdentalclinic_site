// src/pages/PrivacyPolicy.jsx
import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-4xl px-6 py-12 mx-auto text-neutral-800">
      <h1 className="mb-6 text-3xl font-bold">Política de Privacidad</h1>
      <p className="mb-4">En <strong>Pacific Dental Clinic</strong>, valoramos tu privacidad y nos comprometemos a proteger los datos personales que nos proporcionas a través de este sitio web.</p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">1. Datos que recopilamos</h2>
      <p className="mb-4">Recopilamos nombre completo, correo electrónico y mensaje enviado por el formulario de contacto.</p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">2. Finalidad de los datos</h2>
      <p className="mb-4">Usamos tus datos solo para responder consultas, gestionar citas o brindarte información sobre nuestros servicios.</p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">3. Almacenamiento y seguridad</h2>
      <p className="mb-4">No almacenamos tus datos en bases de datos persistentes. Se envían vía correo electrónico de forma segura. No compartimos información con terceros.</p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">4. Tus derechos</h2>
      <p className="mb-4">Puedes solicitar acceso, corrección o eliminación de tus datos escribiéndonos a: <a href="mailto:contacto@pacificdental.com" className="text-blue-600 underline">contacto@pacificdental.com</a></p>

      <h2 className="mt-8 mb-2 text-xl font-semibold">5. Modificaciones</h2>
      <p>Nos reservamos el derecho de actualizar esta política en cualquier momento. Recomendamos revisarla periódicamente.</p>
    </section>
  );
};

export default PrivacyPolicy;
