import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product4.css';
import prd4 from "../../../assets/images/prd4.jpg";

const Product4 = () => {
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
    <div className="product4-detail-page">
      <section className="product4-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd4})` }}>
        <div className="product4-hero-content">
          <button className="product4-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Automotive Augmented Reality Applications</h1>
          <p>Advanced augmented reality (AR) software driving heads-up displays (HUDs) and windshield projections with real-time navigation overlays and hazard highlights.</p>
        </div>
      </section>

      <div className="product4-container">
        <div className="product4-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product4-sidebar">
            <div className="product4-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product4-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product4-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product4-main-content">
            
            <section id="introduction" className="product4-content-section">
              <h2>Introduction</h2>
              <p>Driver distraction and situational awareness are critical factors in road safety. Traditional navigation screens require drivers to look away from the road, losing precious reaction time. Our Automotive Augmented Reality Applications platform is an enterprise-grade software solution designed to project safety-critical information directly into the driver's line of sight. By integrating with high-end Heads-Up Displays (HUDs) and smart windshields, the platform overlays real-time navigation graphics, speed parameters, and safety warnings directly onto the physical environment.</p>
              <p>The system uses advanced spatial calibration, eye-tracking cameras, and low-latency rendering pipelines to ensure that virtual graphics align perfectly with physical lanes, vehicles, and pedestrians. By projecting warnings directly onto the road surface, the platform reduces cognitive load and helps drivers respond to hazards up to 50% faster. Built with modular API support, it interfaces with existing ADAS sensors, navigation engines, and cabin monitoring units to deliver an intuitive, safety-enhancing augmented driving experience.</p>
            </section>

            <section id="key-features" className="product4-content-section">
              <h2>Key Features</h2>
              <div className="product4-feature-grid">
                
                <div className="product4-card">
                  <h3 className="product4-card-title">Real-Time Spatial Lane Guidance</h3>
                  <p className="product4-card-desc">Projects dynamic, path-aligned arrows directly onto physical road lanes to guide drivers through complex turns and exits.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Pedestrian & Hazard Highlighting</h3>
                  <p className="product4-card-desc">Draws attention to pedestrians, cyclists, and animals in low-visibility conditions by projecting glowing bounding frames onto them.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Active Speed & Sign Overlays</h3>
                  <p className="product4-card-desc">Displays speed limit signs, current speeds, and traffic light statuses directly in the driver's forward field of view.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Adaptive Eye-Tracking Sync</h3>
                  <p className="product4-card-desc">Uses internal cabin cameras to track the driver's eye position, continuously adjusting projection angles to prevent parallax errors.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Adaptive Cruise Distance Marker</h3>
                  <p className="product4-card-desc">Projects virtual bounding bars under the vehicle ahead, changing color based on safety and tailgating thresholds.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Off-Road Path Mapping</h3>
                  <p className="product4-card-desc">Visualizes underlying terrain, pitch/roll indicators, and safe tire placement paths in low-visibility trail environments.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Interactive Point-of-Interest (POI) Tags</h3>
                  <p className="product4-card-desc">Displays floating tags over local landmarks, parking lots, and EV charging depots as the vehicle drives past.</p>
                </div>
                <div className="product4-card">
                  <h3 className="product4-card-title">Adverse Weather Enhancement</h3>
                  <p className="product4-card-desc">Projects highlighted road boundaries and virtual lane markings during heavy fog, rain, or snow based on radar telemetry.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product4-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product4-glass-panel">
                <h3 className="product4-panel-heading">Industry Background</h3>
                <p>As dashboards incorporate larger screens and more menus, driver distraction has reached all-time highs. Looking down at a navigation screen at 100 km/h means traveling blind for dozens of meters. Heads-Up Displays (HUDs) were introduced to solve this, but early models only showed static text and numbers that appeared flat. True augmented reality requires graphics to appear integrated into the physical world (e.g., a turn arrow resting flat on the actual road surface). Achieving this requires extremely low-latency graphics rendering and precise coordinate alignment between sensors, display optics, and the driver's moving eyes.</p>
                <div className="product4-divider"></div>
                <h3 className="product4-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Developing automotive AR is difficult due to latency and alignment challenges. If virtual graphics lag behind the physical world by even a few milliseconds (e.g., when the car bumps or turns), the driver experiences visual mismatch, leading to motion sickness and confusion. Furthermore, the system must calibrate graphics dynamically in real-time to adjust for changes in vehicle payload, driver height, and road elevation, while maintaining high readability in both bright sunlight and dark night environments.</p>
              </div>
            </section>

            <section id="functionalities" className="product4-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product4-module-list">
                
                <li className="product4-module-item">
                  <strong>Spatial Localization Engine:</strong> Fuses GPS, IMU, and camera data to create a high-precision spatial coordinate framework for the local environment.
                </li>
                <li className="product4-module-item">
                  <strong>Dynamic Eye-Tracking Manager:</strong> Monitors infrared pupil camera feeds to compute the driver's exact 3D viewing vector relative to the HUD optics.
                </li>
                <li className="product4-module-item">
                  <strong>Low-Latency Render Pipeline:</strong> Generates 3D graphics in under 15 milliseconds, utilizing predictive motion algorithms to pre-render frames.
                </li>
                <li className="product4-module-item">
                  <strong>Sensor Gateway Integration:</strong> Subscribes to ADAS object tracks, forwarding target coordinates for highlighting directly to the AR engine.
                </li>
                <li className="product4-module-item">
                  <strong>Optical Projection Calibrator:</strong> Compensates for windshield curvature, distortion, and vehicle vibrations using dynamic digital warping.
                </li>
                <li className="product4-module-item">
                  <strong>Ambient Light Adaptation Controller:</strong> Adjusts laser projector intensity and color contrast in real-time based on forward camera lux sensors.
                </li>
              </ul>
            </section>

            <section id="value" className="product4-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product4-highlight-text">Our Automotive AR platform delivers value by significantly improving road safety and enhancing the driving experience. By keeping the driver's eyes focused forward, it decreases reaction times and reduces collision risks. The system acts as an intuitive safety shield, highlighting hazards before they are clearly visible to the human eye. For premium automotive OEMs, it serves as a powerful product differentiator, adding high-tech appeal and enabling higher vehicle pricing. For commercial logistics, it reduces driver fatigue during night and bad weather operations.</p>
            </section>

            <section id="workflow" className="product4-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product4-grid-2">
                <div>
                  <h3 className="product4-subheading">Operational Workflow</h3>
                  <div className="product4-workflow-steps">
                    
                    <div className="product4-step">
                      <div className="product4-step-number">1</div>
                      <div className="product4-step-content">
                        <h4>Sensor Input Ingestion</h4>
                        <p>ADAS sensors track vehicles, forward cameras detect lane lines, and cabin cameras track the driver's pupils.</p>
                      </div>
                    </div>
                    <div className="product4-step">
                      <div className="product4-step-number">2</div>
                      <div className="product4-step-content">
                        <h4>Coordinate Synchronization</h4>
                        <p>The spatial engine aligns the coordinates of physical objects with the coordinate system of the HUD projection optics.</p>
                      </div>
                    </div>
                    <div className="product4-step">
                      <div className="product4-step-number">3</div>
                      <div className="product4-step-content">
                        <h4>Trajectory Prediction & Planning</h4>
                        <p>The graphics engine predicts the vehicle's position 20 milliseconds in the future to account for rendering latency.</p>
                      </div>
                    </div>
                    <div className="product4-step">
                      <div className="product4-step-number">4</div>
                      <div className="product4-step-content">
                        <h4>3D Overlay Generation</h4>
                        <p>The render pipeline draws navigation arrows, hazard markers, and speed stats using specialized distortion matrices.</p>
                      </div>
                    </div>
                    <div className="product4-step">
                      <div className="product4-step-number">5</div>
                      <div className="product4-step-content">
                        <h4>Laser HUD Projection</h4>
                        <p>The laser projector projects the distorted image onto the windshield's reflective PVB interlayer, appearing as a natural overlay on the road.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product4-subheading">Implementation Process</h3>
                  <ul className="product4-process-list">
                    
                    <li>
                      <strong>Phase 1: Windshield and HUD Optics Mapping</strong>
                      <p>Import 3D CAD models of the vehicle windshield and HUD projection optics into the AR calibration tool.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Calibrating the Distortion Matrix</strong>
                      <p>Generate custom mathematical matrices to correct for image distortion caused by the curved glass surface.</p>
                    </li>
                    <li>
                      <strong>Phase 3: ADAS & Sensor Interface Setup</strong>
                      <p>Configure CAN/Ethernet routes to pipe radar target tracks, lane metrics, and GPS data into the AR software.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Eye-Tracking Camera Calibration</strong>
                      <p>Position the steering column cabin camera and configure pupil tracking algorithms to compute 3D gaze points.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Latency Tuning & Prediction Setup</strong>
                      <p>Tune the predictive motion algorithms to align graphics during rapid steering inputs and vehicle vibrations.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Road Testing & UX Optimization</strong>
                      <p>Perform road tests under varying light, test color palettes for visibility, and lock down the production software build.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product4-content-section">
              <h2>System Architecture</h2>
              <p>The AR platform runs on a high-performance system-on-chip (SoC) equipped with a dedicated NPU for eye-tracking and a GPU for real-time 3D rendering. It connects to the vehicle's central ADAS processor via an ultra-low-latency 10Gbps automotive Ethernet link. The software stack uses a real-time kernel to guarantee execution deadlines, ensuring that safety-critical hazard overlays are always prioritized over informational point-of-interest tags.</p>
            </section>

            <section id="tech-arch" className="product4-content-section">
              <h2>Technical Architecture</h2>
              <div className="product4-tech-arch-grid">
                
                <div className="product4-tech-card">
                  <span className="product4-tech-label">FRONTEND</span>
                  <p>An embedded UI application developed using Unity 3D / Unreal Engine with custom shaders, designed for projection onto holographic windshield displays.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">BACKEND</span>
                  <p>Real-time C++ tracking and localization libraries, executing spatial coordinate translations at 120Hz.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">GATEWAY</span>
                  <p>Direct high-speed PCIe interface connecting the main graphics processor to the laser projector control board.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">PROCESSING</span>
                  <p>Windshield distortion correction module utilizing hardware-accelerated vertex shaders to warp images on the GPU.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">AI ML</span>
                  <p>Convolutional neural network (CNN) running on the SoC NPU, analyzing infrared cabin camera frames to compute pupil coordinates.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">EDGE</span>
                  <p>Fully contained local ECU application, operating with zero cloud dependencies for all safety-critical overlays.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">SECURITY</span>
                  <p>Cryptographic validation of all boot code, secure communication channels, and memory isolation policies for the rendering engine.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">CLOUD</span>
                  <p>Optional connection to cloud navigation APIs to download spatial metadata for local POIs and construction zones.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">INTEGRATION</span>
                  <p>Adaptive AUTOSAR interface providing connection points to vehicle speed sensors, steering angle sensors, and ADAS ECUs.</p>
                </div>
                <div className="product4-tech-card">
                  <span className="product4-tech-label">MONITORING</span>
                  <p>Internal diagnostic loop checking latency, projector temperature, and eye-tracking status, switching to a flat backup mode if faults are detected.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product4-content-section">
              <h2>Technologies Used</h2>
              <div className="product4-tags-container">
                
                <div className="product4-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">C++</span><span className="product4-tag">GLSL Shading Language</span><span className="product4-tag">Python</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">Unity 3D</span><span className="product4-tag">Unreal Engine</span><span className="product4-tag">OpenCV</span><span className="product4-tag">OpenXR</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">RocksDB (embedded local storage for spatial POIs)</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">AWS (for map data hosting and calibration models)</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">TensorFlow Lite (for pupil tracking)</span><span className="product4-tag">NVIDIA TensorRT</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>IOT</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">Laser-based HUD Projector</span><span className="product4-tag">Time-of-Flight Driver Cameras</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">Automotive Ethernet (1000BASE-T1)</span><span className="product4-tag">gRPC</span><span className="product4-tag">CAN FD</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">Docker</span><span className="product4-tag">CMake</span><span className="product4-tag">Jenkins</span><span className="product4-tag">GitLab CI</span>
                  </div>
                </div>
                <div className="product4-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product4-tags">
                    <span className="product4-tag">Secure Boot</span><span className="product4-tag">ASIL-certified microkernel</span><span className="product4-tag">TLS 1.3</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product4-content-section">
              <h2>Real-World Applications</h2>
              <div className="product4-feature-grid">
                
                <div className="product4-app-card">
                  <h4>Premium Sedan AR Navigation</h4>
                  <p>Projects animated navigation arrows onto physical lane divisions, guiding drivers through complex multi-level highway interchanges.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Heavy Logistics Night Vision HUD</h4>
                  <p>Deploys in long-haul semi-trucks, highlighting deer, pedestrians, and road boundaries in pitch-black highway environments.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Electric vehicle range visualizer</h4>
                  <p>Projects a green contour map onto the road surface, showing the exact driving boundary reachable with remaining charge.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Off-Road Navigation Overlay</h4>
                  <p>Guides off-road search and rescue vehicles, projecting safe pathways over steep rocks, mud, and sand dunes.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Emergency Vehicle Alert HUD</h4>
                  <p>Highlights the direction of approaching police, ambulance, or fire trucks, projecting warnings onto blind intersection walls.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Urban Autonomous Valet HUD</h4>
                  <p>Shows parking spaces available for reservation, highlighting occupied spaces in red and free spaces in green.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Delivery Van Route Tags</h4>
                  <p>Projects floating house numbers and package delivery designations onto physical buildings as the driver arrives.</p>
                </div>
                <div className="product4-app-card">
                  <h4>Fog-Prone Bridge Lane Assist</h4>
                  <p>Projects virtual bright lane markings onto the windshield during dense fog, using long-range radar feedback.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product4-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product4-grid-2">
                <div className="product4-benefits-box">
                  <h3 className="product4-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product4-check-list">
                    
                    <li>
                      <strong>Reduced Driver Distraction:</strong> Keeps the driver's eyes focused on the road, eliminating the dangerous habit of looking down at navigation displays.
                    </li>
                    <li>
                      <strong>Enhanced Night Safety:</strong> Highlights hazards and pedestrians in low-light conditions, increasing reaction times by up to 50%.
                    </li>
                    <li>
                      <strong>Lower Cognitive Load:</strong> Presents navigation and speed data as natural physical overlays, reducing driver stress in unfamiliar cities.
                    </li>
                    <li>
                      <strong>Premium Product Value:</strong> Differentiates vehicles in the luxury market, enabling OEMs to charge a premium for high-tech HUD systems.
                    </li>
                    <li>
                      <strong>All-Weather Usability:</strong> Improves driving confidence and safety in fog, heavy rain, and snow through radar-guided projections.
                    </li>
                  </ul>
                </div>
                <div className="product4-challenges-box">
                  <h3 className="product4-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product4-cross-list">
                    
                    <li>
                      <strong>Parallax Distortion:</strong> Ensuring virtual graphics align correctly when the driver shifts their head up, down, or sideways.
                    </li>
                    <li>
                      <strong>Visual Clutter Risks:</strong> Projecting too many graphics can block the driver's view, requiring strict priority filtering for warnings.
                    </li>
                    <li>
                      <strong>Severe Thermal Stress:</strong> Projector lasers generate intense heat and must remain functional under direct windshield sunlight.
                    </li>
                    <li>
                      <strong>Extreme Latency Sensitivity:</strong> Even minor lags of 20ms during sharp turns can cause driver disorientation and motion sickness.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product4-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product4-glass-panel">
                <h3 className="product4-panel-heading">Future Scope</h3>
                <p>The future of automotive AR lies in full-windshield holographic projections and smart contact lenses. Windshields will be coated with transparent light-emitting films, turning the entire glass surface into an active display capable of showing wide-field panoramas. Integration with cloud-based digital twins will allow vehicles to project virtual representations of upcoming road conditions (like hidden icy curves or traffic jams) kilometers before they are physically visible. Additionally, smart contact lenses will overlay personal health and destination metrics directly onto the driver's retina, syncing with the vehicle's interior systems.</p>
                <div className="product4-divider"></div>
                <h3 className="product4-panel-heading">Industry Impact</h3>
                <p>This technology fundamentally changes how humans interact with their environment while driving. By blending digital data with the physical world, it makes driving more intuitive, safer, and less stressful. It accelerates the adoption of Level 3 autonomous vehicles by providing passengers with a clear visual representation of what the car's sensors see, building crucial trust in automated systems.</p>
              </div>
            </section>

            <section className="product4-cta-section">
              <div className="product4-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Automotive Augmented Reality Applications represent a major milestone in human-machine interface design. By combining high-speed spatial math, eye tracking, and low-latency rendering, we turn windshields into safety shields, helping OEMs build the safest and most advanced vehicles on the road.</p>
                <button className="product4-btn product4-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product4;
