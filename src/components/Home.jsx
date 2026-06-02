import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Products from './Products/Products';
import Industries from './Industries/Industries';
import Services from './Services/Services';
import Careers from './Careers/Careers';
import Contact from './Contact/Contact';


const Home = () => {
  return (
    <>
      <Hero bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80" />
      <About />
      <Products />
      <Industries />
      <Services />
      <Careers />
      <Contact />
    </>
  );
};

export default Home;
