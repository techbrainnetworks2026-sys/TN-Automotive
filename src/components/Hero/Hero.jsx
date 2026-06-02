import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-scroll';
import './Hero.css';
import heroBg from '../../assets/background_image.png';

const Hero = () => (
  <section id="home" className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
    <div className="hero-overlay"></div>
    <div className="container hero-content">
      <h1 className="hero-heading animate-on-scroll">
        Next Generation Financial <br /> Technology Solutions
      </h1>
      <p className="hero-subheading animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        Secure, Scalable, Intelligent Digital Finance Platforms
      </p>
      <div className="hero-cta animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <Link to="products" smooth={true} offset={-70} duration={500} className="btn btn-primary hero-btn">
          Explore Products <ArrowRight size={20} />
        </Link>
        <Link to="contact" smooth={true} offset={-70} duration={500} className="btn btn-outline hero-btn">
          Contact Us <PhoneCall size={20} />
        </Link>
      </div>
    </div>
  </section>
);

export default Hero;
