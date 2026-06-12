import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener to improve scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Products', to: 'products' },
    { name: 'Industries', to: 'industries' },
    { name: 'Services', to: 'services' },
    { name: 'Careers', to: 'careers' },
    { name: 'Contact us', to: 'contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Landmark size={28} className="logo-icon" />
          <span className="logo-text">Techbrain Networks<br /><p style={{ fontSize: '14px', letterSpacing: '0.9rem', marginLeft: '0.7rem', color: 'var(--accent)' }} className="mt-1">Automotive</p></span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            isHomePage ? (
              <ScrollLink
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
              </ScrollLink>
            ) : (
              <RouterLink
                key={link.name}
                to={`/#${link.to}`}
                className="nav-link"
                onClick={() => {
                  if (link.to === 'home') navigate('/');
                }}
              >
                {link.name}
              </RouterLink>
            )
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
          isHomePage ? (
            <ScrollLink
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
            </ScrollLink>
          ) : (
            <RouterLink
              key={link.name}
              to={`/#${link.to}`}
              className="mobile-nav-link"
              onClick={() => {
                setIsOpen(false);
                if (link.to === 'home') navigate('/');
              }}
            >
              {link.name}
            </RouterLink>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

