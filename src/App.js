import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './pages/AboutPage';
import Company from './pages/CompanyPage';
import Resources from './pages/ResourcesPage';
import Contact from './pages/ContactPage';

// Create a HomePage component to hold the main page content
const HomePage = () => {
  return (
    <>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </>
  );
};

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CompanyPage" element={<Company />} />
          <Route path="/ResourcesPage" element={<Resources />} />
          <Route path="/AboutPage" element={<About />} />
          <Route path="/ContactPage" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;