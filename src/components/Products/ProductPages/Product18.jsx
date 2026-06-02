import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product18.css';
import prd18 from "../../../assets/images/prd18.jpg";

const Product18 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product18-detail-page">
      <section className="product18-hero" style={{ backgroundImage: `url(${prd18})` }}>
        <div className="product18-hero-content">
          <h1>Trade Finance and Supply Chain Finance Solutions</h1>
          <p>End-to-end digitisation of the global trade process, providing transparency and financing at every supply chain node.</p>
          <div className="product18-hero-btns">
            <button className="product18-btn product18-btn-primary">Request Demo</button>
            <button className="product18-btn product18-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product18-container">
        <section className="product18-section-padding">
          <h2 className="product18-section-title">Background & Problem Statement</h2>
          <div className="product18-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`A single shipment can involve 20+ parties and 100+ pages of documentation, leading to massive delays.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`Global trade is plagued by paper documents, fraud, and a $1.7 trillion 'trade finance gap'.`}</p>
            </div>
            <div className="product18-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product18-module-list">
                 <li className="product18-module-item">Inefficient legacy infrastructure</li>
                 <li className="product18-module-item">Lack of real-time data transparency</li>
                 <li className="product18-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product18-section-padding product18-bg-accent">
          <h2 className="product18-section-title">Proposed Solution</h2>
          <p className="product18-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`A blockchain platform that digitizes the Bill of Lading and automates financing upon shipment milestones.`}</p>
        </section>

        <section className="product18-section-padding">
          <h2 className="product18-section-title">System Architecture</h2>
          <div className="product18-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Distributed network connecting banks, shippers, and customs with shared document visibility.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product18-section-padding">
          <h2 className="product18-section-title">Technologies Used</h2>
          <div className="product18-tech-stack-grid">
            {["Hyperledger Fabric","Go","CouchDB","Node.js","IBM Cloud"].map((t, i) => (
              <div key={i} className="product18-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product18-section-padding product18-bg-accent">
          <h2 className="product18-section-title">Applications</h2>
          <div className="product18-feature-grid">
            {["Export/Import Financing","Inventory Finance","Supplier Pre-payments"].map((app, i) => (
              <div key={i} className="product18-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product18-section-padding">
          <h2 className="product18-section-title">Real-World Impact</h2>
          <div className="product18-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A major shipping line reduced document processing time from 10 days to 1 day using our digitized trade platform."`}</p>
          </div>
        </section>

        <section className="product18-section-padding">
          <h2 className="product18-section-title">Key Benefits</h2>
          <div className="product18-feature-grid">
            {["Reduced Fraud","Faster Working Capital","Full Chain Visibility"].map((b, i) => (
              <div key={i} className="product18-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product18-section-padding bg-light">
          <h2 className="product18-section-title">Challenges & Limitations</h2>
          <div className="product18-grid-2">
            <ul className="product18-module-list">
              {["Network effect (getting all parties on one system)","Legal recognition of digital titles"].map((c, i) => (
                <li key={i} className="product18-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product18-section-padding">
          <h2 className="product18-section-title">Future Scope</h2>
          <div className="product18-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`IoT-triggered payments: Automatically releasing payment when a container reaches a specific GPS coordinate.`}</p>
          </div>
        </section>

        <section className="product18-section-padding product18-bg-darker">
          <h2 className="product18-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product18-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of trade finance and supply chain finance solutions will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product18-section-padding">
          <div className="product18-glass-card product18-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in trade finance and supply chain finance solutions technology.</p>
            <button className="product18-btn product18-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product18;