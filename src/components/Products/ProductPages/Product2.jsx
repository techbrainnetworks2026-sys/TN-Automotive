import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product2.css';
import prd2 from "../../../assets/images/prd2.jpg";

const Product2 = () => {
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
    <div className="product2-detail-page">
      <section className="product2-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd2})` }}>
        <div className="product2-hero-content">
          <button className="product2-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Advanced Driver Assistance Systems (ADAS) Software</h1>
          <p>Safety-critical, low-latency software stack for sensor fusion, object detection, path planning, and active safety control in modern vehicles.</p>
        </div>
      </section>

      <div className="product2-container">
        <div className="product2-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product2-sidebar">
            <div className="product2-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product2-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product2-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product2-main-content">
            
            <section id="introduction" className="product2-content-section">
              <h2>Introduction</h2>
              <p>Modern automotive safety relies heavily on Advanced Driver Assistance Systems (ADAS). These platforms process high-frequency streams of sensory data to interpret the vehicle's surroundings, predict potential hazards, and make active safety interventions within milliseconds. Our ADAS Software stack is an enterprise-grade, ISO 26262 ASIL-D compliant software platform designed for automotive manufacturers and Tier-1 suppliers seeking to implement Level 2+ and Level 3 driver assistance capabilities.</p>
              <p>The platform features advanced sensor fusion algorithms that combine camera, radar, and LiDAR data to create a high-fidelity 3D reconstruction of the vehicle's operating environment. Operating at microsecond execution cycles, our software powers critical safety applications including adaptive cruise control, lane-keep assist, automated emergency braking, and blind-spot detection. Built on a modular, hardware-agnostic architecture, it integrates seamlessly with leading automotive system-on-chip (SoC) platforms, enabling manufacturers to scale safety features across diverse vehicle lines.</p>
            </section>

            <section id="key-features" className="product2-content-section">
              <h2>Key Features</h2>
              <div className="product2-feature-grid">
                
                <div className="product2-card">
                  <h3 className="product2-card-title">Multi-Sensor Fusion Engine</h3>
                  <p className="product2-card-desc">Combines high-resolution camera feeds, radar point clouds, and LiDAR returns to establish a reliable, unified environmental model.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Real-Time Object Detection & Tracking</h3>
                  <p className="product2-card-desc">Identifies and tracks pedestrians, vehicles, cyclists, and debris using deep learning models optimized for edge accelerators.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Precise Lane Boundary Extraction</h3>
                  <p className="product2-card-desc">Detects lane markings, road edges, barriers, and construction markers under challenging weather and lighting conditions.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Predictive Path Planning</h3>
                  <p className="product2-card-desc">Generates smooth, collision-free trajectory options by modeling the future motion of surrounding traffic participants.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Dynamic Adaptive Cruise Control</h3>
                  <p className="product2-card-desc">Maintains safe following distances by modulating vehicle acceleration and braking in stop-and-go highway traffic.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Automated Emergency Steering Assist</h3>
                  <p className="product2-card-desc">Initiates evasive steering maneuvers when braking is insufficient to avoid a forward collision.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Driver Monitoring System (DMS)</h3>
                  <p className="product2-card-desc">Tracks eye gaze, head pose, and blink rates to detect driver distraction, drowsiness, and system handover readiness.</p>
                </div>
                <div className="product2-card">
                  <h3 className="product2-card-title">Over-the-Air (OTA) Calibration</h3>
                  <p className="product2-card-desc">Enables continuous field updates to camera and sensor calibration matrices without requiring dealership visits.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product2-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product2-glass-panel">
                <h3 className="product2-panel-heading">Industry Background</h3>
                <p>As vehicular traffic increases, automotive safety remains a paramount concern for regulators and consumers. The majority of traffic collisions are caused by human factors such as distraction, fatigue, and delayed reaction times. While hardware sensors like cameras and radar have become cheap, the challenge lies in the software: interpreting noisy, conflicting sensor data in real-time. For instance, a camera might be blinded by direct sunlight while a radar detects a metal sign as an obstacle. Resolving these discrepancies, avoiding false-positive braking events, and maintaining precise lane positioning requires highly advanced, deterministic software engines.</p>
                <div className="product2-divider"></div>
                <h3 className="product2-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>ADAS development is plagued by fragmentation, high development costs, and strict safety requirements. Legacy systems are often black boxes tied to specific hardware sensors, preventing manufacturers from changing suppliers or upgrading individual components. Additionally, false-positive activations—such as a vehicle slamming on the brakes due to a shadow—erode driver trust and create safety hazards. Developers must build systems that comply with ISO 26262 safety standards while running complex neural networks on power-constrained vehicle ECUs.</p>
              </div>
            </section>

            <section id="functionalities" className="product2-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product2-module-list">
                
                <li className="product2-module-item">
                  <strong>Sensor Driver & Sync Layer:</strong> Interfaces directly with sensor hardware, synchronizing camera frames, radar packets, and LiDAR point clouds using PTP time stamping.
                </li>
                <li className="product2-module-item">
                  <strong>Perception Pipeline:</strong> Runs optimized convolutional neural networks (CNNs) on the hardware GPU/NPU to classify road objects and signs.
                </li>
                <li className="product2-module-item">
                  <strong>Localization and Mapping:</strong> Locates the vehicle within its lane with centimeter-level accuracy by matching local sensor features with HD map data.
                </li>
                <li className="product2-module-item">
                  <strong>Decision & Control Engine:</strong> Computes acceleration, braking, and steering commands based on safety-critical state machine logic.
                </li>
                <li className="product2-module-item">
                  <strong>Actuator Interface:</strong> Sends steering and braking requests to the vehicle's electronic stability control (ESC) and electric power steering (EPS) systems.
                </li>
                <li className="product2-module-item">
                  <strong>Diagnostic & Fail-Safe Manager:</strong> Monitors software execution cycles and sensor health, initiating a safe state transition in the event of a fault.
                </li>
              </ul>
            </section>

            <section id="value" className="product2-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product2-highlight-text">Our ADAS Software platform delivers value by providing a modular, safety-certified framework that reduces time-to-market for automotive OEMs. By decoupling software logic from physical sensors, manufacturers can easily swap hardware suppliers, lowering bill-of-materials (BOM) costs. The platform's advanced sensor fusion minimizes false-positive interventions by 95% compared to single-sensor systems, improving passenger comfort and safety. Furthermore, its compliant ASIL-D development lifecycle ensures that vehicles meet the most stringent safety ratings (such as Euro NCAP 5-star benchmarks), protecting manufacturers from regulatory non-compliance and liability issues.</p>
            </section>

            <section id="workflow" className="product2-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product2-grid-2">
                <div>
                  <h3 className="product2-subheading">Operational Workflow</h3>
                  <div className="product2-workflow-steps">
                    
                    <div className="product2-step">
                      <div className="product2-step-number">1</div>
                      <div className="product2-step-content">
                        <h4>Sensor Ingestion</h4>
                        <p>High-frequency raw data is ingested from cameras, radar, and LiDAR over automotive Ethernet and CAN FD buses.</p>
                      </div>
                    </div>
                    <div className="product2-step">
                      <div className="product2-step-number">2</div>
                      <div className="product2-step-content">
                        <h4>Sensor Synchronization</h4>
                        <p>Hardware-level timestamping synchronizes all input streams to ensure they represent the exact same physical moment.</p>
                      </div>
                    </div>
                    <div className="product2-step">
                      <div className="product2-step-number">3</div>
                      <div className="product2-step-content">
                        <h4>Perception & Segmentation</h4>
                        <p>Deep learning models classify objects, detect lanes, and perform semantic segmentation of the drivable space.</p>
                      </div>
                    </div>
                    <div className="product2-step">
                      <div className="product2-step-number">4</div>
                      <div className="product2-step-content">
                        <h4>Sensor Fusion & Modeling</h4>
                        <p>Extended Kalman filters and occupancy grids fuse classifications to construct a 360-degree environment map.</p>
                      </div>
                    </div>
                    <div className="product2-step">
                      <div className="product2-step-number">5</div>
                      <div className="product2-step-content">
                        <h4>Path Planning & Actuation</h4>
                        <p>The planning engine evaluates trajectory options, and the control loop sends steering and braking commands to vehicle actuators.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product2-subheading">Implementation Process</h3>
                  <ul className="product2-process-list">
                    
                    <li>
                      <strong>Phase 1: Hardware and SoC Selection</strong>
                      <p>Choose the target silicon platform (e.g., NVIDIA DRIVE, Mobileye EyeQ, or NXP S32G) for hosting the software stack.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Sensor Placement & Interface Configuration</strong>
                      <p>Define camera, radar, and LiDAR positions on the vehicle and configure device drivers in the software layer.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Sensor Fusion Calibration</strong>
                      <p>Calibrate intrinsic and extrinsic sensor matrices using target-based and dynamic road calibration tools.</p>
                    </li>
                    <li>
                      <strong>Phase 4: ADAS Stack Deployment</strong>
                      <p>Flash the compiled binary including RTOS and perception libraries onto the target electronic control units (ECUs).</p>
                    </li>
                    <li>
                      <strong>Phase 5: Closed-Loop HIL Simulation</strong>
                      <p>Run extensive Hardware-in-the-Loop (HIL) simulations in virtual environments to validate safety-critical corner cases.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Road Testing & Certification</strong>
                      <p>Perform public road testing, collect telemetry, tune control gains, and complete ISO 26262 ASIL safety audits.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product2-content-section">
              <h2>System Architecture</h2>
              <p>The software architecture is built around a safety-split paradigm. Safety-critical control logic runs on a deterministic Real-Time Operating System (RTOS) like QNX or VxWorks, while high-throughput perception pipelines run on a POSIX-compliant system (like Embedded Linux) with GPU/NPU acceleration. The two environments communicate via high-speed IPC (Inter-Process Communication) with built-in validation checks. This separation ensures that even if a perception model crashes, the deterministic safety controllers can still bring the vehicle to a safe stop.</p>
            </section>

            <section id="tech-arch" className="product2-content-section">
              <h2>Technical Architecture</h2>
              <div className="product2-tech-arch-grid">
                
                <div className="product2-tech-card">
                  <span className="product2-tech-label">FRONTEND</span>
                  <p>An engineering debug interface built with Qt/C++ that displays real-time 3D point cloud overlays, bounding boxes, and system diagnostic states.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">BACKEND</span>
                  <p>High-performance, MISRA C++ compliant perception and control libraries optimized for automotive compilers.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">GATEWAY</span>
                  <p>Internal communications handled by DDS (Data Distribution Service) middleware, providing secure, real-time message passing.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">PROCESSING</span>
                  <p>Custom CUDA-accelerated image pre-processing libraries that correct distortion, adjust exposure, and format inputs for neural networks.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">AI ML</span>
                  <p>Deep Convolutional Neural Networks (CNNs) for object detection, Recurrent Neural Networks (RNNs) for path prediction, compiled using TensorRT.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">EDGE</span>
                  <p>Fully optimized embedded binaries running directly on ASIL-D automotive microcontrollers and high-performance system-on-chips (SoCs).</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">SECURITY</span>
                  <p>Hardware Security Module (HSM) checking signature integrity of all code, secure boot mechanisms, and encrypted CAN/Ethernet channels.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">CLOUD</span>
                  <p>AWS-based data ingestion pipeline that stores and indexes petabytes of driving data for retraining perception models.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">INTEGRATION</span>
                  <p>Adaptive AUTOSAR interfaces providing standardized API boundaries for integrating with vehicle body and powertrain ECUs.</p>
                </div>
                <div className="product2-tech-card">
                  <span className="product2-tech-label">MONITORING</span>
                  <p>Real-time watchdog timers, memory protection units, and extensive diagnostic event managers logging to non-volatile memory.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product2-content-section">
              <h2>Technologies Used</h2>
              <div className="product2-tags-container">
                
                <div className="product2-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">C++</span><span className="product2-tag">C</span><span className="product2-tag">Python (for training)</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">Adaptive AUTOSAR</span><span className="product2-tag">ROS 2 (for prototyping)</span><span className="product2-tag">TensorRT</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">eXtremeDB (embedded)</span><span className="product2-tag">LevelDB</span><span className="product2-tag">AWS S3</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">AWS</span><span className="product2-tag">Microsoft Azure</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">PyTorch</span><span className="product2-tag">CUDA</span><span className="product2-tag">TensorRT</span><span className="product2-tag">OpenCV</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>IOT</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">Automotive Cameras</span><span className="product2-tag">Solid-State LiDAR</span><span className="product2-tag">FMCW Radar</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">CAN FD</span><span className="product2-tag">Automotive Ethernet (100BASE-T1)</span><span className="product2-tag">SOME/IP</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">Docker</span><span className="product2-tag">Yocto Project (Linux builds)</span><span className="product2-tag">Jenkins</span><span className="product2-tag">CMake</span>
                  </div>
                </div>
                <div className="product2-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product2-tags">
                    <span className="product2-tag">Secure Boot</span><span className="product2-tag">HSM</span><span className="product2-tag">TLS 1.3</span><span className="product2-tag">SecOC (Secure Onboard Communication)</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product2-content-section">
              <h2>Real-World Applications</h2>
              <div className="product2-feature-grid">
                
                <div className="product2-app-card">
                  <h4>Highway Pilot Automation</h4>
                  <p>Powers Level 2+ hands-free highway driving systems, including automated lane changes and ramp-to-ramp navigation.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Urban Automatic Emergency Braking (AEB)</h4>
                  <p>Deploys in compact passenger cars to detect pedestrians stepping off curbs, avoiding low-speed urban collisions.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Valet Parking Assistance</h4>
                  <p>Coordinates low-speed automated steering and path planning in multi-story parking structures using ultrasonic sensors and cameras.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Heavy Truck Lane Departure Mitigation</h4>
                  <p>Integrates with class-8 commercial semi-trucks, applying torque overlays to the steering column to prevent lane drifts.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Intersection Assist System</h4>
                  <p>Detects cross-traffic at blind intersections using long-range corner radars, warning drivers and applying pre-charge brakes.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Construction Zone Speed Adaptation</h4>
                  <p>Reads temporary speed signs and detects traffic cones, adjusting adaptive cruise control thresholds automatically.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Traffic Jam Pilot</h4>
                  <p>Enables hands-free driving in dense, slow-moving traffic up to 60 km/h under Level 3 automation conditions.</p>
                </div>
                <div className="product2-app-card">
                  <h4>Autonomous Delivery Shuttle Perception</h4>
                  <p>Provides the complete 3D perception and safety envelope for low-speed driverless cargo delivery shuttles.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product2-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product2-grid-2">
                <div className="product2-benefits-box">
                  <h3 className="product2-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product2-check-list">
                    
                    <li>
                      <strong>Drastic Collision Reduction:</strong> Prevents up to 80% of forward crashes through instant automated braking and steering interventions.
                    </li>
                    <li>
                      <strong>High Safety Compliance:</strong> Achieves Euro NCAP 5-star safety scores and conforms directly to strict ISO 26262 ASIL-D regulations.
                    </li>
                    <li>
                      <strong>Hardware Cost Savings:</strong> Hardware-agnostic design permits the reuse of code across multiple sensor configurations and SoC vendors.
                    </li>
                    <li>
                      <strong>Reduced Driver Fatigue:</strong> Automates repetitive highway driving tasks, enhancing comfort and alertness on long journeys.
                    </li>
                    <li>
                      <strong>Continuous Field Upgrades:</strong> Supports OTA updates, allowing safety features to improve over the lifetime of the vehicle.
                    </li>
                  </ul>
                </div>
                <div className="product2-challenges-box">
                  <h3 className="product2-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product2-cross-list">
                    
                    <li>
                      <strong>Sensor Occlusion:</strong> Cameras and LiDARs get blinded by heavy rain, snow, or mud, requiring fallback to radar and safe handover modes.
                    </li>
                    <li>
                      <strong>NPU Thermal Limits:</strong> Running heavy deep learning models on automotive ECUs generates significant heat, requiring thermal-aware model throttling.
                    </li>
                    <li>
                      <strong>Edge Case Inferences:</strong> Unusual road scenarios, like animals jumping onto highways or debris on roads, are difficult for deep learning models to generalize.
                    </li>
                    <li>
                      <strong>Safety Handover Latency:</strong> Transitioning vehicle control from automated systems back to human drivers safely within fraction-of-a-second windows.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product2-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product2-glass-panel">
                <h3 className="product2-panel-heading">Future Scope</h3>
                <p>The future of ADAS lies in cooperative perception and end-to-end differentiable neural networks. By integrating vehicle-to-vehicle (V2V) communications, cars will share their raw sensor feeds with surrounding vehicles, allowing them to 'see' around corners and through obstacles. Additionally, transitioning from hand-crafted heuristic control loops to end-to-end deep learning planners will create more natural, human-like driving profiles. Next-generation systems will also integrate with cloud-hosted digital twins to download real-time local hazard profiles, adapting sensor sensitivities to match local road friction and weather anomalies.</p>
                <div className="product2-divider"></div>
                <h3 className="product2-panel-heading">Industry Impact</h3>
                <p>This software is a critical stepping stone toward a zero-fatality future. By democratizing advanced active safety features, it makes collision avoidance technology standard on affordable passenger vehicles, saving thousands of lives globally. It changes the role of the driver, paving the way for fully autonomous transportation systems and transforming car safety from passive impact protection to active collision prevention.</p>
              </div>
            </section>

            <section className="product2-cta-section">
              <div className="product2-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Advanced Driver Assistance Systems (ADAS) Software represents the state of the art in automotive perception, planning, and control. By delivering hardware independence, certified safety, and industry-leading sensor fusion performance, we help automotive manufacturers build vehicles that are safer, smarter, and ready for the future of mobility.</p>
                <button className="product2-btn product2-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product2;
