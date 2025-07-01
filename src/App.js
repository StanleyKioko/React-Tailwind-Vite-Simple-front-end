import React from 'react';
import Navbar from './components/Navbar';
import {AioutolineClose, AiOutlineMwnu} from 'react-icons/ai'
import Hero from './components/Hero';
import { ReactTyped, Typed } from "react-typed";
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;
