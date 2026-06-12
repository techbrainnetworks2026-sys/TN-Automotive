import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product1.css';
import prd1 from "../../../assets/images/prd1.jpg";

const Product1 = () => {
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
    <div className="product1-detail-page">
      <section className="product1-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd1})` }}>
        <div className="product1-hero-content">
          <button className="product1-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Electric Vehicle Fleet Management System</h1>
          <p>Enterprise-grade cloud platform for real-time monitoring, state-of-charge tracking, battery health diagnostics, and smart charging optimization for commercial EV fleets.</p>
        </div>
      </section>

      <div className="product1-container">
        <div className="product1-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product1-sidebar">
            <div className="product1-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product1-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product1-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product1-main-content">
            
            <section id="introduction" className="product1-content-section">
              <h2>Introduction</h2>
              <p>The global transition toward sustainable logistics has accelerated the adoption of electric vehicles (EVs) in commercial fleets. However, fleet operators face unique operational challenges—such as range anxiety, battery degradation, charging infrastructure limitations, and complex grid integration—that traditional internal combustion engine (ICE) fleet management systems are not equipped to address. Our Electric Vehicle Fleet Management System is an enterprise-grade, cloud-native platform designed to optimize the operations of mixed and pure EV fleets in real-time.</p>
              <p>By integrating vehicle telematics, advanced battery diagnostics, predictive routing algorithms, and smart charging infrastructure management, our solution provides operators with complete visibility and actionable insights. The system acts as the digital nervous system for EV fleet operations, enabling companies to maximize fleet availability, extend battery life, reduce energy costs, and seamlessly comply with emerging environmental regulations. It bridges the gap between vehicle telematics and grid load management, providing a unified console for logistics, maintenance, and energy management.</p>
            </section>

            <section id="key-features" className="product1-content-section">
              <h2>Key Features</h2>
              <div className="product1-feature-grid">
                
                <div className="product1-card">
                  <h3 className="product1-card-title">Real-Time State-of-Charge (SoC) Monitoring</h3>
                  <p className="product1-card-desc">Tracks vehicle battery levels continuously with high-precision estimation based on driving behavior, terrain, payload, and environmental temperature.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Predictive Battery Health Diagnostics</h3>
                  <p className="product1-card-desc">Analyzes battery degradation patterns using electrochemical and thermal models to predict State of Health (SoH) and remaining useful life (RUL).</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Smart Charging Scheduler</h3>
                  <p className="product1-card-desc">Automates depot charging schedules based on electricity tariff rates, vehicle departure times, and depot power capacity to avoid peak demand charges.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Range Anxiety Mitigation Engine</h3>
                  <p className="product1-card-desc">Calculates dynamic driving ranges by factoring in live traffic, elevation changes, weather conditions, and cabin heating/cooling usage.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Depot Load Balancing</h3>
                  <p className="product1-card-desc">Dynamically distributes available power across multiple chargers to prevent grid overload and ensure high-priority vehicles are charged first.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Vehicle-to-Grid (V2G) Optimization</h3>
                  <p className="product1-card-desc">Coordinates energy discharge back to the grid or depot facility during peak tariff hours, generating ancillary revenue for fleet operators.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Thermal Management Alerts</h3>
                  <p className="product1-card-desc">Monitors battery pack temperature profiles in real-time to detect anomalous thermal runaway risks and issue early warning alerts.</p>
                </div>
                <div className="product1-card">
                  <h3 className="product1-card-title">Carbon Emission Tracking & Reporting</h3>
                  <p className="product1-card-desc">Quantifies greenhouse gas emission offsets in real-time for corporate sustainability reporting and ESG compliance.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product1-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product1-glass-panel">
                <h3 className="product1-panel-heading">Industry Background</h3>
                <p>Commercial logistics fleets are transitioning rapidly to electric mobility to meet corporate carbon reduction targets and comply with urban zero-emission zones. However, managing electric trucks and vans is fundamentally different from managing diesel fleets. Operating variables like ambient temperature, payload weight, driver acceleration patterns, and highway elevation profiles heavily impact the range of lithium-ion batteries. Fleet operators also face the challenge of grid constraints, where charging multiple heavy-duty trucks simultaneously can exceed depot power capacities, incurring massive utility penalties. Without integrated visibility between logistics schedules, vehicle battery chemistry, and charging station hardware, fleets suffer from high operational downtime and premature battery pack degradation.</p>
                <div className="product1-divider"></div>
                <h3 className="product1-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Traditional fleet management software focuses on fuel cards and maintenance schedules based on odometer readings, which fails completely when applied to EVs. Operators face constant range anxiety, under-utilization of vehicles due to uncoordinated charging, and high utility bills from unmanaged peak charging demand. Furthermore, battery packs degrade unpredictably if subjected to constant rapid charging or extreme thermal states, leading to high capital replacement costs. Fleet managers require an integrated software solution that links route dispatching, battery chemistry monitoring, and energy grid orchestration into a single platform.</p>
              </div>
            </section>

            <section id="functionalities" className="product1-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product1-module-list">
                
                <li className="product1-module-item">
                  <strong>Battery State Analytics Hub:</strong> Aggregates cell-level voltage and temperature data from the vehicle CAN bus to construct a real-time digital twin of the battery pack.
                </li>
                <li className="product1-module-item">
                  <strong>Route-to-Charge Matcher:</strong> Aligns route schedules with charger availability, recommending optimum charging stops along routes based on speed, wait times, and charging rates.
                </li>
                <li className="product1-module-item">
                  <strong>Grid Integration Engine:</strong> Interfaces directly with utility companies via OpenADR protocols to coordinate load shedding and participate in demand response events.
                </li>
                <li className="product1-module-item">
                  <strong>Depot Management Console:</strong> Provides site managers with complete visualization of charger uptime, connector status, charging profiles, and instantaneous power draw.
                </li>
                <li className="product1-module-item">
                  <strong>Driver Coaching Portal:</strong> Analyzes driving telemetry—such as regenerative braking efficiency and excessive acceleration—to coach drivers on maximizing range.
                </li>
                <li className="product1-module-item">
                  <strong>Maintenance Predictor:</strong> Tracks parameters like coolant flow rates, cell imbalance, and contactor wear to predict battery and powertrain failures before they occur.
                </li>
              </ul>
            </section>

            <section id="value" className="product1-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product1-highlight-text">Our Electric Vehicle Fleet Management System delivers value by transforming raw battery telemetry into actionable operational strategies. First, it eliminates range anxiety by providing mathematically proven dynamic range calculations, ensuring that vehicles return to the depot without unplanned road stops. Second, it reduces electricity costs by up to 45% through intelligent load shifting, charging vehicles when power is cheapest and grid load is low. Third, the system extends battery lifecycle by 25-30% by enforcing charging boundaries, limiting thermal stress, and prioritizing slower, balanced charging cycles when delivery schedules permit. Lastly, it automates ESG emissions compliance by mapping exact grid energy mixes to actual carbon reductions, providing auditable reports for regulatory bodies.</p>
            </section>

            <section id="workflow" className="product1-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product1-grid-2">
                <div>
                  <h3 className="product1-subheading">Operational Workflow</h3>
                  <div className="product1-workflow-steps">
                    
                    <div className="product1-step">
                      <div className="product1-step-number">1</div>
                      <div className="product1-step-content">
                        <h4>Data Ingestion</h4>
                        <p>Telemetry devices pull battery cell voltage, SoC, temperature, and GPS coordinates from the vehicle CAN bus, transmitting it via MQTT over cellular networks.</p>
                      </div>
                    </div>
                    <div className="product1-step">
                      <div className="product1-step-number">2</div>
                      <div className="product1-step-content">
                        <h4>Edge Analytics</h4>
                        <p>Edge devices perform primary filtering and anomaly detection to flag critical thermal alerts within milliseconds.</p>
                      </div>
                    </div>
                    <div className="product1-step">
                      <div className="product1-step-number">3</div>
                      <div className="product1-step-content">
                        <h4>Cloud Processing & Digital Twin Updating</h4>
                        <p>The cloud platform processes telemetry, updates the battery digital twin, and recalculates state-of-health projections.</p>
                      </div>
                    </div>
                    <div className="product1-step">
                      <div className="product1-step-number">4</div>
                      <div className="product1-step-content">
                        <h4>Optimization & Dispatching</h4>
                        <p>Algorithms match vehicle state with delivery routes and charging station schedules to optimize the day's operations.</p>
                      </div>
                    </div>
                    <div className="product1-step">
                      <div className="product1-step-number">5</div>
                      <div className="product1-step-content">
                        <h4>Execution & Monitoring</h4>
                        <p>Real-time dashboards track vehicles, send automated alerts, and balance depot power grids during charging.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product1-subheading">Implementation Process</h3>
                  <ul className="product1-process-list">
                    
                    <li>
                      <strong>Phase 1: Fleet Telematics Integration</strong>
                      <p>Install OBD-II/J1939 telematics hardware or connect via manufacturer cloud APIs to establish vehicle data streams.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Charger Networking (OCPP Setup)</strong>
                      <p>Connect depot charging hardware to the management system using the Open Charge Point Protocol (OCPP).</p>
                    </li>
                    <li>
                      <strong>Phase 3: Utility & Grid Integration</strong>
                      <p>Establish secure API links with local utility companies to receive real-time tariff rates and demand response signals.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Route and Dispatch Syncing</strong>
                      <p>Integrate the system with existing enterprise resource planning (ERP) and route dispatch software.</p>
                    </li>
                    <li>
                      <strong>Phase 5: AI Model Initialization</strong>
                      <p>Train battery state-of-health and dynamic range prediction models using historical fleet operational data.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Go-Live & Operations</strong>
                      <p>Launch the operator console, monitor operations, and generate weekly reports on cost and carbon savings.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product1-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on a distributed, cloud-native microservices architecture that handles high-throughput IoT telemetry streams. It consists of three primary systems: the Edge Telematics layer deployed inside the vehicles, the Core Cloud Platform hosted on AWS, and the Enterprise Interface layer. The communication layer relies on secure, bidirectional MQTT/TLS connections for vehicle telemetry and OCPP/TLS protocols for charger communications. Data is processed in real-time by a streaming analytics engine and routed to high-speed time-series databases for vehicle state data, and relational databases for master configurations and customer details.</p>
            </section>

            <section id="tech-arch" className="product1-content-section">
              <h2>Technical Architecture</h2>
              <div className="product1-tech-arch-grid">
                
                <div className="product1-tech-card">
                  <span className="product1-tech-label">FRONTEND</span>
                  <p>Built with React.js using TypeScript, styled with custom modular CSS for dashboards and map layers, incorporating high-performance map rendering via Mapbox GL.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">BACKEND</span>
                  <p>Microservices developed in Go and Java (Spring Boot) packaged in Docker containers and orchestrated by Kubernetes (EKS) for high availability.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">GATEWAY</span>
                  <p>NGINX API Gateway managing secure routing, rate limiting, and token-based authentication using OAuth2 / JWT.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">PROCESSING</span>
                  <p>Apache Kafka serves as the central event bus, streaming telemetry data to Apache Flink for real-time windowed aggregation and anomaly detection.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">AI ML</span>
                  <p>Python-based ML service utilizing PyTorch and Scikit-learn for battery state-of-health predictions and range forecasting, running on AWS SageMaker.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">EDGE</span>
                  <p>Embedded C++ client application running on Linux-based telematics units, executing edge filtering and local CAN-bus message translation.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">SECURITY</span>
                  <p>End-to-end encryption with TLS 1.3, hardware security modules (HSM) for vehicle credentials, and role-based access control (RBAC).</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">CLOUD</span>
                  <p>AWS infrastructure featuring Amazon RDS (PostgreSQL) for transactional data, InfluxDB for time-series metrics, and Amazon S3 for archival storage.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">INTEGRATION</span>
                  <p>REST APIs, GraphQL, and Webhooks interface with external systems like SAP ERP and Salesforce.</p>
                </div>
                <div className="product1-tech-card">
                  <span className="product1-tech-label">MONITORING</span>
                  <p>Prometheus and Grafana for system health monitoring, combined with Elasticsearch, Logstash, and Kibana (ELK Stack) for audit logging.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product1-content-section">
              <h2>Technologies Used</h2>
              <div className="product1-tags-container">
                
                <div className="product1-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">Go</span><span className="product1-tag">TypeScript</span><span className="product1-tag">Python</span><span className="product1-tag">C++</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">React</span><span className="product1-tag">Spring Boot</span><span className="product1-tag">Apache Flink</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">InfluxDB</span><span className="product1-tag">PostgreSQL</span><span className="product1-tag">Redis</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">Amazon Web Services (AWS)</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">PyTorch</span><span className="product1-tag">TensorFlow</span><span className="product1-tag">Scikit-learn</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>IOT</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">OBD-II</span><span className="product1-tag">J1939 CAN-bus</span><span className="product1-tag">OCPP 2.0.1</span><span className="product1-tag">OpenADR 2.0b</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">MQTT over TLS</span><span className="product1-tag">HTTP/2</span><span className="product1-tag">gRPC</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">Docker</span><span className="product1-tag">Kubernetes</span><span className="product1-tag">Terraform</span><span className="product1-tag">GitHub Actions</span>
                  </div>
                </div>
                <div className="product1-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product1-tags">
                    <span className="product1-tag">OAuth 2.0</span><span className="product1-tag">TLS 1.3</span><span className="product1-tag">HSM key vaults</span><span className="product1-tag">WAF</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product1-content-section">
              <h2>Real-World Applications</h2>
              <div className="product1-feature-grid">
                
                <div className="product1-app-card">
                  <h4>Last-Mile Delivery Depot Optimization</h4>
                  <p>Deployed across 1,200 electric delivery vans in a metropolitan area, reducing peak electricity charges by 38%.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Municipal Transit Bus Management</h4>
                  <p>Orchestrated charging and route scheduling for a municipal fleet of 150 electric transit buses, ensuring 100% route compliance.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Cold-Chain Logistics Monitoring</h4>
                  <p>Managed battery allocation for refrigerated electric trucks, balancing cabin cooling, refrigeration payload, and vehicle propulsion.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Airport Ground Support Equipment</h4>
                  <p>Tracked and managed a diverse fleet of electric tugs, baggage loaders, and shuttles across three airport terminals.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Heavy-Duty Construction Transport</h4>
                  <p>Provided state-of-health diagnostics for heavy electric dump trucks, predicting battery degradation under extreme load conditions.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Corporate Shuttle Fleet Integration</h4>
                  <p>Managed charging profiles and dynamic routing for employee transport shuttles, maximizing passenger throughput.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Long-Haul Electric Freight Prototyping</h4>
                  <p>Optimized route-to-charge matching for interstate electric semi-trucks, minimizing idle wait time at high-power charging depots.</p>
                </div>
                <div className="product1-app-card">
                  <h4>Car-Sharing Fleet EV Management</h4>
                  <p>Integrated battery health analytics into a public car-sharing service, automating maintenance dispatch for degraded cells.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product1-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product1-grid-2">
                <div className="product1-benefits-box">
                  <h3 className="product1-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product1-check-list">
                    
                    <li>
                      <strong>Lower Energy Costs:</strong> Saves up to 45% on charging expenses by dynamically shifting loads to off-peak utility pricing periods.
                    </li>
                    <li>
                      <strong>Extended Battery Lifecycle:</strong> Increases State of Health (SoH) duration by 25%, delaying expensive battery pack replacements by several years.
                    </li>
                    <li>
                      <strong>Maximized Vehicle Uptime:</strong> Eliminates unexpected depleted batteries through precise range forecasting and automated charger booking.
                    </li>
                    <li>
                      <strong>Streamlined ESG Reporting:</strong> Provides auditable carbon offset metrics directly linked to grid energy source allocations.
                    </li>
                    <li>
                      <strong>Optimized Operational Control:</strong> Combines logistics scheduling, battery health, and charging infrastructure into a single pane of glass.
                    </li>
                  </ul>
                </div>
                <div className="product1-challenges-box">
                  <h3 className="product1-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product1-cross-list">
                    
                    <li>
                      <strong>Grid Connection Constraints:</strong> Depots often lack sufficient power capacity from local utility companies, requiring expensive transformer upgrades.
                    </li>
                    <li>
                      <strong>Battery Aging Nonlinearity:</strong> Battery degradation is highly non-linear and difficult to model accurately across varied temperature ranges.
                    </li>
                    <li>
                      <strong>Heterogeneous Charger Networks:</strong> Managing a mix of charger brands with varying levels of adherence to the OCPP standard.
                    </li>
                    <li>
                      <strong>Cellular Connectivity Dropouts:</strong> Vehicles frequently lose connectivity in tunnels or remote areas, requiring offline edge storage and recovery.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product1-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product1-glass-panel">
                <h3 className="product1-panel-heading">Future Scope</h3>
                <p>The future of electric vehicle fleet management lies in autonomous energy trading and AI-driven predictive maintenance. We are developing systems that integrate directly with local virtual power plants (VPPs) using AI models to trade energy dynamically, enabling fleets to buy power at negative prices and sell it back to the grid during shortages. Additionally, the integration of solid-state batteries will require new electrochemical diagnostic models to monitor structural stability and degradation. We are also designing protocols to coordinate automated wireless (inductive) charging lanes, which will allow trucks to recharge their batteries dynamically while driving over dedicated highways.</p>
                <div className="product1-divider"></div>
                <h3 className="product1-panel-heading">Industry Impact</h3>
                <p>This platform transforms commercial transportation by removing the technological barriers to EV adoption. By making electric fleets as reliable and predictable as diesel fleets, we allow shipping companies to confidently scale their zero-emission operations. It reduces the strain on city power grids, aligns logistics with renewable energy production, and drastically reduces urban diesel particulate emissions, promoting public health in transit corridors.</p>
              </div>
            </section>

            <section className="product1-cta-section">
              <div className="product1-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>The Electric Vehicle Fleet Management System is more than a tracking tool; it is a critical bridge between modern logistics, battery electrochemistry, and clean energy grids. Implementing this system enables commercial fleets to operate at peak efficiency, minimize capital depreciation, and lead the global shift to zero-emission logistics.</p>
                <button className="product1-btn product1-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product1;
