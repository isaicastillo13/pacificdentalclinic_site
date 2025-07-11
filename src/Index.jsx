import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Servicios from "./pages/Servicios.jsx";
import PrivacyPolicy from './components/legal/politica-de-privacidad';
import TermsAndConditions from './components/legal/terminos-y-condiciones';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/servicios" element={<Servicios />}></Route>
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />}></Route>
        <Route path="/terminos-y-condiciones" element={<TermsAndConditions />}></Route>
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default Index;
