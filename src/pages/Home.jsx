import React from "react";
import Hero from "../components/home/Hero.jsx";
import OurTeam from "../components/home/OurTeam.jsx";
import Services from "../components/home/Services.jsx";
import Banner from "../components/home/Banner.jsx";
import OurNumbers from "../components/home/OurNumbers.jsx";
import TestimonialsFetcher from "../components/ui/TestimonialsFetcher.jsx";
import Invisalign from "../components/home/Invisalign.jsx";
import ContactSection from "../components/ui/Contact/ContactSection.jsx";
import LogoCarousel from "../components/ui/LogoCarousel.jsx"; // Importing the LogoCarousel component
import Footer from "../components/ui/Footer.jsx"; // Importing the LogoCarousel component



function Home() {
  return (
    <div>
      <Hero />
      <LogoCarousel />
      <OurTeam />
      <Services />
      <Banner />
      <OurNumbers />
      <TestimonialsFetcher />
      <Invisalign />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default Home;
