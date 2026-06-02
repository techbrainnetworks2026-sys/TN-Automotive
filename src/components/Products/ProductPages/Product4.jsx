import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product4.css';
import prd4 from "../../../assets/images/prd4.jpg";

const Product4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product4-detail-page">
      <section className="product4-hero" style={{ backgroundImage: `url(${prd4})` }}>
        <div className="product4-hero-content">
          <h1>Personal Finance Management Apps</h1>
          <p>Intuitive mobile applications allowing users to track expenses, manage budgets, and optimize their personal wealth effortlessly.</p>
          <div className="product4-hero-btns">
            <button className="product4-btn product4-btn-primary">Request Demo</button>
            <button className="product4-btn product4-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product4-container">
        <section className="product4-section-padding">
          <h2 className="product4-section-title">Background & Problem Statement</h2>
          <div className="product4-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`The shift to digital payments makes it harder for individuals to track their 'invisible' spending, leading to poor financial health.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Fragmentation of financial data across multiple banks, cards, and investment platforms makes a holistic view impossible.`}</p>
            </div>
            <div className="product4-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product4-module-list">
                 <li className="product4-module-item">Inefficient legacy infrastructure</li>
                 <li className="product4-module-item">Lack of real-time data transparency</li>
                 <li className="product4-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product4-section-padding product4-bg-accent">
          <h2 className="product4-section-title">Proposed Solution</h2>
          <p className="product4-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A unified financial command center that aggregates data via Open Banking and uses AI to provide proactive wealth advice.`}</p>
        </section>

        <section className="product4-section-padding">
          <h2 className="product4-section-title">System Architecture</h2>
          <div className="product4-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Microservices-based mobile backend with robust API connectors and an AI-driven categorization engine.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product4-section-padding">
          <h2 className="product4-section-title">Technologies Used</h2>
          <div className="product4-tech-stack-grid">
            {["React Native","Spring Boot","Plaid API","MongoDB","Redis"].map((t, i) => (
              <div key={i} className="product4-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product4-section-padding product4-bg-accent">
          <h2 className="product4-section-title">Applications</h2>
          <div className="product4-feature-grid">
            {["Consumer Budgeting","Net Worth Planning","Debt Payoff Strategy"].map((app, i) => (
              <div key={i} className="product4-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product4-section-padding">
          <h2 className="product4-section-title">Real-World Impact</h2>
          <div className="product4-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Our app helped users save an average of $450/month by identifying wasted subscriptions and optimizing spending categories."`}</p>
          </div>
        </section>

        <section className="product4-section-padding">
          <h2 className="product4-section-title">Key Benefits</h2>
          <div className="product4-feature-grid">
            {["Financial Clarity","Automated Savings","Debt Reduction"].map((b, i) => (
              <div key={i} className="product4-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product4-section-padding bg-light">
          <h2 className="product4-section-title">Challenges & Limitations</h2>
          <div className="product4-grid-2">
            <ul className="product4-module-list">
              {["Fragile bank API integrations","User trust in data security"].map((c, i) => (
                <li key={i} className="product4-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product4-section-padding">
          <h2 className="product4-section-title">Future Scope</h2>
          <div className="product4-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`AI 'Auto-Pilot' that automatically moves money between accounts to maximize interest and avoid overdrafts.`}</p>
          </div>
        </section>

        <section className="product4-section-padding product4-bg-darker">
          <h2 className="product4-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product4-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of personal finance management apps will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product4-section-padding">
          <div className="product4-glass-card product4-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in personal finance management apps technology.</p>
            <button className="product4-btn product4-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product4;