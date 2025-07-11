import React from 'react';
import { Link } from 'react-router-dom';
import logoPCD from '../../assets/logo/logo-pacificdentalclinic-oscuro.webp';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="w-full max-w-screen-xl p-4 py-6 mx-auto lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logoPCD} className="h-8 me-3" alt="Logo Pacific Dental Clinic" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                PACIFIC DENTAL CLINIC
              </span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contacto</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://api.whatsapp.com/message/LKGBJRM3FAVOO1?autoload=1&app_absent=0"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Ubicacion</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://maps.app.goo.gl/jYU3vJJsLtd77XwV8"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hospital Punta Pacífica, Panamá
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Síguenos</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/pacificdentalpty/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @pacificdentalpty
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link to="/politica-de-privacidad" className="hover:underline">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link to="/terminos-y-condiciones" className="hover:underline">
                    Términos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Pacific Dental Clinic. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
