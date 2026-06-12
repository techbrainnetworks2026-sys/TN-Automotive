import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product11.css';
import prd11 from "../../../assets/images/prd11.jpg";

const Product11 = () => {
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
    <div className="product11-detail-page">
      <section className="product11-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd11})` }}>
        <div className="product11-hero-content">
          <button className="product11-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Vehicle Design and Performance Optimization Tools</h1>
          <p>Enterprise CAD/CAE simulation suite for aerodynamic modeling, structural crashworthiness testing, powertrain optimization, and thermal management simulation.</p>
        </div>
      </section>

      <div className="product11-container">
        <div className="product11-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product11-sidebar">
            <div className="product11-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product11-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product11-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product11-main-content">
            
            <section id="introduction" className="product11-content-section">
              <h2>Introduction</h2>
              <p>The engineering lifecycle of modern vehicles requires balancing aerodynamics, structural safety, thermal efficiency, and mechanical performance. Physical wind tunnel testing and prototype crash tests are slow, expensive, and limited in scale. Our Vehicle Design and Performance Optimization Tools platform is an enterprise-grade CAE (Computer-Aided Engineering) simulation suite designed for automotive manufacturers, aerospace designers, and motorsports teams.</p>
              <p>The platform features high-performance physics solvers for Computational Fluid Dynamics (CFD), Finite Element Analysis (FEA), and Multibody Dynamics (MBD). By utilizing cloud-scale high-performance computing (HPC) environments, the software enables engineers to simulate vehicle drag, battery thermal runaway, structural crash safety, and cabin noise in parallel. The tool accelerates product design, lowers development budgets, and ensures safety compliance before physical prototypes are manufactured.</p>
            </section>

            <section id="key-features" className="product11-content-section">
              <h2>Key Features</h2>
              <div className="product11-feature-grid">
                
                <div className="product11-card">
                  <h3 className="product11-card-title">Aerodynamic CFD Solver</h3>
                  <p className="product11-card-desc">Simulates vehicle drag coefficient, lift, and wind noise profiles using lattice Boltzmann and Navier-Stokes equations.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">Structural FEA Crash Simulator</h3>
                  <p className="product11-card-desc">Evaluates crashworthiness, crumple zones, and cabin deformation during simulated offset and side-impact collisions.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">Powertrain Thermal Management Analyzer</h3>
                  <p className="product11-card-desc">Models battery heat dissipation, coolant flow, and motor heat generation profiles in dynamic driving cycles.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">Multibody Dynamics (MBD) Solver</h3>
                  <p className="product11-card-desc">Simulates vehicle handling, suspension kinematics, tire slip, and road-noise-vibration-harshness (NVH) profiles.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">Generative Shape Optimization Engine</h3>
                  <p className="product11-card-desc">Uses machine learning to automatically generate lightweight structural designs that maintain mechanical strength.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">HPC Cloud Job Orchestrator</h3>
                  <p className="product11-card-desc">Manages and schedules large simulation batches across thousands of high-performance cloud GPU cores.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">Acoustic Noise Simulator</h3>
                  <p className="product11-card-desc">Analyzes airflow around side mirrors and pillars to estimate and reduce cabin wind noise.</p>
                </div>
                <div className="product11-card">
                  <h3 className="product11-card-title">EV Battery Structural Shielding Tester</h3>
                  <p className="product11-card-desc">Simulates battery pack protection strength during vehicle bottom scrapes and side crashes.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product11-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product11-glass-panel">
                <h3 className="product11-panel-heading">Industry Background</h3>
                <p>Automotive design requires meeting complex, competing targets: vehicles must be lightweight for fuel and battery efficiency, yet structurally rigid to meet safety standards. Aerodynamics must be optimized to extend battery range, yet sufficient airflow must be routed to cool motors and brakes. Traditional design methods rely on siloed tools, leading to communication delays and design errors that are only caught during late-stage physical prototyping. Solving these challenges requires an integrated simulation suite that links mechanical, fluid, and thermal solvers into a unified digital workspace.</p>
                <div className="product11-divider"></div>
                <h3 className="product11-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Automotive simulation is bottlenecked by the sheer size of the mathematical models. Running a high-fidelity CFD simulation can take days and require thousands of computing cores. Additionally, converting CAD models into simulation meshes (meshing) is a manual, error-prone process that takes up to 70% of an engineer's time. Developers need a platform that automates meshing, runs solvers on scale cloud systems, and provides real-time collaborative design dashboards.</p>
              </div>
            </section>

            <section id="functionalities" className="product11-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product11-module-list">
                
                <li className="product11-module-item">
                  <strong>CAD Mesh Pre-Processor:</strong> Automates model cleanup, mid-surfacing, and volume meshing using AI-guided geometric analysis.
                </li>
                <li className="product11-module-item">
                  <strong>Computational Fluid Dynamics Solver:</strong> Runs high-fidelity steady and transient aerodynamic simulations, visualizing airflow streamlines.
                </li>
                <li className="product11-module-item">
                  <strong>Finite Element Solver:</strong> Computes structural stresses, dynamic deformations, and material failures during simulated crashes.
                </li>
                <li className="product11-module-item">
                  <strong>Thermal Network Solver:</strong> Calculates temperature distribution across engines, battery packs, power electronics, and cabins.
                </li>
                <li className="product11-module-item">
                  <strong>Optimization Dashboard:</strong> Enables designers to define design variables (e.g., weight, drag) and run automated generative searches.
                </li>
                <li className="product11-module-item">
                  <strong>CAE Collaboration Portal:</strong> Allows distributed teams to inspect 3D simulation results, annotate parts, and share design configurations.
                </li>
              </ul>
            </section>

            <section id="value" className="product11-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product11-highlight-text">Our Vehicle Design platform delivers value by reducing vehicle development lifecycles by up to 30% and cutting physical prototype testing costs by millions. By optimizing aerodynamics, it helps electric vehicles gain up to 8% in range without increasing battery size. The generative design engine reduces component weight by up to 25% while maintaining safety compliance, lowering production material costs. Lastly, it ensures that designs achieve NCAP safety ratings before physical crash tracks are even constructed.</p>
            </section>

            <section id="workflow" className="product11-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product11-grid-2">
                <div>
                  <h3 className="product11-subheading">Operational Workflow</h3>
                  <div className="product11-workflow-steps">
                    
                    <div className="product11-step">
                      <div className="product11-step-number">1</div>
                      <div className="product11-step-content">
                        <h4>CAD Import & Cleanup</h4>
                        <p>Import 3D vehicle CAD geometry into the pre-processor, where AI-guided cleanups resolve overlapping surfaces.</p>
                      </div>
                    </div>
                    <div className="product11-step">
                      <div className="product11-step-number">2</div>
                      <div className="product11-step-content">
                        <h4>Automated Meshing</h4>
                        <p>The meshing engine partitions the vehicle volume into millions of finite elements or fluid volumes.</p>
                      </div>
                    </div>
                    <div className="product11-step">
                      <div className="product11-step-number">3</div>
                      <div className="product11-step-content">
                        <h4>Simulation Setup</h4>
                        <p>Define boundary conditions—such as wind speed, impact velocity, material strengths, and thermal loads.</p>
                      </div>
                    </div>
                    <div className="product11-step">
                      <div className="product11-step-number">4</div>
                      <div className="product11-step-content">
                        <h4>HPC Solver Run</h4>
                        <p>Submit the simulation job to the cloud HPC cluster, running solvers across parallel GPU nodes.</p>
                      </div>
                    </div>
                    <div className="product11-step">
                      <div className="product11-step-number">5</div>
                      <div className="product11-step-content">
                        <h4>Post-Processing & Redesign</h4>
                        <p>Analyze stress concentrations, drag forces, and temperature maps in the 3D visualizer, adjusting designs accordingly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product11-subheading">Implementation Process</h3>
                  <ul className="product11-process-list">
                    
                    <li>
                      <strong>Phase 1: Deploy CAE Suite</strong>
                      <p>Set up the design tools client and configure access links to the cloud HPC cluster.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Import Design Geometry</strong>
                      <p>Upload vehicle CAD models from enterprise design tools like SolidWorks or CATIA.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Configure Mesh Templates</strong>
                      <p>Define standard meshing parameters for aerodynamics, crash, and thermal simulations.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Define Boundary Conditions</strong>
                      <p>Input standard regulatory testing boundary conditions, such as Euro NCAP crash speeds.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Run Batch Simulations</strong>
                      <p>Orchestrate automated design sweeps on the cloud, testing hundreds of minor geometric variations.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Export and Sign-off</strong>
                      <p>Generate safety and performance reports, and export optimized models for manufacturing tool setup.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product11-content-section">
              <h2>System Architecture</h2>
              <p>The platform is built on an enterprise hybrid architecture. A high-performance 3D visualization client runs on local engineering workstations, connecting to a cloud-native backend hosted on AWS. The backend manages the simulation queues, dynamically deploying spot GPU instances to execute solvers. Large simulation files are stored in optimized block storage networks to ensure high-speed read/write performance during solvers.</p>
            </section>

            <section id="tech-arch" className="product11-content-section">
              <h2>Technical Architecture</h2>
              <div className="product11-tech-arch-grid">
                
                <div className="product11-tech-card">
                  <span className="product11-tech-label">FRONTEND</span>
                  <p>Native C++/OpenGL desktop application for fluid 3D rendering, combined with a React web portal for administration.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">BACKEND</span>
                  <p>High-performance simulation queue manager written in C++ and Go, running in orchestrated Kubernetes environments.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">GATEWAY</span>
                  <p>Secure REST/gRPC API gateway managing design imports, user access, and job submissions.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">PROCESSING</span>
                  <p>Physics-based solvers written in C++ and CUDA, optimized for NVIDIA Ampere and Hopper GPU architectures.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">AI ML</span>
                  <p>Neural network models trained to predict wind tunnel results, providing real-time drag estimates during CAD editing.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">EDGE</span>
                  <p>Workstation client utilizing local hardware-accelerated rendering to manipulate complex millions-of-element meshes.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">SECURITY</span>
                  <p>AES-256 encryption for proprietary CAD files, tenant isolation in database tables, and secure boot workstation access.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging GPU Spot Instances (P4/G5), Amazon FSx for Lustre for fast storage, and S3 for archives.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">INTEGRATION</span>
                  <p>API bridges linking the platform with PLM software like Teamcenter and CAD platforms like CATIA.</p>
                </div>
                <div className="product11-tech-card">
                  <span className="product11-tech-label">MONITORING</span>
                  <p>Job queue latency trackers, GPU temperature monitors, and automated failure detection for solver instances.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product11-content-section">
              <h2>Technologies Used</h2>
              <div className="product11-tags-container">
                
                <div className="product11-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">C++</span><span className="product11-tag">CUDA</span><span className="product11-tag">Python</span><span className="product11-tag">Rust</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">OpenGL</span><span className="product11-tag">OpenFOAM (CFD core)</span><span className="product11-tag">React</span><span className="product11-tag">gRPC</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">PostgreSQL</span><span className="product11-tag">RocksDB (for local geometry caching)</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">AWS</span><span className="product11-tag">Azure</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">TensorFlow</span><span className="product11-tag">PyTorch</span><span className="product11-tag">PyGeom (geometric deep learning)</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>IOT</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">HPC GPU clusters</span><span className="product11-tag">CAD/CAM hardware interfaces</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">gRPC</span><span className="product11-tag">HTTPS</span><span className="product11-tag">WebSockets</span><span className="product11-tag">NFS</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">Docker</span><span className="product11-tag">Kubernetes</span><span className="product11-tag">Terraform</span><span className="product11-tag">Yocto</span>
                  </div>
                </div>
                <div className="product11-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product11-tags">
                    <span className="product11-tag">AES-256 encryption</span><span className="product11-tag">OAuth 2.0</span><span className="product11-tag">Secure Key Vaults</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product11-content-section">
              <h2>Real-World Applications</h2>
              <div className="product11-feature-grid">
                
                <div className="product11-app-card">
                  <h4>Electric SUV Aerodynamic Refinement</h4>
                  <p>Reduced the drag coefficient of an electric SUV from 0.28 to 0.24, extending battery range by 25 kilometers.</p>
                </div>
                <div className="product11-app-card">
                  <h4>Frontal Crash Safety Design</h4>
                  <p>Simulated crumple zone behavior during offset crashes, meeting Euro NCAP 5-star safety criteria.</p>
                </div>
                <div className="product11-app-card">
                  <h4>EV Battery Cooler Design</h4>
                  <p>Optimized a battery cooling plate geometry, maintaining cell temperatures within a safe 25-35°C window.</p>
                </div>
                <div className="product11-app-card">
                  <h4>Cabin Acoustic Modeling</h4>
                  <p>Modeled wind noise around side mirrors, modifying shape to reduce cabin noise by 4 decibels.</p>
                </div>
                <div className="product11-app-card">
                  <h4>Racing Suspension Kinematics</h4>
                  <p>Designed lightweight racing suspension linkages, reducing weight by 18% while keeping structural safety thresholds.</p>
                </div>
                <div className="product11-app-card">
                  <h4>Automotive Bumper Impact Validation</h4>
                  <p>Simulated pedestrian leg impact against plastic bumpers, optimizing compliance with pedestrian safety regulations.</p>
                </div>
                <div className="product11-app-card">
                  <h4>Engine Intake Manifold CFD</h4>
                  <p>Optimized airflow distribution in an internal combustion engine intake manifold, improving fuel efficiency by 3%.</p>
                </div>
                <div className="product11-app-card">
                  <h4>HVAC Duct Air Distribution Sync</h4>
                  <p>Modeled air velocity patterns inside vehicle cabins to ensure rapid, silent heating and cooling.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product11-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product11-grid-2">
                <div className="product11-benefits-box">
                  <h3 className="product11-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product11-check-list">
                    
                    <li>
                      <strong>Accelerated Time-to-Market:</strong> Cuts vehicle design cycles by up to 30%, helping OEMs launch new models faster.
                    </li>
                    <li>
                      <strong>Increased EV Range:</strong> Optimizes vehicle aerodynamics and structural weight, boosting battery efficiency.
                    </li>
                    <li>
                      <strong>Drastic Testing Savings:</strong> Saves millions in development budgets by replacing expensive physical crash and wind tunnel tests.
                    </li>
                    <li>
                      <strong>AI-Guided Generative Design:</strong> Automatically discovers lightweight, strong structures that humans would struggle to design.
                    </li>
                    <li>
                      <strong>Guaranteed Safety Compliance:</strong> Validates designs against federal crash safety standards before physical tool setups.
                    </li>
                  </ul>
                </div>
                <div className="product11-challenges-box">
                  <h3 className="product11-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product11-cross-list">
                    
                    <li>
                      <strong>Mesh Resolution Limits:</strong> Creating fine meshes to capture boundary layers requires massive memory, creating computing bottlenecks.
                    </li>
                    <li>
                      <strong>CAD-to-CAE Translation Loss:</strong> Importing CAD geometry frequently leads to missing surfaces or gaps, requiring manual repair.
                    </li>
                    <li>
                      <strong>HPC Operating Expenses:</strong> Running complex simulations across thousands of GPUs creates high cloud computing bills.
                    </li>
                    <li>
                      <strong>Material Behavior Modeling:</strong> Accurately modeling the deformation of advanced carbon composites and lightweight alloys during crashes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product11-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product11-glass-panel">
                <h3 className="product11-panel-heading">Future Scope</h3>
                <p>The future of vehicle design tools lies in real-time, interactive physics simulations and generative AI CAD models. We are developing AI models that provide instant visual physics feedback as designers modify CAD lines, eliminating solver wait times entirely. Digital twin integrations will pipe wear and stress data from real vehicles back into design software, allowing engineers to optimize next-generation components based on real-world failures. Additionally, future suites will run on hybrid quantum-classical computers to solve complex aerodynamic turbulence equations.</p>
                <div className="product11-divider"></div>
                <h3 className="product11-panel-heading">Industry Impact</h3>
                <p>This platform transforms automotive engineering by democratizing advanced physics simulations. It allows smaller EV startups to compete with legacy OEMs, encourages the development of lightweight materials, and helps design vehicles that are safer, more aerodynamically efficient, and more sustainable.</p>
              </div>
            </section>

            <section className="product11-cta-section">
              <div className="product11-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Vehicle Design and Performance Optimization Tools represent a major leap forward in virtual engineering. By delivering cloud-scale solvers, automated meshing, and generative design capabilities, we help automotive manufacturers build the next generation of high-performance vehicles.</p>
                <button className="product11-btn product11-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product11;
