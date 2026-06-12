import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product19.css';
import prd19 from "../../../assets/images/prd19.jpg";

const Product19 = () => {
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
    <div className="product19-detail-page">
      <section className="product19-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd19})` }}>
        <div className="product19-hero-content">
          <button className="product19-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Automotive Manufacturing Process Simulation Software</h1>
          <p>Enterprise virtual factory platform simulating assembly line dynamics, robotic welding workflows, paint shop processes, and logistics flows.</p>
        </div>
      </section>

      <div className="product19-container">
        <div className="product19-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product19-sidebar">
            <div className="product19-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product19-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product19-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product19-main-content">
            
            <section id="introduction" className="product19-content-section">
              <h2>Introduction</h2>
              <p>Setting up and optimizing automotive assembly lines requires balancing massive capital investments, robotic configurations, material logistics, and human operations. Design errors in factory layouts or robotic sequences can result in bottleneck delays, quality defects, and millions in repair costs. Our Automotive Manufacturing Process Simulation Software is an enterprise-grade virtual factory platform designed for manufacturing engineers, factory planners, and production managers.</p>
              <p>The platform constructs a high-fidelity 3D digital twin of the entire automotive assembly plant. Using physics-based modeling and discrete event simulation, the software simulates robotic welding paths, paint shop thermal processes, AGV logistics routing, and ergonomic human assembly workflows. It optimizes factory throughput, identifies production bottlenecks before lines are built, reduces cycle times, and accelerates factory launch schedules.</p>
            </section>

            <section id="key-features" className="product19-content-section">
              <h2>Key Features</h2>
              <div className="product19-feature-grid">
                
                <div className="product19-card">
                  <h3 className="product19-card-title">3D Digital Twin Factory</h3>
                  <p className="product19-card-desc">Renders complete plant layouts, including production lines, robotic cells, and material buffers in 3D.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">Robotic Path Optimizer</h3>
                  <p className="product19-card-desc">Simulates and plans collision-free welding, stamping, and assembly paths for industrial robots.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">Discrete Event Simulation</h3>
                  <p className="product19-card-desc">Models production flows, predicting cycle times, throughput barriers, and buffer capacities.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">Paint Shop Thermal Model</h3>
                  <p className="product19-card-desc">Simulates airflows and temperatures inside curing ovens to ensure paint quality and reduce energy use.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">AGV Logistics Router</h3>
                  <p className="product19-card-desc">Optimizes path planning and charging schedules for automated guided vehicles moving parts.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">Ergonomic Human Simulation</h3>
                  <p className="product19-card-desc">Evaluates assembly tasks, predicting worker muscle strain, reach limits, and safety metrics.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">PLC Virtual Commissioning</h3>
                  <p className="product19-card-desc">Integrates with PLC hardware (e.g., Siemens or Rockwell) to test automation programs before go-live.</p>
                </div>
                <div className="product19-card">
                  <h3 className="product19-card-title">Production Scheduling Solver</h3>
                  <p className="product19-card-desc">Uses optimization models to calculate production schedules for mixed-model vehicle assembly.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product19-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product19-glass-panel">
                <h3 className="product19-panel-heading">Industry Background</h3>
                <p>Automotive factories are among the most complex engineering systems in the world, containing thousands of coordinated robots, conveyors, and human operators. Historically, factory design was a slow, manual process using 2D drawings. Layout errors—such as a robot arm colliding with a structural pillar or a conveyor queue overflowing—were only caught during physical installation, causing expensive redesigns and product launch delays. Solving these challenges requires an integrated virtual factory platform that can simulate mechanical dynamics, logistics flows, and human processes in a unified 3D environment.</p>
                <div className="product19-divider"></div>
                <h3 className="product19-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Manufacturing simulation is bottlenecked by the complexity of importing massive CAD layouts containing millions of parts and coordinating different automation programming standards. Converting CAD files into simulation models is time-consuming. Additionally, simulating dynamic physics-based processes (like thermal paint curing or structural stamping) requires significant computing power. Planners need a platform that automates layout import, runs simulation solvers on the cloud, and links virtual models with real PLC controllers.</p>
              </div>
            </section>

            <section id="functionalities" className="product19-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product19-module-list">
                
                <li className="product19-module-item">
                  <strong>Layout Import Processor:</strong> Automates cleanup and importing of large factory CAD layouts, maintaining kinematic structures.
                </li>
                <li className="product19-module-item">
                  <strong>Robotic Simulation Engine:</strong> Simulates multi-axis robot movements, calculating cycle times and joint limits.
                </li>
                <li className="product19-module-item">
                  <strong>Discrete Event Flow Simulator:</strong> Tracks parts as they pass through factory stations, modeling bottlenecks and queues.
                </li>
                <li className="product19-module-item">
                  <strong>Virtual PLC Bridge:</strong> Establishes OPC-UA connections to link virtual factory models with physical automation controllers.
                </li>
                <li className="product19-module-item">
                  <strong>Ergonomic Kinematics Evaluator:</strong> Simulates virtual human workers, scoring task fatigue and posture safety.
                </li>
                <li className="product19-module-item">
                  <strong>Factory Analytics Panel:</strong> Provides dashboard reports on plant throughput, station utilization, and energy consumption.
                </li>
              </ul>
            </section>

            <section id="value" className="product19-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product19-highlight-text">Our Manufacturing Simulation platform delivers value by reducing factory setup times by up to 25% and cutting engineering design rework by 70%. It optimizes robotic paths to reduce cycle times by 12%, increasing daily vehicle output without adding hardware. By simulating ergonomics, it lowers worker injury rates by 30%, reducing compensation claims and improving factory morale. Furthermore, the virtual PLC commissioning avoids coding errors, shortening factory launch schedules by months.</p>
            </section>

            <section id="workflow" className="product19-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product19-grid-2">
                <div>
                  <h3 className="product19-subheading">Operational Workflow</h3>
                  <div className="product19-workflow-steps">
                    
                    <div className="product19-step">
                      <div className="product19-step-number">1</div>
                      <div className="product19-step-content">
                        <h4>CAD Import</h4>
                        <p>Import factory layouts, robot models, and vehicle assembly parts into the 3D visual workspace.</p>
                      </div>
                    </div>
                    <div className="product19-step">
                      <div className="product19-step-number">2</div>
                      <div className="product19-step-content">
                        <h4>Process Definition</h4>
                        <p>Define assembly sequences, robotic task paths, and worker workstation tasks.</p>
                      </div>
                    </div>
                    <div className="product19-step">
                      <div className="product19-step-number">3</div>
                      <div className="product19-step-content">
                        <h4>Virtual commissioning</h4>
                        <p>Connect the virtual factory model to PLC controllers, matching signal codes with simulated hardware actions.</p>
                      </div>
                    </div>
                    <div className="product19-step">
                      <div className="product19-step-number">4</div>
                      <div className="product19-step-content">
                        <h4>Simulation Run</h4>
                        <p>Execute the simulation, running mechanical dynamics and logistics flows to track cycle times and bottlenecks.</p>
                      </div>
                    </div>
                    <div className="product19-step">
                      <div className="product19-step-number">5</div>
                      <div className="product19-step-content">
                        <h4>Optimization & Launch</h4>
                        <p>Analyze performance reports, optimize robotic paths and layouts, and export files to program physical robots.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product19-subheading">Implementation Process</h3>
                  <ul className="product19-process-list">
                    
                    <li>
                      <strong>Phase 1: Install Simulation Client</strong>
                      <p>Set up the factory simulation software and configure access to cloud computing clusters.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Import Factory CAD Files</strong>
                      <p>Upload plant drawings, conveyor specifications, and robotic workstation geometries.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Define Robotic Task Paths</strong>
                      <p>Input coordinates for welding, painting, and assembly robots, setting up path sequences.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Configure Flow Constraints</strong>
                      <p>Set buffer capacities, conveyor speeds, shift patterns, and human assembly times.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Connect PLC Programs</strong>
                      <p>Link the simulation platform with PLC automation code via secure OPC-UA network gateways.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Run Batch Flow Tests</strong>
                      <p>Run simulations under varying production scenarios to verify factory output before building physical lines.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product19-content-section">
              <h2>System Architecture</h2>
              <p>The platform features a hybrid cloud architecture. A high-performance 3D visualizer runs on engineering PCs, while the backend runs on cloud computing servers. Solvers are executed in parallel across cloud nodes to compute massive logistics flows, while the integration layer connects to physical PLCs using secure industrial standards.</p>
            </section>

            <section id="tech-arch" className="product19-content-section">
              <h2>Technical Architecture</h2>
              <div className="product19-tech-arch-grid">
                
                <div className="product19-tech-card">
                  <span className="product19-tech-label">FRONTEND</span>
                  <p>Native C++/OpenGL desktop editor for fluid 3D factory visualization, combined with a React web reporting portal.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">BACKEND</span>
                  <p>High-performance simulation queue managers written in Go, running in cloud containers.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing file transfers and user API calls.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">PROCESSING</span>
                  <p>Physics-based solvers written in C++ and CUDA, optimized for high-performance GPU nodes.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">AI ML</span>
                  <p>Reinforcement learning models trained to optimize robotic welding sequences and minimize movement energy.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">EDGE</span>
                  <p>Industrial OPC-UA client software deployed inside factory gateway networks to link simulations with physical PLCs.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">SECURITY</span>
                  <p>AES-256 file encryption, secure VPN tunnels connecting factories to cloud nodes, and role-based access controls.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging GPU instances, Amazon RDS for transaction databases, and S3 for assets.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">INTEGRATION</span>
                  <p>API bridges linking with ERP software like SAP and PLM tools like Teamcenter.</p>
                </div>
                <div className="product19-tech-card">
                  <span className="product19-tech-label">MONITORING</span>
                  <p>Solver queue monitors, compile error logs, and automated diagnostics for connected PLCs.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product19-content-section">
              <h2>Technologies Used</h2>
              <div className="product19-tags-container">
                
                <div className="product19-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">C++</span><span className="product19-tag">Go</span><span className="product19-tag">Python</span><span className="product19-tag">Java</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">OpenGL</span><span className="product19-tag">React</span><span className="product19-tag">OPC-UA</span><span className="product19-tag">Spring Boot</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">PostgreSQL</span><span className="product19-tag">Amazon S3</span><span className="product19-tag">Redis</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">AWS</span><span className="product19-tag">Azure</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">TensorFlow</span><span className="product19-tag">Ray RLlib (for path optimization)</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>IOT</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">Programmable Logic Controllers (PLCs)</span><span className="product19-tag">Industrial Robots</span><span className="product19-tag">AGV sensors</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">OPC-UA</span><span className="product19-tag">Modbus</span><span className="product19-tag">TCP/IP</span><span className="product19-tag">gRPC</span><span className="product19-tag">HTTPS</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">Docker</span><span className="product19-tag">Kubernetes</span><span className="product19-tag">Terraform</span><span className="product19-tag">Git</span>
                  </div>
                </div>
                <div className="product19-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product19-tags">
                    <span className="product19-tag">IPSec VPN</span><span className="product19-tag">AES-256 encryption</span><span className="product19-tag">TLS 1.3</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product19-content-section">
              <h2>Real-World Applications</h2>
              <div className="product19-feature-grid">
                
                <div className="product19-app-card">
                  <h4>Electric Vehicle Assembly Line Optimization</h4>
                  <p>Modeled a new EV assembly line, optimizing conveyor layouts and increasing daily throughput by 15%.</p>
                </div>
                <div className="product19-app-card">
                  <h4>Robotic Welding Path Planning</h4>
                  <p>Optimized welding paths for 45 industrial robots, reducing joint wear and cycle times by 10%.</p>
                </div>
                <div className="product19-app-card">
                  <h4>Paint Shop Curing Oven Simulation</h4>
                  <p>Simulated air temperature zones inside a paint curing oven, reducing energy use by 18%.</p>
                </div>
                <div className="product19-app-card">
                  <h4>AGV Parts Delivery Coordination</h4>
                  <p>Optimized routing for 30 automated guided vehicles, avoiding factory floor gridlocks.</p>
                </div>
                <div className="product19-app-card">
                  <h4>Human Assembly Ergonomic Safety</h4>
                  <p>Simulated worker posture during battery pack assembly, reducing tasks that cause muscle strain.</p>
                </div>
                <div className="product19-app-card">
                  <h4>New SUV Factory Virtual Commissioning</h4>
                  <p>Tested PLC control code against virtual models, resolving 80 code errors before building physical lines.</p>
                </div>
                <div className="product19-app-card">
                  <h4>Stamping Press Logistics Optimization</h4>
                  <p>Optimized metal coil delivery schedules to high-speed stamping presses, keeping lines fed.</p>
                </div>
                <div className="product19-app-card">
                  <h4>Mixed-Model Scheduling Integration</h4>
                  <p>Coordinated schedules for a line building both gas and electric cars, keeping throughput stable.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product19-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product19-grid-2">
                <div className="product19-benefits-box">
                  <h3 className="product19-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product19-check-list">
                    
                    <li>
                      <strong>Accelerated Plant Launch:</strong> Cuts factory setup times by up to 25%, helping OEMs launch new vehicle lines faster.
                    </li>
                    <li>
                      <strong>Increased Daily Output:</strong> Optimizes robotic paths and logistics layouts, increasing throughput by 12% without hardware upgrades.
                    </li>
                    <li>
                      <strong>Lower Redesign Costs:</strong> Identifies robot collisions and layout bottlenecks in simulation, avoiding physical reconstruction costs.
                    </li>
                    <li>
                      <strong>Improved Ergonomic Safety:</strong> Reduces work tasks that cause human muscle fatigue, lowering factory injury rates by 30%.
                    </li>
                    <li>
                      <strong>Secured Automation Code:</strong> Validates PLC code against virtual simulations, preventing hardware damage during factory start-up.
                    </li>
                  </ul>
                </div>
                <div className="product19-challenges-box">
                  <h3 className="product19-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product19-cross-list">
                    
                    <li>
                      <strong>Massive Model Loading Limits:</strong> Importing factory CAD files containing millions of polygons can overwhelm system memory.
                    </li>
                    <li>
                      <strong>CAD Kinematic Mapping:</strong> Rebuilding dynamic joints and sensor behaviors when importing static CAD files.
                    </li>
                    <li>
                      <strong>Varied Automation Protocols:</strong> Connecting simulations with PLC controllers utilizing different industrial networking protocols.
                    </li>
                    <li>
                      <strong>Accurate Human Performance Modeling:</strong> Modeling variations in human work speeds and fatigue levels under different shift schedules.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product19-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product19-glass-panel">
                <h3 className="product19-panel-heading">Future Scope</h3>
                <p>The future of factory simulation lies in generative AI layouts and autonomous digital twin loops. Factory planners will use natural language commands to automatically generate optimized workstation designs and robotic programs, exporting files instantly. Real-time sensor feeds from real factories will update the digital twin, allowing models to predict equipment failures and optimize schedules. Additionally, integration with virtual reality (VR) headsets will allow managers to tour distant plants virtually, managing layouts remotely.</p>
                <div className="product19-divider"></div>
                <h3 className="product19-panel-heading">Industry Impact</h3>
                <p>This platform transforms automotive manufacturing by virtualizing the factory engineering process. By enabling digital layouts and virtual commissioning, it reduces setup costs, lowers worker injury rates, and supports the transition to modular, flexible assembly plants.</p>
              </div>
            </section>

            <section className="product19-cta-section">
              <div className="product19-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Automotive Manufacturing Process Simulation Software provides the virtual factory platform required to launch modern assembly plants. By delivering robotic path optimization, virtual commissioning, and ergonomic simulations, we help operators scale and succeed.</p>
                <button className="product19-btn product19-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product19;
