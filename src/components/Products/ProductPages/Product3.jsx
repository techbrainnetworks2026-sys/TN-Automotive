import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product3.css';
import prd3 from "../../../assets/images/prd3.avif";

const Product3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product3-detail-page">
      <section className="product3-hero" style={{ backgroundImage: `url(${prd3})` }}>
        <div className="product3-hero-content">
          <h1>Financial Fraud Detection Solutions</h1>
          <p>Intelligent anomaly detection systems powered by machine learning to prevent unauthorized access and financial crimes in real-time.</p>
          <div className="product3-hero-btns">
            <button className="product3-btn product3-btn-primary">Request Demo</button>
            <button className="product3-btn product3-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product3-container">
        <section className="product3-section-padding">
          <h2 className="product3-section-title">Background & Problem Statement</h2>
          <div className="product3-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`As digital payments explode, fraud typologies are becoming increasingly sophisticated, bypassing traditional rule-based systems.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Identity theft and account takeover attacks are hard to detect when attackers mimic legitimate user behavior patterns.`}</p>
            </div>
            <div className="product3-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product3-module-list">
                 <li className="product3-module-item">Inefficient legacy infrastructure</li>
                 <li className="product3-module-item">Lack of real-time data transparency</li>
                 <li className="product3-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product3-section-padding product3-bg-accent">
          <h2 className="product3-section-title">Proposed Solution</h2>
          <p className="product3-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A behavior-based AI that creates a unique fingerprint for every user and detects deviations from normal activity in milliseconds.`}</p>
        </section>

        <section className="product3-section-padding">
          <h2 className="product3-section-title">System Architecture</h2>
          <div className="product3-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Real-time streaming pipeline using graph databases to map entity relationships and detect complex laundering cycles.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product3-section-padding">
          <h2 className="product3-section-title">Technologies Used</h2>
          <div className="product3-tech-stack-grid">
            {["Python","TensorFlow","Neo4j","Apache Flink","Spark"].map((t, i) => (
              <div key={i} className="product3-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product3-section-padding product3-bg-accent">
          <h2 className="product3-section-title">Applications</h2>
          <div className="product3-feature-grid">
            {["Credit Card Fraud","Internal Employee Theft","Money Laundering Detection"].map((app, i) => (
              <div key={i} className="product3-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product3-section-padding">
          <h2 className="product3-section-title">Real-World Impact</h2>
          <div className="product3-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A top-tier retail bank reduced false positives by 40% while increasing fraud detection rates by 25% using our behavioral engine."`}</p>
          </div>
        </section>

        <section className="product3-section-padding">
          <h2 className="product3-section-title">Key Benefits</h2>
          <div className="product3-feature-grid">
            {["Reduced False Positives","Adaptive Learning","Real-time Prevention"].map((b, i) => (
              <div key={i} className="product3-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product3-section-padding bg-light">
          <h2 className="product3-section-title">Challenges & Limitations</h2>
          <div className="product3-grid-2">
            <ul className="product3-module-list">
              {["Data privacy (GDPR/CCPA) limitations","Constant evolution of criminal tactics"].map((c, i) => (
                <li key={i} className="product3-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product3-section-padding">
          <h2 className="product3-section-title">Future Scope</h2>
          <div className="product3-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Federated Learning models that allow banks to share fraud patterns without sharing sensitive customer data.`}</p>
          </div>
        </section>

        <section className="product3-section-padding product3-bg-darker">
          <h2 className="product3-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product3-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of financial fraud detection solutions will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product3-section-padding">
          <div className="product3-glass-card product3-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in financial fraud detection solutions technology.</p>
            <button className="product3-btn product3-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product3;