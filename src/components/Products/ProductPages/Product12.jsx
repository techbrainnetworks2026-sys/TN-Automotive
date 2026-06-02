import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product12.css';
import prd12 from "../../../assets/images/prd12.jpg";

const Product12 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product12-detail-page">
      <section className="product12-hero" style={{ backgroundImage: `url(${prd12})` }}>
        <div className="product12-hero-content">
          <h1>Financial Planning and Budgeting Apps</h1>
          <p>Enterprise and personal forecasting platforms to visualize financial trajectories and manage cash flow efficiently.</p>
          <div className="product12-hero-btns">
            <button className="product12-btn product12-btn-primary">Request Demo</button>
            <button className="product12-btn product12-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product12-container">
        <section className="product12-section-padding">
          <h2 className="product12-section-title">Background & Problem Statement</h2>
          <div className="product12-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Most people and small businesses manage their future finances using 'guesswork' or outdated spreadsheets.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Static plans fail to account for the impact of inflation, market crashes, or unexpected life changes.`}</p>
            </div>
            <div className="product12-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product12-module-list">
                 <li className="product12-module-item">Inefficient legacy infrastructure</li>
                 <li className="product12-module-item">Lack of real-time data transparency</li>
                 <li className="product12-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product12-section-padding product12-bg-accent">
          <h2 className="product12-section-title">Proposed Solution</h2>
          <p className="product12-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A dynamic simulation engine that allows for 'what-if' modeling of every financial decision.`}</p>
        </section>

        <section className="product12-section-padding">
          <h2 className="product12-section-title">System Architecture</h2>
          <div className="product12-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Monte Carlo simulation backend with a highly interactive data visualization frontend.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product12-section-padding">
          <h2 className="product12-section-title">Technologies Used</h2>
          <div className="product12-tech-stack-grid">
            {["React","D3.js","Node.js","PostgreSQL","Heroku"].map((t, i) => (
              <div key={i} className="product12-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product12-section-padding product12-bg-accent">
          <h2 className="product12-section-title">Applications</h2>
          <div className="product12-feature-grid">
            {["Small Business Forecasting","Retirement Modeling","Home Purchase Planning"].map((app, i) => (
              <div key={i} className="product12-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product12-section-padding">
          <h2 className="product12-section-title">Real-World Impact</h2>
          <div className="product12-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Our tool helped a retail chain predict a cash flow gap 6 months in advance, allowing them to secure credit before a crisis."`}</p>
          </div>
        </section>

        <section className="product12-section-padding">
          <h2 className="product12-section-title">Key Benefits</h2>
          <div className="product12-feature-grid">
            {["Proactive Decision Making","Risk Visualization","Better Long-term Health"].map((b, i) => (
              <div key={i} className="product12-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product12-section-padding bg-light">
          <h2 className="product12-section-title">Challenges & Limitations</h2>
          <div className="product12-grid-2">
            <ul className="product12-module-list">
              {["User data entry fatigue","Inaccurate long-term macro assumptions"].map((c, i) => (
                <li key={i} className="product12-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product12-section-padding">
          <h2 className="product12-section-title">Future Scope</h2>
          <div className="product12-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Generative AI that creates a 'written' financial strategy based on your data and goals.`}</p>
          </div>
        </section>

        <section className="product12-section-padding product12-bg-darker">
          <h2 className="product12-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product12-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of financial planning and budgeting apps will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product12-section-padding">
          <div className="product12-glass-card product12-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in financial planning and budgeting apps technology.</p>
            <button className="product12-btn product12-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product12;