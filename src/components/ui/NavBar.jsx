import logoClinica from "../../assets/logo/logo-pacificdentalclinic.webp";
import logoClinicaDark from "../../assets/logo/logo-pacificdentalclinic-oscuro.webp";
import iconoNosotros from "../../assets/icons/community.svg";
import iconoServicios from "../../assets/icons/services.svg";
import iconoContacto from "../../assets/icons/contact.svg";
import BottomContact from './Buttom.jsx'
import { useState } from "react";




function Navbar({color = 'text-neutralsligth', logoColor = logoClinica}) {
  const menuItems = [
    {
      href: "/nosotros",
      icon: iconoNosotros,
      alt: "icono de comunidad",
      label: "Nosotros",
    },
    {
      href: "/servicios",
      icon: iconoServicios,
      alt: "icono de servicios",
      label: "Servicios",
    },
    {
      href: "https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FLKGBJRM3FAVOO1%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAacti-RBGG177AjxgDgiuQ8g21chhmcv6A90lYsJGeHR2VukbqdUT1i2DFNxFw_aem_jKjx6xwjcONPBpGlnV60NQ&e=AT11mX5vx7aDgTYrCw0HeI_T-YE0XsglxUzg8M44uRImoXV3RMQL3cA6VZ0I9PL4S2D2RcmoewL2f0v5EEGFBnydzQ5juYe6tRpU3g",
      icon: null,
      alt: null,
      label: <BottomContact />,
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`absolute top-0 z-50 bg-primary-900 backdrop-blur flex items-center justify-between p-4 md:px-8 ${color} w-full`}>
      <div>
        <a href="/" aria-label="Inicio">
          <img
            src={logoColor}
            alt="logo de la clinica"
            className="h-12 w-auto "
            loading="lazy"
          />
        </a>
      </div>

      <button
            className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className={`h-8 w-8 ${color}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

      {/* Mask background when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-60 z-40"
          onClick={() => setMenuOpen(false)} // Close the menu when the mask is clicked
        />
      )}

      {/* Mobile Menu (Sliding from the left) */}
      <div className={`fixed top-0 left-0 z-50 h-screen w-full transform transition-transform duration-300 bg-neutralsligth p-10 md:hidden shadow-lg ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between mb-4 text-primary">
          <a href="/" aria-label="Inicio">
            <img
              src={logoClinicaDark}
              alt="logo de la clinica"
              className="h-12 w-auto "
              loading="lazy"
            />
          </a>

          {/* Hamburger button for mobile */}
          <button
            className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary z-60"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-8 w-8 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>


        {/* Menu items for mobile */}
        <ul className="mt-28 flex h-screen flex-col items-center space-y-4 text-2xl">
            {menuItems.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        className="flex items-center space-x-2 text-primary"
                    >
                        <span>{item.label}</span>
                    </a>
                </li>
            ))}
        </ul>
        
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center space-x-2 "
          >
            
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
