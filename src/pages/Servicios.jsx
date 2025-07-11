import React from 'react';
import Hero from '../components/services/Hero.jsx';
import Services from '../components/services/OurServices.jsx';
import TestimonialsFetcher from '../components/ui/TestimonialsFetcher.jsx';
import Procedures from '../components/services/Procedures.jsx';
import BannerContact from '../components/services/BannerContact.jsx';
import ContactSection from "../components/ui/Contact/ContactSection.jsx";
import Footer from '../components/ui/Footer.jsx';

function Servicios() {
  return (
    <>
        <Hero />
        <Services />
        <TestimonialsFetcher />
        <Procedures />
        <BannerContact />
        <Footer />
        {/* <Procedures /> can be used to display a list of procedures */}
    </>
  );
}
export default Servicios;