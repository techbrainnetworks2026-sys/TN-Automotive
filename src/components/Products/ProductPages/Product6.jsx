import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product6.css';
import prd6 from "../../../assets/images/prd6.jpg";

const Product6 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product6-detail-page">
      <section className="product6-hero" style={{ backgroundImage: `url(${prd6})` }}>
        <div className="product6-hero-content">
          <h1>Digital Wallet and Cryptocurrency Management Software</h1>
          <p>Secure cross-platform digital wallets integrating fiat and crypto asset management with instant exchange metrics.</p>
          <div className="product6-hero-btns">
            <button className="product6-btn product6-btn-primary">Request Demo</button>
            <button className="product6-btn product6-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product6-container">
        <section className="product6-section-padding">
          <h2 className="product6-section-title">Background & Problem Statement</h2>
          <div className="product6-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`The complexity of managing private keys and the divide between traditional and crypto finance prevents mass adoption.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Users lose assets due to lost keys, or face high friction when trying to spend crypto at traditional merchants.`}</p>
            </div>
            <div className="product6-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product6-module-list">
                 <li className="product6-module-item">Inefficient legacy infrastructure</li>
                 <li className="product6-module-item">Lack of real-time data transparency</li>
                 <li className="product6-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product6-section-padding product6-bg-accent">
          <h2 className="product6-section-title">Proposed Solution</h2>
          <p className="product6-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A custodial/non-custodial hybrid wallet with social recovery features and instant fiat on-ramps.`}</p>
        </section>

        <section className="product6-section-padding">
          <h2 className="product6-section-title">System Architecture</h2>
          <div className="product6-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Secure enclave-based key management with MPC (Multi-Party Computation) and decentralized identity (DID) support.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product6-section-padding">
          <h2 className="product6-section-title">Technologies Used</h2>
          <div className="product6-tech-stack-grid">
            {["Flutter","Go","Ethereum (Ethers.js)","PostgreSQL","Vault"].map((t, i) => (
              <div key={i} className="product6-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product6-section-padding product6-bg-accent">
          <h2 className="product6-section-title">Applications</h2>
          <div className="product6-feature-grid">
            {["Crypto Payments","NFT Custody","DeFi Interaction"].map((app, i) => (
              <div key={i} className="product6-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product6-section-padding">
          <h2 className="product6-section-title">Real-World Impact</h2>
          <div className="product6-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A major neobank integrated our wallet to allow 5M+ users to trade and spend 50+ cryptocurrencies seamlessly."`}</p>
          </div>
        </section>

        <section className="product6-section-padding">
          <h2 className="product6-section-title">Key Benefits</h2>
          <div className="product6-feature-grid">
            {["High Security","Ease of Use","Interoperability"].map((b, i) => (
              <div key={i} className="product6-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product6-section-padding bg-light">
          <h2 className="product6-section-title">Challenges & Limitations</h2>
          <div className="product6-grid-2">
            <ul className="product6-module-list">
              {["High network (gas) fees on some chains","Complex UI for non-technical users"].map((c, i) => (
                <li key={i} className="product6-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product6-section-padding">
          <h2 className="product6-section-title">Future Scope</h2>
          <div className="product6-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Biometric-only wallets that use Apple/Android Secure Enclaves as the root of trust, removing the need for seed phrases.`}</p>
          </div>
        </section>

        <section className="product6-section-padding product6-bg-darker">
          <h2 className="product6-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product6-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of digital wallet and cryptocurrency management software will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product6-section-padding">
          <div className="product6-glass-card product6-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in digital wallet and cryptocurrency management software technology.</p>
            <button className="product6-btn product6-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product6;