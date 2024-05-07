import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Accueil from './Components/Accueil';
import FicheArtisan from './Components/FicheArtisan';
import NotFound from './Components/NotFound';
import AlimentationPage from './Components/AlimentationPage';
import FabricationPage from './Components/FabricationPage';
import ServicesPage from './Components/ServicesPage';
import BatimentPage from './Components/BatimentPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/fiche-artisan" element={<FicheArtisan />} />
          <Route path="/alimentation" element={<AlimentationPage />} />
          <Route path="/fabrication" element={<FabricationPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/batiment" element={<BatimentPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
