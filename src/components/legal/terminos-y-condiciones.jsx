import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto text-gray-700 dark:text-gray-200">
      <h1 className="mb-6 text-3xl font-bold text-center">Términos y Condiciones</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">1. Aceptación de los términos</h2>
        <p>
          Al acceder y utilizar este sitio web, aceptas cumplir con estos términos y condiciones.
          Si no estás de acuerdo con alguna parte de los mismos, no deberías utilizar este sitio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">2. Uso del sitio</h2>
        <p>
          Te comprometes a utilizar este sitio solo para fines legales y de manera que no infrinjas
          los derechos de otros usuarios ni restrinjas su uso.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">3. Propiedad intelectual</h2>
        <p>
          Todo el contenido presente en el sitio, incluyendo textos, logos, gráficos y marcas, está
          protegido por derechos de propiedad intelectual y no puede ser reproducido sin
          autorización.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">4. Modificaciones</h2>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Las
          modificaciones entrarán en vigencia una vez publicadas en el sitio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">5. Límites de responsabilidad</h2>
        <p>
          No seremos responsables por daños derivados del uso o imposibilidad de uso del sitio,
          incluyendo errores, interrupciones o inexactitudes en la información.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold">6. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República de Panamá. Cualquier disputa será
          resuelta ante los tribunales de dicha jurisdicción.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
