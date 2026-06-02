import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product14.css';
import prd14 from "../../../assets/images/prd14.png";

const Product14 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product14-detail-page">
      <section className="product14-hero" style={{ backgroundImage: `url(${prd14})` }}>
        <div className="product14-hero-content">
          <h1>Insurtech Solutions for Insurance Industry</h1>
          <p>Digital insurance platforms facilitating automated underwriting, instant claim processing, and intelligent policy pricing.</p>
          <div className="product14-hero-btns">
            <button className="product14-btn product14-btn-primary">Request Demo</button>
            <button className="product14-btn product14-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product14-container">
        <section className="product14-section-padding">
          <h2 className="product14-section-title">Background & Problem Statement</h2>
          <div className="product14-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`The insurance industry is notoriously slow, paper-heavy, and often frustrating for customers during claims.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Claims take weeks to process, and pricing is often 'flat' instead of being based on actual user behavior.`}</p>
            </div>
            <div className="product14-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product14-module-list">
                 <li className="product14-module-item">Inefficient legacy infrastructure</li>
                 <li className="product14-module-item">Lack of real-time data transparency</li>
                 <li className="product14-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product14-section-padding product14-bg-accent">
          <h2 className="product14-section-title">Proposed Solution</h2>
          <p className="product14-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A digital-first platform that uses telematics and AI to price risk fairly and settle claims in minutes.`}</p>
        </section>

        <section className="product14-section-padding">
          <h2 className="product14-section-title">System Architecture</h2>
          <div className="product14-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Telematics ingestion hub with an AI-driven underwriting and claims automation engine.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product14-section-padding">
          <h2 className="product14-section-title">Technologies Used</h2>
          <div className="product14-tech-stack-grid">
            {["Java","Python","MQTT (for IoT)","PostgreSQL","GCP"].map((t, i) => (
              <div key={i} className="product14-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product14-section-padding product14-bg-accent">
          <h2 className="product14-section-title">Applications</h2>
          <div className="product14-feature-grid">
            {["Pay-as-you-drive Auto Insurance","Instant Travel Insurance","Parametric Weather Insurance"].map((app, i) => (
              <div key={i} className="product14-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product14-section-padding">
          <h2 className="product14-section-title">Real-World Impact</h2>
          <div className="product14-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A parametric crop insurance provider uses our tech to automatically pay out farmers based on satellite weather data."`}</p>
          </div>
        </section>

        <section className="product14-section-padding">
          <h2 className="product14-section-title">Key Benefits</h2>
          <div className="product14-feature-grid">
            {["Instant Claims Payout","Personalized Pricing","Reduced Fraud"].map((b, i) => (
              <div key={i} className="product14-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product14-section-padding bg-light">
          <h2 className="product14-section-title">Challenges & Limitations</h2>
          <div className="product14-grid-2">
            <ul className="product14-module-list">
              {["Data privacy for tracking (telematics)","Complex actuarial regulations"].map((c, i) => (
                <li key={i} className="product14-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product14-section-padding">
          <h2 className="product14-section-title">Future Scope</h2>
          <div className="product14-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Embedded Insurance: Insurance that is automatically included at the point of sale for every product purchased.`}</p>
          </div>
        </section>

        <section className="product14-section-padding product14-bg-darker">
          <h2 className="product14-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product14-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of insurtech solutions for insurance industry will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product14-section-padding">
          <div className="product14-glass-card product14-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in insurtech solutions for insurance industry technology.</p>
            <button className="product14-btn product14-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product14;