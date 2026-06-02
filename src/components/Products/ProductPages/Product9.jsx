import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product9.css';
import prd9 from "../../../assets/images/prd9.jpg";

const Product9 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product9-detail-page">
      <section className="product9-hero" style={{ backgroundImage: `url(${prd9})` }}>
        <div className="product9-hero-content">
          <h1>Mobile Banking and Payment Applications</h1>
          <p>Next-gen branchless banking solutions for consumers with tap-to-pay and seamless peer-to-peer transfers.</p>
          <div className="product9-hero-btns">
            <button className="product9-btn product9-btn-primary">Request Demo</button>
            <button className="product9-btn product9-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product9-container">
        <section className="product9-section-padding">
          <h2 className="product9-section-title">Background & Problem Statement</h2>
          <div className="product9-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Consumers increasingly view bank branches as a nuisance, demanding 100% of services via their mobile device.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Legacy mobile bank apps are often just wrappers for web views, lacking native speed and advanced features like budgeting.`}</p>
            </div>
            <div className="product9-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product9-module-list">
                 <li className="product9-module-item">Inefficient legacy infrastructure</li>
                 <li className="product9-module-item">Lack of real-time data transparency</li>
                 <li className="product9-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product9-section-padding product9-bg-accent">
          <h2 className="product9-section-title">Proposed Solution</h2>
          <p className="product9-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A mobile-first core banking platform with virtual cards, instant notifications, and P2P payments.`}</p>
        </section>

        <section className="product9-section-padding">
          <h2 className="product9-section-title">System Architecture</h2>
          <div className="product9-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Native mobile frontend with a highly scalable cloud-native core banking system (CBS).`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product9-section-padding">
          <h2 className="product9-section-title">Technologies Used</h2>
          <div className="product9-tech-stack-grid">
            {["Swift","Kotlin","Go","Cassandra","Google Cloud"].map((t, i) => (
              <div key={i} className="product9-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product9-section-padding product9-bg-accent">
          <h2 className="product9-section-title">Applications</h2>
          <div className="product9-feature-grid">
            {["Digital-Only Banking","P2P Transfers","Virtual Card Management"].map((app, i) => (
              <div key={i} className="product9-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product9-section-padding">
          <h2 className="product9-section-title">Real-World Impact</h2>
          <div className="product9-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"Our platform powers a challenger bank with 10M+ users, supporting 50k transactions per second with 99.99% uptime."`}</p>
          </div>
        </section>

        <section className="product9-section-padding">
          <h2 className="product9-section-title">Key Benefits</h2>
          <div className="product9-feature-grid">
            {["Native Performance","Branchless Convenience","Instant Notifications"].map((b, i) => (
              <div key={i} className="product9-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product9-section-padding bg-light">
          <h2 className="product9-section-title">Challenges & Limitations</h2>
          <div className="product9-grid-2">
            <ul className="product9-module-list">
              {["Customer support scaling","Sophisticated mobile phishing attacks"].map((c, i) => (
                <li key={i} className="product9-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product9-section-padding">
          <h2 className="product9-section-title">Future Scope</h2>
          <div className="product9-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Integration of AI assistants that can perform complex tasks like 'file a dispute' or 'increase my limit' via voice.`}</p>
          </div>
        </section>

        <section className="product9-section-padding product9-bg-darker">
          <h2 className="product9-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product9-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of mobile banking and payment applications will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product9-section-padding">
          <div className="product9-glass-card product9-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in mobile banking and payment applications technology.</p>
            <button className="product9-btn product9-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product9;