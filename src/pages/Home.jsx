import React from 'react';
import Hero from "../components/home/Hero.jsx";
import OurTeam from "../components/home/OurTeam.jsx";
import Services from "../components/home/Services.jsx";
import Banner from "../components/home/Banner.jsx";
import OurNumbers from "../components/home/OurNumbers.jsx";
import Testimonies from "../components/ui/Testimonies.jsx";
import Invisalign from "../components/home/Invisalign.jsx";

function Home() {
    return (
        <div>
            <Hero />
            <OurTeam />
            <Services />
            <Banner />
            <OurNumbers />
            <Testimonies />
            <Invisalign />
        </div>
    );
}
export default Home;