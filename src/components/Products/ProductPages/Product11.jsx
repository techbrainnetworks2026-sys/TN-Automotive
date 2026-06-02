import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product11.css';
import prd11 from "../../../assets/images/prd11.jpg";

const Product11 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product11-detail-page">
      <section className="product11-hero" style={{ backgroundImage: `url(${prd11})` }}>
        <div className="product11-hero-content">
          <h1>Credit Scoring and Risk Assessment Platforms</h1>
          <p>Deep learning models analyzing diverse alternative data streams to accurately predict lending risk and output credit scores.</p>
          <div className="product11-hero-btns">
            <button className="product11-btn product11-btn-primary">Request Demo</button>
            <button className="product11-btn product11-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product11-container">
        <section className="product11-section-padding">
          <h2 className="product11-section-title">Background & Problem Statement</h2>
          <div className="product11-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Traditional credit scores (like FICO) are based on limited datasets, leaving millions of 'credit invisible' people behind.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Lenders miss out on good borrowers because they can't accurately assess risk for people without long credit histories.`}</p>
            </div>
            <div className="product11-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product11-module-list">
                 <li className="product11-module-item">Inefficient legacy infrastructure</li>
                 <li className="product11-module-item">Lack of real-time data transparency</li>
                 <li className="product11-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product11-section-padding product11-bg-accent">
          <h2 className="product11-section-title">Proposed Solution</h2>
          <p className="product11-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`An AI-driven scoring engine that incorporates utility payments, rental history, and bank cash flow analysis.`}</p>
        </section>

        <section className="product11-section-padding">
          <h2 className="product11-section-title">System Architecture</h2>
          <div className="product11-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Data ingestion layer that standardizes alternative data for a deep neural network scoring model.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product11-section-padding">
          <h2 className="product11-section-title">Technologies Used</h2>
          <div className="product11-tech-stack-grid">
            {["Python (Scikit-learn)","R","SQL Server","Tableau","AWS"].map((t, i) => (
              <div key={i} className="product11-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product11-section-padding product11-bg-accent">
          <h2 className="product11-section-title">Applications</h2>
          <div className="product11-feature-grid">
            {["Unsecured Personal Loans","SME Lending","Micro-credit for Emerging Markets"].map((app, i) => (
              <div key={i} className="product11-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product11-section-padding">
          <h2 className="product11-section-title">Real-World Impact</h2>
          <div className="product11-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A fintech lender used our alternative scoring to increase loan approvals by 30% without increasing default rates."`}</p>
          </div>
        </section>

        <section className="product11-section-padding">
          <h2 className="product11-section-title">Key Benefits</h2>
          <div className="product11-feature-grid">
            {["Fairer Credit Access","Real-time Scoring","Lower Default Rates"].map((b, i) => (
              <div key={i} className="product11-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product11-section-padding bg-light">
          <h2 className="product11-section-title">Challenges & Limitations</h2>
          <div className="product11-grid-2">
            <ul className="product11-module-list">
              {["Explainability (Black-box models)","Fairness and bias in training data"].map((c, i) => (
                <li key={i} className="product11-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product11-section-padding">
          <h2 className="product11-section-title">Future Scope</h2>
          <div className="product11-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Continuous 'Live' credit scoring that updates in real-time as users make every purchase and payment.`}</p>
          </div>
        </section>

        <section className="product11-section-padding product11-bg-darker">
          <h2 className="product11-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product11-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of credit scoring and risk assessment platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product11-section-padding">
          <div className="product11-glass-card product11-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in credit scoring and risk assessment platforms technology.</p>
            <button className="product11-btn product11-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product11;