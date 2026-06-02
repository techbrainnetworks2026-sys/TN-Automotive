import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product17.css';
import prd17 from "../../../assets/images/prd17.png";

const Product17 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product17-detail-page">
      <section className="product17-hero" style={{ backgroundImage: `url(${prd17})` }}>
        <div className="product17-hero-content">
          <h1>Equity Crowdfunding and Investment Platforms</h1>
          <p>Digital launchpads democratizing access to startup equity or real estate ventures for everyday investors.</p>
          <div className="product17-hero-btns">
            <button className="product17-btn product17-btn-primary">Request Demo</button>
            <button className="product17-btn product17-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product17-container">
        <section className="product17-section-padding">
          <h2 className="product17-section-title">Background & Problem Statement</h2>
          <div className="product17-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Digital platforms now allow startups to raise capital directly from their own community and the public.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Early-stage investing was a 'members-only' club for VCs, leaving the public out of high-growth opportunities.`}</p>
            </div>
            <div className="product17-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product17-module-list">
                 <li className="product17-module-item">Inefficient legacy infrastructure</li>
                 <li className="product17-module-item">Lack of real-time data transparency</li>
                 <li className="product17-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product17-section-padding product17-bg-accent">
          <h2 className="product17-section-title">Proposed Solution</h2>
          <p className="product17-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A regulated crowdfunding portal that handles everything from due diligence to cap table management.`}</p>
        </section>

        <section className="product17-section-padding">
          <h2 className="product17-section-title">System Architecture</h2>
          <div className="product17-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Investment ledger with integrated KYC/AML and secure escrow for fund management.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product17-section-padding">
          <h2 className="product17-section-title">Technologies Used</h2>
          <div className="product17-tech-stack-grid">
            {["Ruby on Rails","React","PostgreSQL","Lemonway (Payment)","Heroku"].map((t, i) => (
              <div key={i} className="product17-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product17-section-padding product17-bg-accent">
          <h2 className="product17-section-title">Applications</h2>
          <div className="product17-feature-grid">
            {["Startup Fundraising","Real Estate Syndication","Green Energy Projects"].map((app, i) => (
              <div key={i} className="product17-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product17-section-padding">
          <h2 className="product17-section-title">Real-World Impact</h2>
          <div className="product17-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A sustainable energy startup raised $5M from 2,000 retail investors on a platform powered by our technology."`}</p>
          </div>
        </section>

        <section className="product17-section-padding">
          <h2 className="product17-section-title">Key Benefits</h2>
          <div className="product17-feature-grid">
            {["Community Engagement","Access to Capital","Portfolio Diversification"].map((b, i) => (
              <div key={i} className="product17-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product17-section-padding bg-light">
          <h2 className="product17-section-title">Challenges & Limitations</h2>
          <div className="product17-grid-2">
            <ul className="product17-module-list">
              {["Regulatory ceiling on raise amounts","High risk of startup failure for retail investors"].map((c, i) => (
                <li key={i} className="product17-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product17-section-padding">
          <h2 className="product17-section-title">Future Scope</h2>
          <div className="product17-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Secondary markets that allow 'crowd' investors to trade their startup shares before an IPO.`}</p>
          </div>
        </section>

        <section className="product17-section-padding product17-bg-darker">
          <h2 className="product17-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product17-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of equity crowdfunding and investment platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product17-section-padding">
          <div className="product17-glass-card product17-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in equity crowdfunding and investment platforms technology.</p>
            <button className="product17-btn product17-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product17;