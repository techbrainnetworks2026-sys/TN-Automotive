import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product5.css';
import prd5 from "../../../assets/images/prd5.jpg";

const Product5 = () => {
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
    <div className="product5-detail-page">
      <section className="product5-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd5})` }}>
        <div className="product5-hero-content">
          <button className="product5-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Traffic Flow Optimization Software</h1>
          <p>Enterprise AI platform utilizing real-time traffic sensor data, signal control APIs, and predictive modeling to eliminate urban congestion and reduce emissions.</p>
        </div>
      </section>

      <div className="product5-container">
        <div className="product5-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product5-sidebar">
            <div className="product5-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product5-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product5-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product5-main-content">
            
            <section id="introduction" className="product5-content-section">
              <h2>Introduction</h2>
              <p>Urbanization and rising vehicle density have led to chronic traffic congestion in cities worldwide, costing billions in lost productivity and fuel waste. Traditional fixed-time traffic light cycles are unable to adapt to dynamic changes in traffic volume, emergency vehicle routes, and weather events. Our Traffic Flow Optimization Software is an enterprise-grade, cloud-hosted AI platform designed for municipal transport authorities, smart city planners, and highway operators seeking to eliminate gridlock.</p>
              <p>The platform aggregates data from diverse sources—including camera feeds, induction loops, radar sensors, and connected vehicle GPS telemetry—to create a real-time digital twin of the city's traffic networks. Using advanced Reinforcement Learning algorithms, the system coordinates traffic light timings dynamically across entire corridors, creating 'green waves' that adapt to vehicle speeds in real-time. It optimizes traffic flow, decreases travel times, reduces idle emissions, and prioritizes emergency vehicles and public transit buses automatically.</p>
            </section>

            <section id="key-features" className="product5-content-section">
              <h2>Key Features</h2>
              <div className="product5-feature-grid">
                
                <div className="product5-card">
                  <h3 className="product5-card-title">Dynamic Green Wave Coordination</h3>
                  <p className="product5-card-desc">Aligns traffic light signals along busy corridors to allow groups of vehicles to travel without stopping.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Multi-Source Sensor Aggregation</h3>
                  <p className="product5-card-desc">Integrates radar, camera, induction loop, and connected car GPS data into a single unified stream.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">AI-Driven Signal Optimization</h3>
                  <p className="product5-card-desc">Uses deep reinforcement learning models to adjust green light durations based on real-time vehicle density.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Emergency Vehicle Preemption</h3>
                  <p className="product5-card-desc">Interfaces with GPS tracking on emergency vehicles to automatically clear intersections along their route.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Public Transit Priority System</h3>
                  <p className="product5-card-desc">Adjusts signal timings to keep transit buses and light rails running on schedule without disrupting general traffic.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Congestion Bottleneck Predictor</h3>
                  <p className="product5-card-desc">Uses historical data and predictive modeling to forecast traffic jams 30 minutes before they occur.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Dynamic Toll and Variable Speed Control</h3>
                  <p className="product5-card-desc">Interfaces with electronic road signage to adjust speed limits and toll prices based on real-time flow.</p>
                </div>
                <div className="product5-card">
                  <h3 className="product5-card-title">Automated Incident Detection</h3>
                  <p className="product5-card-desc">Analyzes traffic speed anomalies to detect accidents, breakdowns, or road debris within seconds, alerting emergency services.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product5-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product5-glass-panel">
                <h3 className="product5-panel-heading">Industry Background</h3>
                <p>Managing urban traffic flow is a complex coordination problem. Standard traffic light grids operate on pre-programmed schedules based on historical counts taken months or years prior. These static programs fail during accidents, road construction, holiday events, or weather shifts. The resulting gridlock causes massive economic losses, increases accident rates, and contributes significantly to urban air pollution. Solving this requires connecting traffic control hardware to centralized, intelligent software engines that can adjust signals dynamically based on real-time demand.</p>
                <div className="product5-divider"></div>
                <h3 className="product5-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Municipal traffic systems are often a mix of hardware from different generations and manufacturers. Connecting legacy signal controllers to a modern AI optimization engine is highly complex due to a lack of standard APIs. Additionally, optimizing a single intersection often pushes the bottleneck to the next intersection, requiring a global, network-wide optimization algorithm. Planners need a platform that scales across thousands of signals, processes massive data streams, and operates reliably in real-time.</p>
              </div>
            </section>

            <section id="functionalities" className="product5-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product5-module-list">
                
                <li className="product5-module-item">
                  <strong>Data Ingestion & Normalization Layer:</strong> Aggregates raw data from cameras, loops, and telemetry, converting it into a standardized vehicle count and speed format.
                </li>
                <li className="product5-module-item">
                  <strong>Signal Controller API Bridge:</strong> Translates high-level timing requests from the AI into physical signal controller commands using NTCIP protocols.
                </li>
                <li className="product5-module-item">
                  <strong>Reinforcement Learning Engine:</strong> Runs network-level models to calculate optimal phase lengths and cycle times across connected grids.
                </li>
                <li className="product5-module-item">
                  <strong>Incident Management Module:</strong> Monitors traffic anomalies, flags potential collisions, and generates alternate route recommendations for signage.
                </li>
                <li className="product5-module-item">
                  <strong>V2X Communication Interface:</strong> Broadcasts signal phase and timing (SPaT) data to connected vehicles, enabling dashboard speed recommendations.
                </li>
                <li className="product5-module-item">
                  <strong>Reporting & Analytics Panel:</strong> Provides municipal planners with detailed charts on average travel times, carbon offsets, and corridor throughput.
                </li>
              </ul>
            </section>

            <section id="value" className="product5-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product5-highlight-text">Our Traffic Flow Optimization Software delivers value by reducing average city commute times by up to 25% and vehicle idle times at red lights by 35%. This significant reduction in idling directly translates to a 10-15% drop in municipal greenhouse gas emissions, assisting cities in meeting climate goals. For transit agencies, it improves bus schedule compliance by 20%, encouraging public transport usage. Municipalities save millions in infrastructure costs by maximizing the efficiency of existing roads, delaying or eliminating the need for expensive road widening projects.</p>
            </section>

            <section id="workflow" className="product5-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product5-grid-2">
                <div>
                  <h3 className="product5-subheading">Operational Workflow</h3>
                  <div className="product5-workflow-steps">
                    
                    <div className="product5-step">
                      <div className="product5-step-number">1</div>
                      <div className="product5-step-content">
                        <h4>Telemetry Collection</h4>
                        <p>Connected vehicle location coordinates, loop sensor counts, and video analytics feeds are continuously collected.</p>
                      </div>
                    </div>
                    <div className="product5-step">
                      <div className="product5-step-number">2</div>
                      <div className="product5-step-content">
                        <h4>Digital Twin Mapping</h4>
                        <p>The platform maps vehicle density, queue lengths, and speeds onto a live digital twin of the city's road network.</p>
                      </div>
                    </div>
                    <div className="product5-step">
                      <div className="product5-step-number">3</div>
                      <div className="product5-step-content">
                        <h4>AI Timing Calculation</h4>
                        <p>The reinforcement learning engine evaluates the current state and calculates optimal green light extensions or phase cuts.</p>
                      </div>
                    </div>
                    <div className="product5-step">
                      <div className="product5-step-number">4</div>
                      <div className="product5-step-content">
                        <h4>Signal Actuation</h4>
                        <p>The API bridge transmits timing commands to physical intersection controllers, which update light states.</p>
                      </div>
                    </div>
                    <div className="product5-step">
                      <div className="product5-step-number">5</div>
                      <div className="product5-step-content">
                        <h4>Flow Assessment & Loop</h4>
                        <p>The system monitors the resulting traffic flow changes, feeding performance back into the AI to continuously improve models.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product5-subheading">Implementation Process</h3>
                  <ul className="product5-process-list">
                    
                    <li>
                      <strong>Phase 1: Traffic Network Assessment</strong>
                      <p>Map the target city corridors, identify critical bottlenecks, and audit existing traffic signal controller hardware.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Sensor and Hardware Integration</strong>
                      <p>Install missing radar/camera sensors and connect existing signal controllers to the central cloud platform.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Configuring the API Bridge</strong>
                      <p>Configure NTCIP or proprietary protocol bridges to enable secure, bidirectional communication with signal controllers.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Digital Twin & Network Modeling</strong>
                      <p>Build the digital representation of the road network, defining speed limits, lane layouts, and intersection phases.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Model Training & Calibration</strong>
                      <p>Train reinforcement learning models using historical traffic profiles, and run simulations to verify safety guardrails.</p>
                    </li>
                    <li>
                      <strong>Phase 6: System Activation & Optimization</strong>
                      <p>Activate the software in closed-loop mode, monitor signal timings, and review daily traffic flow improvements.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product5-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on a highly scalable, hybrid cloud architecture. A lightweight edge computer deployed at each intersection processes raw video analytics locally, sending only aggregated vehicle counts and queue lengths to the central cloud. The central cloud platform, hosted on AWS, runs the network-wide optimization algorithms, coordinating signal patterns across entire neighborhoods. This distributed approach minimizes cellular data costs and ensures that if cloud connection is lost, individual intersections fall back to local, coordinated schedules.</p>
            </section>

            <section id="tech-arch" className="product5-content-section">
              <h2>Technical Architecture</h2>
              <div className="product5-tech-arch-grid">
                
                <div className="product5-tech-card">
                  <span className="product5-tech-label">FRONTEND</span>
                  <p>Web-based GIS interface built with React, Leaflet, and WebGL, showing live traffic congestion colors, active signal phases, and vehicle queues.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">BACKEND</span>
                  <p>High-performance services developed in Rust and Go, capable of handling millions of telemetry updates per second.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">GATEWAY</span>
                  <p>Secured NGINX load balancer managing incoming traffic sensor data streams and outgoing signal timing commands.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">PROCESSING</span>
                  <p>Apache Kafka ingestion pipelines connected to Apache Spark for real-time aggregation and calculation of average corridor speeds.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">AI ML</span>
                  <p>Deep Q-Networks (DQN) and policy gradient reinforcement learning algorithms implemented in PyTorch, running on GPU-optimized cloud instances.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">EDGE</span>
                  <p>NVIDIA Jetson-based edge units deployed in traffic cabinets, running deep-learning video analytics to count vehicles and estimate queue lengths.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">SECURITY</span>
                  <p>Virtual Private Networks (VPN) connecting traffic cabinets to the cloud, mutual TLS authentication (mTLS) for all devices, and AES-256 encryption.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon DynamoDB for fast state storage, Amazon Timestream for sensor logs, and Amazon EKS for service orchestration.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">INTEGRATION</span>
                  <p>Standardized NTCIP 1202 interfaces for signal controllers, GTFS-RT APIs for public transit sync, and OpenGIS standards for map data.</p>
                </div>
                <div className="product5-tech-card">
                  <span className="product5-tech-label">MONITORING</span>
                  <p>Datadog for cloud infrastructure tracking, Promtail and Loki for system log aggregation, and automated SMS alerts for hardware offline events.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product5-content-section">
              <h2>Technologies Used</h2>
              <div className="product5-tags-container">
                
                <div className="product5-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">Rust</span><span className="product5-tag">Go</span><span className="product5-tag">Python</span><span className="product5-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">React</span><span className="product5-tag">PyTorch</span><span className="product5-tag">Apache Spark</span><span className="product5-tag">SUMO (Simulation of Urban MObility)</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">Amazon DynamoDB</span><span className="product5-tag">Timestream</span><span className="product5-tag">PostgreSQL (with PostGIS extension)</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">AWS</span><span className="product5-tag">Microsoft Azure</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">TensorFlow</span><span className="product5-tag">Ray RLlib</span><span className="product5-tag">OpenCV</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>IOT</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">NTCIP 1202 Signal Controllers</span><span className="product5-tag">Induction Loops</span><span className="product5-tag">Thermal Traffic Cameras</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">NTCIP 1202</span><span className="product5-tag">MQTT</span><span className="product5-tag">HTTPS</span><span className="product5-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">Docker</span><span className="product5-tag">Kubernetes</span><span className="product5-tag">Helm</span><span className="product5-tag">Terraform</span>
                  </div>
                </div>
                <div className="product5-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product5-tags">
                    <span className="product5-tag">mTLS</span><span className="product5-tag">IPSec VPN</span><span className="product5-tag">TLS 1.3</span><span className="product5-tag">OAuth 2.0</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product5-content-section">
              <h2>Real-World Applications</h2>
              <div className="product5-feature-grid">
                
                <div className="product5-app-card">
                  <h4>Metropolitan Corridor Optimization</h4>
                  <p>Coordinated 45 intersections along a busy commuter corridor, reducing morning rush hour travel times by 22%.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Smart City Grid Deployment</h4>
                  <p>Managed traffic light networks in a downtown business district, decreasing average red-light idle times by 31%.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Emergency Corridor Preemption</h4>
                  <p>Implemented dynamic routing for fire trucks and ambulances across 12 fire stations, reducing emergency response times by 4 minutes.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Airport Expressway Flow Control</h4>
                  <p>Managed expressway traffic lights and variable speed limits during holiday peak times, preventing terminal gridlock.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Bus Rapid Transit (BRT) Sync</h4>
                  <p>Configured green light extensions for a new BRT lane, improving bus schedule reliability from 75% to 94%.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Industrial Freight Zone Traffic Control</h4>
                  <p>Optimized signal timings around a busy maritime port, coordinating heavy cargo truck movements and reducing truck queues.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Automated Accident Management System</h4>
                  <p>Detected an multi-car collision via camera speed drops, automatically adjusting surrounding traffic lights to divert incoming traffic.</p>
                </div>
                <div className="product5-app-card">
                  <h4>Construction Zone Flow Adjustment</h4>
                  <p>Dynamically adjusted signal phases to compensate for lane closures on a major urban bridge, keeping throughput stable.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product5-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product5-grid-2">
                <div className="product5-benefits-box">
                  <h3 className="product5-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product5-check-list">
                    
                    <li>
                      <strong>Shorted Commute Times:</strong> Reduces average city commute times by up to 25%, restoring lost productivity to the local economy.
                    </li>
                    <li>
                      <strong>Lower Urban Carbon Footprint:</strong> Cuts vehicle idle times by 35%, leading to a direct 10-15% reduction in municipal emissions.
                    </li>
                    <li>
                      <strong>Faster Emergency Response:</strong> Clears roads ahead of emergency vehicles automatically, improving response times and saving lives.
                    </li>
                    <li>
                      <strong>Delayed Infrastructure Capital:</strong> Postpones the need for costly physical road expansions by maximizing the capacity of existing lanes.
                    </li>
                    <li>
                      <strong>Improved Public Transit Appeal:</strong> Keeps buses and light rails running on time, driving higher public transport usage.
                    </li>
                  </ul>
                </div>
                <div className="product5-challenges-box">
                  <h3 className="product5-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product5-cross-list">
                    
                    <li>
                      <strong>Legacy Hardware Hurdles:</strong> Interfacing with older electromechanical traffic controllers that lack processing power and modern API connectivity.
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

            <section id="future" className="product5-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product5-glass-panel">
                <h3 className="product5-panel-heading">Future Scope</h3>
                <p>The future of traffic flow optimization lies in direct vehicle integration and autonomous swarm coordination. By integrating with V2X platforms, traffic lights will communicate target speed profiles directly to vehicles, allowing cars to adjust their speed so they always arrive at intersections during green lights, eliminating the need to stop entirely. Reinforcement learning models will run on decentralized edge networks, coordinating patterns locally between adjacent intersections. Eventually, autonomous vehicle swarms will coordinate their own movements through intersections without physical traffic lights, utilizing digital scheduling systems.</p>
                <div className="product5-divider"></div>
                <h3 className="product5-panel-heading">Industry Impact</h3>
                <p>This technology is vital for building sustainable, livable cities. By transforming traffic control from a reactive scheduling problem into a predictive, real-time optimization system, we improve air quality, lower commuter stress, and make public transit highly competitive. It reshapes municipal grid management and lays the infrastructure foundation for autonomous vehicle networks.</p>
              </div>
            </section>

            <section className="product5-cta-section">
              <div className="product5-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Traffic Flow Optimization Software provides a powerful, scalable, and data-driven approach to urban congestion management. By leveraging real-time sensor streams and advanced reinforcement learning, we help cities move smarter, breathe cleaner, and prepare for the future of connected mobility.</p>
                <button className="product5-btn product5-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product5;
