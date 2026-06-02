import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product15.css';
import prd15 from "../../../assets/images/prd15.jpg";

const Product15 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product15-detail-page">
      <section className="product15-hero" style={{ backgroundImage: `url(${prd15})` }}>
        <div className="product15-hero-content">
          <h1>Open Banking API Platforms</h1>
          <p>Secure interoperability middleware allowing seamless financial data sharing between traditional banks and third-party developers.</p>
          <div className="product15-hero-btns">
            <button className="product15-btn product15-btn-primary">Request Demo</button>
            <button className="product15-btn product15-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product15-container">
        <section className="product15-section-padding">
          <h2 className="product15-section-title">Background & Problem Statement</h2>
          <div className="product15-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Banks historically kept customer data in 'walled gardens', preventing innovation and user choice.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Third-party apps had to rely on insecure 'screen scraping' to access financial data, leading to security risks.`}</p>
            </div>
            <div className="product15-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product15-module-list">
                 <li className="product15-module-item">Inefficient legacy infrastructure</li>
                 <li className="product15-module-item">Lack of real-time data transparency</li>
                 <li className="product15-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product15-section-padding product15-bg-accent">
          <h2 className="product15-section-title">Proposed Solution</h2>
          <p className="product15-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A secure API gateway that standardizes bank data access for authorized third parties with user consent.`}</p>
        </section>

        <section className="product15-section-padding">
          <h2 className="product15-section-title">System Architecture</h2>
          <div className="product15-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`OAuth2-based consent management system with a high-security API translation layer.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product15-section-padding">
          <h2 className="product15-section-title">Technologies Used</h2>
          <div className="product15-tech-stack-grid">
            {["Node.js","Go","Vault","MongoDB","Auth0"].map((t, i) => (
              <div key={i} className="product15-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product15-section-padding product15-bg-accent">
          <h2 className="product15-section-title">Applications</h2>
          <div className="product15-feature-grid">
            {["Account Aggregation","Payment Initiation","Lending Data Verification"].map((app, i) => (
              <div key={i} className="product15-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product15-section-padding">
          <h2 className="product15-section-title">Real-World Impact</h2>
          <div className="product15-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A major financial aggregator uses our API platform to connect to 2,000+ banks across Europe securely."`}</p>
          </div>
        </section>

        <section className="product15-section-padding">
          <h2 className="product15-section-title">Key Benefits</h2>
          <div className="product15-feature-grid">
            {["Consumer Empowerment","Enhanced Security","Faster Innovation"].map((b, i) => (
              <div key={i} className="product15-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product15-section-padding bg-light">
          <h2 className="product15-section-title">Challenges & Limitations</h2>
          <div className="product15-grid-2">
            <ul className="product15-module-list">
              {["Varying API standards across banks","Managing ongoing user consent"].map((c, i) => (
                <li key={i} className="product15-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product15-section-padding">
          <h2 className="product15-section-title">Future Scope</h2>
          <div className="product15-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Open Finance: Expanding beyond bank accounts to include insurance, pensions, and investments in the API ecosystem.`}</p>
          </div>
        </section>

        <section className="product15-section-padding product15-bg-darker">
          <h2 className="product15-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product15-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of open banking api platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product15-section-padding">
          <div className="product15-glass-card product15-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in open banking api platforms technology.</p>
            <button className="product15-btn product15-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product15;