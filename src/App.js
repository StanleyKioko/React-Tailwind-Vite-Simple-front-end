import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import About from './pages/About';
import Offerings from './pages/Offerings';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

const Home = () => {
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
          <Route path="/" element={<Home />} />
          <Route path="/Offerings" element={<Offerings />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;