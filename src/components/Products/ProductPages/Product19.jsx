import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product19.css';
import prd19 from "../../../assets/images/prd19.jpg";

const Product19 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product19-detail-page">
      <section className="product19-hero" style={{ backgroundImage: `url(${prd19})` }}>
        <div className="product19-hero-content">
          <h1>Financial Data Analytics and Business Intelligence Tools</h1>
          <p>Comprehensive BI platforms that aggregate raw financial activity into stunning, actionable visual insights and KPIs.</p>
          <div className="product19-hero-btns">
            <button className="product19-btn product19-btn-primary">Request Demo</button>
            <button className="product19-btn product19-btn-outline" onClick={() => navigate('/#contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      <div className="product19-container">
        <section className="product19-section-padding">
          <h2 className="product19-section-title">Background & Problem Statement</h2>
          <div className="product19-grid-2">
            <div>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`Traditional reporting is 'backward-looking', telling you what happened last month instead of what will happen next month.`}</p>
              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>
              <p style={{ color: '#4b5563' }}>{`CFOs are drowning in data but can't see the 'big picture' of their company's financial health in real-time.`}</p>
            </div>
            <div className="product19-glass-card">
               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>
               <ul className="product19-module-list">
                 <li className="product19-module-item">Inefficient legacy infrastructure</li>
                 <li className="product19-module-item">Lack of real-time data transparency</li>
                 <li className="product19-module-item">High operational & middleman costs</li>
               </ul>
            </div>
          </div>
        </section>

        <section className="product19-section-padding product19-bg-accent">
          <h2 className="product19-section-title">Proposed Solution</h2>
          <p className="product19-text-center" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`An AI-powered BI tool that predicts future cash flows and identifies hidden cost-saving opportunities.`}</p>
        </section>

        <section className="product19-section-padding">
          <h2 className="product19-section-title">System Architecture</h2>
          <div className="product19-glass-card" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`Data warehouse with an AI insight layer and a high-performance visualization engine.`}</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80" alt="Architecture" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />
          </div>
        </section>

        <section className="product19-section-padding">
          <h2 className="product19-section-title">Technologies Used</h2>
          <div className="product19-tech-stack-grid">
            {["Python","Snowflake","PowerBI (Integration)","React","AWS"].map((t, i) => (
              <div key={i} className="product19-tech-item">
                <h4 style={{margin:0}}>{t}</h4>
              </div>
            ))}
          </div>
        </section>

        <section className="product19-section-padding product19-bg-accent">
          <h2 className="product19-section-title">Applications</h2>
          <div className="product19-feature-grid">
            {["CFO Dashboards","Operational Expense Audit","Revenue Forecasting"].map((app, i) => (
              <div key={i} className="product19-feature-card" style={{textAlign:'center'}}>
                <h3>{app}</h3>
                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product19-section-padding">
          <h2 className="product19-section-title">Real-World Impact</h2>
          <div className="product19-glass-card" style={{background: '#0A2540', color: '#fff'}}>
            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`"A global retail group used our BI tool to identify $2M in annual savings by optimizing their store-level inventory finance."`}</p>
          </div>
        </section>

        <section className="product19-section-padding">
          <h2 className="product19-section-title">Key Benefits</h2>
          <div className="product19-feature-grid">
            {["Actionable Insights","Real-time Monitoring","Better Forecasting"].map((b, i) => (
              <div key={i} className="product19-feature-card">
                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>
                <p>Delivering measurable value through {b.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="product19-section-padding bg-light">
          <h2 className="product19-section-title">Challenges & Limitations</h2>
          <div className="product19-grid-2">
            <ul className="product19-module-list">
              {["Data silo integration","User trust in AI-generated predictions"].map((c, i) => (
                <li key={i} className="product19-module-item" style={{borderLeftColor: '#ef4444'}}>{c}</li>
              ))}
            </ul>
            <div>
              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>
            </div>
          </div>
        </section>

        <section className="product19-section-padding">
          <h2 className="product19-section-title">Future Scope</h2>
          <div className="product19-glass-card">
            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`Natural Language Querying: Allowing a CEO to ask 'What will our margin be if we raise prices by 2%?' and getting an instant answer.`}</p>
          </div>
        </section>

        <section className="product19-section-padding product19-bg-darker">
          <h2 className="product19-section-title" style={{color: '#fff'}}>The Future of Precision</h2>
          <p className="product19-text-center" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of financial data analytics and business intelligence tools will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>
        </section>

        <section className="product19-section-padding">
          <div className="product19-glass-card product19-text-center">
            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in financial data analytics and business intelligence tools technology.</p>
            <button className="product19-btn product19-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product19;