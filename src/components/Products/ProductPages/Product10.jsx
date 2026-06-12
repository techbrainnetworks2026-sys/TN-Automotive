import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product10.css';
import prd10 from "../../../assets/images/prd10.avif";

const Product10 = () => {
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
    <div className="product10-detail-page">
      <section className="product10-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd10})` }}>
        <div className="product10-hero-content">
          <button className="product10-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Autonomous Vehicle Simulation and Testing Software</h1>
          <p>Enterprise virtual testing platform generating ultra-realistic 3D environments, sensor models, and traffic scenarios to validate autonomous driving software stacks.</p>
        </div>
      </section>

      <div className="product10-container">
        <div className="product10-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product10-sidebar">
            <div className="product10-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product10-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product10-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product10-main-content">
            
            <section id="introduction" className="product10-content-section">
              <h2>Introduction</h2>
              <p>Developing safe, reliable autonomous vehicles (AVs) requires billions of miles of testing. Physical road testing is slow, expensive, and unable to safely replicate critical corner cases—such as near-miss collisions, extreme weather anomalies, and erratic pedestrian behaviors. Our Autonomous Vehicle Simulation and Testing Software is an enterprise-grade virtual validation platform designed for AV developers, automotive OEMs, and safety certification bodies.</p>
              <p>The platform generates high-fidelity 3D environments with physics-based sensor models for cameras, radar, LiDAR, and ultrasonic units. Using advanced traffic scenario generators, the software simulates complex urban and highway environments where autonomous software stacks can be tested under millions of virtual scenarios. It bridges the gap between software-in-the-loop (SIL) and hardware-in-the-loop (HIL) testing, enabling developers to validate perception, planning, and control algorithms safely and efficiently.</p>
            </section>

            <section id="key-features" className="product10-content-section">
              <h2>Key Features</h2>
              <div className="product10-feature-grid">
                
                <div className="product10-card">
                  <h3 className="product10-card-title">High-Fidelity 3D Environment Render</h3>
                  <p className="product10-card-desc">Renders photorealistic virtual worlds with dynamic lighting, shadow, reflections, and varied weather profiles.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Physics-Based Sensor Simulation</h3>
                  <p className="product10-card-desc">Simulates raw outputs of cameras, radars, LiDAR point clouds, and ultrasonic sensors, complete with noise and lens distortion.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Dynamic Scenario Generator</h3>
                  <p className="product10-card-desc">Creates millions of test scenarios, including erratic pedestrian crossings, vehicle cuts-ins, and construction detours.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Centimeter-Level HD Map Import</h3>
                  <p className="product10-card-desc">Supports importing OpenDRIVE and HD maps to replicate real-world city streets and highways in virtual environments.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">SIL and HIL Integration Support</h3>
                  <p className="product10-card-desc">Seamlessly connects with target software stacks (SIL) and physical ECU hardware setups (HIL).</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Automated Regression Testing</h3>
                  <p className="product10-card-desc">Runs automated test batches on cloud infrastructure, generating detailed safety and collision reports.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Vehicle Dynamics Simulator</h3>
                  <p className="product10-card-desc">Models tire friction, suspension movement, chassis roll, and brake system responses under extreme maneuvers.</p>
                </div>
                <div className="product10-card">
                  <h3 className="product10-card-title">Regulatory Validation Suite</h3>
                  <p className="product10-card-desc">Includes standardized test scenarios for safety compliance, including ISO 26262, NCAP, and NHTSA benchmarks.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product10-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product10-glass-panel">
                <h3 className="product10-panel-heading">Industry Background</h3>
                <p>To prove that an autonomous vehicle is safer than a human driver, developers must validate its software across billions of miles. On public roads, this validation process would take decades and cost billions. Furthermore, exposing test vehicles to high-risk scenarios (like a child running onto a highway) is physically unsafe and illegal. Virtual simulation solves this by allowing developers to run millions of parallel test miles in the cloud, testing edge cases repeatedly, and validating software updates in hours instead of months.</p>
                <div className="product10-divider"></div>
                <h3 className="product10-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Developing realistic simulations is challenging. Sensor models must be physics-based to ensure that perception algorithms behave the same way in simulation as they do on the road. For instance, simulating LiDAR laser reflections off wet asphalt or camera lens flare from direct sunlight requires complex physical equations. Additionally, the simulator must run at high frame rates, synchronize data across multiple simulated sensors, and scale across thousands of cloud-based parallel processors.</p>
              </div>
            </section>

            <section id="functionalities" className="product10-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product10-module-list">
                
                <li className="product10-module-item">
                  <strong>World Engine:</strong> Manages the virtual environment, including terrain elevation, buildings, vegetation, and variable weather states.
                </li>
                <li className="product10-module-item">
                  <strong>Sensor Model Simulator:</strong> Generates simulated raw data streams (radar packets, camera frames, LiDAR point clouds) based on ray-tracing physics.
                </li>
                <li className="product10-module-item">
                  <strong>Traffic Swarm Coordinator:</strong> Controls surrounding vehicles and pedestrians using AI models to create realistic, unpredictable behaviors.
                </li>
                <li className="product10-module-item">
                  <strong>Vehicle Physics Simulator:</strong> Calculates the real-time physical forces acting on the ego-vehicle, steering columns, and suspension.
                </li>
                <li className="product10-module-item">
                  <strong>API Bridge & Interface Layer:</strong> Establishes low-latency data loops between the simulator and the autonomous vehicle's software stack.
                </li>
                <li className="product10-module-item">
                  <strong>Test Orchestrator:</strong> Runs parallel regression tests in cloud containers, logging safety compliance metrics and collisions.
                </li>
              </ul>
            </section>

            <section id="value" className="product10-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product10-highlight-text">Our AV Simulation and Testing platform delivers value by reducing software validation times from months to hours, accelerating the time-to-market for autonomous systems. It eliminates the capital costs of operating large physical test fleets, saving millions in vehicle hardware and fuel expenses. By allowing developers to test dangerous corner cases safely, the system helps identify and resolve critical planning errors before code is deployed to real cars, reducing public road safety risks.</p>
            </section>

            <section id="workflow" className="product10-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product10-grid-2">
                <div>
                  <h3 className="product10-subheading">Operational Workflow</h3>
                  <div className="product10-workflow-steps">
                    
                    <div className="product10-step">
                      <div className="product10-step-number">1</div>
                      <div className="product10-step-content">
                        <h4>Scenario Definition</h4>
                        <p>Define target road layouts, weather profiles, sensor setups, and traffic participant movements in the scenario creator.</p>
                      </div>
                    </div>
                    <div className="product10-step">
                      <div className="product10-step-number">2</div>
                      <div className="product10-step-content">
                        <h4>Sensor & Physics Sync</h4>
                        <p>Initialize physics-based sensor models and configure vehicle dynamics to match the target car chassis.</p>
                      </div>
                    </div>
                    <div className="product10-step">
                      <div className="product10-step-number">3</div>
                      <div className="product10-step-content">
                        <h4>Data Loop Connection</h4>
                        <p>Connect the autonomous vehicle software stack to the simulator via low-latency API links.</p>
                      </div>
                    </div>
                    <div className="product10-step">
                      <div className="product10-step-number">4</div>
                      <div className="product10-step-content">
                        <h4>Simulation Run</h4>
                        <p>Run the simulation, generating virtual sensor outputs that feed directly into the AV stack's perception layer.</p>
                      </div>
                    </div>
                    <div className="product10-step">
                      <div className="product10-step-number">5</div>
                      <div className="product10-step-content">
                        <h4>Evaluation & Reporting</h4>
                        <p>The AV stack sends steering and speed commands back to the simulator, which executes the movement, logs performance, and checks for collisions.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product10-subheading">Implementation Process</h3>
                  <ul className="product10-process-list">
                    
                    <li>
                      <strong>Phase 1: Set Up Virtual Test Environment</strong>
                      <p>Import HD map files of the target test tracks or create custom road layouts in the map editor.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Configure the Ego Vehicle Profile</strong>
                      <p>Select sensor configurations (cameras, LiDAR, radar) and define vehicle mass, tire grip, and suspension profiles.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Integrate the AV Software Stack</strong>
                      <p>Establish Docker container links to pipe simulated sensor data directly into the AV perception stack.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Define Safety Test Suites</strong>
                      <p>Create a library of safety scenarios, including highway lane changes, city pedestrian avoidance, and bad weather driving.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Run Cloud Scale Tests</strong>
                      <p>Deploy the simulation across thousands of cloud-based GPU instances to run millions of parallel test miles.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Analyze Safety Reports</strong>
                      <p>Review regression test results, identify failed scenarios, debug planning algorithms, and update the software.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product10-content-section">
              <h2>System Architecture</h2>
              <p>The simulator features a highly distributed microservices architecture optimized for cloud deployment. The core rendering engine utilizes ray-tracing GPUs to generate photorealistic camera feeds and physics-based LiDAR reflections. Sensor models and traffic scenarios are coordinated by a central orchestrator, which syncs data across parallel nodes. Integration APIs connect the simulator to physical HIL test racks, translating virtual data into hardware electrical signals in real-time.</p>
            </section>

            <section id="tech-arch" className="product10-content-section">
              <h2>Technical Architecture</h2>
              <div className="product10-tech-arch-grid">
                
                <div className="product10-tech-card">
                  <span className="product10-tech-label">FRONTEND</span>
                  <p>Desktop control application built with C++ and Qt, combined with a web-based cloud dashboard for test tracking.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">BACKEND</span>
                  <p>High-performance simulation services developed in C++ and CUDA, optimized for multi-GPU hardware configurations.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">GATEWAY</span>
                  <p>Internal communications handled by gRPC and Shared Memory segments, ensuring sub-millisecond data loops.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">PROCESSING</span>
                  <p>Physics-based ray-tracing engine utilizing NVIDIA OptiX to simulate radar reflections, LiDAR points, and camera light rays.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">AI ML</span>
                  <p>Behavioral AI models for virtual pedestrians and drivers, utilizing deep reinforcement learning to create realistic traffic patterns.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">EDGE</span>
                  <p>HIL interface modules converting virtual sensor streams into physical LVDS camera signals and raw Ethernet packets for ECU inputs.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">SECURITY</span>
                  <p>Encrypted data storage for proprietary vehicle models, secure API access control, and tenant isolation in cloud environments.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging GPU instances (G4/G5), Amazon EKS for container management, and S3 for large simulation log files.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">INTEGRATION</span>
                  <p>Support for OpenDRIVE, OpenSCENARIO, and FMI/FMU standards to link with external vehicle dynamics models.</p>
                </div>
                <div className="product10-tech-card">
                  <span className="product10-tech-label">MONITORING</span>
                  <p>Real-time frame-rate monitoring, memory leak protection, and automated alerts for failed simulation nodes.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product10-content-section">
              <h2>Technologies Used</h2>
              <div className="product10-tags-container">
                
                <div className="product10-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">C++</span><span className="product10-tag">CUDA</span><span className="product10-tag">Python</span><span className="product10-tag">GLSL</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">Qt</span><span className="product10-tag">NVIDIA OptiX</span><span className="product10-tag">ROS 2</span><span className="product10-tag">OpenDRIVE</span><span className="product10-tag">OpenSCENARIO</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">PostgreSQL</span><span className="product10-tag">Amazon S3 (log storage)</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">AWS</span><span className="product10-tag">Azure</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">TensorFlow</span><span className="product10-tag">PyTorch (for traffic behavioral models)</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>IOT</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">ADAS HIL Testing Racks</span><span className="product10-tag">ECU interfaces</span><span className="product10-tag">dSPACE/National Instruments systems</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">gRPC</span><span className="product10-tag">Protobuf</span><span className="product10-tag">Shared Memory</span><span className="product10-tag">UDP</span><span className="product10-tag">SOME/IP</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">Docker</span><span className="product10-tag">Kubernetes</span><span className="product10-tag">Terraform</span><span className="product10-tag">GitLab CI</span>
                  </div>
                </div>
                <div className="product10-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product10-tags">
                    <span className="product10-tag">AES-256</span><span className="product10-tag">TLS 1.3</span><span className="product10-tag">IAM access controls</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product10-content-section">
              <h2>Real-World Applications</h2>
              <div className="product10-feature-grid">
                
                <div className="product10-app-card">
                  <h4>Highway Cut-In Safety Validation</h4>
                  <p>Tested an autonomous truck stack across 10 million simulated lane cut-ins, refining braking parameters.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Pedestrian Collision Avoidance Tuning</h4>
                  <p>Validated automatic braking algorithms against erratic child-pedestrian movements behind parked cars.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Bad Weather Perception Validation</h4>
                  <p>Tested camera and LiDAR perception stacks in virtual dense fog, snow, and rainstorms, adjusting sensor weights.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Autonomous Valet Parking Simulation</h4>
                  <p>Simulated parking structures, validating low-speed path planning and obstacle detection around narrow pillars.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Regulatory NCAP Test Automation</h4>
                  <p>Automated standard NCAP safety test scenarios, verifying software compliance before physical track testing.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Centimeter-Level Map Loop Testing</h4>
                  <p>Imported an HD map of San Francisco to test urban path planning and intersection turns in simulation.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Sensor Fault Fail-Safe Verification</h4>
                  <p>Simulated camera failures and radar drift to verify that the AV stack initiates a safe shoulder stop.</p>
                </div>
                <div className="product10-app-card">
                  <h4>Electric Vehicle Energy Dynamics Simulation</h4>
                  <p>Simulated battery drain and regenerative braking gains across hilly terrains, optimizing route planning.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product10-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product10-grid-2">
                <div className="product10-benefits-box">
                  <h3 className="product10-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product10-check-list">
                    
                    <li>
                      <strong>Accelerated Development Cycle:</strong> Runs millions of virtual test miles in hours, significantly reducing software validation cycles.
                    </li>
                    <li>
                      <strong>Dangerous Corner-Case Testing:</strong> Allows developers to test near-collision scenarios safely without risking lives or hardware.
                    </li>
                    <li>
                      <strong>Significant Cost Reductions:</strong> Eliminates fuel, driver, and vehicle wear costs associated with large physical testing fleets.
                    </li>
                    <li>
                      <strong>Physics-Based Sensor Models:</strong> Ensures that perception algorithms behave realistically, matching real-world road behavior.
                    </li>
                    <li>
                      <strong>Automated Compliance Auditing:</strong> Generates detailed safety reports mapping performance directly to transport regulatory standards.
                    </li>
                  </ul>
                </div>
                <div className="product10-challenges-box">
                  <h3 className="product10-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product10-cross-list">
                    
                    <li>
                      <strong>Simulation-to-Reality Gap:</strong> Ensuring that perception models behave exactly the same way in simulation as they do on physical asphalt.
                    </li>
                    <li>
                      <strong>Massive Computing Costs:</strong> Running ray-tracing sensor simulations across thousands of parallel nodes generates high cloud computing bills.
                    </li>
                    <li>
                      <strong>Highly Complex Physics Modeling:</strong> Accurately simulating dynamic light scattering, radar clutter, and tire-rubber road friction forces.
                    </li>
                    <li>
                      <strong>Scenarios Combinatorial Explosion:</strong> Managing and indexing the millions of possible variable combinations (speed, weather, signs) in scenario suites.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product10-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product10-glass-panel">
                <h3 className="product10-panel-heading">Future Scope</h3>
                <p>The future of AV simulation lies in generative AI environments and neural radiance fields (NeRFs). Instead of manually creating 3D models of cities, generative AI will reconstruct photorealistic virtual worlds directly from short video segments recorded by real cars. Additionally, simulator traffic agents will utilize advanced conversational models to interact with the ego-vehicle, creating complex human-to-vehicle behaviors (like a pedestrian waving a car forward at a crosswalk). The integration of cloud-based quantum computing will allow for instant evaluation of complex multi-vehicle conflict simulations.</p>
                <div className="product10-divider"></div>
                <h3 className="product10-panel-heading">Industry Impact</h3>
                <p>This software changes autonomous vehicle development by making safety validation scalable, auditable, and completely safe. By virtualizing the testing process, it allows startups and established OEMs to quickly refine their algorithms, building public trust and accelerating the global launch of autonomous transit networks.</p>
              </div>
            </section>

            <section className="product10-cta-section">
              <div className="product10-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Autonomous Vehicle Simulation and Testing Software provides the virtual validation platform required to launch autonomous vehicles safely. By delivering physics-based sensor models, scalable cloud execution, and comprehensive regulatory test suites, we help AV developers move from prototype to production with confidence.</p>
                <button className="product10-btn product10-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product10;
