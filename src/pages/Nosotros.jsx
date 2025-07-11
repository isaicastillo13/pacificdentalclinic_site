import React from "react";
import Hero from "../components/about/Hero.jsx"
import History from "../components/about/History.jsx"
import OurTeam from "../components/home/OurTeam.jsx";
import Technology from "../components/about/Technology.jsx";
import VisionMision from "../components/about/VisionMision.jsx";
import OurClinic from "../components/about/OurClinic.jsx";
import LogoCarousel from "../components/ui/LogoCarousel.jsx";
import ContactSection from "../components/ui/Contact/ContactSection.jsx";
import Footer from "../components/ui/Footer.jsx";
 // Importing the LogoCarousel component
function Nosotros() {
  return (
    <>
      <Hero />
      <History />
      <LogoCarousel />
      <OurTeam />
      <Technology />
      <VisionMision />
      <OurClinic />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Nosotros;
