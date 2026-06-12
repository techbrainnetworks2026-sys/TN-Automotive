import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product12.css';
import prd12 from "../../../assets/images/prd12.jpg";

const Product12 = () => {
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
    <div className="product12-detail-page">
      <section className="product12-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd12})` }}>
        <div className="product12-hero-content">
          <button className="product12-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>EV Charging Infrastructure Management Software</h1>
          <p>Enterprise cloud platform for real-time charging network monitoring, load management, dynamic pricing, and billing integration.</p>
        </div>
      </section>

      <div className="product12-container">
        <div className="product12-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product12-sidebar">
            <div className="product12-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product12-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product12-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product12-main-content">
            
            <section id="introduction" className="product12-content-section">
              <h2>Introduction</h2>
              <p>The rapid rise in electric vehicle (EV) adoption requires a reliable, smart charging network. Charge point operators (CPOs) and e-mobility service providers (eMSPs) face significant challenges—including charger uptime maintenance, dynamic energy grid constraints, payment integrations, and complex user access control. Our EV Charging Infrastructure Management Software is an enterprise-grade cloud platform designed to manage and optimize charging networks in real-time.</p>
              <p>The platform utilizes the Open Charge Point Protocol (OCPP) to connect with any compliant charger hardware globally. By integrating smart charging algorithms, load balancing systems, and dynamic payment gateways, the software enables operators to maximize station uptime, prevent grid overload, and deliver a seamless payment experience for EV drivers. It bridges the gap between clean energy utility grids and public/private charging stations, providing a unified management console.</p>
            </section>

            <section id="key-features" className="product12-content-section">
              <h2>Key Features</h2>
              <div className="product12-feature-grid">
                
                <div className="product12-card">
                  <h3 className="product12-card-title">Hardware-Agnostic OCPP Connection</h3>
                  <p className="product12-card-desc">Connects with any charger hardware globally via OCPP 1.6-J and OCPP 2.0.1 protocols.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Dynamic Load Management (DLM)</h3>
                  <p className="product12-card-desc">Distributes available power across chargers in real-time to avoid depot grid overloads.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Automated Charger Diagnostics</h3>
                  <p className="product12-card-desc">Monitors connector health, charging errors, and temperatures, triggering automated reset commands.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Flexible Billing & Tariffs</h3>
                  <p className="product12-card-desc">Supports time-of-use (ToU) tariffs, subscription models, parking fee rules, and dynamic demand pricing.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Mobile Driver App Integration</h3>
                  <p className="product12-card-desc">Provides APIs for mobile apps, enabling drivers to find stations, reserve plugs, and pay.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">OCPI Roaming Integration</h3>
                  <p className="product12-card-desc">Connects networks with third-party networks via OCPI to allow cross-network charging roaming.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Vehicle-to-Grid (V2G) Scheduling</h3>
                  <p className="product12-card-desc">Coordinates dynamic energy discharge from EV batteries back to local power grids during peak loads.</p>
                </div>
                <div className="product12-card">
                  <h3 className="product12-card-title">Depot Charging Orchestrator</h3>
                  <p className="product12-card-desc">Optimizes commercial truck fleets, scheduling charges based on truck delivery departures and grid costs.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product12-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product12-glass-panel">
                <h3 className="product12-panel-heading">Industry Background</h3>
                <p>Early EV charging networks operated on simple, uncoordinated connections: plug in a car, and it draws maximum power. As charging speeds exceed 350kW per plug, charging multiple vehicles at a single depot can destabilize local power grids. Grid operators charge massive penalties for exceeding peak draw thresholds, making unmanaged charging financially unsustainable. Furthermore, chargers frequently experience software freeze-ups, cable damage, or payment errors, resulting in high station downtime. Resolving these challenges requires a smart management platform that tracks charger health and dynamically coordinates energy distribution.</p>
                <div className="product12-divider"></div>
                <h3 className="product12-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Charge point operators must manage a mix of charger brands with varying levels of protocol compliance. Integrating these hardware types, handling payment routing across different banks, and maintaining high uptime is difficult. Additionally, depots face power constraints, meaning they cannot charge all vehicles at maximum rate simultaneously. Operators need a system that balances power loads, resolves charger errors remotely, and integrates with enterprise dispatch systems.</p>
              </div>
            </section>

            <section id="functionalities" className="product12-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product12-module-list">
                
                <li className="product12-module-item">
                  <strong>OCPP Connection Broker:</strong> Maintains bidirectional JSON-over-WebSockets connections to thousands of active charging stations.
                </li>
                <li className="product12-module-item">
                  <strong>Smart Charging Manager:</strong> Sends charging profile limits (power caps) to specific chargers based on local grid constraints.
                </li>
                <li className="product12-module-item">
                  <strong>Payment Routing Engine:</strong> Handles credit card processing, RFID tap validation, Apple Pay, and neobank subscription bills.
                </li>
                <li className="product12-module-item">
                  <strong>Alert & Ticket Dispatcher:</strong> Flags charger hardware faults, generating maintenance tickets for local technicians automatically.
                </li>
                <li className="product12-module-item">
                  <strong>Roaming Coordinator:</strong> Manages OCPI connections, syncing charger availability and billing metrics with partner networks.
                </li>
                <li className="product12-module-item">
                  <strong>Grid Load Monitor:</strong> Monitors depot power meters in real-time to adjust charger outputs and prevent building blackouts.
                </li>
              </ul>
            </section>

            <section id="value" className="product12-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product12-highlight-text">Our EV Charging Infrastructure software delivers value by increasing station uptime to 99% through automated remote diagnostics and restarts. It cuts depot energy peak charges by up to 40% by dynamically shifting high-power charging to off-peak hours. The system enables new revenue streams through flexible pricing tariffs, parking reservation fees, and carbon offset generation. For fleet depots, it guarantees that all trucks are fully charged for their morning delivery routes, avoiding operational delays.</p>
            </section>

            <section id="workflow" className="product12-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product12-grid-2">
                <div>
                  <h3 className="product12-subheading">Operational Workflow</h3>
                  <div className="product12-workflow-steps">
                    
                    <div className="product12-step">
                      <div className="product12-step-number">1</div>
                      <div className="product12-step-content">
                        <h4>Charger Boot & Connect</h4>
                        <p>The charging station boots up, connects via cellular/fiber, and registers with the cloud broker using OCPP.</p>
                      </div>
                    </div>
                    <div className="product12-step">
                      <div className="product12-step-number">2</div>
                      <div className="product12-step-content">
                        <h4>User Authentication</h4>
                        <p>The driver initiates charging using an RFID card, mobile app QR scan, or Plug & Charge (ISO 15118).</p>
                      </div>
                    </div>
                    <div className="product12-step">
                      <div className="product12-step-number">3</div>
                      <div className="product12-step-content">
                        <h4>Load Profile Calculation</h4>
                        <p>The smart charging engine checks depot power draw and calculates the optimal charging speed for the vehicle.</p>
                      </div>
                    </div>
                    <div className="product12-step">
                      <div className="product12-step-number">4</div>
                      <div className="product12-step-content">
                        <h4>Session Monitoring</h4>
                        <p>The charger sends energy metrics every 10 seconds, while the system checks for thermal anomalies or connection drops.</p>
                      </div>
                    </div>
                    <div className="product12-step">
                      <div className="product12-step-number">5</div>
                      <div className="product12-step-content">
                        <h4>Session Close & Billing</h4>
                        <p>When the battery is full or the driver disconnects, the session stops, payment is processed, and transaction logs are archived.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product12-subheading">Implementation Process</h3>
                  <ul className="product12-process-list">
                    
                    <li>
                      <strong>Phase 1: Register Charger Hardware</strong>
                      <p>Add the charging station's serial numbers and model parameters to the management console.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Configure OCPP Endpoints</strong>
                      <p>Point the charger's internal firmware configuration to the cloud platform's secure WebSocket URL.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Set Up Load Boundaries</strong>
                      <p>Input the depot's maximum allowable power draw and charger circuit layouts.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Integrate Payment Gateways</strong>
                      <p>Connect Stripe, PayPal, or specialized RFID validation partners to the billing engine.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Define Pricing Tariffs</strong>
                      <p>Create time-of-use, member-only, and parking fee rules in the billing dashboard.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Launch Network Operations</strong>
                      <p>Go live with the operator console, publish station listings to navigation maps, and monitor charging sessions.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product12-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on a high-throughput, cloud-native microservices architecture designed to maintain persistent WebSocket connections. The OCPP broker layer is highly scalable, handling millions of simultaneous messages. Transactional logs, payment data, and charging records are stored in secure relational databases, while time-series metrics are routed to fast telemetry stores for dashboard visualization.</p>
            </section>

            <section id="tech-arch" className="product12-content-section">
              <h2>Technical Architecture</h2>
              <div className="product12-tech-arch-grid">
                
                <div className="product12-tech-card">
                  <span className="product12-tech-label">FRONTEND</span>
                  <p>Operator dashboard built with React and Redux, displaying real-time map positions, charger states, and revenue trends.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">BACKEND</span>
                  <p>High-performance services developed in Go, optimized for handling concurrent WebSocket connections with low latency.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">GATEWAY</span>
                  <p>API Gateway managing WebSocket routing, mTLS validation, and token-based authentication.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">PROCESSING</span>
                  <p>Apache Kafka event pipeline routing charger metrics to InfluxDB for dashboard graphing.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">AI ML</span>
                  <p>Predictive demand algorithms forecasting station traffic and grid load peaks using historic weather and transit data.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">EDGE</span>
                  <p>Lightweight OCPP client software deployed inside smart charging stations for local control and diagnostic caching.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">SECURITY</span>
                  <p>mTLS authentication for all chargers, AES-256 database encryption, and compliance with PCI-DSS payment rules.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon EKS, RDS (PostgreSQL), and InfluxDB cloud metrics clusters.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">INTEGRATION</span>
                  <p>OCPI API integrations for network roaming, OpenADR for demand response, and REST APIs for billing systems.</p>
                </div>
                <div className="product12-tech-card">
                  <span className="product12-tech-label">MONITORING</span>
                  <p>Prometheus monitoring, ELK log analysis, and automated paging alerts for offline charger networks.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product12-content-section">
              <h2>Technologies Used</h2>
              <div className="product12-tags-container">
                
                <div className="product12-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">Go</span><span className="product12-tag">Java</span><span className="product12-tag">Python</span><span className="product12-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">Spring Boot</span><span className="product12-tag">React</span><span className="product12-tag">Node.js</span><span className="product12-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">PostgreSQL</span><span className="product12-tag">InfluxDB</span><span className="product12-tag">Redis</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">AWS</span><span className="product12-tag">Azure</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">Scikit-learn</span><span className="product12-tag">Prophet (for demand forecasting)</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>IOT</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">EV Charging Stations (AC/DC)</span><span className="product12-tag">Smart Meters</span><span className="product12-tag">OCPP controllers</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">OCPP 1.6/2.0.1</span><span className="product12-tag">OCPI 2.2.1</span><span className="product12-tag">OpenADR 2.0b</span><span className="product12-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">Docker</span><span className="product12-tag">Kubernetes</span><span className="product12-tag">Terraform</span><span className="product12-tag">GitHub Actions</span>
                  </div>
                </div>
                <div className="product12-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product12-tags">
                    <span className="product12-tag">mTLS</span><span className="product12-tag">ISO 15118 security</span><span className="product12-tag">PCI-DSS compliance</span><span className="product12-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product12-content-section">
              <h2>Real-World Applications</h2>
              <div className="product12-feature-grid">
                
                <div className="product12-app-card">
                  <h4>Public Fast-Charging Network Management</h4>
                  <p>Managed 500 DC fast chargers across a highway network, providing 99.2% uptime and integrated RFID billing.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Commercial Delivery Fleet Depot Sync</h4>
                  <p>Balanced charging loads for 120 electric delivery vans at a metropolitan logistics depot, avoiding peak charges.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Municipal Bus Depot Smart Charge</h4>
                  <p>Orchestrated charging schedules for 50 electric transit buses, ensuring all buses are charged before routes start.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Corporate Office Load Balancing</h4>
                  <p>Managed 80 AC employee chargers in a corporate garage, dynamically adjusting power based on office building consumption.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Apartment Building Tenant Billing</h4>
                  <p>Integrated charger billing with apartment tenant management systems, tracking individual energy usage and billing monthly.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Retail Parking Lot Dynamic Pricing</h4>
                  <p>Implemented dynamic pricing at a shopping mall charging hub, adjusting rates based on local shopping peak hours.</p>
                </div>
                <div className="product12-app-card">
                  <h4>Utility Demand Response Integration</h4>
                  <p>Coordinated a network-wide load reduction event across 1,000 public chargers, helping stabilize the regional power grid.</p>
                </div>
                <div className="product12-app-card">
                  <h4>V2G Grid Discharge Pilot</h4>
                  <p>Orchestrated battery discharge from 20 electric school buses back to the grid during summer peak load hours.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product12-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product12-grid-2">
                <div className="product12-benefits-box">
                  <h3 className="product12-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product12-check-list">
                    
                    <li>
                      <strong>Maximum Charger Uptime:</strong> Maintains 99% network uptime through automated remote diagnostics and reboot commands.
                    </li>
                    <li>
                      <strong>Reduced Grid Penalties:</strong> Prevents depot grid overloads through dynamic load balancing, cutting utility bills by up to 40%.
                    </li>
                    <li>
                      <strong>Flexible Billing Options:</strong> Supports time-of-use tariffs, RFID tags, mobile app codes, and subscription billing plans.
                    </li>
                    <li>
                      <strong>Interoperable Roaming Access:</strong> Enables cross-network charging using OCPI, driving higher traffic to stations.
                    </li>
                    <li>
                      <strong>Scalable Network Control:</strong> Allows operators to add and manage thousands of chargers from a single web dashboard.
                    </li>
                  </ul>
                </div>
                <div className="product12-challenges-box">
                  <h3 className="product12-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product12-cross-list">
                    
                    <li>
                      <strong>OCPP Hardware Non-Standardization:</strong> Managing minor deviations in OCPP implementations across different charger manufacturing brands.
                    </li>
                    <li>
                      <strong>Depot Power Constraints:</strong> Depots frequently lack sufficient electrical service, requiring complex smart charging prioritization.
                    </li>
                    <li>
                      <strong>Cellular Connection Drops:</strong> Chargers losing wireless connectivity in underground garages, requiring offline session storage.
                    </li>
                    <li>
                      <strong>High Payment Processing Fees:</strong> Handling low-value micropayments at public chargers efficiently without losing margins to credit card fees.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product12-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product12-glass-panel">
                <h3 className="product12-panel-heading">Future Scope</h3>
                <p>The future of EV charging management lies in automated Plug & Charge (ISO 15118) integration and decentralized energy microgrids. Drivers will simply plug their vehicle in, and the charger will automatically authenticate, check charge limits, and bill their account without requiring apps or RFID cards. Additionally, integrating chargers with onsite solar panels and battery storage (microgrids) will allow depots to charge vehicles entirely on clean, local power. We are also developing AI models to predict local grid prices, buying power when cheap and discharging batteries (V2G) when prices spike.</p>
                <div className="product12-divider"></div>
                <h3 className="product12-panel-heading">Industry Impact</h3>
                <p>This platform is crucial for scaling electric mobility, as it provides the infrastructure management layer necessary to make charging as accessible as refueling. By aligning charging demand with renewable energy supply, it reduces grid strain, lowers logistics costs, and accelerates the global transition to zero-emission transportation.</p>
              </div>
            </section>

            <section className="product12-cta-section">
              <div className="product12-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our EV Charging Infrastructure Management Software delivers the smart, scalable, and secure platform required to build and operate profitable charging networks. By linking hardware connections with grid load management and automated billing, we help operators scale with confidence.</p>
                <button className="product12-btn product12-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product12;
