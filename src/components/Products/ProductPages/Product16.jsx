import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product16.css';
import prd16 from "../../../assets/images/prd16.jpg";

const Product16 = () => {
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
    <div className="product16-detail-page">
      <section className="product16-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd16})` }}>
        <div className="product16-hero-content">
          <button className="product16-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Automotive User Experience (UX) Design Software</h1>
          <p>Enterprise design suite for prototyping in-vehicle infotainment interfaces, 3D gauge clusters, and heads-up displays with real-time hardware testing.</p>
        </div>
      </section>

      <div className="product16-container">
        <div className="product16-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product16-sidebar">
            <div className="product16-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product16-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product16-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product16-main-content">
            
            <section id="introduction" className="product16-content-section">
              <h2>Introduction</h2>
              <p>Modern drivers demand fluid, intuitive, and visually stunning digital interfaces inside their vehicles. Designing these interfaces requires coordinating multiple screens—such as gauge clusters, center touchscreens, passenger screens, and heads-up displays—while ensuring that critical safety warnings remain clear. Our Automotive User Experience (UX) Design Software is an enterprise-grade prototyping and deployment suite designed for automotive design studios, software engineers, and HMI developers.</p>
              <p>The platform features an advanced 3D visual editor, drag-and-drop widget libraries, and a real-time hardware-in-the-loop (HIL) testing pipeline. By compiling design layouts directly into optimized C++/Qt and HTML5 code, the software bridges the gap between artistic designers and embedded software engineers. It enables teams to prototype complex menus, transition effects, and voice control visual feedback, accelerating the development of next-generation digital cockpits.</p>
            </section>

            <section id="key-features" className="product16-content-section">
              <h2>Key Features</h2>
              <div className="product16-feature-grid">
                
                <div className="product16-card">
                  <h3 className="product16-card-title">Dynamic 3D Workspace</h3>
                  <p className="product16-card-desc">Enables designers to model cockpits, setting up screen projections and layout orientations in a 3D interface.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">HMI Drag-and-Drop Library</h3>
                  <p className="product16-card-desc">Includes pre-configured, automotive-safe design components like speedometers, climate dials, and ADAS maps.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Cross-Platform Code Compiler</h3>
                  <p className="product16-card-desc">Translates visual design layers directly into optimized C++ (Qt/QML), HTML5, or Android layouts.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Hardware-in-the-Loop Prototyping</h3>
                  <p className="product16-card-desc">Streams design layouts directly to target automotive chips (e.g., NXP or Qualcomm) to test performance.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Eye-Gaze and Distraction Simulator</h3>
                  <p className="product16-card-desc">Analyzes interface layouts, predicting driver eye-gaze distribution and cognitive distraction scores.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Responsive Theme Engine</h3>
                  <p className="product16-card-desc">Enables quick creation of day/night modes, driving profiles, and branded OEM templates.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Voice UI Visual Orchestrator</h3>
                  <p className="product16-card-desc">Designs visual waveforms and text overlays that sync with voice control assistants.</p>
                </div>
                <div className="product16-card">
                  <h3 className="product16-card-title">Holographic Windshield HUD Prototyper</h3>
                  <p className="product16-card-desc">Models and previews how graphics appear on curved glass windshield surfaces.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product16-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product16-glass-panel">
                <h3 className="product16-panel-heading">Industry Background</h3>
                <p>Historically, automotive HMI (Human-Machine Interface) design was a slow, fractured process. Designers created static pictures in traditional design tools, and embedded engineers re-wrote the layouts in C++ from scratch, leading to interface discrepancies, performance lag, and delayed vehicle launches. Furthermore, separating multimedia systems from safety clusters was difficult. Gauge clusters must boot instantly and never crash, while infotainment screens must support complex apps. Solving these challenges requires a design suite that supports strict separation of concerns and compiles to target boards.</p>
                <div className="product16-divider"></div>
                <h3 className="product16-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>HMI development is slowed by the gap between design tools and embedded hardware. Designs that look beautiful on laptops often lag or drop frames when run on low-power automotive chips. Additionally, ensuring that interface layouts do not distract drivers or block critical safety gauges requires extensive safety validation. Designers need a platform that compiles directly to production-ready code, profiles hardware performance in real-time, and integrates driver-attention simulation tools.</p>
              </div>
            </section>

            <section id="functionalities" className="product16-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product16-module-list">
                
                <li className="product16-module-item">
                  <strong>HMI World Editor:</strong> Drag-and-drop workspace to layout screens, link menu transitions, and import 3D models.
                </li>
                <li className="product16-module-item">
                  <strong>Code Gen Compiler:</strong> Automates translation of graphical layers into clean C++ code, minimizing manual code updates.
                </li>
                <li className="product16-module-item">
                  <strong>Hardware Profiling Console:</strong> Tracks frame rates, CPU usage, and GPU rendering times on connected target ECUs.
                </li>
                <li className="product16-module-item">
                  <strong>UX Distraction Evaluator:</strong> Runs algorithmic attention simulations, highlighting zones that require excessive eyes-off-road time.
                </li>
                <li className="product16-module-item">
                  <strong>Translation Manager:</strong> Coordinates translation files across 40+ languages, adjusting layout sizes for varying text lengths.
                </li>
                <li className="product16-module-item">
                  <strong>Version Control Integration:</strong> Links design files with Git repositories, enabling collaborative branch tracking and merge controls.
                </li>
              </ul>
            </section>

            <section id="value" className="product16-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product16-highlight-text">Our Automotive UX Design software delivers value by reducing HMI development cycles by up to 45% and eliminating code rewrite errors. It ensures that digital dashboards maintain a smooth 60fps rendering rate, enhancing customer perception of quality. By simulating driver eye gaze, it helps design safer interfaces that reduce distraction risks and comply with international safety regulations. Additionally, it allows OEMs to quickly launch custom visual themes, keeping their cabins modern throughout the vehicle lifecycle.</p>
            </section>

            <section id="workflow" className="product16-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product16-grid-2">
                <div>
                  <h3 className="product16-subheading">Operational Workflow</h3>
                  <div className="product16-workflow-steps">
                    
                    <div className="product16-step">
                      <div className="product16-step-number">1</div>
                      <div className="product16-step-content">
                        <h4>UI Mockup Creation</h4>
                        <p>Design dashboard layouts, import 3D assets, and configure menu transitions in the visual editor.</p>
                      </div>
                    </div>
                    <div className="product16-step">
                      <div className="product16-step-number">2</div>
                      <div className="product16-step-content">
                        <h4>Distraction Assessment</h4>
                        <p>Run the attention simulator to check if buttons or text require too much driver focus.</p>
                      </div>
                    </div>
                    <div className="product16-step">
                      <div className="product16-step-number">3</div>
                      <div className="product16-step-content">
                        <h4>HIL Stream Test</h4>
                        <p>Connect the developer board and stream the UI layout to test rendering speeds on actual silicon.</p>
                      </div>
                    </div>
                    <div className="product16-step">
                      <div className="product16-step-number">4</div>
                      <div className="product16-step-content">
                        <h4>Production Code Generation</h4>
                        <p>Compile the visual layout into optimized C++/Qt or Android code packages.</p>
                      </div>
                    </div>
                    <div className="product16-step">
                      <div className="product16-step-number">5</div>
                      <div className="product16-step-content">
                        <h4>Embedded Deployment</h4>
                        <p>Integrate the generated code with the vehicle's AUTOSAR stack and flash the gateway ECUs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product16-subheading">Implementation Process</h3>
                  <ul className="product16-process-list">
                    
                    <li>
                      <strong>Phase 1: Install UX Studio</strong>
                      <p>Set up the HMI design editor and configure connections to target developer boards.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Define Project Screens</strong>
                      <p>Define screen counts, resolutions, aspect ratios, and target microcontrollers.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Layout Core Dashboard UI</strong>
                      <p>Drag and drop speed gauges, battery status bars, navigation layers, and media menus.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Set Up Dynamic Logic</strong>
                      <p>Map vehicle telemetry signals (e.g., speed, temperature) to visual gauge movements.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Profile Hardware Rendering</strong>
                      <p>Stream layouts to target boards, checking frame rates and optimizing graphics pipelines.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Generate Production Code</strong>
                      <p>Export the compiled code files, completing the HMI software build for integration.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product16-content-section">
              <h2>System Architecture</h2>
              <p>The design suite features a local client-desktop application linked with a cloud collaboration engine. The local client uses a hardware-accelerated 3D editor to manage layouts, while the cloud backend coordinates design version control and runs machine learning distraction analysis. Generated code is structured to support hypervisor separation, separating the safety cluster code from multimedia UI files.</p>
            </section>

            <section id="tech-arch" className="product16-content-section">
              <h2>Technical Architecture</h2>
              <div className="product16-tech-arch-grid">
                
                <div className="product16-tech-card">
                  <span className="product16-tech-label">FRONTEND</span>
                  <p>Native desktop application built with C++, OpenGL, and Qt, featuring a drag-and-drop workspace.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">BACKEND</span>
                  <p>Cloud collaboration and optimization service developed in Go and Node.js.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">GATEWAY</span>
                  <p>Secured load balancer managing design file synchronization and API access controls.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">PROCESSING</span>
                  <p>Custom compiler translating visual elements into structured QML, C++, and Android layout files.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">AI ML</span>
                  <p>Driver attention prediction networks trained in Python, analyzing UI images to identify visual clutter.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">EDGE</span>
                  <p>Optimized QML rendering engines executing graphics on target automotive silicon.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">SECURITY</span>
                  <p>Encrypted design files, secure Git SSH connections, and role-based workspace permissions.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon RDS (PostgreSQL), S3 for design assets, and EKS for worker nodes.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">INTEGRATION</span>
                  <p>API bridges linking the design suite with PLM tools like Teamcenter and code compilers.</p>
                </div>
                <div className="product16-tech-card">
                  <span className="product16-tech-label">MONITORING</span>
                  <p>System performance trackers, memory leak analyzers, and compile error checkers.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product16-content-section">
              <h2>Technologies Used</h2>
              <div className="product16-tags-container">
                
                <div className="product16-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">C++</span><span className="product16-tag">Python</span><span className="product16-tag">QML</span><span className="product16-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">Qt</span><span className="product16-tag">Android OS</span><span className="product16-tag">React</span><span className="product16-tag">Node.js</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">PostgreSQL</span><span className="product16-tag">RocksDB (local cache)</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">AWS</span><span className="product16-tag">Azure</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">TensorFlow</span><span className="product16-tag">OpenCV (for attention modeling)</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>IOT</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">Automotive HMI Boards (NXP i.MX8</span><span className="product16-tag">Qualcomm SA8155P)</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">gRPC</span><span className="product16-tag">SOME/IP</span><span className="product16-tag">HTTPS</span><span className="product16-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">Docker</span><span className="product16-tag">Kubernetes</span><span className="product16-tag">CMake</span><span className="product16-tag">Git</span>
                  </div>
                </div>
                <div className="product16-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product16-tags">
                    <span className="product16-tag">AES-256</span><span className="product16-tag">OAuth 2.0</span><span className="product16-tag">Secure Key Vaults</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product16-content-section">
              <h2>Real-World Applications</h2>
              <div className="product16-feature-grid">
                
                <div className="product16-app-card">
                  <h4>Electric SUV Dashboard Prototyping</h4>
                  <p>Designed a clean 3D gauge cluster and touch interface for a new EV SUV, optimizing rendering to 60fps.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Windshield HUD Graphics Design</h4>
                  <p>Created and calibrated dynamic navigation graphics for a holographic HUD windshield display.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Fleet Truck Diagnostic Cluster</h4>
                  <p>Designed a rugged, high-contrast HMI display for logistics trucks, prioritizing mechanic DTC alerts.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Autonomous Shuttle Status UI</h4>
                  <p>Created passenger informational displays for an autonomous shuttle, showing route progress and sensor maps.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Luxury Sedan Multi-Screen Theme</h4>
                  <p>Designed a unified visual theme spanning passenger screens, gauge clusters, and rear seat controllers.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Off-Road Clinometer HUD</h4>
                  <p>Created 3D pitch/roll gauges that update dynamically based on vehicle roll sensors.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Electric Delivery Van HMI Sync</h4>
                  <p>Designed delivery routing displays and cargo compartment temperature alerts for logistics drivers.</p>
                </div>
                <div className="product16-app-card">
                  <h4>Airport Support Tug Gauges</h4>
                  <p>Created simple, high-visibility dashboards for airport support vehicles, maximizing durability.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product16-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product16-grid-2">
                <div className="product16-benefits-box">
                  <h3 className="product16-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product16-check-list">
                    
                    <li>
                      <strong>Rapid UI Iteration:</strong> Reduces HMI design cycles by up to 45%, accelerating new vehicle cockpit testing.
                    </li>
                    <li>
                      <strong>Hardware-Optimized Rendering:</strong> Ensures HMI screens render at a smooth 60fps, preventing lag on low-power chips.
                    </li>
                    <li>
                      <strong>Safe Interface Layouts:</strong> Identifies driver distraction risks during the design phase, improving safety compliance.
                    </li>
                    <li>
                      <strong>Clean Code Generation:</strong> Compiles designs directly to C++/Qt and Android code, eliminating manual programming errors.
                    </li>
                    <li>
                      <strong>Branded Digital Cocpkit:</strong> Allows OEMs to design unique interfaces that distinguish their brands in the marketplace.
                    </li>
                  </ul>
                </div>
                <div className="product16-challenges-box">
                  <h3 className="product16-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product16-cross-list">
                    
                    <li>
                      <strong>Silicon Performance Limits:</strong> Optimizing complex 3D transitions to run without lag on cheap, low-power microcontrollers.
                    </li>
                    <li>
                      <strong>Screen Curvature Distortion:</strong> Designing graphics that display without distortion on curved gauge panels.
                    </li>
                    <li>
                      <strong>Multi-Language Text Wrapping:</strong> Ensuring that long translated words do not break UI button boundaries or obscure gauges.
                    </li>
                    <li>
                      <strong>Safety Cluster Separation:</strong> Maintaining strict software isolation between safety gauges and consumer multimedia systems.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product16-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product16-glass-panel">
                <h3 className="product16-panel-heading">Future Scope</h3>
                <p>The future of automotive UX design tools lies in generative 3D layouts and brain-computer interface integrations. HMI layouts will adapt in real-time to driver fatigue levels, moving buttons closer and increasing text size when driver attention drifts. Generative AI will allow designers to create custom visual styles using natural language commands, exporting 3D animations instantly. Additionally, systems will support transparent, full-windshield holographic projections, turning the entire cabin glass into an interactive screen.</p>
                <div className="product16-divider"></div>
                <h3 className="product16-panel-heading">Industry Impact</h3>
                <p>This software transforms how automotive cabins are designed, closing the gap between art and engineering. By enabling rapid prototyping and safe layout testing, it helps manufacturers build digital cockpits that are intuitive, safe, and ready for autonomous transportation.</p>
              </div>
            </section>

            <section className="product16-cta-section">
              <div className="product16-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Automotive User Experience (UX) Design Software offers a powerful, integrated solution for modern HMI development. By combining 3D editors with code generation and hardware validation, we help OEMs build cockpits that define the future of driving.</p>
                <button className="product16-btn product16-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product16;
