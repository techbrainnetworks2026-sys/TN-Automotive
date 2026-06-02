import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product2.css';
import prd2 from "../../../assets/images/prd2.jpg";

const Product2 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product2-detail-page">
      <section className="product2-hero" style={{ backgroundImage: `url(${prd2})` }}>
        <div className="product2-hero-content">
          <h1>Algorithmic Trading and Risk Management Software</h1>
          <p>Advanced AI-driven trading platforms with robust real-time risk analytics and high-frequency execution capabilities.</p>
          <div className="product2-hero-btns">
            <button className="product2-btn product2-btn-primary">Request Demo</button>
            <button className="product2-btn product2-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product2-container">
        <section className="product2-section-padding">
          <h2 className="product2-section-title">Background & Problem Statement</h2>
          <div className="product2-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Capital markets move at microsecond speeds, where human decision-making is too slow and emotionally compromised for consistent returns.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Slippage, market impact, and the inability to manage risk across thousands of simultaneous positions manually.`}</p>
            </div>
            <div className="product2-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product2-module-list">
                 <li className="product2-module-item">Inefficient legacy infrastructure</li>
                 <li className="product2-module-item">Lack of real-time data transparency</li>
                 <li className="product2-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product2-section-padding product2-bg-accent">
          <h2 className="product2-section-title">Proposed Solution</h2>
          <p className="product2-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`High-frequency execution engines that utilize predictive machine learning to identify alpha and manage exposure in real-time.`}</p>
        </section>

        <section className="product2-section-padding">
          <h2 className="product2-section-title">System Architecture</h2>
          <div className="product2-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Event-driven low-latency engine with a distributed risk calculation layer and real-time market data feed handlers.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product2-section-padding">
          <h2 className="product2-section-title">Technologies Used</h2>
          <div className="product2-tech-stack-grid">
            {["C++","Python (PyTorch)","Kafka","InfluxDB","AWS ParallelCluster"].map((t, i) => (
              <div key={i} className="product2-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product2-section-padding product2-bg-accent">
          <h2 className="product2-section-title">Applications</h2>
          <div className="product2-feature-grid">
            {["High-Frequency Trading","ETF Arbitrage","Portfolio Hedge Management"].map((app, i) => (
              <div key={i} className="product2-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product2-section-padding">
          <h2 className="product2-section-title">Real-World Impact</h2>
          <div className="product2-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Proprietary trading firms use our platform to process 1M+ messages per second with sub-10 microsecond execution latency."`}</p>
          </div>
        </section>

        <section className="product2-section-padding">
          <h2 className="product2-section-title">Key Benefits</h2>
          <div className="product2-feature-grid">
            {["Emotionless Execution","Precise Risk Guardrails","Superior Fill Quality"].map((b, i) => (
              <div key={i} className="product2-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product2-section-padding bg-light">
          <h2 className="product2-section-title">Challenges & Limitations</h2>
          <div className="product2-grid-2">
            <ul className="product2-module-list">
              {["Technological arms race in latency","Risk of algorithmic flash crashes during high volatility"].map((c, i) => (
                <li key={i} className="product2-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product2-section-padding">
          <h2 className="product2-section-title">Future Scope</h2>
          <div className="product2-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Transitioning to Quantum Computing for complex Monte Carlo simulations and multi-asset optimization.`}</p>
          </div>
        </section>

        <section className="product2-section-padding product2-bg-darker">
          <h2 className="product2-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product2-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of algorithmic trading and risk management software will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product2-section-padding">
          <div className="product2-glass-card product2-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in algorithmic trading and risk management software technology.</p>
            <button className="product2-btn product2-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product2;