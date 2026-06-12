import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product20.css';
import prd20 from "../../../assets/images/prd20.jpg";

const Product20 = () => {
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
    <div className="product20-detail-page">
      <section className="product20-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd20})` }}>
        <div className="product20-hero-content">
          <button className="product20-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Vehicle Emission Monitoring and Reduction Software</h1>
          <p>Enterprise cloud platform monitoring real-time vehicle emissions, analyzing exhaust parameters, and optimizing engine maps to reduce carbon footprints.</p>
        </div>
      </section>

      <div className="product20-container">
        <div className="product20-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product20-sidebar">
            <div className="product20-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product20-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product20-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product20-main-content">
            
            <section id="introduction" className="product20-content-section">
              <h2>Introduction</h2>
              <p>Environmental regulations and corporate sustainability targets require automotive manufacturers and fleet operators to reduce tailpipe emissions. Relying on laboratory test cycles is insufficient, as real-world driving emissions (RDE) vary based on traffic congestion, payload weights, and weather conditions. Our Vehicle Emission Monitoring and Reduction Software is an enterprise-grade cloud platform designed to track and optimize vehicle emissions in real-time.</p>
              <p>The platform aggregates data from exhaust gas sensors, engine controllers, and fuel flow meters via telematics gateways. Using advanced thermal and combustion models, the software calculates real-world carbon dioxide, nitrogen oxides (NOx), and particulate emissions. It provides fleet operators with auditable ESG reporting, and links with engine control modules (ECUs) to dynamically optimize engine maps, reducing overall carbon footprints.</p>
            </section>

            <section id="key-features" className="product20-content-section">
              <h2>Key Features</h2>
              <div className="product20-feature-grid">
                
                <div className="product20-card">
                  <h3 className="product20-card-title">Real-World Driving Emissions (RDE) Ingest</h3>
                  <p className="product20-card-desc">Tracks CO2, NOx, and particulate matter emissions in real-time under physical driving conditions.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">ECU Combustion Modeling</h3>
                  <p className="product20-card-desc">Models cylinder temperature cycles and air-fuel ratios to analyze emission trends.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Dynamic Engine Map Optimization</h3>
                  <p className="product20-card-desc">Interfaces with engine control modules to adjust injection timing and throttle maps, reducing emissions.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Auditable ESG Reporting Hub</h3>
                  <p className="product20-card-desc">Generates carbon offset and emission compliance logs that align with international auditing standards.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Catalyst Diagnostic Analyzer</h3>
                  <p className="product20-card-desc">Monitors catalytic converter efficiency, flagging soot buildup and urea injection anomalies.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Driver Eco-Coaching Dashboard</h3>
                  <p className="product20-card-desc">Guides drivers to adjust acceleration patterns, reducing fuel use and exhaust emissions.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Urban Zero-Emission Geofencing</h3>
                  <p className="product20-card-desc">Triggers hybrid vehicles to switch to electric-only mode automatically when entering clean-air zones.</p>
                </div>
                <div className="product20-card">
                  <h3 className="product20-card-title">Predictive Exhaust Wear System</h3>
                  <p className="product20-card-desc">Tracks parameters like exhaust backpressure and temperature to predict filter failures.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product20-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product20-glass-panel">
                <h3 className="product20-panel-heading">Industry Background</h3>
                <p>Historically, automotive emissions were measured in laboratory testing loops. However, real-world driving emissions (RDE) are often significantly higher due to stop-and-go traffic, elevation profiles, and extreme weather loads. Regulatory bodies are implementing strict RDE audits, requiring manufacturers to prove that vehicles comply with clean-air limits in physical use. Furthermore, fleet operators need verifiable emissions logs to meet corporate carbon reduction targets and secure sustainability financing.</p>
                <div className="product20-divider"></div>
                <h3 className="product20-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Measuring emissions dynamically is challenging because vehicles cannot carry laboratory gas analyzers. Software must estimate emissions using engine parameters (such as air mass flow, fuel injection profiles, and catalyst temperatures). Additionally, these models must execute in real-time on power-constrained vehicle ECUs, and data must be secured to prevent emissions-cheating software hacks.</p>
              </div>
            </section>

            <section id="functionalities" className="product20-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product20-module-list">
                
                <li className="product20-module-item">
                  <strong>Engine Metrics Parser:</strong> Extracts exhaust temperatures, fuel flow rates, and sensor metrics from the vehicle CAN bus.
                </li>
                <li className="product20-module-item">
                  <strong>Virtual Emissions Estimator:</strong> Uses physical equations to estimate tailpipe CO2, NOx, and soot output in real-time.
                </li>
                <li className="product20-module-item">
                  <strong>Dynamic ECU Mapper:</strong> Sends target combustion adjustments to engine ECUs to optimize air-fuel ratios.
                </li>
                <li className="product20-module-item">
                  <strong>ESG Carbon Calculator:</strong> Aggregates fuel consumption logs, computing overall fleet greenhouse gas footprints.
                </li>
                <li className="product20-module-item">
                  <strong>Exhaust Diagnostics Module:</strong> Monitors diesel particulate filters (DPF) and SCR catalysts to flag system wear.
                </li>
                <li className="product20-module-item">
                  <strong>Zero-Emission Zone Controller:</strong> Fuses GPS geofences with powertrain controllers to automate hybrid battery use.
                </li>
              </ul>
            </section>

            <section id="value" className="product20-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product20-highlight-text">Our Vehicle Emission Monitoring software delivers value by helping OEMs comply with global RDE regulations, avoiding massive compliance fines and product recalls. Fleet operators cut fuel consumption and emissions by up to 12% through driver eco-coaching and engine optimizations. The platform provides verifiable, auditable carbon offset reports that simplify corporate ESG disclosures. For hybrid vehicle fleets, the zero-emission geofencing ensures compliance with clean-air rules, avoiding city toll fees.</p>
            </section>

            <section id="workflow" className="product20-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product20-grid-2">
                <div>
                  <h3 className="product20-subheading">Operational Workflow</h3>
                  <div className="product20-workflow-steps">
                    
                    <div className="product20-step">
                      <div className="product20-step-number">1</div>
                      <div className="product20-step-content">
                        <h4>Telemetry Ingestion</h4>
                        <p>Engine speeds, fuel flows, and exhaust temperatures are read from the CAN bus by telematics units.</p>
                      </div>
                    </div>
                    <div className="product20-step">
                      <div className="product20-step-number">2</div>
                      <div className="product20-step-content">
                        <h4>Emissions Estimation</h4>
                        <p>The local ECU or edge processor calculates real-time tailpipe emissions using physical combustion models.</p>
                      </div>
                    </div>
                    <div className="product20-step">
                      <div className="product20-step-number">3</div>
                      <div className="product20-step-content">
                        <h4>Cloud Ingestion & Analysis</h4>
                        <p>Aggregated emissions logs are uploaded to the cloud, where the dashboard tracks daily fleet footprints.</p>
                      </div>
                    </div>
                    <div className="product20-step">
                      <div className="product20-step-number">4</div>
                      <div className="product20-step-content">
                        <h4>Engine Optimization</h4>
                        <p>The platform calculates optimized engine parameter offsets, sending adjustments to the vehicle ECU.</p>
                      </div>
                    </div>
                    <div className="product20-step">
                      <div className="product20-step-number">5</div>
                      <div className="product20-step-content">
                        <h4>Compliance Logs Export</h4>
                        <p>Weekly compliance summaries are generated, logging carbon offsets and catalyst health reports.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product20-subheading">Implementation Process</h3>
                  <ul className="product20-process-list">
                    
                    <li>
                      <strong>Phase 1: Deploy Telematics Configuration</strong>
                      <p>Install the diagnostics client onto the vehicle's telematics module or engine control gateway.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Configure CAN Databases</strong>
                      <p>Map engine variables like fuel injection parameters, SCR sensors, and air mass metrics.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Integrate GPS Geofences</strong>
                      <p>Define boundaries for urban clean-air zones in the platform mapping console.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Establish Ingestion Pipelines</strong>
                      <p>Configure high-throughput data streams from vehicles to the cloud emissions databases.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Calibrate Combustion Models</strong>
                      <p>Train AI models on engine test-bench records to map sensor variables to actual tailpipe emissions.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Launch Monitoring Console</strong>
                      <p>Go live with the carbon management dashboard, tracking emissions and generating compliance audits.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product20-content-section">
              <h2>System Architecture</h2>
              <p>The platform features a hybrid edge-cloud architecture. Physical emissions estimation models run on the vehicle's engine ECU or telematics module, preventing high cellular data costs by calculating values locally. The cloud platform, hosted on AWS, maintains fleet-wide carbon metrics databases, running algorithms to optimize engine parameters and schedule catalyst cleaning operations.</p>
            </section>

            <section id="tech-arch" className="product20-content-section">
              <h2>Technical Architecture</h2>
              <div className="product20-tech-arch-grid">
                
                <div className="product20-tech-card">
                  <span className="product20-tech-label">FRONTEND</span>
                  <p>Web-based dispatcher dashboard built with React and TypeScript, displaying live carbon tracking charts and geofence zones.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">BACKEND</span>
                  <p>High-performance services developed in Go, hosted in Kubernetes containers for scalable metric tracking.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing incoming telemetry packets and encrypting connections via TLS.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">PROCESSING</span>
                  <p>Apache Kafka event pipeline routing engine updates to InfluxDB for dashboard visualization.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">AI ML</span>
                  <p>Gradient boosting algorithms predicting vehicle emission rates and optimizing air-fuel maps.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">EDGE</span>
                  <p>Highly optimized C++ binaries running directly on engine control modules to calculate emissions in real-time.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">SECURITY</span>
                  <p>Hardware Security Module (HSM) checking signature integrity of code, secure boot verification, and database encryption.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon EKS, RDS (PostgreSQL) for databases, and S3 for archives.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">INTEGRATION</span>
                  <p>API bridges linking with ERP software like SAP and third-party logistics software integration.</p>
                </div>
                <div className="product20-tech-card">
                  <span className="product20-tech-label">MONITORING</span>
                  <p>Real-time CPU and memory monitoring for edge agents, combined with automated security alerts.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product20-content-section">
              <h2>Technologies Used</h2>
              <div className="product20-tags-container">
                
                <div className="product20-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">C++</span><span className="product20-tag">C</span><span className="product20-tag">Go</span><span className="product20-tag">Python</span><span className="product20-tag">TypeScript</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">React</span><span className="product20-tag">Node.js</span><span className="product20-tag">Spring Boot</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">PostgreSQL</span><span className="product20-tag">InfluxDB</span><span className="product20-tag">Redis</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">AWS</span><span className="product20-tag">Azure</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">TensorFlow Lite</span><span className="product20-tag">Scikit-learn</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>IOT</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">OBD-II telematics</span><span className="product20-tag">Exhaust sensors</span><span className="product20-tag">Engine controllers</span><span className="product20-tag">GPS modems</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">MQTT over TLS</span><span className="product20-tag">SOME/IP</span><span className="product20-tag">CAN</span><span className="product20-tag">J1939</span><span className="product20-tag">HTTPS</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">Docker</span><span className="product20-tag">Kubernetes</span><span className="product20-tag">Terraform</span><span className="product20-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product20-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product20-tags">
                    <span className="product20-tag">mTLS</span><span className="product20-tag">HSM encryption</span><span className="product20-tag">Secure Boot</span><span className="product20-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product20-content-section">
              <h2>Real-World Applications</h2>
              <div className="product20-feature-grid">
                
                <div className="product20-app-card">
                  <h4>Metropolitan Delivery Fleet Carbon Tracking</h4>
                  <p>Tracked real-world CO2 emissions for 600 delivery vans, reducing fuel consumption by 10% via eco-coaching.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Hybrid SUV Clean Air Geofencing</h4>
                  <p>Deploys in hybrid SUVs, automatically switching to electric-only mode inside London's Ultra Low Emission Zone.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Heavy Duty Truck NOx Monitoring</h4>
                  <p>Monitored SCR catalyst efficiency in 150 diesel semi-trucks, avoiding urea injection faults.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Car Rental Fleet Compliance Auditing</h4>
                  <p>Automated emissions log generation for 3,000 rental cars, simplifying ESG reporting requirements.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Municipal bus fleet soot diagnostics</h4>
                  <p>Tracked diesel particulate filter soot loads in municipal buses, scheduling cleaning before filters clogged.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Port Terminal Freight Clean Sync</h4>
                  <p>Monitored emission footprints for 200 cargo transport trucks inside port facilities, reducing idling.</p>
                </div>
                <div className="product20-app-card">
                  <h4>Automated ECU Map Tuning Pilot</h4>
                  <p>Adjusted fuel maps on test vehicles, reducing NOx emissions by 8% during stop-and-go city driving.</p>
                </div>
                <div className="product20-app-card">
                  <h4>School Bus Emissions Reporting</h4>
                  <p>Provided monthly carbon offset summaries for school districts operating mixed electric and diesel bus fleets.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product20-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product20-grid-2">
                <div className="product20-benefits-box">
                  <h3 className="product20-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product20-check-list">
                    
                    <li>
                      <strong>Guaranteed RDE Compliance:</strong> Ensures vehicles comply with real-world driving emission standards, preventing regulatory fines.
                    </li>
                    <li>
                      <strong>Lower Fuel Consumption:</strong> Saves up to 12% on fuel costs through combustion optimization and driver eco-coaching.
                    </li>
                    <li>
                      <strong>Auditable ESG Reporting:</strong> Generates verified carbon offset metrics directly linked to vehicle fuel consumption profiles.
                    </li>
                    <li>
                      <strong>Automated Zone Switch:</strong> Switches hybrid vehicles to electric-only mode dynamically inside city zero-emission geofences.
                    </li>
                    <li>
                      <strong>Extended Catalyst Lifespan:</strong> Detects catalytic converter errors early, preventing soot buildup and filter replacement costs.
                    </li>
                  </ul>
                </div>
                <div className="product20-challenges-box">
                  <h3 className="product20-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product20-cross-list">
                    
                    <li>
                      <strong>Virtual Estimation Limits:</strong> Accurately estimating tailpipe emissions from indirect engine parameters across dynamic workloads.
                    </li>
                    <li>
                      <strong>Legacy Vehicle Compatibility:</strong> Interfacing with older engines that lack high-precision exhaust temperature and oxygen sensors.
                    </li>
                    <li>
                      <strong>High Cryptographic Demands:</strong> Securing engine map adjustments against hacking attempts that could compromise vehicle safety.
                    </li>
                    <li>
                      <strong>Varying Environmental Conditions:</strong> Calibrating combustion models to remain accurate across high altitudes and extreme temperature ranges.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product20-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product20-glass-panel">
                <h3 className="product20-panel-heading">Future Scope</h3>
                <p>The future of emissions management lies in real-time cooperative emission routing and blockchain carbon trading. Future systems will communicate with city traffic grids, routing heavy vehicles away from high-pollution zones during atmospheric inversions. Vehicle digital twins will trade carbon offsets dynamically on blockchain ledgers, enabling fleet operators to monetize low-emission driving. Additionally, integrating solid-state ammonia sensors will allow for sub-parts-per-million accuracy in tailpipe diagnostics.</p>
                <div className="product20-divider"></div>
                <h3 className="product20-panel-heading">Industry Impact</h3>
                <p>This platform is crucial for reducing the environmental footprint of logistics operations, helping companies meet zero-emission targets. By replacing laboratory calculations with real-world data, it supports clean transportation and improves urban air quality.</p>
              </div>
            </section>

            <section className="product20-cta-section">
              <div className="product20-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Vehicle Emission Monitoring and Reduction Software provides the secure, scalable, and highly accurate platform required to manage emissions. By linking engine diagnostics with cloud carbon analytics, we help operators scale and succeed.</p>
                <button className="product20-btn product20-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product20;
