import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product9.css';
import prd9 from "../../../assets/images/prd9.jpg";

const Product9 = () => {
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
    <div className="product9-detail-page">
      <section className="product9-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd9})` }}>
        <div className="product9-hero-content">
          <button className="product9-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Intelligent Traffic Management Systems</h1>
          <p>Enterprise-grade smart city platform optimizing urban transit through real-time traffic signal control, incident detection, and multi-modal transit coordination.</p>
        </div>
      </section>

      <div className="product9-container">
        <div className="product9-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product9-sidebar">
            <div className="product9-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product9-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product9-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product9-main-content">
            
            <section id="introduction" className="product9-content-section">
              <h2>Introduction</h2>
              <p>Rapid urbanization and growing vehicle fleets have pushed city road networks to their absolute physical limits. Standard traffic management solutions, relying on static schedules, are unable to adapt to dynamic demand, accidents, or special events. Our Intelligent Traffic Management System is a comprehensive, cloud-native enterprise platform designed for city traffic departments, municipal authorities, and highway operators seeking to modernize their urban mobility grids.</p>
              <p>The platform aggregates data from a wide array of sensors—including video cameras, radar detectors, induction loops, and vehicle telemetry feeds—to construct a live digital map of urban mobility. Using advanced artificial intelligence, the software optimizes signal timings dynamically across entire municipal grids, creating coordinated green light corridors that adapt to traffic patterns in real-time. It reduces delays, minimizes vehicle idling, alerts emergency services to accidents, and coordinates multi-modal public transit routes.</p>
            </section>

            <section id="key-features" className="product9-content-section">
              <h2>Key Features</h2>
              <div className="product9-feature-grid">
                
                <div className="product9-card">
                  <h3 className="product9-card-title">Adaptive Traffic Signal Control</h3>
                  <p className="product9-card-desc">Adjusts traffic light phases and green wave durations dynamically based on real-time vehicle queue lengths.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Automated Incident Identification</h3>
                  <p className="product9-card-desc">Analyzes sensor telemetry to detect vehicle breakdowns, accidents, or debris, notifying dispatchers within seconds.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Active Emergency Vehicle Preemption</h3>
                  <p className="product9-card-desc">Coordinates with police and fire department GPS systems to secure green lights dynamically along response routes.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Transit Signal Priority (TSP)</h3>
                  <p className="product9-card-desc">Optimizes light cycles to keep city buses and light rail systems running on schedule without halting cross-traffic.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Dynamic Road Signs Integration</h3>
                  <p className="product9-card-desc">Updates highway variable message signs (VMS) automatically with detour routes and speed advisories.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Multi-Modal Traffic Analytics</h3>
                  <p className="product9-card-desc">Classifies and tracks passenger cars, heavy trucks, buses, cyclists, and pedestrians to balance urban safety.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Variable Speed Limit Control</h3>
                  <p className="product9-card-desc">Adjusts speed limits dynamically on major highways to smooth out traffic shockwaves and prevent pileups.</p>
                </div>
                <div className="product9-card">
                  <h3 className="product9-card-title">Predictive Congestion Modeling</h3>
                  <p className="product9-card-desc">Forecasts gridlock patterns 30 minutes in advance, allowing operators to preemptively adjust routing programs.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product9-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product9-glass-panel">
                <h3 className="product9-panel-heading">Industry Background</h3>
                <p>Traditional city traffic systems run on pre-programmed plans that are calibrated using historical traffic surveys. These plans cannot adapt to unexpected traffic spikes, accidents, or weather changes. The resulting congestion causes billions in lost economic productivity, increases collision rates, and contributes heavily to localized air pollution. Resolving these challenges requires connecting legacy traffic controllers to a centralized, cloud-hosted platform that can analyze sensor telemetry in real-time and coordinate traffic signal networks.</p>
                <div className="product9-divider"></div>
                <h3 className="product9-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Urban traffic networks are highly complex, where adjusting a light sequence at one intersection often pushes the bottleneck downstream. Additionally, city departments operate a mix of hardware from different generations and vendors. Integrating these legacy controllers into a single network requires secure, standardized API bridges. Designers must also ensure the system operates with high reliability, as any software error could cause city-wide gridlock.</p>
              </div>
            </section>

            <section id="functionalities" className="product9-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product9-module-list">
                
                <li className="product9-module-item">
                  <strong>Central Telemetry Ingestion Hub:</strong> Ingests and normalizes data streams from cameras, radar units, and vehicle GPS devices across the city.
                </li>
                <li className="product9-module-item">
                  <strong>Signal Controller Bridge Module:</strong> Translates high-level timing decisions from the AI into specific hardware commands using NTCIP protocols.
                </li>
                <li className="product9-module-item">
                  <strong>Incident Detection Engine:</strong> Monitors traffic anomalies, flagging stopped vehicles or rapid deceleration patterns in real-time.
                </li>
                <li className="product9-module-item">
                  <strong>Digital City Mobility Map:</strong> Maintains a live digital twin of all city vehicles, speeds, queue lengths, and signal phases.
                </li>
                <li className="product9-module-item">
                  <strong>V2X Communication Interface:</strong> Broadcasts real-time Signal Phase and Timing (SPaT) data to connected cars, advising drivers on target speeds.
                </li>
                <li className="product9-module-item">
                  <strong>Transit Integration Module:</strong> Connects with public transit schedules to prioritize late buses and train crossings.
                </li>
              </ul>
            </section>

            <section id="value" className="product9-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product9-highlight-text">Our Intelligent Traffic Management System delivers value by reducing average city commute times by up to 25% and reducing vehicle emissions by 15% through minimized idling at red lights. It improves emergency response times by 30%, saving lives during critical events. Municipalities save millions by delaying or avoiding expensive physical road expansion projects, maximizing the efficiency of their existing assets. Furthermore, the platform's automated incident detection reduces secondary accident rates by warning incoming drivers of crashes ahead.</p>
            </section>

            <section id="workflow" className="product9-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product9-grid-2">
                <div>
                  <h3 className="product9-subheading">Operational Workflow</h3>
                  <div className="product9-workflow-steps">
                    
                    <div className="product9-step">
                      <div className="product9-step-number">1</div>
                      <div className="product9-step-content">
                        <h4>Sensor Ingestion</h4>
                        <p>Traffic cameras, radar detectors, and connected vehicle GPS logs send real-time data to the ingestion hub.</p>
                      </div>
                    </div>
                    <div className="product9-step">
                      <div className="product9-step-number">2</div>
                      <div className="product9-step-content">
                        <h4>Data Aggregation</h4>
                        <p>The platform maps counts, speeds, and queue lengths onto a digital twin of the road network.</p>
                      </div>
                    </div>
                    <div className="product9-step">
                      <div className="product9-step-number">3</div>
                      <div className="product9-step-content">
                        <h4>Timing Optimization</h4>
                        <p>The AI optimization engine calculates signal phase durations to maximize throughput and minimize stops.</p>
                      </div>
                    </div>
                    <div className="product9-step">
                      <div className="product9-step-number">4</div>
                      <div className="product9-step-content">
                        <h4>Signal Actuation</h4>
                        <p>Commands are sent via the NTCIP bridge to update physical traffic light states at intersections.</p>
                      </div>
                    </div>
                    <div className="product9-step">
                      <div className="product9-step-number">5</div>
                      <div className="product9-step-content">
                        <h4>Feedback Loop & Adjustment</h4>
                        <p>The system monitors traffic flow changes, feeding the data back to continuously calibrate the optimization models.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product9-subheading">Implementation Process</h3>
                  <ul className="product9-process-list">
                    
                    <li>
                      <strong>Phase 1: Map Road Network & Nodes</strong>
                      <p>Construct a digital map of all target city streets, intersections, and signal controllers.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Connect Signal Hardware</strong>
                      <p>Install secure cellular or fiber VPN gateways inside traffic signal control cabinets.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Deploy Traffic Sensors</strong>
                      <p>Install radar units and traffic cameras at key intersections to measure vehicle density.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Configure Protocol Bridges</strong>
                      <p>Configure NTCIP or proprietary protocol links to enable two-way communication with controllers.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Train and Calibrate AI Models</strong>
                      <p>Calibrate reinforcement learning models using historical traffic data and run simulations to verify safety guardrails.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Activate System Coordination</strong>
                      <p>Launch the operator dashboard, enable automated signal control, and monitor municipal traffic improvements.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product9-content-section">
              <h2>System Architecture</h2>
              <p>The platform features a hybrid edge-cloud architecture. Deep learning video analytics run locally on edge processors inside intersection cabinets, transmitting only vehicle counts and queue lengths to the cloud. The cloud platform, hosted on AWS, runs the global coordination algorithms, adjusting signal schedules across entire neighborhoods. This structure minimizes cellular data costs and ensures that if internet connection is lost, individual intersections fall back to local, coordinated plans.</p>
            </section>

            <section id="tech-arch" className="product9-content-section">
              <h2>Technical Architecture</h2>
              <div className="product9-tech-arch-grid">
                
                <div className="product9-tech-card">
                  <span className="product9-tech-label">FRONTEND</span>
                  <p>Web-based GIS operator interface built with React and Mapbox GL, showing live congestion layers, active phases, and alert windows.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">BACKEND</span>
                  <p>High-performance services developed in Rust and Go, designed to handle thousands of concurrent sensor streams.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">GATEWAY</span>
                  <p>Secure NGINX load balancer managing incoming sensor telemetry and outgoing control commands.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">PROCESSING</span>
                  <p>Apache Kafka event streaming routing data to Apache Flink for real-time corridor speed calculations.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">AI ML</span>
                  <p>Deep reinforcement learning models implemented in PyTorch, running on GPU-accelerated cloud instances to calculate signal timings.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">EDGE</span>
                  <p>NVIDIA Jetson edge computers running deep-learning video analytics to count vehicles and estimate queue lengths.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">SECURITY</span>
                  <p>IPSec VPN tunnels connecting cabinets to the cloud, mutual TLS (mTLS) authentication, and AES-256 database encryption.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">CLOUD</span>
                  <p>AWS infrastructure featuring Amazon DynamoDB for state tracking, Timestream for sensor logs, and Amazon EKS for service orchestration.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">INTEGRATION</span>
                  <p>Standardized NTCIP 1202 interfaces for signal controllers, GTFS-RT APIs for public transit sync, and OpenGIS mapping standards.</p>
                </div>
                <div className="product9-tech-card">
                  <span className="product9-tech-label">MONITORING</span>
                  <p>Datadog for cloud infrastructure tracking, Promtail and Loki for log aggregation, and SMS alerts for offline hardware.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product9-content-section">
              <h2>Technologies Used</h2>
              <div className="product9-tags-container">
                
                <div className="product9-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">Rust</span><span className="product9-tag">Go</span><span className="product9-tag">Python</span><span className="product9-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">React</span><span className="product9-tag">PyTorch</span><span className="product9-tag">Apache Spark</span><span className="product9-tag">SUMO</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">Amazon DynamoDB</span><span className="product9-tag">Timestream</span><span className="product9-tag">PostgreSQL (with PostGIS)</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">AWS</span><span className="product9-tag">Microsoft Azure</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">TensorFlow</span><span className="product9-tag">OpenCV</span><span className="product9-tag">Ray RLlib</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>IOT</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">NTCIP Signal Controllers</span><span className="product9-tag">Induction Loops</span><span className="product9-tag">Thermal Traffic Cameras</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">NTCIP 1202</span><span className="product9-tag">MQTT</span><span className="product9-tag">HTTPS</span><span className="product9-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">Docker</span><span className="product9-tag">Kubernetes</span><span className="product9-tag">Helm</span><span className="product9-tag">Terraform</span>
                  </div>
                </div>
                <div className="product9-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product9-tags">
                    <span className="product9-tag">mTLS</span><span className="product9-tag">IPSec VPN</span><span className="product9-tag">TLS 1.3</span><span className="product9-tag">OAuth 2.0</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product9-content-section">
              <h2>Real-World Applications</h2>
              <div className="product9-feature-grid">
                
                <div className="product9-app-card">
                  <h4>Urban Center Signal Optimization</h4>
                  <p>Coordinated 60 intersections in a downtown business district, reducing peak travel delays by 24%.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Smart Commuter Corridor Green Wave</h4>
                  <p>Created dynamic green waves along a busy commuter avenue, saving commuters an average of 6 minutes per trip.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Transit Signal Priority Deployment</h4>
                  <p>Configured TSP for a city bus network, improving schedule reliability and reducing transit delays by 18%.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Highway Variable Speed Limits</h4>
                  <p>Managed speed limits on a major bridge during rainstorms, preventing multi-car rear-end collisions.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Emergency Response Preemption</h4>
                  <p>Linked city signals with fire engine GPS tracking, reducing response times by 3 minutes across 8 stations.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Industrial Freight Route Flow Control</h4>
                  <p>Optimized traffic signals around a busy logistics hub, reducing heavy truck queue lines by 28%.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Automated Collision Divert System</h4>
                  <p>Detected an accident on a major avenue, automatically updating digital signs to reroute incoming traffic.</p>
                </div>
                <div className="product9-app-card">
                  <h4>Bridge Lane Closure Flow Management</h4>
                  <p>Adjusted signal phases to manage traffic around a bridge lane closure, keeping grid throughput stable.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product9-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product9-grid-2">
                <div className="product9-benefits-box">
                  <h3 className="product9-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product9-check-list">
                    
                    <li>
                      <strong>Reduced Congestion Delays:</strong> Reduces average city commute times by up to 25%, returning lost time to the economy.
                    </li>
                    <li>
                      <strong>Lower Urban Air Pollution:</strong> Cuts vehicle red-light idle times by 35%, reducing municipal carbon emissions.
                    </li>
                    <li>
                      <strong>Improved Emergency Transit:</strong> Clears traffic ahead of emergency vehicles automatically, improving response times and saving lives.
                    </li>
                    <li>
                      <strong>Delayed Infrastructure Capital:</strong> Avoids costly physical road expansions by maximizing the efficiency of existing lanes.
                    </li>
                    <li>
                      <strong>Enhanced Public Transit Appeal:</strong> Keeps public transit running on time, driving higher public transport usage.
                    </li>
                  </ul>
                </div>
                <div className="product9-challenges-box">
                  <h3 className="product9-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product9-cross-list">
                    
                    <li>
                      <strong>Legacy Hardware Integration:</strong> Interfacing with older electromechanical traffic controllers that lack processing power and modern API connectivity.
                    </li>
                    <li>
                      <strong>Sensor Uptime and Maintenance:</strong> Dirt, ice, and lens fog frequently degrade camera and radar accuracy, requiring automated sensor fault detection.
                    </li>
                    <li>
                      <strong>Congestion Relocation Risk:</strong> Solving bottlenecks in one zone can push congestion to adjacent neighborhoods if not globally optimized.
                    </li>
                    <li>
                      <strong>High Municipal Cybersecurity Risks:</strong> Preventing hackers from taking control of traffic lights, which could paralyze entire cities.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product9-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product9-glass-panel">
                <h3 className="product9-panel-heading">Future Scope</h3>
                <p>The future of traffic management lies in cooperative swarm coordination. By integrating with V2X platforms, traffic lights will communicate target speed profiles directly to vehicles, allowing cars to adjust their speed so they always arrive at intersections during green lights, eliminating the need to stop entirely. Reinforcement learning models will run on decentralized edge networks, coordinating patterns locally between adjacent intersections. Eventually, autonomous vehicle swarms will coordinate their own movements through intersections without physical traffic lights, utilizing digital scheduling systems.</p>
                <div className="product9-divider"></div>
                <h3 className="product9-panel-heading">Industry Impact</h3>
                <p>This technology is vital for building sustainable, livable cities. By transforming traffic control from a reactive scheduling problem into a predictive, real-time optimization system, we improve air quality, lower commuter stress, and make public transit highly competitive. It reshapes municipal grid management and lays the infrastructure foundation for autonomous vehicle networks.</p>
              </div>
            </section>

            <section className="product9-cta-section">
              <div className="product9-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Intelligent Traffic Management System provides a powerful, scalable, and data-driven approach to urban congestion management. By leveraging real-time sensor streams and advanced reinforcement learning, we help cities move smarter, breathe cleaner, and prepare for the future of connected mobility.</p>
                <button className="product9-btn product9-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product9;
