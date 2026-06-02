import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product13.css';
import prd13 from "../../../assets/images/prd13.jpeg";

const Product13 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product13-detail-page">
      <section className="product13-hero" style={{ backgroundImage: `url(${prd13})` }}>
        <div className="product13-hero-content">
          <h1>Peer-to-Peer (P2P) Lending Platforms</h1>
          <p>Decentralized lending marketplaces directly connecting diverse borrowers with global institutional or retail investors.</p>
          <div className="product13-hero-btns">
            <button className="product13-btn product13-btn-primary">Request Demo</button>
            <button className="product13-btn product13-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product13-container">
        <section className="product13-section-padding">
          <h2 className="product13-section-title">Background & Problem Statement</h2>
          <div className="product13-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Banks take a large margin as an intermediary between savers and borrowers, offering low interest to one and high to the other.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Borrowers face high rates and savers get near-zero returns in a traditional banking environment.`}</p>
            </div>
            <div className="product13-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product13-module-list">
                 <li className="product13-module-item">Inefficient legacy infrastructure</li>
                 <li className="product13-module-item">Lack of real-time data transparency</li>
                 <li className="product13-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product13-section-padding product13-bg-accent">
          <h2 className="product13-section-title">Proposed Solution</h2>
          <p className="product13-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A marketplace that cuts out the middleman, passing the savings and returns directly to users.`}</p>
        </section>

        <section className="product13-section-padding">
          <h2 className="product13-section-title">System Architecture</h2>
          <div className="product13-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Matching engine that pairs borrower risk with investor preference, with integrated automated collections.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product13-section-padding">
          <h2 className="product13-section-title">Technologies Used</h2>
          <div className="product13-tech-stack-grid">
            {["Go","Node.js","Redis","MySQL","AWS Lambda"].map((t, i) => (
              <div key={i} className="product13-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product13-section-padding product13-bg-accent">
          <h2 className="product13-section-title">Applications</h2>
          <div className="product13-feature-grid">
            {["Education Loans","Debt Consolidation","SME Working Capital"].map((app, i) => (
              <div key={i} className="product13-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product13-section-padding">
          <h2 className="product13-section-title">Real-World Impact</h2>
          <div className="product13-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A P2P platform built on our tech has facilitated $1B+ in loans, providing investors with an average 8% net return."`}</p>
          </div>
        </section>

        <section className="product13-section-padding">
          <h2 className="product13-section-title">Key Benefits</h2>
          <div className="product13-feature-grid">
            {["Higher Returns for Lenders","Lower Rates for Borrowers","Transparent Fees"].map((b, i) => (
              <div key={i} className="product13-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product13-section-padding bg-light">
          <h2 className="product13-section-title">Challenges & Limitations</h2>
          <div className="product13-grid-2">
            <ul className="product13-module-list">
              {["Credit risk management during recessions","Regulatory hurdles in some US states"].map((c, i) => (
                <li key={i} className="product13-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product13-section-padding">
          <h2 className="product13-section-title">Future Scope</h2>
          <div className="product13-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Using NFTs as collateral for P2P loans, allowing users to borrow against their digital assets.`}</p>
          </div>
        </section>

        <section className="product13-section-padding product13-bg-darker">
          <h2 className="product13-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product13-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of peer-to-peer (p2p) lending platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product13-section-padding">
          <div className="product13-glass-card product13-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in peer-to-peer (p2p) lending platforms technology.</p>
            <button className="product13-btn product13-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product13;