import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product8.css';
import prd8 from "../../../assets/images/prd8.jpg";

const Product8 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product8-detail-page">
      <section className="product8-hero" style={{ backgroundImage: `url(${prd8})` }}>
        <div className="product8-hero-content">
          <h1>Real-Time Payments and Instant Settlement Systems</h1>
          <p>Ultra-low latency payment gateways delivering immediate cross-border transaction settlements.</p>
          <div className="product8-hero-btns">
            <button className="product8-btn product8-btn-primary">Request Demo</button>
            <button className="product8-btn product8-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product8-container">
        <section className="product8-section-padding">
          <h2 className="product8-section-title">Background & Problem Statement</h2>
          <div className="product8-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`The 3-day settlement cycle of traditional banking creates significant cash-flow drag for small businesses and individuals.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Liquidity is trapped in transit, and cross-border transfers are plagued by opaque exchange rates and hidden fees.`}</p>
            </div>
            <div className="product8-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product8-module-list">
                 <li className="product8-module-item">Inefficient legacy infrastructure</li>
                 <li className="product8-module-item">Lack of real-time data transparency</li>
                 <li className="product8-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product8-section-padding product8-bg-accent">
          <h2 className="product8-section-title">Proposed Solution</h2>
          <p className="product8-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A real-time payment rail that settles transactions in seconds using local clearing systems and distributed liquidity pools.`}</p>
        </section>

        <section className="product8-section-padding">
          <h2 className="product8-section-title">System Architecture</h2>
          <div className="product8-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Distributed ledger backbone with high-throughput gateway nodes and real-time settlement finality.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product8-section-padding">
          <h2 className="product8-section-title">Technologies Used</h2>
          <div className="product8-tech-stack-grid">
            {["Rust","C#","SQL Server","Kafka","Azure"].map((t, i) => (
              <div key={i} className="product8-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product8-section-padding product8-bg-accent">
          <h2 className="product8-section-title">Applications</h2>
          <div className="product8-feature-grid">
            {["Gig Economy Payouts","Global Supply Chain Payments","C2B Retail Payments"].map((app, i) => (
              <div key={i} className="product8-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product8-section-padding">
          <h2 className="product8-section-title">Real-World Impact</h2>
          <div className="product8-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A global e-commerce giant uses our rails to pay 1M+ sellers worldwide instantly, improving seller retention by 20%."`}</p>
          </div>
        </section>

        <section className="product8-section-padding">
          <h2 className="product8-section-title">Key Benefits</h2>
          <div className="product8-feature-grid">
            {["Improved Cash Flow","Lower FX Costs","Instant Confirmation"].map((b, i) => (
              <div key={i} className="product8-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product8-section-padding bg-light">
          <h2 className="product8-section-title">Challenges & Limitations</h2>
          <div className="product8-grid-2">
            <ul className="product8-module-list">
              {["Anti-fraud check speed vs transaction speed","Interoperability between different regional real-time systems"].map((c, i) => (
                <li key={i} className="product8-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product8-section-padding">
          <h2 className="product8-section-title">Future Scope</h2>
          <div className="product8-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Universal 'Payment-on-Delivery' where funds are automatically released upon digital confirmation of receipt.`}</p>
          </div>
        </section>

        <section className="product8-section-padding product8-bg-darker">
          <h2 className="product8-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product8-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of real-time payments and instant settlement systems will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product8-section-padding">
          <div className="product8-glass-card product8-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in real-time payments and instant settlement systems technology.</p>
            <button className="product8-btn product8-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product8;