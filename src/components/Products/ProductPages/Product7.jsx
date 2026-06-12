import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product7.css';
import prd7 from "../../../assets/images/prd7.jpg";

const Product7 = () => {
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
    <div className="product7-detail-page">
      <section className="product7-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd7})` }}>
        <div className="product7-hero-content">
          <button className="product7-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Automotive Cybersecurity Solutions</h1>
          <p>Intrusion detection and prevention system (IDPS) safeguarding vehicle networks, ECUs, and OTA update pipelines from remote cyber threats.</p>
        </div>
      </section>

      <div className="product7-container">
        <div className="product7-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product7-sidebar">
            <div className="product7-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product7-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product7-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product7-main-content">
            
            <section id="introduction" className="product7-content-section">
              <h2>Introduction</h2>
              <p>As vehicles become connected, software-defined, and autonomous, they also become targets for cyberattacks. Modern cars run over 100 million lines of code across dozens of Electronic Control Units (ECUs) connected via internal networks. A vulnerability in an infotainment system or a telematics unit can allow remote hackers to send unauthorized steering or braking commands, creating critical safety risks. Our Automotive Cybersecurity Solutions platform is an enterprise-grade cybersecurity suite designed to protect vehicle architectures, internal networks, and cloud update pipelines.</p>
              <p>The platform features an embedded Intrusion Detection and Prevention System (IDPS) that monitors the internal CAN bus and Automotive Ethernet traffic in real-time. Using advanced machine learning models optimized for microcontrollers, the software detects anomalies, blocks unauthorized messages, and alerts the vehicle manufacturer's Security Operations Center (vSOC). The solution conforms strictly to ISO/SAE 21434 standards and UNECE WP.29 regulations, ensuring compliance for global markets.</p>
            </section>

            <section id="key-features" className="product7-content-section">
              <h2>Key Features</h2>
              <div className="product7-feature-grid">
                
                <div className="product7-card">
                  <h3 className="product7-card-title">Real-Time CAN Bus IDPS</h3>
                  <p className="product7-card-desc">Monitors CAN bus traffic for message anomalies, injected frames, and timing violations, blocking malicious messages instantly.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Automotive Ethernet Firewall</h3>
                  <p className="product7-card-desc">Filters SOME/IP and TCP/IP packets to prevent unauthorized access to safety-critical ECUs.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Secure Onboard Communication (SecOC)</h3>
                  <p className="product7-card-desc">Integrates message authentication codes (MAC) to verify the authenticity of critical control commands.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Hardware Security Module (HSM) Client</h3>
                  <p className="product7-card-desc">Interfaces with silicon-level HSMs to manage secure key storage, cryptographic signatures, and secure boot cycles.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">vSOC Cloud Dashboard Integration</h3>
                  <p className="product7-card-desc">Transmits real-time security alerts and audit logs to the manufacturer's security operations center.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Anomalous Diagnostic Detection</h3>
                  <p className="product7-card-desc">Detects unauthorized attempts to flash ECU firmware via OBD-II ports or wireless diagnostic paths.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Secure OTA Update Manager</h3>
                  <p className="product7-card-desc">Cryptographically verifies firmware updates, ensuring code integrity and preventing middleman attacks.</p>
                </div>
                <div className="product7-card">
                  <h3 className="product7-card-title">Automated Threat Intel Sharing</h3>
                  <p className="product7-card-desc">Updates vehicle firewall rules dynamically to protect against newly discovered exploits in the field.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product7-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product7-glass-panel">
                <h3 className="product7-panel-heading">Industry Background</h3>
                <p>Modern automotive architectures were originally designed for closed environments, where physical access was required to communicate with vehicle modules. The CAN bus protocol does not have built-in authentication or encryption, meaning any message sent on the bus is trusted by default. However, modern vehicles feature cellular links, Wi-Fi, Bluetooth, and V2X connections. If an attacker gains access to a connected module, they can broadcast malicious messages across the vehicle network. Securing these architectures requires active, real-time monitoring and cryptographic verification of all internal communications.</p>
                <div className="product7-divider"></div>
                <h3 className="product7-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Automotive cybersecurity must operate without impacting safety-critical latency. Safety messages on CAN networks must be processed in microseconds, meaning heavy, slow encryption algorithms cannot be used. Additionally, vehicles have long lifespans (10-15 years), meaning security software must be capable of adapting to new threats over time. Developers need a platform that integrates into low-power ECUs, complies with strict safety standards, and updates security rules remotely.</p>
              </div>
            </section>

            <section id="functionalities" className="product7-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product7-module-list">
                
                <li className="product7-module-item">
                  <strong>Embedded Network Monitor:</strong> Inspects frame IDs, payloads, and transmission intervals on internal CAN and Ethernet networks.
                </li>
                <li className="product7-module-item">
                  <strong>Anomaly Detection Engine:</strong> Uses lightweight statistical models to identify unauthorized diagnostics, brute-force keys, or out-of-sequence commands.
                </li>
                <li className="product7-module-item">
                  <strong>Stateful Firewall Module:</strong> Enforces communication rules between different vehicle sub-networks, isolating infotainment from braking zones.
                </li>
                <li className="product7-module-item">
                  <strong>Cryptographic Manager:</strong> Coordinates key exchange, decryption, and validation of incoming control messages.
                </li>
                <li className="product7-module-item">
                  <strong>Audit Log Collector:</strong> Generates secure, tamper-proof logs of all security incidents, storing them in encrypted flash memory.
                </li>
                <li className="product7-module-item">
                  <strong>OTA Verification Agent:</strong> Validates digital signatures of incoming update packages before allowing the bootloader to execute flashes.
                </li>
              </ul>
            </section>

            <section id="value" className="product7-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product7-highlight-text">Our Automotive Cybersecurity platform delivers value by protecting vehicles and passengers from potentially life-threatening remote attacks. It ensures that OEMs comply with global regulations (such as UNECE R155/R156), avoiding vehicle sales blocks in major markets. The system's low resource footprint prevents ECU performance degradation, preserving safety-critical reaction times. By integrating with a centralized vSOC, it allows manufacturers to identify, analyze, and patch security vulnerabilities across millions of vehicles in real-time, preventing large-scale fleet hacks.</p>
            </section>

            <section id="workflow" className="product7-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product7-grid-2">
                <div>
                  <h3 className="product7-subheading">Operational Workflow</h3>
                  <div className="product7-workflow-steps">
                    
                    <div className="product7-step">
                      <div className="product7-step-number">1</div>
                      <div className="product7-step-content">
                        <h4>Traffic Inspection</h4>
                        <p>The IDPS agent continuously monitors CAN frames and Ethernet packets flowing across the vehicle gateway.</p>
                      </div>
                    </div>
                    <div className="product7-step">
                      <div className="product7-step-number">2</div>
                      <div className="product7-step-content">
                        <h4>Anomaly Scoring</h4>
                        <p>The local detection engine evaluates the messages against baseline timing and payload profiles.</p>
                      </div>
                    </div>
                    <div className="product7-step">
                      <div className="product7-step-number">3</div>
                      <div className="product7-step-content">
                        <h4>Intrusion Mitigation</h4>
                        <p>If an anomaly is detected, the firewall blocks the message or resets the compromised bus transceiver.</p>
                      </div>
                    </div>
                    <div className="product7-step">
                      <div className="product7-step-number">4</div>
                      <div className="product7-step-content">
                        <h4>Log Encryption & Storage</h4>
                        <p>An audit log of the threat is cryptographically sealed and saved to secure on-board storage.</p>
                      </div>
                    </div>
                    <div className="product7-step">
                      <div className="product7-step-number">5</div>
                      <div className="product7-step-content">
                        <h4>vSOC Alert Transmission</h4>
                        <p>The telematics module uploads the threat logs to the cloud vSOC, triggering fleet-wide vulnerability analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product7-subheading">Implementation Process</h3>
                  <ul className="product7-process-list">
                    
                    <li>
                      <strong>Phase 1: Network Architecture Review</strong>
                      <p>Audit the vehicle's ECU network configuration and identify potential access routes and attack vectors.</p>
                    </li>
                    <li>
                      <strong>Phase 2: IDPS Deployment</strong>
                      <p>Integrate the IDPS code libraries into the gateway ECU's AUTOSAR software stack.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Baseline Communication Profile</strong>
                      <p>Record network traffic during extensive track testing to establish a baseline of normal communication.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Configure Firewall Rules</strong>
                      <p>Define access control lists (ACLs) to block unauthorized communications between sub-networks.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Cybersecurity Validation Testing</strong>
                      <p>Perform penetration testing and simulated attacks to verify that the IDPS blocks malicious payloads.</p>
                    </li>
                    <li>
                      <strong>Phase 6: vSOC Launch</strong>
                      <p>Connect the vehicle fleet to the cloud security operations center, enabling live threat monitoring and OTA security updates.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product7-content-section">
              <h2>System Architecture</h2>
              <p>The cybersecurity system is divided into two parts: an embedded software client running on vehicle gateways, and a cloud-based Security Operations Center. The embedded client runs directly inside the AUTOSAR operating system, utilizing the hardware security module (HSM) for cryptography. The cloud platform uses streaming analytics to ingest threat reports from millions of vehicles, using machine learning to detect coordinated attacks against specific vehicle models.</p>
            </section>

            <section id="tech-arch" className="product7-content-section">
              <h2>Technical Architecture</h2>
              <div className="product7-tech-arch-grid">
                
                <div className="product7-tech-card">
                  <span className="product7-tech-label">FRONTEND</span>
                  <p>Enterprise vSOC dashboard built with React and D3.js, featuring real-time geographic maps of threat alerts and firmware patch status.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">BACKEND</span>
                  <p>High-throughput cloud services developed in Go and Python, hosted on AWS to aggregate and analyze vehicle security reports.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">GATEWAY</span>
                  <p>Secured NGINX gateway validating incoming telematics messages and managing secure connections to the vSOC.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">PROCESSING</span>
                  <p>Apache Kafka event streaming combined with Elasticsearch to index and search millions of vehicle threat logs.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">AI ML</span>
                  <p>Gradient boosting anomaly detection models trained in the cloud and compiled into lightweight C code for edge execution.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">EDGE</span>
                  <p>Highly optimized C code library conforming to MISRA C standards, compiled for automotive microcontrollers.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">SECURITY</span>
                  <p>Hardware security module (HSM) managing secure boot keys, executing cryptographic functions, and storing secrets.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">CLOUD</span>
                  <p>AWS infrastructure leveraging Amazon DynamoDB for live threat status and Amazon S3 for long-term log storage.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">INTEGRATION</span>
                  <p>Adaptive AUTOSAR SecOC and Crypto Stack integrations, interfacing with ECU bootloaders and gateway controllers.</p>
                </div>
                <div className="product7-tech-card">
                  <span className="product7-tech-label">MONITORING</span>
                  <p>Real-time CPU and memory monitoring for IDPS agents, combined with automated security alerts via Slack/Email.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product7-content-section">
              <h2>Technologies Used</h2>
              <div className="product7-tags-container">
                
                <div className="product7-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">C</span><span className="product7-tag">C++</span><span className="product7-tag">Go</span><span className="product7-tag">Python</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">AUTOSAR Classic</span><span className="product7-tag">Adaptive AUTOSAR</span><span className="product7-tag">TensorRT</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">InfluxDB</span><span className="product7-tag">PostgreSQL</span><span className="product7-tag">Amazon DynamoDB</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">AWS</span><span className="product7-tag">Azure</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">Scikit-learn (for anomaly profiling)</span><span className="product7-tag">TensorFlow</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>IOT</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">Gateway ECUs</span><span className="product7-tag">Telematics Control Units</span><span className="product7-tag">Automotive HSMs</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">CAN</span><span className="product7-tag">CAN FD</span><span className="product7-tag">SOME/IP</span><span className="product7-tag">DoIP</span><span className="product7-tag">MQTT over TLS</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">Docker</span><span className="product7-tag">Kubernetes</span><span className="product7-tag">Terraform</span><span className="product7-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product7-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product7-tags">
                    <span className="product7-tag">ISO 21434</span><span className="product7-tag">UNECE R155</span><span className="product7-tag">SecOC</span><span className="product7-tag">HSM</span><span className="product7-tag">PKI</span><span className="product7-tag">AES-128</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product7-content-section">
              <h2>Real-World Applications</h2>
              <div className="product7-feature-grid">
                
                <div className="product7-app-card">
                  <h4>Telematics Unit Remote Attack Blocking</h4>
                  <p>Blocked a simulated buffer overflow attack targeting a vehicle's cellular modem, preventing access to the CAN network.</p>
                </div>
                <div className="product7-app-card">
                  <h4>OBD-II Dongle Anomaly Detection</h4>
                  <p>Detected and blocked unauthorized CAN messages injected by a rogue OBD-II diagnostic tool, avoiding engine shutdown.</p>
                </div>
                <div className="product7-app-card">
                  <h4>Infotainment Zone Isolation</h4>
                  <p>Isolated a compromised infotainment system, preventing it from sending steering commands over the gateway.</p>
                </div>
                <div className="product7-app-card">
                  <h4>OTA Update Integrity Check</h4>
                  <p>Prevented a fake over-the-air firmware update containing malicious code from executing on the engine ECU.</p>
                </div>
                <div className="product7-app-card">
                  <h4>Brute-Force Key Blocking</h4>
                  <p>Detected and blocked a brute-force attack attempting to crack the cryptographic key of a vehicle's smart lock system.</p>
                </div>
                <div className="product7-app-card">
                  <h4>Logistics Fleet Intrusion Tracking</h4>
                  <p>Monitored a fleet of 500 delivery trucks, flagging anomalous network traffic caused by unauthorized GPS trackers.</p>
                </div>
                <div className="product7-app-card">
                  <h4>Autonomous Vehicle perception sensor protect</h4>
                  <p>Protected an autonomous vehicle's LiDAR data pipeline from a coordinate-spoofing attack.</p>
                </div>
                <div className="product7-app-card">
                  <h4>vSOC Alert Dashboard Deployment</h4>
                  <p>Connected 50,000 passenger vehicles to a central vSOC, identifying an exploit attempt on a specific ECU variant.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product7-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product7-grid-2">
                <div className="product7-benefits-box">
                  <h3 className="product7-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product7-check-list">
                    
                    <li>
                      <strong>Remote Exploit Prevention:</strong> Blocks remote hackers from sending safety-critical steering or braking commands, protecting lives.
                    </li>
                    <li>
                      <strong>Regulatory WP.29 Compliance:</strong> Ensures compliance with international UNECE R155/R156 standards, enabling vehicle sales in Europe and Asia.
                    </li>
                    <li>
                      <strong>Microsecond Latency Monitoring:</strong> Monitors internal networks in real-time without introducing lag to critical safety communications.
                    </li>
                    <li>
                      <strong>Fleet-Wide Threat Visibility:</strong> Allows OEMs to identify and patch security vulnerabilities across millions of vehicles remotely via the cloud vSOC.
                    </li>
                    <li>
                      <strong>Secured OTA Update Pipeline:</strong> Guarantees firmware integrity and authenticity, preventing unauthorized code deployment.
                    </li>
                  </ul>
                </div>
                <div className="product7-challenges-box">
                  <h3 className="product7-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product7-cross-list">
                    
                    <li>
                      <strong>Power-Constrained Microcontrollers:</strong> Running security checks on low-frequency ECUs without exceeding CPU and memory limits.
                    </li>
                    <li>
                      <strong>Zero Latency Tolerances:</strong> Securing time-critical safety messages on CAN networks without introducing network delay.
                    </li>
                    <li>
                      <strong>Long Lifespan Threat Updates:</strong> Maintaining security and updating firewall rules over the vehicle's 15-year lifecycle.
                    </li>
                    <li>
                      <strong>False-Positive Risk Mitigation:</strong> Ensuring that the security software does not block legitimate safety messages due to false alerts.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product7-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product7-glass-panel">
                <h3 className="product7-panel-heading">Future Scope</h3>
                <p>The future of automotive cybersecurity lies in Artificial Intelligence and decentralized security swarms. We are developing federated learning models that allow vehicles to detect and analyze new exploits locally, sharing threat insights with the rest of the fleet without sending raw data to the cloud. Additionally, post-quantum cryptographic algorithms will be integrated into future ECU designs to protect against decryption attacks by future quantum systems. We are also building security layers for cooperative autonomous vehicle networks, ensuring V2V communication routes are verified.</p>
                <div className="product7-divider"></div>
                <h3 className="product7-panel-heading">Industry Impact</h3>
                <p>This platform is crucial for the future of connected mobility, as it provides the security foundation necessary to build public trust in autonomous vehicles. By protecting vehicles from remote exploits, it enables OEMs to confidently launch software-defined features and connected services, securing the future of smart transportation networks.</p>
              </div>
            </section>

            <section className="product7-cta-section">
              <div className="product7-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Automotive Cybersecurity Solutions platform delivers the security framework required for the software-defined vehicle era. By combining embedded IDPS networks with cloud-based security analytics, we help manufacturers protect their vehicles, comply with global regulations, and ensure driver safety.</p>
                <button className="product7-btn product7-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product7;
