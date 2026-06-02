import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Your all-in-one stop for digital products. We offer both digital and physical products that meet our customer's requirements. If you're looking for customized solutions to power up your business, we'll be happy to help out!
        </p>

        <div className="contact-wrapper">
          <div className="contact-info glass-card p-8">
            <h3 className="mb-6 text-xl">Our Offices</h3>
            
            <div className="address-block mb-6">
              <h4 className="flex items-center gap-2 mb-2 text-primary font-bold">
                <MapPin size={20} /> India
              </h4>
              <p className="text-secondary text-sm ml-7">
                Thanjavur<br/>
                6/12 Papa vaikal Street, Ayyampettai Post<br/>
                Papanasam Taluk, Thanjavur 614201<br/>
                Tamilnadu, India.
              </p>
            </div>

            <div className="address-block mb-8">
              <h4 className="flex items-center gap-2 mb-2 text-primary font-bold">
                <MapPin size={20} /> United Kingdom
              </h4>
              <p className="text-secondary text-sm ml-7">
                London<br/>
                71-75 Shelton Street, Covent Garden<br/>
                London, WC2H 9JQ<br/>
                United Kingdom.
              </p>
            </div>

            <div className="contact-links mt-8">
              <a href="tel:+918754906714" className="flex items-center gap-3 mb-4 text-primary hover:text-accent font-medium">
                <Phone size={20} /> +91 8754906714
              </a>
              <a href="mailto:contact@techbrainnetworks.com" className="flex items-center gap-3 text-primary hover:text-accent font-medium">
                <Mail size={20} /> contact@techbrainnetworks.com
              </a>
            </div>
          </div>

          <div className="contact-form glass-card p-8">
            <h3 className="mb-6 text-xl">Send us a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group mb-4">
                <label className="block text-sm mb-2 font-medium">Full Name</label>
                <input type="text" className="form-input w-full p-3 rounded bg-white border border-gray-200" placeholder="John Doe" />
              </div>
              <div className="form-group mb-4">
                <label className="block text-sm mb-2 font-medium">Email Address</label>
                <input type="email" className="form-input w-full p-3 rounded bg-white border border-gray-200" placeholder="john@example.com" />
              </div>
              <div className="form-group mb-6">
                <label className="block text-sm mb-2 font-medium">Message</label>
                <textarea className="form-input w-full p-3 rounded bg-white border border-gray-200" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
