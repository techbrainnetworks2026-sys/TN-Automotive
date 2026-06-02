import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product10.css';
import prd10 from "../../../assets/images/prd10.avif";

const Product10 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product10-detail-page">
      <section className="product10-hero" style={{ backgroundImage: `url(${prd10})` }}>
        <div className="product10-hero-content">
          <h1>Anti-Money Laundering (AML) Compliance Software</h1>
          <p>Sophisticated transaction monitoring protocols identifying suspicious flow patterns and mitigating AML risks.</p>
          <div className="product10-hero-btns">
            <button className="product10-btn product10-btn-primary">Request Demo</button>
            <button className="product10-btn product10-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product10-container">
        <section className="product10-section-padding">
          <h2 className="product10-section-title">Background & Problem Statement</h2>
          <div className="product10-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Financial institutions are under intense pressure to stop the flow of illicit funds from organized crime and terrorism.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Manual transaction monitoring results in massive 'false positive' rates, drowning analysts in irrelevant alerts.`}</p>
            </div>
            <div className="product10-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product10-module-list">
                 <li className="product10-module-item">Inefficient legacy infrastructure</li>
                 <li className="product10-module-item">Lack of real-time data transparency</li>
                 <li className="product10-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product10-section-padding product10-bg-accent">
          <h2 className="product10-section-title">Proposed Solution</h2>
          <p className="product10-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A machine learning engine that uses entity resolution and relationship graphs to detect 'smurfing' and other laundering patterns.`}</p>
        </section>

        <section className="product10-section-padding">
          <h2 className="product10-section-title">System Architecture</h2>
          <div className="product10-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Entity-link analysis engine using a graph database to trace the flow of funds across thousands of hops.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product10-section-padding">
          <h2 className="product10-section-title">Technologies Used</h2>
          <div className="product10-tech-stack-grid">
            {["Python","Neo4j","Apache Spark","Elasticsearch","Azure ML"].map((t, i) => (
              <div key={i} className="product10-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product10-section-padding product10-bg-accent">
          <h2 className="product10-section-title">Applications</h2>
          <div className="product10-feature-grid">
            {["Transaction Monitoring","Customer Due Diligence","Watchlist Screening"].map((app, i) => (
              <div key={i} className="product10-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product10-section-padding">
          <h2 className="product10-section-title">Real-World Impact</h2>
          <div className="product10-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A global bank reduced its AML backlog by 50% by using our AI to auto-clear low-risk alerts."`}</p>
          </div>
        </section>

        <section className="product10-section-padding">
          <h2 className="product10-section-title">Key Benefits</h2>
          <div className="product10-feature-grid">
            {["Higher Detection Rates","Lower False Positives","Auditability"].map((b, i) => (
              <div key={i} className="product10-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product10-section-padding bg-light">
          <h2 className="product10-section-title">Challenges & Limitations</h2>
          <div className="product10-grid-2">
            <ul className="product10-module-list">
              {["Data quality issues in legacy systems","Balancing detection vs user friction"].map((c, i) => (
                <li key={i} className="product10-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product10-section-padding">
          <h2 className="product10-section-title">Future Scope</h2>
          <div className="product10-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Collaboration networks where banks can share 'anonymized' risk scores for entities without exposing PII.`}</p>
          </div>
        </section>

        <section className="product10-section-padding product10-bg-darker">
          <h2 className="product10-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product10-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of anti-money laundering (aml) compliance software will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product10-section-padding">
          <div className="product10-glass-card product10-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in anti-money laundering (aml) compliance software technology.</p>
            <button className="product10-btn product10-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product10;