import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product15.css';
import prd15 from "../../../assets/images/prd15.jpg";

const Product15 = () => {
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
    <div className="product15-detail-page">
      <section className="product15-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd15})` }}>
        <div className="product15-hero-content">
          <button className="product15-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Fleet Tracking and Management Systems</h1>
          <p>Comprehensive cloud platform for real-time asset tracking, fuel cards management, maintenance scheduling, and safety compliance.</p>
        </div>
      </section>

      <div className="product15-container">
        <div className="product15-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product15-sidebar">
            <div className="product15-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product15-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product15-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product15-main-content">
            
            <section id="introduction" className="product15-content-section">
              <h2>Introduction</h2>
              <p>Operating a commercial fleet requires balancing vehicle tracking, fuel budgets, preventative maintenance, and safety compliance. Relying on separate tools for tracking, maintenance, and accounting leads to data silos and operational delays. Our Fleet Tracking and Management System is an enterprise-grade cloud platform designed to centralize fleet management in real-time.</p>
              <p>The platform aggregates data from GPS hardware, vehicle computer diagnostics, fuel card networks, and driver logs into a single unified console. Using advanced analytics and automated workflows, the software helps operators track vehicle positions, schedule maintenance, audit fuel purchases, score driver safety, and ensure compliance with electronic logging device (ELD) regulations. It acts as the operational brain of the fleet, maximizing asset lifespans and reducing costs.</p>
            </section>

            <section id="key-features" className="product15-content-section">
              <h2>Key Features</h2>
              <div className="product15-feature-grid">
                
                <div className="product15-card">
                  <h3 className="product15-card-title">Unified Fleet GPS Map</h3>
                  <p className="product15-card-desc">Displays real-time vehicle positions, active routes, and driver details with polygon geofence alarms.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Diagnostic Maintenance Sync</h3>
                  <p className="product15-card-desc">Schedules vehicle servicing automatically based on real-time mileage, engine hours, or active fault codes.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Fuel Card Integration & Audit</h3>
                  <p className="product15-card-desc">Integrates fuel transactions with vehicle locations, flagging fraud and verifying MPG stats.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">ELD Safety Compliance</h3>
                  <p className="product15-card-desc">Automates driver hours-of-service (HOS) tracking to ensure compliance with transport safety rules.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Driver Behavior Scoring</h3>
                  <p className="product15-card-desc">Analyzes telemetry to score drivers based on speeding, harsh braking, and excessive engine idling.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Asset Allocation Control</h3>
                  <p className="product15-card-desc">Tracks asset utilization across projects, identifying underused vehicles and optimizing fleet size.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Mobile Driver App Portal</h3>
                  <p className="product15-card-desc">Provides drivers with tools to complete digital vehicle inspection reports (DVIR) and log hours.</p>
                </div>
                <div className="product15-card">
                  <h3 className="product15-card-title">Automated Tax Reporting</h3>
                  <p className="product15-card-desc">Calculates state-by-state mileage logs for automated IFTA fuel tax reporting and compliance audits.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product15-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product15-glass-panel">
                <h3 className="product15-panel-heading">Industry Background</h3>
                <p>Commercial fleets have historically operated with limited real-time visibility. Fleet managers relied on manual reports, monthly fuel statements, and scheduled service windows, which often failed to detect fuel card fraud, vehicle misuse, or early diagnostic trouble codes. This lack of data resulted in high fuel costs, premature vehicle wear, and unexpected roadside breakdowns. Modern connected vehicle technologies allow fleets to centralize tracking, maintenance, and safety into a single real-time data platform, improving efficiency.</p>
                <div className="product15-divider"></div>
                <h3 className="product15-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Fleet managers must coordinate complex operations while complying with strict safety and tax regulations. Mixed fleets containing passenger cars, class-8 trucks, and construction equipment use different telematics systems, making data aggregation difficult. Additionally, processing millions of telemetry updates and linking them with financial transactions requires secure, scalable database architectures.</p>
              </div>
            </section>

            <section id="functionalities" className="product15-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product15-module-list">
                
                <li className="product15-module-item">
                  <strong>Telemetry Parser & Gateway:</strong> Accepts high-frequency GPS and diagnostic data packets from telematics hardware modems.
                </li>
                <li className="product15-module-item">
                  <strong>Fuel Audit Engine:</strong> Compares fuel card transaction timestamps with vehicle GPS logs to identify card skimming fraud.
                </li>
                <li className="product15-module-item">
                  <strong>HOS Compliance Module:</strong> Calculates driver driving limits and rest breaks, alerting dispatchers before violations occur.
                </li>
                <li className="product15-module-item">
                  <strong>Asset Maintenance Tracker:</strong> Tracks maintenance logs, parts inventories, and schedules service windows based on engine wear.
                </li>
                <li className="product15-module-item">
                  <strong>Driver safety Coach:</strong> Generates driving alerts, helping drivers improve safety and reduce fuel consumption.
                </li>
                <li className="product15-module-item">
                  <strong>Tax Report Generator:</strong> Aggregates state mileage statistics to automate quarterly fuel tax filings.
                </li>
              </ul>
            </section>

            <section id="value" className="product15-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product15-highlight-text">Our Fleet Tracking platform delivers value by reducing unplanned breakdowns by 40% through preventative diagnostic alerts. It lowers fuel costs by up to 12% by tracking and reducing idle times and coaching drivers on safe habits. The system eliminates the manual effort of compliance logging, reducing auditing risks and preventing HOS fines. By tracking asset utilization, companies can optimize their fleet size, reducing capital expenditures on unnecessary vehicles.</p>
            </section>

            <section id="workflow" className="product15-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product15-grid-2">
                <div>
                  <h3 className="product15-subheading">Operational Workflow</h3>
                  <div className="product15-workflow-steps">
                    
                    <div className="product15-step">
                      <div className="product15-step-number">1</div>
                      <div className="product15-step-content">
                        <h4>Telemetry Collection</h4>
                        <p>Vehicle coordinates, odometer readings, and engine trouble codes are read from the OBD-II/J1939 ports.</p>
                      </div>
                    </div>
                    <div className="product15-step">
                      <div className="product15-step-number">2</div>
                      <div className="product15-step-content">
                        <h4>Data Upload</h4>
                        <p>The telematics unit transmits data via cellular networks to the cloud fleet management platform.</p>
                      </div>
                    </div>
                    <div className="product15-step">
                      <div className="product15-step-number">3</div>
                      <div className="product15-step-content">
                        <h4>Financial Ingestion</h4>
                        <p>Fuel card networks stream transaction details, and drivers complete digital vehicle inspection logs.</p>
                      </div>
                    </div>
                    <div className="product15-step">
                      <div className="product15-step-number">4</div>
                      <div className="product15-step-content">
                        <h4>Operations Analysis</h4>
                        <p>The platform audits transactions, updates maintenance logs, and scores driver safety profiles.</p>
                      </div>
                    </div>
                    <div className="product15-step">
                      <div className="product15-step-number">5</div>
                      <div className="product15-step-content">
                        <h4>Dashboard Update</h4>
                        <p>The dispatcher map updates, geofence alarms trigger, and maintenance reports are dispatched to fleet managers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product15-subheading">Implementation Process</h3>
                  <ul className="product15-process-list">
                    
                    <li>
                      <strong>Phase 1: Install Telematics Devices</strong>
                      <p>Deploy GPS/OBD-II hardware across passenger cars, trucks, and heavy equipment assets.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Register Assets</strong>
                      <p>Upload vehicle VINs, license plates, fuel tank capacities, and maintenance schedules to the database.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Link Fuel Cards</strong>
                      <p>Configure API feeds from fuel card issuers (e.g., WEX or Fleetcor) to enable transaction auditing.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Configure Driver Profiles</strong>
                      <p>Create driver user logs and configure hours-of-service rules in the compliance console.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Integrate Maintenance APIs</strong>
                      <p>Link the system with local mechanics and parts suppliers to automate service bookings.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Go Live with Fleet Dashboard</strong>
                      <p>Monitor vehicle locations, track compliance logs, and review daily fuel efficiency reports.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product15-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on a scalable cloud-native microservices architecture. A high-throughput telemetry gateway handles incoming GPS updates, while integration microservices parse financial data from fuel card issuers. Data is stored in secure relational databases for financial records, and time-series databases for tracking logs and diagnostic metrics.</p>
            </section>

            <section id="tech-arch" className="product15-content-section">
              <h2>Technical Architecture</h2>
              <div className="product15-tech-arch-grid">
                
                <div className="product15-tech-card">
                  <span className="product15-tech-label">FRONTEND</span>
                  <p>Web-based dispatcher portal built with React, styled with modular CSS, featuring map layers via Google Maps API.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">BACKEND</span>
                  <p>Microservices developed in Go, packaged in Docker containers and orchestrated by Kubernetes for high availability.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">GATEWAY</span>
                  <p>Secured NGINX API Gateway managing incoming telematics packets and encrypting connections via HTTPS/TLS.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">PROCESSING</span>
                  <p>Apache Kafka streams coordinates and diagnostic codes to Apache Flink for real-time corridor alerts.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">AI ML</span>
                  <p>Machine learning classifiers trained in Python to identify anomalous fuel transactions and predict mechanical failures.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">EDGE</span>
                  <p>C++ firmware deployed on telematics hardware, executing local speed checks and geofence evaluations.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">SECURITY</span>
                  <p>AES-256 database encryption, HTTPS/TLS data transfer pathways, and OAuth 2.0 user login management.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">CLOUD</span>
                  <p>AWS infrastructure featuring Amazon RDS (PostgreSQL) for profiles, InfluxDB for logs, and EKS for containers.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">INTEGRATION</span>
                  <p>REST APIs, SOAP web services, and Webhooks for ERP and third-party logistics software integration.</p>
                </div>
                <div className="product15-tech-card">
                  <span className="product15-tech-label">MONITORING</span>
                  <p>Datadog infrastructure monitoring, Prometheus metrics, and automated alert paging systems.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product15-content-section">
              <h2>Technologies Used</h2>
              <div className="product15-tags-container">
                
                <div className="product15-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">Go</span><span className="product15-tag">Java</span><span className="product15-tag">Python</span><span className="product15-tag">TypeScript</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">React</span><span className="product15-tag">Node.js</span><span className="product15-tag">Spring Boot</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">PostgreSQL</span><span className="product15-tag">InfluxDB</span><span className="product15-tag">Redis</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">AWS</span><span className="product15-tag">Azure</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">Scikit-learn</span><span className="product15-tag">TensorFlow</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>IOT</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">GPS Hardware</span><span className="product15-tag">OBD-II dongles</span><span className="product15-tag">J1939 gateways</span><span className="product15-tag">BLE tire sensors</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">MQTT</span><span className="product15-tag">HTTPS</span><span className="product15-tag">TCP</span><span className="product15-tag">UDP</span><span className="product15-tag">CAN-bus</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">Docker</span><span className="product15-tag">Kubernetes</span><span className="product15-tag">Terraform</span><span className="product15-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product15-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product15-tags">
                    <span className="product15-tag">AES-256</span><span className="product15-tag">TLS 1.3</span><span className="product15-tag">OAuth 2.0</span><span className="product15-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product15-content-section">
              <h2>Real-World Applications</h2>
              <div className="product15-feature-grid">
                
                <div className="product15-app-card">
                  <h4>Logistics Truck Fleet Tracking</h4>
                  <p>Tracked 500 semi-trucks, reducing idle times by 22% and automating HOS compliance audits.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Municipal Utility Asset Management</h4>
                  <p>Monitored GPS locations and engine hours for 350 public works trucks, improving asset allocation.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Construction Equipment Maintenance Sync</h4>
                  <p>Tracked hours and fault codes in 200 heavy excavators, scheduling preventative maintenance.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Car Rental Mileage Audit</h4>
                  <p>Automated mileage logs for 1,500 rental vehicles, streamlining billing and preventative servicing.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Electric Delivery Van Fleet Sync</h4>
                  <p>Monitored state-of-charge and battery health in 100 electric vans, optimizing depot charging schedules.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Refrigerated Cargo Temp Monitoring</h4>
                  <p>Linked vehicle tracking with cargo temperature sensors, preventing cold chain logistics failures.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Ride-Hailing Driver Safety Scoring</h4>
                  <p>Analyzed driving behavior in 1,200 active ride-sharing cars, reducing accident rates by 15%.</p>
                </div>
                <div className="product15-app-card">
                  <h4>Emergency Ambulance Fleet Diagnostics</h4>
                  <p>Tracked battery and engine codes in real-time, ensuring maximum vehicle readiness.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product15-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product15-grid-2">
                <div className="product15-benefits-box">
                  <h3 className="product15-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product15-check-list">
                    
                    <li>
                      <strong>Optimized Fleet Tracking:</strong> Displays real-time vehicle positions, enhancing dispatch speed and routing efficiency.
                    </li>
                    <li>
                      <strong>Lower Maintenance Costs:</strong> Saves up to 20% by scheduling preventative servicing and preventing engine failures.
                    </li>
                    <li>
                      <strong>Prevented Fuel Fraud:</strong> Audits fuel transactions against actual vehicle GPS coordinates, blocking card skimming fraud.
                    </li>
                    <li>
                      <strong>Streamlined Safety Compliance:</strong> Automates ELD logs, ensuring compliance with hours-of-service regulations and reducing fines.
                    </li>
                    <li>
                      <strong>Protected Fleet Assets:</strong> Enforces safe driving profiles, extending the economic lifespan of fleet vehicles.
                    </li>
                  </ul>
                </div>
                <div className="product15-challenges-box">
                  <h3 className="product15-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product15-cross-list">
                    
                    <li>
                      <strong>Mixed Fleet Telematics:</strong> Aggregating data from various hardware brands and vehicle models into a single database.
                    </li>
                    <li>
                      <strong>Cellular Signal Losses:</strong> Caching telemetry and recovering from connection dropouts during transit through tunnels.
                    </li>
                    <li>
                      <strong>High Transaction Volume:</strong> Ingesting and processing millions of GPS updates and fuel card transactions during peak logistics hours.
                    </li>
                    <li>
                      <strong>Privacy Compliance:</strong> Balancing real-time tracking with employee privacy laws and local labor regulations.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product15-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product15-glass-panel">
                <h3 className="product15-panel-heading">Future Scope</h3>
                <p>The future of fleet tracking lies in AI dispatching and blockchain-backed vehicle history logs. Future systems will feature AI assistants that automatically manage maintenance schedules and route allocation. Edge units will run local diagnostics to detect alternator and engine failures before dashboards display warnings. Additionally, blockchain ledgers will secure service logs, creating a verified maintenance history that protects resale value.</p>
                <div className="product15-divider"></div>
                <h3 className="product15-panel-heading">Industry Impact</h3>
                <p>This platform is the core coordinator for modern logistics operations, transforming fleets into connected assets. By replacing manual paperwork with automated data streams, it improves transport safety, reduces costs, and supports the transition to clean energy fleets.</p>
              </div>
            </section>

            <section className="product15-cta-section">
              <div className="product15-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Fleet Tracking and Management System provides the secure, scalable, and highly accurate platform required to operate connected fleets. By linking tracking diagnostics with financial transactions, we help operators scale with confidence.</p>
                <button className="product15-btn product15-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product15;
