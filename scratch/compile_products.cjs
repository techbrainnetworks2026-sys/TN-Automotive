const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'product_data');
const outDir = path.join(__dirname, '../src/components/Products/ProductPages');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Load all data parts
const db1 = JSON.parse(fs.readFileSync(path.join(dataDir, 'products_1_5.json'), 'utf8'));
const db2 = JSON.parse(fs.readFileSync(path.join(dataDir, 'products_6_10.json'), 'utf8'));
const db3 = JSON.parse(fs.readFileSync(path.join(dataDir, 'products_11_15.json'), 'utf8'));
const db4 = JSON.parse(fs.readFileSync(path.join(dataDir, 'products_16_20.json'), 'utf8'));

const allProducts = { ...db1, ...db2, ...db3, ...db4 };

// Image extensions mapped manually based on the directory contents
const imageExts = {
  1: 'jpg', 2: 'jpg', 3: 'avif', 4: 'jpg', 5: 'jpg',
  6: 'jpg', 7: 'jpg', 8: 'jpg', 9: 'jpg', 10: 'avif',
  11: 'jpg', 12: 'jpg', 13: 'jpeg', 14: 'png', 15: 'jpg',
  16: 'jpg', 17: 'png', 18: 'jpg', 19: 'jpg', 20: 'jpg'
};

const escapeStr = (str) => str.replace(/`/g, "\\`").replace(/\$/g, "\\$");

function generateJSX(product) {
  const { id, title, shortSummary, intro, features, background, problem, functionalities, valueDelivery, workflow, process, architecture, techArch, technologies, realWorld, benefits, challenges, future, impact, conclusion } = product;
  const ext = imageExts[id];

  return `import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product${id}.css';
import prd${id} from "../../../assets/images/prd${id}.${ext}";

const Product${id} = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = ['introduction', 'key-features', 'background', 'functionalities', 'value', 'workflow', 'architecture', 'tech-arch', 'technologies', 'applications', 'benefits', 'future'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'key-features', label: 'Key Features' },
    { id: 'background', label: 'Background & Problem' },
    { id: 'functionalities', label: 'Core Functionalities' },
    { id: 'value', label: 'Value Delivery' },
    { id: 'workflow', label: 'Workflow & Process' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'tech-arch', label: 'Technical Architecture' },
    { id: 'technologies', label: 'Technologies Used' },
    { id: 'applications', label: 'Real-World Applications' },
    { id: 'benefits', label: 'Benefits & Challenges' },
    { id: 'future', label: 'Future & Impact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="product${id}-detail-page">
      <section className="product${id}-hero" style={{ backgroundImage: \`linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(\${prd${id}})\` }}>
        <div className="product${id}-hero-content">
          <button className="product${id}-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>${escapeStr(title)}</h1>
          <p>${escapeStr(shortSummary)}</p>
        </div>
      </section>

      <div className="product${id}-container">
        <div className="product${id}-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product${id}-sidebar">
            <div className="product${id}-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product${id}-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={\`product${id}-toc-link \${activeSection === sec.id ? 'active' : ''}\`}
                      onClick={() => scrollToSection(sec.id)}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="product${id}-main-content">
            
            <section id="introduction" className="product${id}-content-section">
              <h2>Introduction</h2>
              ${intro.map(p => `<p>${escapeStr(p)}</p>`).join('\n              ')}
            </section>

            <section id="key-features" className="product${id}-content-section">
              <h2>Key Features</h2>
              <div className="product${id}-feature-grid">
                ${features.map(f => `
                <div className="product${id}-card">
                  <h3 className="product${id}-card-title">${escapeStr(f.title)}</h3>
                  <p className="product${id}-card-desc">${escapeStr(f.desc)}</p>
                </div>`).join('')}
              </div>
            </section>

            <section id="background" className="product${id}-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product${id}-glass-panel">
                <h3 className="product${id}-panel-heading">Industry Background</h3>
                <p>${escapeStr(background)}</p>
                <div className="product${id}-divider"></div>
                <h3 className="product${id}-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>${escapeStr(problem)}</p>
              </div>
            </section>

            <section id="functionalities" className="product${id}-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product${id}-module-list">
                ${functionalities.map(f => `
                <li className="product${id}-module-item">
                  <strong>${escapeStr(f.title)}:</strong> ${escapeStr(f.desc)}
                </li>`).join('')}
              </ul>
            </section>

            <section id="value" className="product${id}-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product${id}-highlight-text">${escapeStr(valueDelivery)}</p>
            </section>

            <section id="workflow" className="product${id}-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product${id}-grid-2">
                <div>
                  <h3 className="product${id}-subheading">Operational Workflow</h3>
                  <div className="product${id}-workflow-steps">
                    ${workflow.map(w => `
                    <div className="product${id}-step">
                      <div className="product${id}-step-number">${w.step}</div>
                      <div className="product${id}-step-content">
                        <h4>${escapeStr(w.title)}</h4>
                        <p>${escapeStr(w.desc)}</p>
                      </div>
                    </div>`).join('')}
                  </div>
                </div>
                <div>
                  <h3 className="product${id}-subheading">Implementation Process</h3>
                  <ul className="product${id}-process-list">
                    ${process.map(p => `
                    <li>
                      <strong>Phase ${p.step}: ${escapeStr(p.title)}</strong>
                      <p>${escapeStr(p.desc)}</p>
                    </li>`).join('')}
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product${id}-content-section">
              <h2>System Architecture</h2>
              <p>${escapeStr(architecture)}</p>
            </section>

            <section id="tech-arch" className="product${id}-content-section">
              <h2>Technical Architecture</h2>
              <div className="product${id}-tech-arch-grid">
                ${Object.entries(techArch).map(([key, val]) => `
                <div className="product${id}-tech-card">
                  <span className="product${id}-tech-label">${key.toUpperCase().replace('_', ' ')}</span>
                  <p>${escapeStr(val)}</p>
                </div>`).join('')}
              </div>
            </section>

            <section id="technologies" className="product${id}-content-section">
              <h2>Technologies Used</h2>
              <div className="product${id}-tags-container">
                ${Object.entries(technologies).map(([cat, list]) => `
                <div className="product${id}-tag-group">
                  <h4>${cat.toUpperCase().replace('_', ' ')}</h4>
                  <div className="product${id}-tags">
                    ${list.split(',').map(t => `<span className="product${id}-tag">${escapeStr(t.trim())}</span>`).join('')}
                  </div>
                </div>`).join('')}
              </div>
            </section>

            <section id="applications" className="product${id}-content-section">
              <h2>Real-World Applications</h2>
              <div className="product${id}-feature-grid">
                ${realWorld.map(rw => `
                <div className="product${id}-app-card">
                  <h4>${escapeStr(rw.title)}</h4>
                  <p>${escapeStr(rw.desc)}</p>
                </div>`).join('')}
              </div>
            </section>

            <section id="benefits" className="product${id}-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product${id}-grid-2">
                <div className="product${id}-benefits-box">
                  <h3 className="product${id}-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product${id}-check-list">
                    ${benefits.map(b => `
                    <li>
                      <strong>${escapeStr(b.title)}:</strong> ${escapeStr(b.desc)}
                    </li>`).join('')}
                  </ul>
                </div>
                <div className="product${id}-challenges-box">
                  <h3 className="product${id}-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product${id}-cross-list">
                    ${challenges.map(c => `
                    <li>
                      <strong>${escapeStr(c.title)}:</strong> ${escapeStr(c.desc)}
                    </li>`).join('')}
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product${id}-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product${id}-glass-panel">
                <h3 className="product${id}-panel-heading">Future Scope</h3>
                <p>${escapeStr(future)}</p>
                <div className="product${id}-divider"></div>
                <h3 className="product${id}-panel-heading">Industry Impact</h3>
                <p>${escapeStr(impact)}</p>
              </div>
            </section>

            <section className="product${id}-cta-section">
              <div className="product${id}-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>${escapeStr(conclusion)}</p>
                <button className="product${id}-btn product${id}-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product${id};
`;
}

function generateCSS(id) {
  return `.product${id}-detail-page {
  background-color: #ffffff;
  color: #1f2937;
  font-family: 'Inter', system-ui, sans-serif;
  line-height: 1.6;
}

.product${id}-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.product${id}-hero {
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  margin-bottom: 50px;
  position: relative;
  padding-top: 80px; /* Push content down below the navbar */
}

.product${id}-hero-content {
  max-width: 900px;
  padding: 40px 20px;
  z-index: 2;
}

.product${id}-back-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.product${id}-back-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #ffffff;
}

.product${id}-hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #06ccdb;
}

.product${id}-hero p {
  font-size: 1.25rem;
  color: #e5e7eb;
  margin-bottom: 40px;
}

.product${id}-hero-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.product${id}-btn {
  padding: 14px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.product${id}-btn-primary {
  background: #00BFA6;
  color: #ffffff;
}

.product${id}-btn-primary:hover {
  background: #00a08b;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 191, 166, 0.3);
}

.product${id}-btn-outline {
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
}

.product${id}-btn-outline:hover {
  background: #ffffff;
  color: #0A2540;
}

/* Layout */
.product${id}-layout {
  display: flex;
  gap: 50px;
  position: relative;
  align-items: flex-start;
  padding-bottom: 80px;
}

/* Sidebar */
.product${id}-sidebar {
  width: 280px;
  flex-shrink: 0;
}

.product${id}-toc-sticky {
  position: sticky;
  top: 100px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
}

.product${id}-toc-sticky h3 {
  font-size: 1.1rem;
  color: #111827;
  margin-bottom: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.product${id}-toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product${id}-toc-link {
  background: transparent;
  border: none;
  text-align: left;
  padding: 8px 12px;
  font-size: 0.95rem;
  color: #6b7280;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: 500;
  width: 100%;
}

.product${id}-toc-link:hover, .product${id}-toc-link.active {
  background: #ebf8f6;
  color: #00BFA6;
}

/* Main Content */
.product${id}-main-content {
  flex-grow: 1;
  min-width: 0;
}

.product${id}-content-section {
  margin-bottom: 70px;
  scroll-margin-top: 100px;
}

.product${id}-content-section h2 {
  font-size: 2rem;
  color: #0A2540;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f3f4f6;
  font-weight: 700;
}

.product${id}-content-section p {
  font-size: 1.1rem;
  color: #4b5563;
  margin-bottom: 20px;
}

.product${id}-subheading {
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 20px;
}

/* Grids */
.product${id}-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.product${id}-feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

/* Cards & Panels */
.product${id}-card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product${id}-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  border-color: #00BFA6;
}

.product${id}-card-title {
  color: #0A2540;
  font-size: 1.25rem;
  margin-bottom: 12px;
}

.product${id}-card-desc {
  font-size: 1rem !important;
  color: #6b7280 !important;
  margin: 0 !important;
}

.product${id}-glass-panel {
  background: #f8fafc;
  border-left: 4px solid #1F7AE0;
  padding: 30px;
  border-radius: 0 12px 12px 0;
}

.product${id}-panel-heading {
  font-size: 1.3rem;
  color: #0A2540;
  margin-bottom: 15px;
}

.product${id}-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 24px 0;
}

/* Lists */
.product${id}-module-list {
  list-style: none;
  padding: 0;
}

.product${id}-module-item {
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  margin-bottom: 12px;
  border-radius: 8px;
  font-size: 1.05rem;
  color: #4b5563;
  border-left: 4px solid #00BFA6;
}

.product${id}-process-list {
  list-style: none;
  padding: 0;
}

.product${id}-process-list li {
  padding: 20px;
  background: #f9fafb;
  border-radius: 8px;
  margin-bottom: 16px;
}

.product${id}-process-list strong {
  display: block;
  color: #1F7AE0;
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.product${id}-process-list p {
  font-size: 1rem !important;
  margin: 0 !important;
}

.product${id}-check-list, .product${id}-cross-list {
  list-style: none;
  padding: 0;
}

.product${id}-check-list li, .product${id}-cross-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 16px;
  font-size: 1.05rem;
  color: #4b5563;
}

.product${id}-check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #00BFA6;
  font-weight: bold;
}

.product${id}-cross-list li::before {
  content: "🛡";
  position: absolute;
  left: 0;
  color: #ef4444;
}

/* Workflow Steps */
.product${id}-workflow-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product${id}-step {
  display: flex;
  gap: 20px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 20px;
  border-radius: 12px;
}

.product${id}-step-number {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: #0A2540;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.product${id}-step-content h4 {
  color: #0A2540;
  margin-bottom: 8px;
  font-size: 1.15rem;
}

.product${id}-step-content p {
  font-size: 1rem !important;
  margin: 0 !important;
}

/* Tech Arch Grid */
.product${id}-tech-arch-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.product${id}-tech-card {
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border-left: 3px solid #1F7AE0;
}

.product${id}-tech-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: #64748b;
  margin-bottom: 8px;
  letter-spacing: 0.05em;
}

.product${id}-tech-card p {
  font-size: 1.05rem !important;
  color: #1e293b !important;
  margin: 0 !important;
}

/* Tags */
.product${id}-tags-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.product${id}-tag-group h4 {
  color: #1f2937;
  margin-bottom: 12px;
  font-size: 1rem;
}

.product${id}-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.product${id}-tag {
  background: #e0e7ff;
  color: #4338ca;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

/* CTA */
.product${id}-cta-card {
  background: #0A2540;
  color: #ffffff;
  padding: 60px 40px;
  text-align: center;
  border-radius: 16px;
}

.product${id}-cta-card h2 {
  color: #ffffff;
  border: none;
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.product${id}-cta-card p {
  color: #94a3b8;
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.product${id}-app-card {
  background: #ffffff;
  border-top: 4px solid #1F7AE0;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.product${id}-app-card h4 {
  font-size: 1.15rem;
  color: #111827;
  margin-bottom: 12px;
}

.product${id}-app-card p {
  font-size: 0.95rem !important;
  margin: 0 !important;
}

.product${id}-highlight-text {
  font-size: 1.25rem !important;
  line-height: 1.8 !important;
  color: #1e293b !important;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 992px) {
  .product${id}-layout {
    flex-direction: column;
  }
  .product${id}-sidebar {
    width: 100%;
    position: static;
  }
  .product${id}-toc-sticky {
    position: static;
    margin-bottom: 40px;
  }
  .product${id}-grid-2 {
    grid-template-columns: 1fr;
  }
}
`;
}

// Generate files for all products
for (const [key, product] of Object.entries(allProducts)) {
  const jsxCode = generateJSX(product);
  const cssCode = generateCSS(product.id);

  fs.writeFileSync(path.join(outDir, `Product${product.id}.jsx`), jsxCode);
  fs.writeFileSync(path.join(outDir, `Product${product.id}.css`), cssCode);
  console.log(`Generated Product${product.id}`);
}

console.log('All products successfully compiled!');
