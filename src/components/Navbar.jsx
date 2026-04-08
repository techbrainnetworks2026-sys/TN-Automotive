import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About Company', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Industries', to: 'industries' },
    { name: 'Services', to: 'services' },
    { name: 'Careers', to: 'careers' },
    { name: 'Contact us', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <Landmark size={28} className="logo-icon" />
          <span className="logo-text">Techbrain Networks<br></br><p style={{fontSize: '14px', letterSpacing: '0.9rem',marginLeft:'0.7rem',color:'var(--accent)'}} className="mt-1">Automotive</p></span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mobile-nav-link"
            activeClass="active"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
