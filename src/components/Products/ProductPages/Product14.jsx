import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product14.css';
import prd14 from "../../../assets/images/prd14.png";

const Product14 = () => {
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
    <div className="product14-detail-page">
      <section className="product14-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd14})` }}>
        <div className="product14-hero-content">
          <button className="product14-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Vehicle Routing and Navigation Optimization Software</h1>
          <p>Enterprise cloud platform optimizing commercial routing, dynamic dispatching, multi-stop scheduling, and real-time navigation navigation workflows.</p>
        </div>
      </section>

      <div className="product14-container">
        <div className="product14-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product14-sidebar">
            <div className="product14-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product14-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product14-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product14-main-content">
            
            <section id="introduction" className="product14-content-section">
              <h2>Introduction</h2>
              <p>Logistics operators and delivery networks face intense pressure to deliver packages faster, cheaper, and more sustainably. Inefficient route planning, static navigation, dynamic traffic delays, and uncoordinated drop-off schedules result in wasted fuel, delayed deliveries, and high driver turnover. Our Vehicle Routing and Navigation Optimization Software is an enterprise-grade cloud platform designed to solve complex multi-vehicle routing problems in real-time.</p>
              <p>The platform utilizes advanced mathematical optimization algorithms, real-time traffic sensor streams, and historical speed data to compute the most efficient delivery sequences. It coordinates routes dynamically, adjusting schedules in real-time as new pickup orders arrive or accidents occur. The system integrates with custom mobile navigation apps for drivers, providing truck-specific routing constraints (such as bridge height and weight limits), reducing fleet mileage, and cutting logistics costs.</p>
            </section>

            <section id="key-features" className="product14-content-section">
              <h2>Key Features</h2>
              <div className="product14-feature-grid">
                
                <div className="product14-card">
                  <h3 className="product14-card-title">Multi-Vehicle Routing Solver</h3>
                  <p className="product14-card-desc">Solves complex Capacitated Vehicle Routing Problems (CVRP) with time windows, optimizing routes in seconds.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Real-Time Dynamic Dispatch</h3>
                  <p className="product14-card-desc">Recalculates active routes on the fly as new pickup orders or customer cancellations are processed.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Truck-Specific Navigation Profiles</h3>
                  <p className="product14-card-desc">Avoids low bridges, weight-restricted roads, and narrow streets based on vehicle height and weight parameters.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Dynamic Traffic Adaptation</h3>
                  <p className="product14-card-desc">Adjusts travel times and routes based on real-time congestion reports and predicted traffic shockwaves.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Multi-Stop Schedule Planner</h3>
                  <p className="product14-card-desc">Coordinates complex schedules, matching stop priorities with driver shift limits and customer availability.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">EV Eco-Routing Engine</h3>
                  <p className="product14-card-desc">Calculates range-maximizing routes for electric trucks, factoring in elevation changes and charging station locations.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Automated Dispatch Panel</h3>
                  <p className="product14-card-desc">Provides dispatchers with complete visualization of route status, driver progress, and delivery delays.</p>
                </div>
                <div className="product14-card">
                  <h3 className="product14-card-title">Customer ETA Notification Hub</h3>
                  <p className="product14-card-desc">Sends real-time SMS alerts with precise delivery windows based on actual vehicle GPS progress.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product14-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product14-glass-panel">
                <h3 className="product14-panel-heading">Industry Background</h3>
                <p>Traditional routing software calculates distances using simple, static maps. These programs fail in commercial settings where vehicles face unique constraints—such as a delivery truck that cannot turn left on busy avenues, or an electric van that requires flat routes to conserve battery. Inefficient planning leads to excessive fuel use, high carbon emissions, and missed delivery windows. Solving these challenges requires a high-performance routing solver that can analyze dynamic road data, vehicle parameters, and business constraints in parallel.</p>
                <div className="product14-divider"></div>
                <h3 className="product14-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Commercial routing is a NP-hard mathematical optimization problem, meaning that finding the absolute best route across dozens of trucks and hundreds of stops is computationally intense. Running these solvers in real-time as traffic shifts requires scalable cloud computing power. Additionally, drivers need custom navigation apps that display commercial routes, avoiding standard consumer mapping shortcuts that are unsafe for large delivery trucks.</p>
              </div>
            </section>

            <section id="functionalities" className="product14-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product14-module-list">
                
                <li className="product14-module-item">
                  <strong>Route Optimization Engine:</strong> Runs heuristics and metaheuristics to solve vehicle routing problems across thousands of locations.
                </li>
                <li className="product14-module-item">
                  <strong>Dynamic Traffic Processor:</strong> Ingests real-time speed data, updating segment travel times in the routing database.
                </li>
                <li className="product14-module-item">
                  <strong>Commercial Navigation Broker:</strong> Streams customized turn-by-turn routing directions to driver mobile devices.
                </li>
                <li className="product14-module-item">
                  <strong>Dynamic Dispatch Coordinator:</strong> Inserts new stops into active driver routes, minimizing overall detour miles.
                </li>
                <li className="product14-module-item">
                  <strong>EV Battery Solver:</strong> Optimizes charging stops along long-distance routes based on charger speeds and vehicle state of charge.
                </li>
                <li className="product14-module-item">
                  <strong>Logistics Analytics Hub:</strong> Tracks key performance metrics like delivery success rate, distance deviation, and fuel waste.
                </li>
              </ul>
            </section>

            <section id="value" className="product14-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product14-highlight-text">Our Routing Optimization platform delivers value by reducing overall fleet mileage by up to 20% and cutting fuel consumption by 15%. This directly translates to lower operational costs and a reduced carbon footprint, helping fleets meet corporate sustainability targets. Delivery success rates improve by 25% due to accurate, traffic-aware ETAs, enhancing customer satisfaction. Dispatchers save hours of manual planning, managing larger fleets with less administrative overhead.</p>
            </section>

            <section id="workflow" className="product14-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product14-grid-2">
                <div>
                  <h3 className="product14-subheading">Operational Workflow</h3>
                  <div className="product14-workflow-steps">
                    
                    <div className="product14-step">
                      <div className="product14-step-number">1</div>
                      <div className="product14-step-content">
                        <h4>Order Import</h4>
                        <p>Import delivery locations, time windows, and package weights from the ERP or order database.</p>
                      </div>
                    </div>
                    <div className="product14-step">
                      <div className="product14-step-number">2</div>
                      <div className="product14-step-content">
                        <h4>Constraint Input</h4>
                        <p>Select active vehicles, capacities, driver shift times, and commercial route constraints.</p>
                      </div>
                    </div>
                    <div className="product14-step">
                      <div className="product14-step-number">3</div>
                      <div className="product14-step-content">
                        <h4>Optimization Run</h4>
                        <p>The solver runs in the cloud, generating optimized route sequences and dispatch assignments.</p>
                      </div>
                    </div>
                    <div className="product14-step">
                      <div className="product14-step-number">4</div>
                      <div className="product14-step-content">
                        <h4>Driver Dispatch</h4>
                        <p>Routes are sent to driver mobile navigation apps, starting turn-by-turn commercial navigation.</p>
                      </div>
                    </div>
                    <div className="product14-step">
                      <div className="product14-step-number">5</div>
                      <div className="product14-step-content">
                        <h4>Dynamic Re-Route</h4>
                        <p>The platform monitors traffic and new pickup requests, adjusting routes in real-time to maintain ETAs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product14-subheading">Implementation Process</h3>
                  <ul className="product14-process-list">
                    
                    <li>
                      <strong>Phase 1: Connect Order Database</strong>
                      <p>Integrate the routing software APIs with existing order management and warehouse platforms.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Configure Fleet Parameters</strong>
                      <p>Input vehicle capacities, heights, weights, fuel types, and driver roster profiles.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Deploy Driver Apps</strong>
                      <p>Install the custom navigation app on driver mobile tablets and telematics screens.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Establish Traffic Feeds</strong>
                      <p>Link the system to real-time traffic and weather APIs to receive route-segment updates.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Calibrate Optimization Rules</strong>
                      <p>Set priority rules for specific customers, delivery windows, and fuel efficiency limits.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Launch Dynamic Routing</strong>
                      <p>Enable automated route planning, dispatch drivers, and monitor fleet delivery progress in real-time.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product14-content-section">
              <h2>System Architecture</h2>
              <p>The routing platform is built on a scalable cloud-native microservices architecture. The core optimization solver runs on high-memory GPU/CPU nodes, allowing it to process large routing matrices in seconds. The routing database is updated continuously with real-time speed data, and driver navigation apps communicate with the platform via secure WebSocket links.</p>
            </section>

            <section id="tech-arch" className="product14-content-section">
              <h2>Technical Architecture</h2>
              <div className="product14-tech-arch-grid">
                
                <div className="product14-tech-card">
                  <span className="product14-tech-label">FRONTEND</span>
                  <p>Dispatcher control board developed in React and TypeScript, incorporating map visualization layers via Mapbox GL.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">BACKEND</span>
                  <p>Optimization microservices written in Go and C++, utilizing parallel processing to solve vehicle routing equations.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing incoming order imports, driver logs, and routing API calls.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">PROCESSING</span>
                  <p>Apache Kafka streams coordinates and order data to Apache Flink for real-time fleet ETA calculations.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">AI ML</span>
                  <p>Reinforcement learning models trained to predict driver service times at specific locations, improving route accuracy.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">EDGE</span>
                  <p>Mobile client application running on Android/iOS devices, caching route details offline to maintain navigation during signal drops.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">SECURITY</span>
                  <p>HTTPS/TLS encrypted communication, tokenized API authentication (JWT), and secure user access management.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon Elastic Container Service (ECS), DynamoDB for states, and RDS for master configurations.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">INTEGRATION</span>
                  <p>Standardized REST APIs and webhooks integrating with ERP solutions like SAP and Salesforce.</p>
                </div>
                <div className="product14-tech-card">
                  <span className="product14-tech-label">MONITORING</span>
                  <p>Datadog for cloud infrastructure tracking, combined with automated alerts for API timeouts.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product14-content-section">
              <h2>Technologies Used</h2>
              <div className="product14-tags-container">
                
                <div className="product14-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">Go</span><span className="product14-tag">C++</span><span className="product14-tag">Python</span><span className="product14-tag">TypeScript</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">React</span><span className="product14-tag">Node.js</span><span className="product14-tag">VRP Solver libraries (OR-Tools)</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">PostgreSQL (with PostGIS)</span><span className="product14-tag">Redis</span><span className="product14-tag">MongoDB</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">AWS</span><span className="product14-tag">Azure</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">TensorFlow (for service time prediction)</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>IOT</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">Driver Tablets</span><span className="product14-tag">Vehicle Telematics Units</span><span className="product14-tag">GPS modems</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">WebSockets</span><span className="product14-tag">HTTPS</span><span className="product14-tag">gRPC</span><span className="product14-tag">MQTT</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">Docker</span><span className="product14-tag">Kubernetes</span><span className="product14-tag">Terraform</span><span className="product14-tag">GitHub Actions</span>
                  </div>
                </div>
                <div className="product14-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product14-tags">
                    <span className="product14-tag">OAuth 2.0</span><span className="product14-tag">SSL/TLS encryption</span><span className="product14-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product14-content-section">
              <h2>Real-World Applications</h2>
              <div className="product14-feature-grid">
                
                <div className="product14-app-card">
                  <h4>Last-Mile E-Commerce Dispatch</h4>
                  <p>Optimized route planning for 600 urban delivery vehicles, reducing delivery costs by 18%.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Food Distribution Scheduling</h4>
                  <p>Scheduled temperature-controlled routes for 150 refrigerated trucks, keeping food fresh and routes fast.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Industrial Waste Collection Routing</h4>
                  <p>Planned optimal dump truck routes across 2,000 commercial waste collection bin locations, saving fuel.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Municipal Maintenance Route Sync</h4>
                  <p>Coordinated municipal lawn-mower and repair truck routing, improving civic service times.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Electric Truck Depot Routing</h4>
                  <p>Planned long-distance electric freight truck routing, coordinating charging stops along interstate highways.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Field Technician Scheduling</h4>
                  <p>Optimized travel plans for 300 home service technicians, increasing daily appointments by 20%.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Construction Cement Truck Dispatch</h4>
                  <p>Coordinated routes for concrete mixer trucks, ensuring concrete is poured within strict time limits.</p>
                </div>
                <div className="product14-app-card">
                  <h4>Airport Shuttle Bus Routing</h4>
                  <p>Optimized terminal shuttle routes dynamically based on passenger arrival volumes, reducing wait times.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product14-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product14-grid-2">
                <div className="product14-benefits-box">
                  <h3 className="product14-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product14-check-list">
                    
                    <li>
                      <strong>Reduced Fleet Mileage:</strong> Cuts total distance traveled by up to 20%, saving fuel and reducing vehicle wear.
                    </li>
                    <li>
                      <strong>Lower Operational Costs:</strong> Decreases fuel use by 15% and minimizes driver overtime hours through optimized schedules.
                    </li>
                    <li>
                      <strong>Accurate Customer ETAs:</strong> Calculates precise delivery windows, sending automated SMS alerts to improve customer satisfaction.
                    </li>
                    <li>
                      <strong>Truck-Safe Navigation:</strong> Prevents routing errors on restricted roads, reducing accidents and insurance claims.
                    </li>
                    <li>
                      <strong>Streamlined Dispatch Operations:</strong> Replaces manual planning spreadsheets with automated, cloud-optimized routes in seconds.
                    </li>
                  </ul>
                </div>
                <div className="product14-challenges-box">
                  <h3 className="product14-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product14-cross-list">
                    
                    <li>
                      <strong>NP-Hard Complexity Limits:</strong> Finding optimal routes for large fleets with hundreds of constraints requires significant cloud computing power.
                    </li>
                    <li>
                      <strong>Dynamic Road Anomalies:</strong> Adapting to sudden accidents, bridge closures, and weather delays without causing routing delays.
                    </li>
                    <li>
                      <strong>Offline Navigation Stability:</strong> Ensuring driver navigation apps remain functional when cellular signals drop in urban canyons.
                    </li>
                    <li>
                      <strong>Driver Adoption Friction:</strong> Coaching experienced drivers to trust automated routing directions rather than their historical shortcuts.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product14-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product14-glass-panel">
                <h3 className="product14-panel-heading">Future Scope</h3>
                <p>The future of vehicle routing lies in collaborative logistics networks and AI-driven autonomous swarm dispatch. We are developing models that allow different delivery companies to share route data anonymously, consolidating deliveries in the same neighborhoods to eliminate double-parking and fuel waste. Additionally, future routing systems will connect directly with autonomous delivery drones and sidewalk bots, optimizing multi-modal package handovers. Integration with quantum computing will allow cities to solve city-wide routing optimization problems in milliseconds.</p>
                <div className="product14-divider"></div>
                <h3 className="product14-panel-heading">Industry Impact</h3>
                <p>This platform is a key enabler of sustainable smart cities, reducing urban traffic congestion and freight-related carbon emissions. By making commercial logistics highly efficient, it helps companies scale their delivery operations while reducing vehicle wear and fuel consumption.</p>
              </div>
            </section>

            <section className="product14-cta-section">
              <div className="product14-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Vehicle Routing and Navigation Optimization Software offers a powerful, scalable, and data-driven solution for the modern logistics industry. By combining cloud solvers with real-time traffic navigation, we help companies deliver faster, safer, and cleaner.</p>
                <button className="product14-btn product14-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product14;
