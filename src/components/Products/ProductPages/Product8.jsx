import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product8.css';
import prd8 from "../../../assets/images/prd8.jpg";

const Product8 = () => {
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
    <div className="product8-detail-page">
      <section className="product8-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd8})` }}>
        <div className="product8-hero-content">
          <button className="product8-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Predictive Maintenance for Automobiles</h1>
          <p>Enterprise AI platform utilizing on-board telemetry, sensor vibration data, and cloud diagnostics to forecast vehicle component failures before they happen.</p>
        </div>
      </section>

      <div className="product8-container">
        <div className="product8-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product8-sidebar">
            <div className="product8-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product8-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product8-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product8-main-content">
            
            <section id="introduction" className="product8-content-section">
              <h2>Introduction</h2>
              <p>Vehicle downtime and unexpected component failures present significant costs for fleet operators and car owners. Traditional maintenance schedules rely on static parameters, such as mileage or calendar duration, which fail to account for actual driving stresses, environmental conditions, and manufacturing variances. Our Predictive Maintenance for Automobiles software is an enterprise-grade AI platform designed to monitor, diagnose, and forecast component wear in real-time.</p>
              <p>The platform aggregates high-frequency data streams—including engine temperatures, oil viscosity indexes, cabin vibration profiles, and brake caliper wear—directly from the vehicle CAN bus and external sensors. Using deep learning models and digital twin technology, the system projects the Remaining Useful Life (RUL) of critical components, alerting fleet managers and scheduling service appointments before a failure occurs, reducing vehicle downtime by up to 35%.</p>
            </section>

            <section id="key-features" className="product8-content-section">
              <h2>Key Features</h2>
              <div className="product8-feature-grid">
                
                <div className="product8-card">
                  <h3 className="product8-card-title">Real-Time Sensor Ingestion Engine</h3>
                  <p className="product8-card-desc">Pipes high-frequency data from engine, transmission, battery, and brake systems via telematics modems.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Digital Twin Wear Modeling</h3>
                  <p className="product8-card-desc">Constructs a live virtual model of the engine and drivetrain, simulating stress and wear based on driving habits.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Remaining Useful Life (RUL) Forecast</h3>
                  <p className="product8-card-desc">Predicts the exact mileage or date range when a specific component is expected to fail with 90% accuracy.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Vibration Signature Analysis</h3>
                  <p className="product8-card-desc">Analyzes high-frequency accelerometer data to identify bearing wear, wheel misalignment, and suspension decay.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Battery Degradation Analytics</h3>
                  <p className="product8-card-desc">Monitors cell-level parameters in EVs to predict internal resistance increases and thermal management failures.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Fluids Quality Estimation</h3>
                  <p className="product8-card-desc">Estimates oil, coolant, and brake fluid contamination levels based on temperature cycles and driving load.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Automated Dealership Booking</h3>
                  <p className="product8-card-desc">Interfaces with OEM dealer management networks to reserve parts and schedule service appointments automatically.</p>
                </div>
                <div className="product8-card">
                  <h3 className="product8-card-title">Dynamic Fleet Health Dashboard</h3>
                  <p className="product8-card-desc">Provides fleet operators with a complete overhead view of vehicle health scores, active trouble codes, and maintenance priorities.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product8-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product8-glass-panel">
                <h3 className="product8-panel-heading">Industry Background</h3>
                <p>Automotive maintenance has historically been reactive: a component breaks, and the vehicle is towed to a shop. While scheduled maintenance helps, it is highly inefficient—leading to the premature replacement of perfectly functional parts or, conversely, sudden breakdowns between service windows. The rise of connected vehicles and advanced onboard diagnostics opens the door to a smarter approach. By analyzing the tiny, early indicators of wear—such as micro-vibrations, minor pressure drops, or temperature fluctuations—software can identify failures weeks before they happen, optimizing logistics and parts inventory.</p>
                <div className="product8-divider"></div>
                <h3 className="product8-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Developing predictive maintenance systems requires handling massive amounts of noisy sensor data. Vibration signals, for instance, generate megabytes of data per second, which is too expensive to upload to the cloud. The system must run edge filtering algorithms to compress and analyze data on the vehicle, transmitting only identified anomalies. Furthermore, training AI models to recognize failure modes requires access to historical failure datasets, which are often siloed or unavailable.</p>
              </div>
            </section>

            <section id="functionalities" className="product8-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product8-module-list">
                
                <li className="product8-module-item">
                  <strong>CAN Telemetry Parser:</strong> Extracts engine, transmission, and battery diagnostic codes and sensor metrics from the vehicle network.
                </li>
                <li className="product8-module-item">
                  <strong>Edge Vibration Processor:</strong> Executes Fast Fourier Transforms (FFT) on accelerometer data at the edge, flagging anomalous frequency peaks.
                </li>
                <li className="product8-module-item">
                  <strong>Cloud Diagnostic Engine:</strong> Runs deep neural network models to compare vehicle telemetry with historical failure signatures.
                </li>
                <li className="product8-module-item">
                  <strong>Digital Twin Synchronizer:</strong> Updates the component wear indices stored in the cloud based on daily vehicle operational stress.
                </li>
                <li className="product8-module-item">
                  <strong>Maintenance Scheduler Module:</strong> Matches predicted failures with dealer parts availability and schedules service window slots.
                </li>
                <li className="product8-module-item">
                  <strong>Operator Alert Dispatcher:</strong> Generates clear, prioritised maintenance recommendations for fleet managers, avoiding technical code jargon.
                </li>
              </ul>
            </section>

            <section id="value" className="product8-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product8-highlight-text">Our Predictive Maintenance platform delivers value by converting raw vehicle telemetry into direct cost savings. It reduces unplanned roadside breakdowns by 70%, ensuring high service reliability for logistics and delivery fleets. Fleet operators save up to 20% on maintenance budgets by extending service intervals for gently driven vehicles and preventing secondary damage (e.g., a worn bearing destroying an entire axle assembly). For passenger vehicle OEMs, it increases customer satisfaction and improves dealer service workshop efficiency through pre-ordered parts inventory.</p>
            </section>

            <section id="workflow" className="product8-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product8-grid-2">
                <div>
                  <h3 className="product8-subheading">Operational Workflow</h3>
                  <div className="product8-workflow-steps">
                    
                    <div className="product8-step">
                      <div className="product8-step-number">1</div>
                      <div className="product8-step-content">
                        <h4>Telemetry Collection</h4>
                        <p>Telematics units read engine load, coolant temperature, vibration, and error codes from the OBD-II port.</p>
                      </div>
                    </div>
                    <div className="product8-step">
                      <div className="product8-step-number">2</div>
                      <div className="product8-step-content">
                        <h4>Edge Filtering & Processing</h4>
                        <p>Local processors filter high-frequency sensor noise, executing basic Fourier transforms to detect abnormal friction signatures.</p>
                      </div>
                    </div>
                    <div className="product8-step">
                      <div className="product8-step-number">3</div>
                      <div className="product8-step-content">
                        <h4>Cloud Ingestion & Matching</h4>
                        <p>Filtered telemetry is uploaded to the cloud, where it is compared against the specific vehicle model's failure database.</p>
                      </div>
                    </div>
                    <div className="product8-step">
                      <div className="product8-step-number">4</div>
                      <div className="product8-step-content">
                        <h4>Digital Twin Wear Update</h4>
                        <p>The virtual digital twin updates its component wear logs, computing the remaining useful life of the vehicle's parts.</p>
                      </div>
                    </div>
                    <div className="product8-step">
                      <div className="product8-step-number">5</div>
                      <div className="product8-step-content">
                        <h4>Alert & Service Booking</h4>
                        <p>If a component's health drops below a set threshold, an alert is sent, and an automated booking is sent to the nearest service center.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product8-subheading">Implementation Process</h3>
                  <ul className="product8-process-list">
                    
                    <li>
                      <strong>Phase 1: Select Target Vehicle Models</strong>
                      <p>Identify the vehicle models in the fleet and audit their onboard sensor configurations.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Deploy Telematics Configuration</strong>
                      <p>Install the diagnostic software client onto the vehicle's telematics module or gateway ECU.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Establish Cloud Data Pipelines</strong>
                      <p>Configure high-throughput data streams from the vehicles to the cloud ingestion servers.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Train Component AI Models</strong>
                      <p>Train machine learning models on historical sensor records and repair datasets to recognize failure patterns.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Configure Integration APIs</strong>
                      <p>Link the platform with the fleet's ERP software and the OEM's dealer management systems.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Launch Predictive Monitoring</strong>
                      <p>Go live with the fleet dashboard, track component health scores, and receive automated maintenance recommendations.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product8-content-section">
              <h2>System Architecture</h2>
              <p>The predictive maintenance platform utilizes a hybrid edge-cloud architecture. Vibration sensors and diagnostic modules run edge algorithms to process high-frequency signals locally, preventing high cellular data costs. The cloud platform, hosted on AWS, maintains a digital twin for every vehicle in the fleet, executing complex neural network models to calculate wear and schedule repairs. Integration with dealer inventory management systems ensures that parts are ordered and delivered before the vehicle arrives for its service appointment.</p>
            </section>

            <section id="tech-arch" className="product8-content-section">
              <h2>Technical Architecture</h2>
              <div className="product8-tech-arch-grid">
                
                <div className="product8-tech-card">
                  <span className="product8-tech-label">FRONTEND</span>
                  <p>Enterprise operator dashboard built with React and Redux, featuring interactive charts, component wear indicators, and active maintenance logs.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">BACKEND</span>
                  <p>Scalable backend services written in Go and Node.js, running in Kubernetes containers for automated scaling.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">GATEWAY</span>
                  <p>Secure API gateway managing telemetry ingestion streams and external system integrations.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">PROCESSING</span>
                  <p>Apache Kafka ingestion hub routing telemetry data to Apache Spark for batched aggregation and feature extraction.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">AI ML</span>
                  <p>Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) networks trained on AWS SageMaker for RUL forecasting.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">EDGE</span>
                  <p>C++ client software running on Linux telematics units, executing edge signal processing and CAN bus protocol translation.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">SECURITY</span>
                  <p>mTLS authentication for all telemetry streams, role-based access control (RBAC), and AES-256 database encryption.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging InfluxDB for time-series sensor data, PostgreSQL for configurations, and S3 for long-term log archives.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">INTEGRATION</span>
                  <p>REST and SOAP APIs linking the system to ERP software, dealer parts networks, and manufacturer inventory databases.</p>
                </div>
                <div className="product8-tech-card">
                  <span className="product8-tech-label">MONITORING</span>
                  <p>Prometheus and Grafana for system health metrics, combined with automated alerts for offline telematics devices.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product8-content-section">
              <h2>Technologies Used</h2>
              <div className="product8-tags-container">
                
                <div className="product8-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">C++</span><span className="product8-tag">Go</span><span className="product8-tag">Python</span><span className="product8-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">React</span><span className="product8-tag">Apache Spark</span><span className="product8-tag">TensorFlow</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">InfluxDB</span><span className="product8-tag">PostgreSQL</span><span className="product8-tag">Redis</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">AWS</span><span className="product8-tag">Google Cloud</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">TensorFlow</span><span className="product8-tag">Keras</span><span className="product8-tag">AWS SageMaker</span><span className="product8-tag">NumPy</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>IOT</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">OBD-II</span><span className="product8-tag">CAN Bus</span><span className="product8-tag">Accelerometers</span><span className="product8-tag">Temperature Sensors</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">MQTT</span><span className="product8-tag">HTTPS</span><span className="product8-tag">gRPC</span><span className="product8-tag">J1939</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">Docker</span><span className="product8-tag">Kubernetes</span><span className="product8-tag">Terraform</span><span className="product8-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product8-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product8-tags">
                    <span className="product8-tag">mTLS</span><span className="product8-tag">AES-256</span><span className="product8-tag">Secure Boot</span><span className="product8-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product8-content-section">
              <h2>Real-World Applications</h2>
              <div className="product8-feature-grid">
                
                <div className="product8-app-card">
                  <h4>Last-Mile Delivery Brake Diagnostics</h4>
                  <p>Monitored brake pads and caliper wear across 800 delivery vans, preventing roadside failures and reducing downtime.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Interstate Logistics Engine Diagnostics</h4>
                  <p>Tracked coolant pressure and oil temperatures in 200 long-haul trucks, identifying head gasket leaks before failure.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Electric Transit Bus Battery Care</h4>
                  <p>Monitored battery cell imbalances in a municipal bus fleet, scheduling balancing charges and preventing cell failures.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Car-Rental Fleet Health Monitoring</h4>
                  <p>Analyzed suspension and alignment wear via accelerometers in 5,000 rental cars, prioritizing maintenance.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Airport Tug Gearbox Diagnostics</h4>
                  <p>Monitored transmission vibration signatures on airport support tugs, avoiding cargo loading delays.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Agricultural Tractor Hydraulic Care</h4>
                  <p>Monitored hydraulic pressure cycles on heavy farm tractors, scheduling fluid changes before system failure.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Ride-Hailing Vehicle Tire Wear Analytics</h4>
                  <p>Analyzed ABS sensor frequency shifts to estimate tire tread wear dynamically across a ride-hailing fleet.</p>
                </div>
                <div className="product8-app-card">
                  <h4>Emergency Ambulance Powertrain Monitor</h4>
                  <p>Provided real-time diagnostic and wear tracking for an ambulance fleet, guaranteeing 99.9% vehicle availability.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product8-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product8-grid-2">
                <div className="product8-benefits-box">
                  <h3 className="product8-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product8-check-list">
                    
                    <li>
                      <strong>Reduced Unplanned Downtime:</strong> Reduces roadside breakdowns by 70%, keeping logistics and transport fleets operating reliably.
                    </li>
                    <li>
                      <strong>Lower Maintenance Costs:</strong> Saves up to 20% by extending component replacement intervals and preventing secondary powertrain damage.
                    </li>
                    <li>
                      <strong>Optimized Workshop Efficiency:</strong> Ensures parts are ordered and delivered to the service center before the vehicle arrives, cutting service times.
                    </li>
                    <li>
                      <strong>Enhanced Vehicle Safety:</strong> Detects worn brakes, steering components, and tires before they create safety hazards for drivers.
                    </li>
                    <li>
                      <strong>Extended Vehicle Lifespan:</strong> Protects major powertrain components from failure, extending the economic lifecycle of the vehicle.
                    </li>
                  </ul>
                </div>
                <div className="product8-challenges-box">
                  <h3 className="product8-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product8-cross-list">
                    
                    <li>
                      <strong>Noisy Operational Environments:</strong> Filtering out road noise and passenger movement from suspension and bearing vibration sensors.
                    </li>
                    <li>
                      <strong>Data Silo Challenges:</strong> Accessing detailed manufacturing records and historical repair histories from OEMs to calibrate models.
                    </li>
                    <li>
                      <strong>High Edge Processing Demands:</strong> Executing complex Fast Fourier Transforms on low-power telematics microcontrollers.
                    </li>
                    <li>
                      <strong>Unpredictable Failure Modes:</strong> Modeling rare, catastrophic component failures that occur without clear warning indicators.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product8-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product8-glass-panel">
                <h3 className="product8-panel-heading">Future Scope</h3>
                <p>The future of predictive maintenance lies in deep integration with automotive digital twins and blockchain-backed service ledgers. We are developing systems where a vehicle's digital twin lives on decentralized cloud networks, continuously updating its status. When a component requires replacement, the digital twin will negotiate directly with local parts warehouses, purchase the replacement part, and book the repair slot. Additionally, integrating blockchain ledgers will create a tamper-proof service history, verifying vehicle maintenance status and increasing resale values.</p>
                <div className="product8-divider"></div>
                <h3 className="product8-panel-heading">Industry Impact</h3>
                <p>This platform transforms vehicle ownership and logistics operations by making maintenance completely predictable. It eliminates the economic waste of premature servicing, reduces roadside vehicle breakdowns, and supports the transition to autonomous logistics where vehicles must manage their own health.</p>
              </div>
            </section>

            <section className="product8-cta-section">
              <div className="product8-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Predictive Maintenance for Automobiles software offers a secure, scalable, and highly accurate solution for fleet operators and OEMs. By leveraging edge analytics and cloud digital twins, we help companies keep their vehicles on the road, reduce maintenance costs, and ensure maximum passenger safety.</p>
                <button className="product8-btn product8-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product8;
