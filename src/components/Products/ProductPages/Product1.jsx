import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product1.css';
import prd1 from "../../../assets/images/prd1.jpg";

const Product1 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product1-detail-page">
      <section className="product1-hero" style={{ backgroundImage: `url(${prd1})` }}>
        <div className="product1-hero-content">
          <h1>Blockchain-Based Financial Transaction Platforms</h1>
          <p>Secure, decentralized transaction networks providing transparent and immutable ledger solutions for global finance.</p>
          <div className="product1-hero-btns">
            <button className="product1-btn product1-btn-primary">Request Demo</button>
            <button className="product1-btn product1-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product1-container">
        <section className="product1-section-padding">
          <h2 className="product1-section-title">Background & Problem Statement</h2>
          <div className="product1-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Traditional financial infrastructure relies on centralized ledgers that are slow, prone to human error, and require expensive intermediaries for trust.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Settlement times for cross-border transactions can take days, with high fees and limited transparency, creating liquidity bottlenecks.`}</p>
            </div>
            <div className="product1-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product1-module-list">
                 <li className="product1-module-item">Inefficient legacy infrastructure</li>
                 <li className="product1-module-item">Lack of real-time data transparency</li>
                 <li className="product1-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product1-section-padding product1-bg-accent">
          <h2 className="product1-section-title">Proposed Solution</h2>
          <p className="product1-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A distributed ledger system using smart contracts to provide near-instant settlement with cryptographic proof of every transaction.`}</p>
        </section>

        <section className="product1-section-padding">
          <h2 className="product1-section-title">System Architecture</h2>
          <div className="product1-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Multi-layered node structure with Byzantine Fault Tolerance consensus, integrating with existing core banking through secure oracles.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product1-section-padding">
          <h2 className="product1-section-title">Technologies Used</h2>
          <div className="product1-tech-stack-grid">
            {["Solidity","Hyperledger Fabric","Ethereum","Node.js","PostgreSQL"].map((t, i) => (
              <div key={i} className="product1-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product1-section-padding product1-bg-accent">
          <h2 className="product1-section-title">Applications</h2>
          <div className="product1-feature-grid">
            {["Cross-border Remittances","Institutional Asset Custody","DeFi Liquidity Pools"].map((app, i) => (
              <div key={i} className="product1-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product1-section-padding">
          <h2 className="product1-section-title">Real-World Impact</h2>
          <div className="product1-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Used by global banks to reduce settlement times from 3 days to 30 seconds while cutting intermediary costs by 60%."`}</p>
          </div>
        </section>

        <section className="product1-section-padding">
          <h2 className="product1-section-title">Key Benefits</h2>
          <div className="product1-feature-grid">
            {["Zero Single Point of Failure","Lower Transaction Costs","Full Audit Transparency"].map((b, i) => (
              <div key={i} className="product1-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product1-section-padding bg-light">
          <h2 className="product1-section-title">Challenges & Limitations</h2>
          <div className="product1-grid-2">
            <ul className="product1-module-list">
              {["Scalability throughput limitations","Complex regulatory compliance across jurisdictions"].map((c, i) => (
                <li key={i} className="product1-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product1-section-padding">
          <h2 className="product1-section-title">Future Scope</h2>
          <div className="product1-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Integration with Central Bank Digital Currencies (CBDCs) and cross-chain atomic swaps for universal interoperability.`}</p>
          </div>
        </section>

        <section className="product1-section-padding product1-bg-darker">
          <h2 className="product1-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product1-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of blockchain-based financial transaction platforms will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product1-section-padding">
          <div className="product1-glass-card product1-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in blockchain-based financial transaction platforms technology.</p>
            <button className="product1-btn product1-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product1;