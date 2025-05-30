import logoClinica from '../assets/logo/logo-pacificdentalclinic.webp';
import iconoNosotros from '../assets/icons/community.svg';
import iconoServicios from '../assets/icons/services.svg';
import iconoContacto from '../assets/icons/contact.svg';
import { useState } from 'react';

function Navbar() {
    const menuItems = [
        {
            href: '/about',
            icon: iconoNosotros,
            alt: 'icono de comunidad',
            label: 'Nosotros',
        },
        {
            href: '/services',
            icon: iconoServicios,
            alt: 'icono de servicios',
            label: 'Servicios',
        },
        {
            href: '/contact',
            icon: iconoContacto,
            alt: 'icono de contacto',
            label: 'Contacto',
        },
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-primary-900 backdrop-blur flex items-center justify-between px-4 py-4 md:px-8 text-neutral-50">
            <div>
                <a href="/" aria-label="Inicio">
                    <img
                        src={logoClinica}
                        alt="logo de la clinica"
                        className="h-12 w-auto"
                        loading="lazy"
                    />
                </a>
            </div>

            {/* Hamburger button for mobile */}
            <button
                className="md:hidden flex items-center px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {menuOpen ? (
                        // X icon
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        // Hamburger icon
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            <div
                className={`fixed top-0 left-0 z-50 h-full w-1/2 transform transition-transform duration-300 bg-neutral-50 p-4 ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                } md:hidden`}
            >
                <ul className="flex flex-col items-center space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="flex items-center space-x-2 text-primary-900"
                            >
                                <img src={item.icon} alt={item.alt} className="h-6 w-6" />
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
                        className="flex items-center space-x-2 text-white"
                    >
                        <img src={item.icon} alt={item.alt} className="h-6 w-6" />
                        <span>{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;
