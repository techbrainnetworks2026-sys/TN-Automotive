import React from 'react';
import { Settings, Cpu, Compass, Activity, Database, Cloud, Shield, Globe, ShoppingBag, Truck, Plane, Map, Heart, Zap, Play, Building, Briefcase, Camera, Film, Mic, Music, Speaker, Tv, Video } from 'lucide-react';
import './Industries.css';

const industries = [
  "Aerospace", "Agriculture", "Automotive", "Chemical", "Defence Technology", 
  "Education", "Energy & Utilities", "Entertainment and Media", "Finance", 
  "Food Technology", "Healthcare", "Infrastructure", "Logistics", 
  "Manufacturing", "Ocean Technology", "Oil and Gas", "Pharmaceutical", 
  "Retail", "Sports Technology", "Telecommunication", "Textile", 
  "Transportation", "Travel"
];

const Industries = () => {
  return (
    <section id="industries" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        <p className="section-subtitle">
          Transforming 24 major industries with advanced technology solutions, ready for global impact by 2027.
        </p>

        <div className="industries-grid">
          {industries.map((ind, i) => (
            <div className="industry-badge glass-card" key={i}>
              <div className="dot"></div>
              <span>{ind}</span>
            </div>
          ))}
          {/* Add 24th placeholder to match prompt description of 24 industries */}
          <div className="industry-badge glass-card">
             <div className="dot"></div>
             <span>Information Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
