import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Industries from './components/Industries';
import Services from './components/Services';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" />
      <About />
      <Products />
      <Industries />
      <Services />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
