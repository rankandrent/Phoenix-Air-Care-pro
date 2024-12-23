import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BestDuctCleaning from './pages/BestDuctCleaning';
import DuctAndCarpetPage from './pages/DuctAndCarpet';
import ResidentialService from './pages/services/ResidentialService';
// ... other imports remain the same

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/best-air-duct-cleaning-near-me" element={<BestDuctCleaning />} />
          <Route path="/air-duct-and-carpet-cleaning" element={<DuctAndCarpetPage />} />
          <Route path="/Residential-Duct-Cleaning" element={<ResidentialService />} />
          {/* ... other routes remain the same */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;