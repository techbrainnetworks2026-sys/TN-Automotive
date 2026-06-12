import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product6.css';
import prd6 from "../../../assets/images/prd6.jpg";

const Product6 = () => {
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
    <div className="product6-detail-page">
      <section className="product6-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd6})` }}>
        <div className="product6-hero-content">
          <button className="product6-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Vehicle-to-Everything (V2X) Communication Platforms</h1>
          <p>Secure, low-latency communication middleware connecting vehicles with other vehicles, infrastructure, pedestrians, and the cloud (V2V, V2I, V2P, V2N).</p>
        </div>
      </section>

      <div className="product6-container">
        <div className="product6-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product6-sidebar">
            <div className="product6-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product6-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product6-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product6-main-content">
            
            <section id="introduction" className="product6-content-section">
              <h2>Introduction</h2>
              <p>Real-world automotive safety and intelligent transit depend on the ability of vehicles to exchange information with their surroundings. Vehicle-to-Everything (V2X) communication technology enables vehicles to broadcast and receive safety-critical messages in real-time, even in non-line-of-sight conditions. Our V2X Communication Platform is an enterprise-grade middleware software stack designed for automotive OEMs, roadside infrastructure developers, and traffic authorities.</p>
              <p>The platform supports both cellular V2X (C-V2X) and Dedicated Short-Range Communications (DSRC) protocols. By providing ultra-low latency data transmission (sub-10 milliseconds), the software enables critical collision avoidance applications such as forward collision warning, intersection movement assist, and emergency brake light alerts. The system features advanced hardware-backed security, utilizing security credential management systems (SCMS) to cryptographically sign and verify every message, ensuring absolute protection against hacking and spoofing.</p>
            </section>

            <section id="key-features" className="product6-content-section">
              <h2>Key Features</h2>
              <div className="product6-feature-grid">
                
                <div className="product6-card">
                  <h3 className="product6-card-title">Multi-Protocol Connectivity Support</h3>
                  <p className="product6-card-desc">Integrates with both 3GPP Cellular V2X (PC5 interface) and IEEE 802.11p (DSRC) physical communication layers.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">Low-Latency Cooperative Awareness</h3>
                  <p className="product6-card-desc">Transmits and receives Cooperative Awareness Messages (CAM) at 10Hz frequency with latency under 10 milliseconds.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">Intersection Safety Warnings</h3>
                  <p className="product6-card-desc">Calculates intersection crash risks by analyzing incoming position reports from surrounding vehicles.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">Roadside Unit (RSU) Integration</h3>
                  <p className="product6-card-desc">Interfaces with smart roadside units to receive Signal Phase and Timing (SPaT) and Map Data (MAP) broadcasts.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">V2P Pedestrian Collision Shield</h3>
                  <p className="product6-card-desc">Monitors mobile phone GPS coordinates from pedestrians to alert drivers of hidden pedestrian crossings.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">Platooning Control Engine</h3>
                  <p className="product6-card-desc">Enables heavy-duty trucks to coordinate acceleration and braking wirelessly, reducing aerodynamic drag and fuel consumption.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">SCMS Credential Management</h3>
                  <p className="product6-card-desc">Automates the rotation of cryptographic pseudonymous certificates to prevent vehicle tracking while ensuring message authenticity.</p>
                </div>
                <div className="product6-card">
                  <h3 className="product6-card-title">V2N Cloud Telematics Sync</h3>
                  <p className="product6-card-desc">Interfaces with cellular networks (Uu interface) to transmit system telemetry and download local weather alerts.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product6-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product6-glass-panel">
                <h3 className="product6-panel-heading">Industry Background</h3>
                <p>Modern driving safety systems rely primarily on vehicle-mounted line-of-sight sensors like cameras, radars, and LiDARs. However, these sensors cannot see through large trucks, around blind corners, or during dense fog. V2X communications overcome these limitations by allowing vehicles to share their speed, acceleration, steering angle, and braking status directly with surrounding cars and infrastructure. For instance, a vehicle braking heavily around a blind bend can notify incoming traffic before it becomes visible, giving drivers time to respond. Establishing this cooperative network requires highly secure, standard-compliant communication layers.</p>
                <div className="product6-divider"></div>
                <h3 className="product6-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Developing V2X applications is complex due to strict latency and security requirements. Fusing local sensor tracks with wireless messages requires precise spatial-temporal alignment. Additionally, the system must process hundreds of messages per second from surrounding vehicles in dense traffic without overloading the vehicle's ECU. Furthermore, preventing malicious actors from sending fake traffic data to cause accidents requires high-speed cryptographic signing and verification capabilities.</p>
              </div>
            </section>

            <section id="functionalities" className="product6-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product6-module-list">
                
                <li className="product6-module-item">
                  <strong>V2X Message Router:</strong> Directs incoming messages to corresponding safety applications while managing queue priorities for collision alerts.
                </li>
                <li className="product6-module-item">
                  <strong>Cryptographic Verification Accelerator:</strong> Offloads ECC signature checks to hardware security modules, verifying up to 1,000 incoming messages per second.
                </li>
                <li className="product6-module-item">
                  <strong>Spatial-Temporal Alignment Module:</strong> Synchronizes vehicle position reports from wireless messages with local GPS and IMU coordinate frames.
                </li>
                <li className="product6-module-item">
                  <strong>Local Dynamic Map (LDM):</strong> Maintains a real-time database of all local vehicles, obstacles, signs, and traffic light statuses in the vicinity.
                </li>
                <li className="product6-module-item">
                  <strong>SPaT Logic Parser:</strong> Interprets traffic light timing signals, computing optimal speeds for drivers to pass intersections without stopping.
                </li>
                <li className="product6-module-item">
                  <strong>Certificate Rotation Daemon:</strong> Rotates security certificates daily to protect driver privacy from location tracking.
                </li>
              </ul>
            </section>

            <section id="value" className="product6-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product6-highlight-text">Our V2X platform delivers value by enhancing vehicle safety beyond the limits of local sensors. It reduces multi-vehicle collisions by up to 80% by providing early warnings of hazards. For commercial truck fleets, the platooning module cuts fuel costs by up to 12% through aerodynamic vehicle spacing. It allows OEMs to prepare their vehicles for Level 4 autonomous driving, where cooperative perception is mandatory, and provides municipal authorities with real-time traffic data to optimize signal timings.</p>
            </section>

            <section id="workflow" className="product6-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product6-grid-2">
                <div>
                  <h3 className="product6-subheading">Operational Workflow</h3>
                  <div className="product6-workflow-steps">
                    
                    <div className="product6-step">
                      <div className="product6-step-number">1</div>
                      <div className="product6-step-content">
                        <h4>Sensor Capture & Packaging</h4>
                        <p>Vehicle speed, heading, and brake status are captured from the CAN bus and packaged into a Basic Safety Message (BSM).</p>
                      </div>
                    </div>
                    <div className="product6-step">
                      <div className="product6-step-number">2</div>
                      <div className="product6-step-content">
                        <h4>Message Signing</h4>
                        <p>The hardware security module signs the BSM payload with a pseudonymous certificate to prove authenticity.</p>
                      </div>
                    </div>
                    <div className="product6-step">
                      <div className="product6-step-number">3</div>
                      <div className="product6-step-content">
                        <h4>Wireless Broadcast</h4>
                        <p>The V2X transceiver broadcasts the signed BSM over the 5.9GHz frequency band.</p>
                      </div>
                    </div>
                    <div className="product6-step">
                      <div className="product6-step-number">4</div>
                      <div className="product6-step-content">
                        <h4>Message Reception & Verification</h4>
                        <p>Surrounding vehicles receive the packet, verify the cryptographic signature, and parse the payload.</p>
                      </div>
                    </div>
                    <div className="product6-step">
                      <div className="product6-step-number">5</div>
                      <div className="product6-step-content">
                        <h4>Collision Threat Assessment</h4>
                        <p>The local threat engine compares the remote vehicle's trajectory with its own, triggering alerts if collision risks are detected.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product6-subheading">Implementation Process</h3>
                  <ul className="product6-process-list">
                    
                    <li>
                      <strong>Phase 1: Select V2X Silicon</strong>
                      <p>Select and configure the target V2X chipset (e.g., Qualcomm 9150 or Autotalks Craton2) on the telematics board.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Install Software Middleware</strong>
                      <p>Compile and deploy our V2X middleware stack onto the target telematics ECU.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Configure SCMS Credentials</strong>
                      <p>Connect the system to an authorized SCMS provider to download initial certificate batches.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Integrate CAN Interface</strong>
                      <p>Configure CAN/LIN routing to feed vehicle speed, steering angle, and braking states to the V2X stack.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Perform HIL Validation</strong>
                      <p>Run Hardware-in-the-Loop tests using RF simulators to verify message handling under dense traffic conditions.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Conducted Field Tests</strong>
                      <p>Perform road trials past connected infrastructure to verify SPaT warnings and V2V warning accuracy.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product6-content-section">
              <h2>System Architecture</h2>
              <p>The V2X platform is designed as an embedded middleware layer running on top of an automotive Real-Time Operating System. It acts as an intermediary between the V2X wireless radio chipset and the vehicle's ADAS and central display controllers. Security operations are segregated in a secure cryptoprocessor, ensuring that cryptographic keys are never exposed to the application layer. Telemetry is fed in real-time to a Local Dynamic Map (LDM) database, which provides a unified interface for safety applications to query the surrounding traffic state.</p>
            </section>

            <section id="tech-arch" className="product6-content-section">
              <h2>Technical Architecture</h2>
              <div className="product6-tech-arch-grid">
                
                <div className="product6-tech-card">
                  <span className="product6-tech-label">FRONTEND</span>
                  <p>An engineering diagnostics app built with React and WebGL, showing a real-time overhead radar-like view of nearby vehicles and active V2X alerts.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">BACKEND</span>
                  <p>C++ system services executing the V2X protocol stacks (IEEE 1609.x / ETSI ITS-G5) with microsecond latency.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">GATEWAY</span>
                  <p>Internal communications handled by DDS middleware, providing publish-subscribe routes for ADAS integration.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">PROCESSING</span>
                  <p>Optimized packet serialization and deserialization modules utilizing Google Protocol Buffers for internal messages.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">AI ML</span>
                  <p>Trajectory forecasting models running locally to predict whether surrounding V2X-equipped vehicles are planning lane changes.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">EDGE</span>
                  <p>Highly optimized embedded binary compiled with gcc-arm, running directly on telematics control units (TCUs).</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">SECURITY</span>
                  <p>Hardware security module (HSM) storing private keys, executing ECDSA message signing, and verifying certificates.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">CLOUD</span>
                  <p>AWS-hosted cloud services managing SCMS configurations, CRL (Certificate Revocation List) updates, and telematics ingestion.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">INTEGRATION</span>
                  <p>Standardized AUTOSAR V2X interfaces, providing simple APIs for dashboard alert screens and ADAS brakes.</p>
                </div>
                <div className="product6-tech-card">
                  <span className="product6-tech-label">MONITORING</span>
                  <p>Syslog diagnostic loggers monitoring packet loss, latency, and GPS drift, reporting status to the main vehicle cluster.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product6-content-section">
              <h2>Technologies Used</h2>
              <div className="product6-tags-container">
                
                <div className="product6-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">C++</span><span className="product6-tag">C</span><span className="product6-tag">Python</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">Adaptive AUTOSAR</span><span className="product6-tag">ETSI TC ITS</span><span className="product6-tag">IEEE 1609 Stack</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">SQLite (local LDM)</span><span className="product6-tag">Redis</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">AWS</span><span className="product6-tag">Azure</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">TensorFlow Lite (for behavior modeling)</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>IOT</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">C-V2X Transceivers</span><span className="product6-tag">Smart Roadside Units</span><span className="product6-tag">High-Precision GNSS</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">PC5</span><span className="product6-tag">DSRC</span><span className="product6-tag">ASN.1 encoding</span><span className="product6-tag">SOME/IP</span><span className="product6-tag">MQTT</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">Docker</span><span className="product6-tag">Yocto Project</span><span className="product6-tag">CMake</span><span className="product6-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product6-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product6-tags">
                    <span className="product6-tag">IEEE 1609.2 Security</span><span className="product6-tag">SCMS</span><span className="product6-tag">ECDSA</span><span className="product6-tag">HSM</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product6-content-section">
              <h2>Real-World Applications</h2>
              <div className="product6-feature-grid">
                
                <div className="product6-app-card">
                  <h4>Cooperative Intersection Movement Assist</h4>
                  <p>Implemented in a municipal shuttle fleet, preventing blind-spot collisions at uncontrolled urban intersections.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Highway Truck Platooning</h4>
                  <p>Deploys in shipping fleets, keeping three semi-trucks at 15-meter gaps wirelessly, saving fuel.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Roadside Hazard Alert System</h4>
                  <p>Integrates roadside units with construction equipment, warning incoming V2X cars of active roadwork ahead.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Emergency Vehicle Clearing</h4>
                  <p>Links police cruisers with city traffic light signals, securing green lights dynamically along response routes.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Connected EV Eco-Routing</h4>
                  <p>Links electric vehicles with city SPaT data, calculating target speeds to avoid stop-and-go energy loss.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Pedestrian Collision Alert App</h4>
                  <p>Fuses mobile phone GPS tracking with vehicle V2X receivers, warning drivers of pedestrians in crosswalks.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Railroad Crossing Warning System</h4>
                  <p>Broadcasts train approach telemetry to surrounding vehicles, preventing collisions at rural crossings.</p>
                </div>
                <div className="product6-app-card">
                  <h4>Dynamic Speed Limit Advisory</h4>
                  <p>Updates vehicles on changing highway speed limits automatically via V2I roadside alerts.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product6-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product6-grid-2">
                <div className="product6-benefits-box">
                  <h3 className="product6-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product6-check-list">
                    
                    <li>
                      <strong>Beyond-Line-of-Sight Safety:</strong> Warns drivers of accidents and braking events occurring blocks away or behind large obstacles.
                    </li>
                    <li>
                      <strong>Reduced Fuel Consumption:</strong> Optimizes speed to match traffic light cycles, minimizing stopping and saving fuel.
                    </li>
                    <li>
                      <strong>Scalable ADAS Enhancement:</strong> Serves as an extra, virtual sensor, increasing the reliability of vehicle perception pipelines.
                    </li>
                    <li>
                      <strong>Absolute Security Certification:</strong> Cryptographically signs all data, preventing remote vehicle hacking and data spoofing.
                    </li>
                    <li>
                      <strong>Enables Safe Truck Platooning:</strong> Maintains close following distances with microsecond response times, cutting fleet fuel bills.
                    </li>
                  </ul>
                </div>
                <div className="product6-challenges-box">
                  <h3 className="product6-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product6-cross-list">
                    
                    <li>
                      <strong>Market Penetration Dependency:</strong> V2X safety benefits require a high percentage of vehicles on the road to be equipped with the technology.
                    </li>
                    <li>
                      <strong>Spectrum Allocation Disputes:</strong> Regulatory shifts in frequency bands between C-V2X and Wi-Fi creates global deployment uncertainties.
                    </li>
                    <li>
                      <strong>Crypto Verification Bottlenecks:</strong> Verifying hundreds of signatures per second can overwhelm ECUs in high-density urban zones.
                    </li>
                    <li>
                      <strong>Privacy Concerns:</strong> Ensuring that pseudonymous certificates cannot be tracked by third-party receivers to trace routes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product6-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product6-glass-panel">
                <h3 className="product6-panel-heading">Future Scope</h3>
                <p>The future of V2X lies in Cooperative Maneuver Planning. Instead of just sharing position and speed, vehicles will negotiate driving trajectories dynamically over wireless channels. For instance, two cars arriving at a merge lane will coordinate their acceleration profiles to merge seamlessly without braking. Integration with satellite constellation connectivity will extend V2X communication coverage to remote desert and mountain areas. We are also developing models to broadcast road traction metrics dynamically, warning trailing vehicles of local black ice segments.</p>
                <div className="product6-divider"></div>
                <h3 className="product6-panel-heading">Industry Impact</h3>
                <p>This technology changes driving from an individual, reactive task into a collaborative, optimized system. By connecting cars with infrastructure and other road users, V2X eliminates gridlock, prevents multi-car pileups, and provides the cooperative framework necessary for safe, full-scale driverless transit.</p>
              </div>
            </section>

            <section className="product6-cta-section">
              <div className="product6-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Vehicle-to-Everything (V2X) Communication Platform provides the secure, ultra-low latency middleware required to connect vehicles with the modern smart city. By bridging local safety systems with global wireless networks, we enable safer, more efficient, and fully cooperative transportation.</p>
                <button className="product6-btn product6-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product6;
