import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product20.css';
import prd20 from "../../../assets/images/prd20.jpg";

const Product20 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product20-detail-page">
      <section className="product20-hero" style={{ backgroundImage: `url(${prd20})` }}>
        <div className="product20-hero-content">
          <h1>Regulatory Reporting Automation Software</h1>
          <p>Audit-ready reporting systems that automatically compile and submit accurate financial operational data to regulatory bodies.</p>
          <div className="product20-hero-btns">
            <button className="product20-btn product20-btn-primary">Request Demo</button>
            <button className="product20-btn product20-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product20-container">
        <section className="product20-section-padding">
          <h2 className="product20-section-title">Background & Problem Statement</h2>
          <div className="product20-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Regulatory requirements are increasing in complexity, requiring more data at higher frequencies.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Preparing reports for the SEC, FCA, or ECB is a high-stakes manual process where a small error can lead to a huge fine.`}</p>
            </div>
            <div className="product20-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product20-module-list">
                 <li className="product20-module-item">Inefficient legacy infrastructure</li>
                 <li className="product20-module-item">Lack of real-time data transparency</li>
                 <li className="product20-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product20-section-padding product20-bg-accent">
          <h2 className="product20-section-title">Proposed Solution</h2>
          <p className="product20-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`An automated engine that maps internal data to regulatory schemas and validates it for accuracy before submission.`}</p>
        </section>

        <section className="product20-section-padding">
          <h2 className="product20-section-title">System Architecture</h2>
          <div className="product20-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Mapping engine with a built-in validation rules library and secure direct-submission connectors.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product20-section-padding">
          <h2 className="product20-section-title">Technologies Used</h2>
          <div className="product20-tech-stack-grid">
            {["Java","Python (for validation rules)","Oracle","Azure","XBRL"].map((t, i) => (
              <div key={i} className="product20-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product20-section-padding product20-bg-accent">
          <h2 className="product20-section-title">Applications</h2>
          <div className="product20-feature-grid">
            {["SEC Filings","Basel III Reporting","MIFID II Transaction Reporting"].map((app, i) => (
              <div key={i} className="product20-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product20-section-padding">
          <h2 className="product20-section-title">Real-World Impact</h2>
          <div className="product20-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A mid-sized investment bank avoided $500k in potential late-filing fines by automating their transaction reports with our tech."`}</p>
          </div>
        </section>

        <section className="product20-section-padding">
          <h2 className="product20-section-title">Key Benefits</h2>
          <div className="product20-feature-grid">
            {["Accuracy and Precision","Reduced Filing Time","Audit Readiness"].map((b, i) => (
              <div key={i} className="product20-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product20-section-padding bg-light">
          <h2 className="product20-section-title">Challenges & Limitations</h2>
          <div className="product20-grid-2">
            <ul className="product20-module-list">
              {["Constantly changing schemas from regulators","Mapping disparate internal data sources"].map((c, i) => (
                <li key={i} className="product20-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product20-section-padding">
          <h2 className="product20-section-title">Future Scope</h2>
          <div className="product20-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Embedded Supervision: Where the regulator has a real-time 'read-only' view of the firm's data, eliminating periodic reporting.`}</p>
          </div>
        </section>

        <section className="product20-section-padding product20-bg-darker">
          <h2 className="product20-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product20-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of regulatory reporting automation software will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product20-section-padding">
          <div className="product20-glass-card product20-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in regulatory reporting automation software technology.</p>
            <button className="product20-btn product20-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product20;