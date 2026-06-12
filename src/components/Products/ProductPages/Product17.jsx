import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product17.css';
import prd17 from "../../../assets/images/prd17.png";

const Product17 = () => {
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
    <div className="product17-detail-page">
      <section className="product17-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd17})` }}>
        <div className="product17-hero-content">
          <button className="product17-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Car-sharing and Ride-hailing Platform Solutions</h1>
          <p>Enterprise backend platform and API suite for real-time driver matching, dynamic fare algorithms, fleet scheduling, and keyless mobile access.</p>
        </div>
      </section>

      <div className="product17-container">
        <div className="product17-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product17-sidebar">
            <div className="product17-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product17-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product17-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product17-main-content">
            
            <section id="introduction" className="product17-content-section">
              <h2>Introduction</h2>
              <p>The growth of shared mobility has transformed urban transportation. Operating a profitable shared fleet requires balancing vehicle dispatch, driver allocations, passenger bookings, dynamic pricing, and vehicle security. Our Car-sharing and Ride-hailing Platform Solutions is an enterprise-grade cloud system designed for mobility operators, ride-hailing startups, and car rental networks.</p>
              <p>The platform provides high-performance APIs, driver matching engines, dynamic fare algorithms, and keyless vehicle access systems. By integrating directly with onboard telematics, the software allows passengers to locate and unlock vehicles using their smartphones. It coordinates routes, calculates vehicle pick-up times, processes payments, and monitors vehicle diagnostic states, providing a complete platform for shared mobility operations.</p>
            </section>

            <section id="key-features" className="product17-content-section">
              <h2>Key Features</h2>
              <div className="product17-feature-grid">
                
                <div className="product17-card">
                  <h3 className="product17-card-title">Real-Time Driver Matcher</h3>
                  <p className="product17-card-desc">Pairs passengers with drivers in milliseconds using geospatial algorithms that minimize passenger wait times.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Dynamic Fare Engine</h3>
                  <p className="product17-card-desc">Adjusts booking prices in real-time based on ride demand, traffic, weather, and vehicle availability.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Keyless Mobile Unlock</h3>
                  <p className="product17-card-desc">Interfaces with vehicle telematics to allow keyless locking, unlocking, and starting via passenger smartphones.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Automated Fleet Dispatcher</h3>
                  <p className="product17-card-desc">Schedules shared vehicles, routing them to high-demand areas to maximize daily utilization.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Secure Payment Orchestrator</h3>
                  <p className="product17-card-desc">Processes passenger payments, manages ride discount codes, and automates driver payout transfers.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Driver Performance Monitor</h3>
                  <p className="product17-card-desc">Scores drivers based on speed limits, braking habits, and passenger rating feedback.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">EV Battery State Optimizer</h3>
                  <p className="product17-card-desc">Routes low-battery shared vehicles to charging depots automatically, scheduling charge slots.</p>
                </div>
                <div className="product17-card">
                  <h3 className="product17-card-title">Tamper & Theft Protection</h3>
                  <p className="product17-card-desc">Monitors vehicle sensors, flagging unauthorized engine starts and tracking stolen vehicles via GPS.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product17-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product17-glass-panel">
                <h3 className="product17-panel-heading">Industry Background</h3>
                <p>Early shared mobility platforms operated on simple static bookings: reserve a car, pick it up at a depot, and return it. The growth of cell networks and GPS enabled free-floating car-sharing and real-time ride-hailing. Operating these networks is complex, requiring real-time tracking of thousands of assets, matching supply with demand, and preventing vehicle thefts. Furthermore, ensuring a clean, operational fleet requires tracking diagnostic states and scheduling cleaning crews dynamically.</p>
                <div className="product17-divider"></div>
                <h3 className="product17-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Mobility operators must handle high transaction volumes during peak transit hours. Drivers and passengers expect instant matching, accurate pickup ETAs, and fast payment processing. Additionally, vehicle security is a concern: enabling keyless smartphone access requires secure, authenticated pathways to prevent remote hacker entry. Designers need a platform that scales across millions of users, maintains high security, and integrates with vehicle systems.</p>
              </div>
            </section>

            <section id="functionalities" className="product17-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product17-module-list">
                
                <li className="product17-module-item">
                  <strong>Geospatial Matching Engine:</strong> Processes user coordinates, search ranges, and driver locations to calculate optimal ride matches.
                </li>
                <li className="product17-module-item">
                  <strong>Dynamic Price Calculator:</strong> Adjusts fare structures based on supply-demand curves and congestion metrics.
                </li>
                <li className="product17-module-item">
                  <strong>Keyless Access Controller:</strong> Generates secure digital key tokens, sending them to passenger apps to unlock vehicles.
                </li>
                <li className="product17-module-item">
                  <strong>Telemetry Sync Gateway:</strong> Ingests location logs, battery levels, fuel states, and DTC errors from vehicle modems.
                </li>
                <li className="product17-module-item">
                  <strong>Driver Payout Portal:</strong> Calculates weekly driving hours and mileage, transferring payouts to driver bank accounts.
                </li>
                <li className="product17-module-item">
                  <strong>Ride Incident Logger:</strong> Records vehicle accelerometer data during active rides to log accidents or hard driving events.
                </li>
              </ul>
            </section>

            <section id="value" className="product17-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product17-highlight-text">Our Car-sharing and Ride-hailing platform delivers value by maximizing fleet utilization rates by up to 25%, increasing operator profitability. It reduces passenger wait times by 30% through intelligent driver routing. The keyless access system eliminates physical key handovers, lowering operational labor costs. By tracking vehicle health in real-time, it schedules cleanings and repairs before issues scale, preserving fleet asset values and passenger trust.</p>
            </section>

            <section id="workflow" className="product17-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product17-grid-2">
                <div>
                  <h3 className="product17-subheading">Operational Workflow</h3>
                  <div className="product17-workflow-steps">
                    
                    <div className="product17-step">
                      <div className="product17-step-number">1</div>
                      <div className="product17-step-content">
                        <h4>Ride Request Ingest</h4>
                        <p>A passenger inputs their destination on the app, triggering a fare estimate and driver search.</p>
                      </div>
                    </div>
                    <div className="product17-step">
                      <div className="product17-step-number">2</div>
                      <div className="product17-step-content">
                        <h4>Driver Match Search</h4>
                        <p>The matching engine locates the nearest driver, sending them the dispatch details via their app.</p>
                      </div>
                    </div>
                    <div className="product17-step">
                      <div className="product17-step-number">3</div>
                      <div className="product17-step-content">
                        <h4>Unlock & Start (Car Share)</h4>
                        <p>For car-sharing, the passenger walks to the vehicle and sends an unlock command via Bluetooth or cellular.</p>
                      </div>
                    </div>
                    <div className="product17-step">
                      <div className="product17-step-number">4</div>
                      <div className="product17-step-content">
                        <h4>Ride Tracking & Diagnostics</h4>
                        <p>The platform tracks coordinates, speeds, and vehicle health throughout the ride journey.</p>
                      </div>
                    </div>
                    <div className="product17-step">
                      <div className="product17-step-number">5</div>
                      <div className="product17-step-content">
                        <h4>Payment & Completion</h4>
                        <p>When the ride ends, the vehicle locks, the payment is processed, and driver safety scores update.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product17-subheading">Implementation Process</h3>
                  <ul className="product17-process-list">
                    
                    <li>
                      <strong>Phase 1: Deploy Platform Backend</strong>
                      <p>Deploy the database and core services in the cloud, setting up API endpoints.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Install Keyless Telematics</strong>
                      <p>Install keyless lock telematics units inside fleet vehicles, linking them with locks and ignition.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Configure Matching Rules</strong>
                      <p>Set matching search radiuses, driver selection limits, and peak pricing rules.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Integrate Payment Processing</strong>
                      <p>Connect Stripe or local payment providers, enabling credit card processing and billing.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Launch Driver & Rider Apps</strong>
                      <p>Publish rider and driver apps to mobile stores, linking them to the cloud backend.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Go Live & Operations</strong>
                      <p>Launch the operator console, monitor shared assets on the map, and optimize driver dispatches.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product17-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on a scalable cloud-native microservices architecture. A high-performance geospatial matching service runs on optimized database instances, while telematics services manage WebSocket links with vehicle modems. Digital key tokens are managed by a secure cryptography service, ensuring keys are signed and verified before unlocking doors.</p>
            </section>

            <section id="tech-arch" className="product17-content-section">
              <h2>Technical Architecture</h2>
              <div className="product17-tech-arch-grid">
                
                <div className="product17-tech-card">
                  <span className="product17-tech-label">FRONTEND</span>
                  <p>Mobile passenger and driver apps built with React Native/TypeScript, combined with a React-based operator dashboard.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">BACKEND</span>
                  <p>High-performance matching and dispatch microservices developed in Go, hosted in Kubernetes containers.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing user API calls, telematics packets, and WebSocket lines.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">PROCESSING</span>
                  <p>Apache Kafka routing location updates to Apache Spark for real-time dispatch and price analysis.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">AI ML</span>
                  <p>Predictive demand models forecasting ride volume across city zones using historic weather and event calendars.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">EDGE</span>
                  <p>Mobile SDKs executing local Bluetooth lock/unlock codes when cell connections are unavailable.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">SECURITY</span>
                  <p>Hardware-security modules managing digital key tokens, SSL/TLS data transfer, and PCI-DSS compliance.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon DynamoDB for live positions, PostgreSQL for transactions, and EKS for scaling.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">INTEGRATION</span>
                  <p>API integrations for Google Maps, Twilio SMS, Stripe payments, and vehicle manufacturer clouds.</p>
                </div>
                <div className="product17-tech-card">
                  <span className="product17-tech-label">MONITORING</span>
                  <p>Datadog infrastructure tracking, Promtail and Loki log indexing, and automated alerts for system lag.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product17-content-section">
              <h2>Technologies Used</h2>
              <div className="product17-tags-container">
                
                <div className="product17-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">Go</span><span className="product17-tag">TypeScript</span><span className="product17-tag">Python</span><span className="product17-tag">Swift</span><span className="product17-tag">Kotlin</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">React Native</span><span className="product17-tag">Node.js</span><span className="product17-tag">Spring Boot</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">PostgreSQL</span><span className="product17-tag">Amazon DynamoDB</span><span className="product17-tag">Redis</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">AWS</span><span className="product17-tag">Azure</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">TensorFlow</span><span className="product17-tag">Ray RLlib</span><span className="product17-tag">Scikit-learn</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>IOT</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">Keyless OBD-II controllers</span><span className="product17-tag">GPS trackers</span><span className="product17-tag">BLE beacons</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">WebSockets</span><span className="product17-tag">HTTPS</span><span className="product17-tag">gRPC</span><span className="product17-tag">Bluetooth LE</span><span className="product17-tag">MQTT</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">Docker</span><span className="product17-tag">Kubernetes</span><span className="product17-tag">Terraform</span><span className="product17-tag">CircleCI</span>
                  </div>
                </div>
                <div className="product17-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product17-tags">
                    <span className="product17-tag">PCI-DSS</span><span className="product17-tag">mTLS</span><span className="product17-tag">AES-256</span><span className="product17-tag">Secure Key Tokens</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product17-content-section">
              <h2>Real-World Applications</h2>
              <div className="product17-feature-grid">
                
                <div className="product17-app-card">
                  <h4>Free-Floating Car-Share Deployment</h4>
                  <p>Managed 800 shared cars in a metropolitan center, enabling keyless unlock and booking.</p>
                </div>
                <div className="product17-app-card">
                  <h4>Urban Ride-Hailing Matcher</h4>
                  <p>Matched passengers with 2,000 active drivers, reducing pickup times by 4 minutes.</p>
                </div>
                <div className="product17-app-card">
                  <h4>Corporate Car-Sharing Fleet</h4>
                  <p>Shared employee shuttle vehicles across corporate campuses, tracking vehicle utilization.</p>
                </div>
                <div className="product17-app-card">
                  <h4>EV Rideshare Charging Optimizer</h4>
                  <p>Monitored EV battery states, routing low cars to depot fast chargers between rides.</p>
                </div>
                <div className="product17-app-card">
                  <h4>Peer-to-Peer Rental Unlock</h4>
                  <p>Enabled peer-to-peer car sharing, generating secure digital keys for passenger unlock.</p>
                </div>
                <div className="product17-app-card">
                  <h4>Municipal Vanpool Coordination</h4>
                  <p>Coordinated municipal commuter vanpools, optimizing passenger drop-off points.</p>
                </div>
                <div className="product17-app-card">
                  <h4>Airport Car-Rental Automation</h4>
                  <p>Automated airport car collection, letting drivers bypass counter queues and unlock cars.</p>
                </div>
                <div className="product17-app-card">
                  <h4>University Micro-Mobility Fleet</h4>
                  <p>Managed a fleet of shared neighborhood electric shuttles on a university campus.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product17-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product17-grid-2">
                <div className="product17-benefits-box">
                  <h3 className="product17-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product17-check-list">
                    
                    <li>
                      <strong>Maximized Fleet Utilization:</strong> Saves vehicle downtime by routing cars to high-demand areas, raising revenue by up to 25%.
                    </li>
                    <li>
                      <strong>Faster Passenger Match:</strong> Pairs drivers with passengers in milliseconds, reducing pickup times by 30%.
                    </li>
                    <li>
                      <strong>Lower Labor Overhead:</strong> Keyless locking systems eliminate physical keys, reducing fleet management staff costs.
                    </li>
                    <li>
                      <strong>Enhanced Asset Security:</strong> Tracks locations and engine status, preventing vehicle theft and detecting mechanical abuse.
                    </li>
                    <li>
                      <strong>Scalable Operations API:</strong> Allows operators to manage thousands of users and vehicles from a single system.
                    </li>
                  </ul>
                </div>
                <div className="product17-challenges-box">
                  <h3 className="product17-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product17-cross-list">
                    
                    <li>
                      <strong>High Demand Peak Loads:</strong> Processing thousands of ride requests and driver updates during morning transit rushes.
                    </li>
                    <li>
                      <strong>Offline Unlock Failures:</strong> Ensuring passenger phones can unlock vehicles in underground garages without cellular signals.
                    </li>
                    <li>
                      <strong>Dynamic Pricing Stability:</strong> Preventing fare calculation spikes during weather events that could alienate passengers.
                    </li>
                    <li>
                      <strong>Varying Telematics Hardware:</strong> Integrating the platform with different keyless vehicle controller modules.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product17-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product17-glass-panel">
                <h3 className="product17-panel-heading">Future Scope</h3>
                <p>The future of shared mobility lies in autonomous robotaxi networks and peer-to-peer virtual microgrids. Fleet operators will deploy driverless vehicle fleets that navigate to bookings, clean themselves, and manage their own charging. Users will subscribe to dynamic mobility-as-a-service (MaaS) plans that combine trains, buses, and autonomous rides into a single subscription. Additionally, shared vehicles will return energy to the grid (V2G) when parked at depots during peak rates.</p>
                <div className="product17-divider"></div>
                <h3 className="product17-panel-heading">Industry Impact</h3>
                <p>This platform is crucial for reducing urban car ownership, lowering city traffic density and parking congestion. By making shared transit accessible and affordable, it supports the transition to sustainable cities and prepares transportation networks for autonomous vehicle integration.</p>
              </div>
            </section>

            <section className="product17-cta-section">
              <div className="product17-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Car-sharing and Ride-hailing Platform Solutions deliver the scalable, secure, and data-driven platform required to operate modern shared mobility networks. By combining geospatial matching with keyless access, we help operators scale and succeed.</p>
                <button className="product17-btn product17-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product17;
