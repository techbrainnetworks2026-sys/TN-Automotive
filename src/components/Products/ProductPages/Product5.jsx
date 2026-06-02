import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product5.css';
import prd5 from "../../../assets/images/prd5.jpg";

const Product5 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product5-detail-page">
      <section className="product5-hero" style={{ backgroundImage: `url(${prd5})` }}>
        <div className="product5-hero-content">
          <h1>RegTech Compliance Solutions</h1>
          <p>Automated regulatory technology platforms ensuring complete adherence to shifting global financial compliance standards.</p>
          <div className="product5-hero-btns">
            <button className="product5-btn product5-btn-primary">Request Demo</button>
            <button className="product5-btn product5-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product5-container">
        <section className="product5-section-padding">
          <h2 className="product5-section-title">Background & Problem Statement</h2>
          <div className="product5-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Compliance departments are overwhelmed by the volume and frequency of new regulatory mandates (Basel III, Dodd-Frank, etc.).`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Manual compliance processes are slow, expensive, and prone to oversight that results in billions of dollars in fines.`}</p>
            </div>
            <div className="product5-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product5-module-list">
                 <li className="product5-module-item">Inefficient legacy infrastructure</li>
                 <li className="product5-module-item">Lack of real-time data transparency</li>
                 <li className="product5-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product5-section-padding product5-bg-accent">
          <h2 className="product5-section-title">Proposed Solution</h2>
          <p className="product5-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A 'Compliance-as-Code' platform that automates regulatory reporting and monitors adherence in real-time.`}</p>
        </section>

        <section className="product5-section-padding">
          <h2 className="product5-section-title">System Architecture</h2>
          <div className="product5-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Cloud-native policy engine with natural language processing (NLP) to parse and implement new regulatory text.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product5-section-padding">
          <h2 className="product5-section-title">Technologies Used</h2>
          <div className="product5-tech-stack-grid">
            {["Java","Python (NLP)","Elasticsearch","Docker","Kubernetes"].map((t, i) => (
              <div key={i} className="product5-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product5-section-padding product5-bg-accent">
          <h2 className="product5-section-title">Applications</h2>
          <div className="product5-feature-grid">
            {["Regulatory Reporting","KYC/AML Lifecycle","Internal Audit Automation"].map((app, i) => (
              <div key={i} className="product5-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product5-section-padding">
          <h2 className="product5-section-title">Real-World Impact</h2>
          <div className="product5-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Fintech firms use our platform to reduce the time spent on monthly regulatory filings from 2 weeks to 2 hours."`}</p>
          </div>
        </section>

        <section className="product5-section-padding">
          <h2 className="product5-section-title">Key Benefits</h2>
          <div className="product5-feature-grid">
            {["Penalty Avoidance","Operational Efficiency","Audit-Ready Logs"].map((b, i) => (
              <div key={i} className="product5-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product5-section-padding bg-light">
          <h2 className="product5-section-title">Challenges & Limitations</h2>
          <div className="product5-grid-2">
            <ul className="product5-module-list">
              {["Divergent global standards","Difficulty mapping manual laws to binary code"].map((c, i) => (
                <li key={i} className="product5-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product5-section-padding">
          <h2 className="product5-section-title">Future Scope</h2>
          <div className="product5-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Real-time 'Always-On' auditing where regulators can directly verify compliance through a secure API.`}</p>
          </div>
        </section>

        <section className="product5-section-padding product5-bg-darker">
          <h2 className="product5-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product5-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of regtech compliance solutions will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product5-section-padding">
          <div className="product5-glass-card product5-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in regtech compliance solutions technology.</p>
            <button className="product5-btn product5-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product5;