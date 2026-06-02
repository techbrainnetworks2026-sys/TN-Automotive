import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product7.css';
import prd7 from "../../../assets/images/prd7.jpg";

const Product7 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product7-detail-page">
      <section className="product7-hero" style={{ backgroundImage: `url(${prd7})` }}>
        <div className="product7-hero-content">
          <h1>Robo-Advisory and Wealth Management Platforms</h1>
          <p>Automated AI wealth advisors providing personalized portfolio allocation and continuous investment optimization.</p>
          <div className="product7-hero-btns">
            <button className="product7-btn product7-btn-primary">Request Demo</button>
            <button className="product7-btn product7-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product7-container">
        <section className="product7-section-padding">
          <h2 className="product7-section-title">Background & Problem Statement</h2>
          <div className="product7-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Quality investment advice was historically locked behind high management fees, excluding the retail investor.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Retail investors often buy high and sell low due to lack of a disciplined, data-driven strategy.`}</p>
            </div>
            <div className="product7-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product7-module-list">
                 <li className="product7-module-item">Inefficient legacy infrastructure</li>
                 <li className="product7-module-item">Lack of real-time data transparency</li>
                 <li className="product7-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product7-section-padding product7-bg-accent">
          <h2 className="product7-section-title">Proposed Solution</h2>
          <p className="product7-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`An automated investment engine that builds globally diversified portfolios based on Modern Portfolio Theory.`}</p>
        </section>

        <section className="product7-section-padding">
          <h2 className="product7-section-title">System Architecture</h2>
          <div className="product7-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Rebalancing engine with integrated brokerage API and real-time risk-profile monitoring.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product7-section-padding">
          <h2 className="product7-section-title">Technologies Used</h2>
          <div className="product7-tech-stack-grid">
            {["Python (Scipy)","Node.js","React","PostgreSQL","Alpaca API"].map((t, i) => (
              <div key={i} className="product7-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product7-section-padding product7-bg-accent">
          <h2 className="product7-section-title">Applications</h2>
          <div className="product7-feature-grid">
            {["Retirement Planning","Goal-Based Investing","Tax-Optimized Portfolios"].map((app, i) => (
              <div key={i} className="product7-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product7-section-padding">
          <h2 className="product7-section-title">Real-World Impact</h2>
          <div className="product7-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Wealth managers use our white-label solution to manage $10B+ in assets with 90% fewer manual staff."`}</p>
          </div>
        </section>

        <section className="product7-section-padding">
          <h2 className="product7-section-title">Key Benefits</h2>
          <div className="product7-feature-grid">
            {["Low Management Fees","Tax-Loss Harvesting","Fractional Share Access"].map((b, i) => (
              <div key={i} className="product7-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product7-section-padding bg-light">
          <h2 className="product7-section-title">Challenges & Limitations</h2>
          <div className="product7-grid-2">
            <ul className="product7-module-list">
              {["Market volatility during unexpected macro events","Limited human interaction for complex financial situations"].map((c, i) => (
                <li key={i} className="product7-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product7-section-padding">
          <h2 className="product7-section-title">Future Scope</h2>
          <div className="product7-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Hyper-personalization using AI to include alternative assets like real estate and private equity in robo-portfolios.`}</p>
          </div>
        </section>

        <section className="product7-section-padding product7-bg-darker">
          <h2 className="product7-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product7-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of robo-advisory and wealth management platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product7-section-padding">
          <div className="product7-glass-card product7-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in robo-advisory and wealth management platforms technology.</p>
            <button className="product7-btn product7-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product7;