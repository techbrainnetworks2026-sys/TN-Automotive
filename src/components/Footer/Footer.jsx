import React from 'react';
import { Landmark } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer bg-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="footer-grid grid md:grid-cols-4 gap-8 mb-12">
          
          <div className="footer-about">
            <div className="logo mb-4 flex items-center gap-2">
              <Landmark size={28} className="text-accent" />
              <span className="logo-text font-bold text-xl">Techbrain Networks</span>
            </div>
            <p className="text-sm text-gray-300 mb-6 font-light">
              Pioneering the future of technology with elegant software and hardware solutions across 24 industries globally.
            </p>
            <div className="social-icons flex gap-4">
              <a href="#" className="text-white hover:text-accent transition-colors font-medium">Twitter</a>
              <a href="#" className="text-white hover:text-accent transition-colors font-medium">LinkedIn</a>
              <a href="#" className="text-white hover:text-accent transition-colors font-medium">Facebook</a>
              <a href="#" className="text-white hover:text-accent transition-colors font-medium">Instagram</a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="home" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">Home</Link></li>
              <li><Link to="about" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">About Company</Link></li>
              <li><Link to="products" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">Products</Link></li>
              <li><Link to="industries" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">Industries</Link></li>
              <li><Link to="services" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">Services</Link></li>
              <li><Link to="careers" smooth={true} offset={-70} className="hover:text-accent cursor-pointer text-sm text-gray-300">Careers</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
            <p className="text-sm text-gray-300 mb-2">Thanjavur, Tamilnadu, India</p>
            <p className="text-sm text-gray-300 mb-2">London, United Kingdom</p>
            <p className="text-sm text-gray-300 mb-2">+91 8754906714</p>
            <p className="text-sm text-gray-300">contact@techbrainnetworks.com</p>
          </div>

          <div className="footer-newsletter">
            <h4 className="text-lg font-semibold mb-4 text-accent">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4 font-light">Subscribe to get the latest updates and news.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="p-2 rounded-l text-primary text-sm w-full outline-none" />
              <button className="bg-accent text-primary font-bold px-4 rounded-r text-sm">Subscribe</button>
            </div>
          </div>
          
        </div>

        <div className="footer-bottom   mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Techbrain Networks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
