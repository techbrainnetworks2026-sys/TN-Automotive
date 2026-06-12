import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product13.css';
import prd13 from "../../../assets/images/prd13.jpeg";

const Product13 = () => {
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
    <div className="product13-detail-page">
      <section className="product13-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd13})` }}>
        <div className="product13-hero-content">
          <button className="product13-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Automotive Telematics and Diagnostics Platforms</h1>
          <p>Enterprise telematics platform providing real-time vehicle tracking, CAN bus metrics ingestion, diagnostic trouble code (DTC) monitoring, and driver behavior analysis.</p>
        </div>
      </section>

      <div className="product13-container">
        <div className="product13-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product13-sidebar">
            <div className="product13-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product13-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product13-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product13-main-content">
            
            <section id="introduction" className="product13-content-section">
              <h2>Introduction</h2>
              <p>Modern fleet operations require constant visibility into vehicle locations, fuel/energy usage, mechanical health, and driver behaviors. Relying on manual maintenance logs and retrospective telemetry is inefficient and prone to oversights. Our Automotive Telematics and Diagnostics Platform is an enterprise-grade cloud system designed to capture, process, and analyze high-frequency vehicle data in real-time.</p>
              <p>The platform interfaces directly with OBD-II/J1939 telematics hardware or manufacturer cloud APIs, streaming critical parameters—including GPS coordinates, speed, engine loads, fuel levels, diagnostic trouble codes (DTCs), and tire pressures—directly to the cloud. Using advanced streaming analytics and machine learning, the software identifies engine faults, scores driver safety, predicts mechanical breakdowns, and generates automated maintenance schedules, optimizing fleet efficiency.</p>
            </section>

            <section id="key-features" className="product13-content-section">
              <h2>Key Features</h2>
              <div className="product13-feature-grid">
                
                <div className="product13-card">
                  <h3 className="product13-card-title">Real-Time Fleet GPS Tracking</h3>
                  <p className="product13-card-desc">Tracks vehicle positions, headings, and speeds in real-time with geofencing and historical route replays.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">CAN Bus Diagnostics Ingestion</h3>
                  <p className="product13-card-desc">Ingests engine, transmission, battery, and emissions telemetry directly from vehicle network buses.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">DTC Monitoring & Alerts</h3>
                  <p className="product13-card-desc">Detects diagnostic trouble codes instantly, translating complex technical codes into clear maintenance actions.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">Driver Behavior Profiling</h3>
                  <p className="product13-card-desc">Scores drivers based on speed violations, harsh braking, rapid acceleration, and cornering profiles.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">Fuel & Energy Usage Audit</h3>
                  <p className="product13-card-desc">Tracks fuel consumption, idle times, and EV battery efficiency to identify energy waste across routes.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">Geofencing Alert Engine</h3>
                  <p className="product13-card-desc">Generates automated notifications when vehicles enter or exit predefined geographic boundaries.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">Automated Maintenance Triggers</h3>
                  <p className="product13-card-desc">Schedules service requests based on real-time mileage, engine hours, or detected sensor anomalies.</p>
                </div>
                <div className="product13-card">
                  <h3 className="product13-card-title">Custom Fleet Reports Creator</h3>
                  <p className="product13-card-desc">Generates weekly and monthly reports on fuel economy, fleet utilization, and safety compliance scores.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product13-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product13-glass-panel">
                <h3 className="product13-panel-heading">Industry Background</h3>
                <p>Historically, fleet management was a manual process: drivers logged mileage on paper, and mechanics serviced vehicles based on calendar schedules. This led to high maintenance costs and frequent roadside breakdowns when issues occurred between service intervals. Early telematics systems introduced GPS tracking, but they lacked deep diagnostic insights. To operate efficiently, modern fleets need a platform that combines real-time positioning with vehicle computer diagnostics, allowing managers to monitor health and optimize logistics.</p>
                <div className="product13-divider"></div>
                <h3 className="product13-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Fleets often operate a mix of vehicle models from different manufacturers, each utilizing different CAN bus database files (DBCs) and proprietary diagnostic codes. Standardizing this data into a single database is highly complex. Additionally, telematics units generate millions of data points, requiring high-throughput ingestion pipelines and efficient database storage, while securing sensitive driver location logs.</p>
              </div>
            </section>

            <section id="functionalities" className="product13-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product13-module-list">
                
                <li className="product13-module-item">
                  <strong>Telemetry Ingestion Gateway:</strong> Accepts high-frequency UDP/TCP data packets from telematics hardware modems globally.
                </li>
                <li className="product13-module-item">
                  <strong>DBC Translation Engine:</strong> Decodes raw CAN bus hex codes into human-readable metrics like temperature, speed, and fuel levels.
                </li>
                <li className="product13-module-item">
                  <strong>DTC Code Classifier:</strong> Matches active error codes against manufacturer databases to prioritize repair severity.
                </li>
                <li className="product13-module-item">
                  <strong>Driver Safety Scorer:</strong> Processes accelerometer and GPS anomalies to calculate daily driver safety indexes.
                </li>
                <li className="product13-module-item">
                  <strong>Geofence Evaluation Engine:</strong> Evaluates vehicle coordinates against polygon boundaries within milliseconds.
                </li>
                <li className="product13-module-item">
                  <strong>Asset Maintenance Sync:</strong> Integrates mileage and error logs directly with fleet ERP maintenance software.
                </li>
              </ul>
            </section>

            <section id="value" className="product13-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product13-highlight-text">Our Telematics and Diagnostics platform delivers value by reducing vehicle breakdown rates by 50% through early diagnostic alerts. It cuts fuel and energy costs by up to 15% by identifying excessive idling and coaching drivers on efficient driving habits. The system increases fleet utilization by providing real-time location logs, optimizing route planning, and reducing manual logs. For leasing fleets, it protects asset value by tracking mechanical abuse and scheduling preventive maintenance on time.</p>
            </section>

            <section id="workflow" className="product13-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product13-grid-2">
                <div>
                  <h3 className="product13-subheading">Operational Workflow</h3>
                  <div className="product13-workflow-steps">
                    
                    <div className="product13-step">
                      <div className="product13-step-number">1</div>
                      <div className="product13-step-content">
                        <h4>Telemetry Capture</h4>
                        <p>The vehicle telematics unit reads GPS coordinates, accelerometer forces, and CAN bus codes from the OBD-II port.</p>
                      </div>
                    </div>
                    <div className="product13-step">
                      <div className="product13-step-number">2</div>
                      <div className="product13-step-content">
                        <h4>Wireless Data Ingest</h4>
                        <p>The device packages data and transmits it via MQTT or HTTPS over cellular networks to the cloud.</p>
                      </div>
                    </div>
                    <div className="product13-step">
                      <div className="product13-step-number">3</div>
                      <div className="product13-step-content">
                        <h4>CAN Code Translation</h4>
                        <p>The ingestion gateway decodes raw CAN bytes using vehicle-specific translation databases.</p>
                      </div>
                    </div>
                    <div className="product13-step">
                      <div className="product13-step-number">4</div>
                      <div className="product13-step-content">
                        <h4>State Assessment & Analysis</h4>
                        <p>The platform checks speed thresholds, evaluates geofences, and monitors active diagnostic codes.</p>
                      </div>
                    </div>
                    <div className="product13-step">
                      <div className="product13-step-number">5</div>
                      <div className="product13-step-content">
                        <h4>Dashboard Update & Notification</h4>
                        <p>The fleet map is updated, driver scores are calculated, and critical mechanical alerts are sent to managers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product13-subheading">Implementation Process</h3>
                  <ul className="product13-process-list">
                    
                    <li>
                      <strong>Phase 1: Select Telematics Hardware</strong>
                      <p>Choose and install OBD-II or hardwired telematics devices across fleet vehicles.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Configure Device Settings</strong>
                      <p>Configure cellular APNs and point the telematics devices to the platform's secure IP address.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Import Vehicle Master Data</strong>
                      <p>Upload vehicle VINs, license plates, and model specs to map telemetry to corresponding assets.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Configure Geofences & Rules</strong>
                      <p>Draw operating boundaries on the map and set up alert thresholds for speed and idling.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Integrate ERP APIs</strong>
                      <p>Link the telematics platform with internal dispatch, scheduling, and accounting software.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Launch Fleet Monitoring</strong>
                      <p>Monitor vehicles on the live map, track driver safety scores, and receive automated maintenance alerts.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product13-content-section">
              <h2>System Architecture</h2>
              <p>The platform features a cloud-native, microservices architecture designed to ingest high-frequency IoT streams. The telemetry gateway is built for high concurrency, handling millions of incoming UDP packets. Data is routed to time-series databases for vehicle state data, and secure relational databases for fleet configurations, user logs, and diagnostic codes.</p>
            </section>

            <section id="tech-arch" className="product13-content-section">
              <h2>Technical Architecture</h2>
              <div className="product13-tech-arch-grid">
                
                <div className="product13-tech-card">
                  <span className="product13-tech-label">FRONTEND</span>
                  <p>Web application built with React and TypeScript, incorporating high-performance map layers via Mapbox GL.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">BACKEND</span>
                  <p>Microservices developed in Go, packaged in Docker containers and orchestrated by Kubernetes for automatic scaling.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing incoming telemetry packets and encrypting connections via TLS.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">PROCESSING</span>
                  <p>Apache Kafka serves as the central event bus, streaming vehicle updates to Apache Spark for real-time aggregation.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">AI ML</span>
                  <p>Gradient boosting algorithms running on cloud servers to analyze driving habits and calculate safety indexes.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">EDGE</span>
                  <p>C++ firmware deployed on custom telematics units, executing local geofence checks and CAN message pre-filtering.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">SECURITY</span>
                  <p>AES-256 database encryption, HTTPS/TLS connection pathways, and role-based access control for fleet managers.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon DynamoDB for live positions, InfluxDB for metrics, and PostgreSQL for configs.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">INTEGRATION</span>
                  <p>REST APIs, GraphQL endpoints, and Webhooks for ERP and third-party logistics software integration.</p>
                </div>
                <div className="product13-tech-card">
                  <span className="product13-tech-label">MONITORING</span>
                  <p>Datadog infrastructure monitoring, Prometheus metrics, and automated alert paging systems.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product13-content-section">
              <h2>Technologies Used</h2>
              <div className="product13-tags-container">
                
                <div className="product13-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">Go</span><span className="product13-tag">Python</span><span className="product13-tag">C++</span><span className="product13-tag">TypeScript</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">React</span><span className="product13-tag">Node.js</span><span className="product13-tag">Apache Spark</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">InfluxDB</span><span className="product13-tag">PostgreSQL</span><span className="product13-tag">Redis</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">AWS</span><span className="product13-tag">Azure</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">Scikit-learn</span><span className="product13-tag">TensorFlow</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>IOT</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">OBD-II dongles</span><span className="product13-tag">J1939 telematics hardware</span><span className="product13-tag">GPS trackers</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">MQTT</span><span className="product13-tag">HTTPS</span><span className="product13-tag">UDP</span><span className="product13-tag">TCP</span><span className="product13-tag">CAN-bus</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">Docker</span><span className="product13-tag">Kubernetes</span><span className="product13-tag">Terraform</span><span className="product13-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product13-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product13-tags">
                    <span className="product13-tag">AES-256</span><span className="product13-tag">TLS 1.3</span><span className="product13-tag">OAuth 2.0</span><span className="product13-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product13-content-section">
              <h2>Real-World Applications</h2>
              <div className="product13-feature-grid">
                
                <div className="product13-app-card">
                  <h4>Delivery Fleet Route Monitoring</h4>
                  <p>Tracked 400 delivery vans in real-time, reducing idle times by 28% and optimization route plans.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Heavy Duty Truck Diagnostic Sync</h4>
                  <p>Monitored J1939 fault codes on 150 semi-trucks, scheduling repairs and preventing roadside failures.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Municipal Utility Fleet Tracking</h4>
                  <p>Managed GPS geofences and engine hours for 300 public works vehicles, improving utilization.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Car-Rental Odometer Audit</h4>
                  <p>Automated mileage tracking for 2,000 rental vehicles, streamlining billing and preventative service scheduling.</p>
                </div>
                <div className="product13-app-card">
                  <h4>EV Logistics Range Tracking</h4>
                  <p>Monitored state-of-charge (SoC) and battery health for 80 electric trucks, optimization depot charging.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Cold Chain Cargo Temperature Monitor</h4>
                  <p>Linked vehicle CAN diagnostics with refrigerated cargo sensors, alerting drivers of temperature drops.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Ride-Hailing Driver Safety Scoring</h4>
                  <p>Scored 1,000 active ride-hailing drivers, identifying unsafe habits and reducing accidents by 12%.</p>
                </div>
                <div className="product13-app-card">
                  <h4>Emergency Ambulance Engine Monitoring</h4>
                  <p>Tracked coolant and battery stats in real-time, ensuring ambulances are always in peak operating health.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product13-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product13-grid-2">
                <div className="product13-benefits-box">
                  <h3 className="product13-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product13-check-list">
                    
                    <li>
                      <strong>Lower Fuel Costs:</strong> Reduces fuel waste by up to 15% through idle monitoring and driver coaching.
                    </li>
                    <li>
                      <strong>Fewer Roadside Breakdowns:</strong> Detects diagnostic trouble codes instantly, scheduling repairs before components fail.
                    </li>
                    <li>
                      <strong>Increased Fleet Security:</strong> Monitors vehicle coordinates, triggering alerts during unauthorized movements or thefts.
                    </li>
                    <li>
                      <strong>Reduced Administrative Effort:</strong> Automates logbooks, tax reporting, and maintenance schedules, saving office staff time.
                    </li>
                    <li>
                      <strong>Protected Asset Value:</strong> Enforces safe driving habits and preventative maintenance, extending vehicle lifespans.
                    </li>
                  </ul>
                </div>
                <div className="product13-challenges-box">
                  <h3 className="product13-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product13-cross-list">
                    
                    <li>
                      <strong>Varying Vehicle Protocols:</strong> Decoding unique manufacturer-specific CAN bus database files across mixed vehicle fleets.
                    </li>
                    <li>
                      <strong>Cellular Coverage Dead Zones:</strong> Managing telemetry caching and upload recovery when vehicles travel through remote mountain roads.
                    </li>
                    <li>
                      <strong>High Ingestion Volume:</strong> Processing millions of incoming GPS and diagnostic updates per second during peak shipping hours.
                    </li>
                    <li>
                      <strong>Privacy Compliance Requirements:</strong> Ensuring location logs comply with local employee privacy rights and data storage rules.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product13-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product13-glass-panel">
                <h3 className="product13-panel-heading">Future Scope</h3>
                <p>The future of telematics and diagnostics lies in generative vehicle diagnostics and decentralized edge health assessments. Future systems will feature AI assistants that explain diagnostic faults in plain language, detailing exactly what parts are needed and booking repair slots. Edge processors will run local neural networks to analyze microsecond CAN bus waveforms, predicting alternator and sensor failures weeks in advance. Additionally, blockchain ledgers will secure vehicle service records, creating a trusted history that increases resale value.</p>
                <div className="product13-divider"></div>
                <h3 className="product13-panel-heading">Industry Impact</h3>
                <p>This platform is the core coordinator for modern logistics, turning vehicles into connected assets. By replacing calendar maintenance with real-time diagnostic insight, it makes transportation more efficient, safer, and cleaner, supporting the future of autonomous freight delivery.</p>
              </div>
            </section>

            <section className="product13-cta-section">
              <div className="product13-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Automotive Telematics and Diagnostics Platform provides the secure, scalable, and highly accurate solution required to manage connected fleets. By linking vehicle diagnostics with real-time location logs, we help companies keep their fleets running at peak efficiency.</p>
                <button className="product13-btn product13-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product13;
