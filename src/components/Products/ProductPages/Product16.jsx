import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product16.css';
import prd16 from "../../../assets/images/prd16.jpg";

const Product16 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product16-detail-page">
      <section className="product16-hero" style={{ backgroundImage: `url(${prd16})` }}>
        <div className="product16-hero-content">
          <h1>Invoice Financing and Factoring Software</h1>
          <p>B2B liquidity platforms allowing businesses to convert outstanding invoices into immediate working capital seamlessly.</p>
          <div className="product16-hero-btns">
            <button className="product16-btn product16-btn-primary">Request Demo</button>
            <button className="product16-btn product16-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product16-container">
        <section className="product16-section-padding">
          <h2 className="product16-section-title">Background & Problem Statement</h2>
          <div className="product16-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Working capital is the lifeblood of small business, yet it's often trapped in unpaid invoices.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`B2B businesses often have 60-90 day payment terms, creating a 'cash gap' that kills growth.`}</p>
            </div>
            <div className="product16-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product16-module-list">
                 <li className="product16-module-item">Inefficient legacy infrastructure</li>
                 <li className="product16-module-item">Lack of real-time data transparency</li>
                 <li className="product16-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product16-section-padding product16-bg-accent">
          <h2 className="product16-section-title">Proposed Solution</h2>
          <p className="product16-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`An automated platform that buys invoices at a discount, providing immediate liquidity to the seller.`}</p>
        </section>

        <section className="product16-section-padding">
          <h2 className="product16-section-title">System Architecture</h2>
          <div className="product16-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`ERP integration layer with an automated debtor risk assessment and funding rail.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product16-section-padding">
          <h2 className="product16-section-title">Technologies Used</h2>
          <div className="product16-tech-stack-grid">
            {["Python","Django","PostgreSQL","Stripe API","AWS"].map((t, i) => (
              <div key={i} className="product16-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product16-section-padding product16-bg-accent">
          <h2 className="product16-section-title">Applications</h2>
          <div className="product16-feature-grid">
            {["SME Working Capital","Freight Factoring","Recruitment Agency Finance"].map((app, i) => (
              <div key={i} className="product16-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product16-section-padding">
          <h2 className="product16-section-title">Real-World Impact</h2>
          <div className="product16-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A manufacturing firm uses our platform to fund its raw material purchases by financing its client invoices instantly."`}</p>
          </div>
        </section>

        <section className="product16-section-padding">
          <h2 className="product16-section-title">Key Benefits</h2>
          <div className="product16-feature-grid">
            {["Zero Debt on Balance Sheet","Instant Liquidity","Outsourced Collections"].map((b, i) => (
              <div key={i} className="product16-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product16-section-padding bg-light">
          <h2 className="product16-section-title">Challenges & Limitations</h2>
          <div className="product16-grid-2">
            <ul className="product16-module-list">
              {["Fraudulent invoice detection","High cost of capital for some industries"].map((c, i) => (
                <li key={i} className="product16-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product16-section-padding">
          <h2 className="product16-section-title">Future Scope</h2>
          <div className="product16-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Integration with B2B marketplaces to offer 'Instant Financing' at the moment the invoice is generated.`}</p>
          </div>
        </section>

        <section className="product16-section-padding product16-bg-darker">
          <h2 className="product16-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product16-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of invoice financing and factoring software will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product16-section-padding">
          <div className="product16-glass-card product16-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in invoice financing and factoring software technology.</p>
            <button className="product16-btn product16-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product16;