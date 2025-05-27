import logoClinica from '../assets/logo/logo-pacificdentalclinic.webp';
import iconoNosotros from '../assets/icons/community.svg';
import iconoServicios from '../assets/icons/services.svg';
import iconoContacto from '../assets/icons/contact.svg';

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between p-8 text-neutral-50">
            <div>
                {/* Logo de la clínica */}
                <a href="/">
                    <img
                        src={logoClinica}
                        alt="logo de la clinica"
                        className="h-[70px]"
                    />
                </a>
            </div>

            <div className="flex items-center gap-6 ">
                <a href="/about" className="flex items-center gap-2 ">
                    <img
                        src={iconoNosotros}
                        alt="icono de comunidad"
                        className="w-4"
                    />
                    Nosotros
                </a>
                <a href="/services" className="flex items-center gap-2">
                    <img
                        src={iconoServicios}
                        alt="icono de servicios"
                    />
                    Servicios
                </a>
                <a href="/contact" className="flex items-center gap-2">
                    <img
                        src={iconoContacto}
                        alt="icono de contacto"
                    />
                    Contacto
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
