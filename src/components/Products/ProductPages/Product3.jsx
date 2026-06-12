import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product3.css';
import prd3 from "../../../assets/images/prd3.avif";

const Product3 = () => {
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
    <div className="product3-detail-page">
      <section className="product3-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd3})` }}>
        <div className="product3-hero-content">
          <button className="product3-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>Connected Car Infotainment Platforms</h1>
          <p>Next-generation in-vehicle infotainment (IVI) software providing hyper-personalized digital experiences, voice assistants, and cloud-connected applications.</p>
        </div>
      </section>

      <div className="product3-container">
        <div className="product3-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product3-sidebar">
            <div className="product3-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product3-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product3-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product3-main-content">
            
            <section id="introduction" className="product3-content-section">
              <h2>Introduction</h2>
              <p>The vehicle cabin has become an extension of the consumer's digital life. Modern drivers expect seamless connectivity, personalized streaming media, voice-controlled assistants, and real-time navigation. Our Connected Car Infotainment Platform is an enterprise-grade in-vehicle infotainment (IVI) software stack designed for automotive OEMs. Built on top of Android Automotive OS (AAOS) and optimized Linux distributions, it provides a highly customizable, fluid user interface.</p>
              <p>The platform bridges local vehicle networks with global cloud services, enabling features such as over-the-air (OTA) application updates, personalized profiles linked to driver biometrics, and secure in-car commerce. By leveraging HTML5/Qt for UI layout and a high-performance C++ backend, it allows manufacturers to deliver a branded digital experience that remains responsive under all operating conditions. It interfaces directly with vehicle body controllers via secure gateways, ensuring that climate controls, seating adjustments, and vehicle diagnostics are seamlessly integrated into the multimedia display.</p>
            </section>

            <section id="key-features" className="product3-content-section">
              <h2>Key Features</h2>
              <div className="product3-feature-grid">
                
                <div className="product3-card">
                  <h3 className="product3-card-title">Customizable Multi-Display UI</h3>
                  <p className="product3-card-desc">Drives instrument clusters, center consoles, passenger screens, and head-up displays (HUD) from a single system.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">AI Voice Recognition & Control</h3>
                  <p className="product3-card-desc">Integrates local and cloud-based natural language processing to control climate, media, and navigation hands-free.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">App Ecosystem Support</h3>
                  <p className="product3-card-desc">Supports sandboxed application deployment, enabling third-party developers to build media and parking apps.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">Biometric Driver Profiling</h3>
                  <p className="product3-card-desc">Uses facial recognition or fingerprint scanners to automatically adjust seating, mirrors, and music playlists.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">Connected Navigation Engine</h3>
                  <p className="product3-card-desc">Integrates real-time traffic data, EV charging station status, and parking availability with offline mapping support.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">Secure In-Car Payments</h3>
                  <p className="product3-card-desc">Enables safe, biometric-authenticated payments for tolls, fuel, charging, and drive-through retail directly from the dashboard.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">Smart Home Integration</h3>
                  <p className="product3-card-desc">Connects with IoT smart home hubs, allowing drivers to control home lighting, heating, and security systems from the road.</p>
                </div>
                <div className="product3-card">
                  <h3 className="product3-card-title">Multi-Zone Audio Management</h3>
                  <p className="product3-card-desc">Isolates audio streams for different seats, allowing the driver to hear navigation while passengers stream movies.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product3-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product3-glass-panel">
                <h3 className="product3-panel-heading">Industry Background</h3>
                <p>Historically, in-vehicle infotainment systems were clunky, slow, and outdated by the time a vehicle rolled off the assembly line. Consumer electronics, led by smartphones, set a high standard for screen responsiveness and app updates, which legacy automotive architectures struggled to match. Furthermore, separating safety-critical gauge clusters from multimedia entertainment units was historically difficult. If the music player crashed, the digital speedometer could not go offline. Solving this requires advanced hypervisor virtualization technologies and secure, multi-process operating systems.</p>
                <div className="product3-divider"></div>
                <h3 className="product3-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Automotive manufacturers face intense competition from tech giants providing mobile-mirroring solutions. To retain control over the customer relationship and data, OEMs must build their own connected IVI platforms. However, developing these platforms is challenging due to the need to integrate disparate services, guarantee boot-up speeds (e.g., rear-view camera display in under 2 seconds), and prevent cybersecurity breaches that could compromise vehicle control systems.</p>
              </div>
            </section>

            <section id="functionalities" className="product3-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product3-module-list">
                
                <li className="product3-module-item">
                  <strong>Hypervisor Integration Layer:</strong> Runs Android Automotive OS and deterministic RTOS on a single SoC, ensuring absolute safety isolation for gauge clusters.
                </li>
                <li className="product3-module-item">
                  <strong>Cloud Sync Manager:</strong> Synchronizes user preferences, navigation history, and payment credentials between the vehicle and the user's cloud profile.
                </li>
                <li className="product3-module-item">
                  <strong>Media Engine:</strong> Manages audio routing, hardware-accelerated video decoding, and digital rights management (DRM) for streaming apps.
                </li>
                <li className="product3-module-item">
                  <strong>Connectivity Hub:</strong> Coordinates onboard Wi-Fi, 5G cellular modems, Bluetooth pairings, and NFC touchpoints.
                </li>
                <li className="product3-module-item">
                  <strong>HMI Render Engine:</strong> Executes hardware-accelerated 3D graphics rendering for user interfaces and cluster gauges.
                </li>
                <li className="product3-module-item">
                  <strong>Diagnostics Daemon:</strong> Monitors IVI hardware diagnostics, thermal sensors, and system health, logging telemetry to the cloud.
                </li>
              </ul>
            </section>

            <section id="value" className="product3-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product3-highlight-text">Our Connected Car Infotainment Platform delivers value by helping OEMs regain control of the dashboard experience. By offering a fluid, app-rich environment, it increases customer satisfaction and brand loyalty. The platform opens new, high-margin revenue streams through in-car digital sales, software feature subscriptions (like heated seats or premium sound), and targeted local advertising. It reduces warranty costs by enabling OTA software patches, and its rapid boot time ensures compliance with federal safety regulations for rearview camera displays.</p>
            </section>

            <section id="workflow" className="product3-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product3-grid-2">
                <div>
                  <h3 className="product3-subheading">Operational Workflow</h3>
                  <div className="product3-workflow-steps">
                    
                    <div className="product3-step">
                      <div className="product3-step-number">1</div>
                      <div className="product3-step-content">
                        <h4>Driver Entry & Face Scan</h4>
                        <p>The vehicle cabin camera performs facial recognition, loading the driver's personalized layout and cloud profile.</p>
                      </div>
                    </div>
                    <div className="product3-step">
                      <div className="product3-step-number">2</div>
                      <div className="product3-step-content">
                        <h4>Voice System Initialization</h4>
                        <p>The local voice wake-up model boots up, ready to process wake words offline.</p>
                      </div>
                    </div>
                    <div className="product3-step">
                      <div className="product3-step-number">3</div>
                      <div className="product3-step-content">
                        <h4>Route & Schedule Syncing</h4>
                        <p>The system fetches the driver's calendar and navigation routes, pre-conditioning the battery or cabin temperature.</p>
                      </div>
                    </div>
                    <div className="product3-step">
                      <div className="product3-step-number">4</div>
                      <div className="product3-step-content">
                        <h4>Streaming Media Orchestration</h4>
                        <p>Audio routing engines connect to streaming services and distribute sound to individual vehicle seat zones.</p>
                      </div>
                    </div>
                    <div className="product3-step">
                      <div className="product3-step-number">5</div>
                      <div className="product3-step-content">
                        <h4>Vehicle Interaction & Control</h4>
                        <p>The user controls climate, ADAS settings, and ambient lighting directly from the central touchscreen.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product3-subheading">Implementation Process</h3>
                  <ul className="product3-process-list">
                    
                    <li>
                      <strong>Phase 1: Infotainment Hardware Board Bring-up</strong>
                      <p>Configure bootloaders and drivers on target automotive-grade application processors.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Hypervisor Setup & Partitioning</strong>
                      <p>Set up the hypervisor (e.g., COQOS or QNX) to partition resources between Android OS and the safety cluster.</p>
                    </li>
                    <li>
                      <strong>Phase 3: HMI Design & Theme Implementation</strong>
                      <p>Build custom UI layouts and 3D themes using Qt or HTML5 frameworks to match the OEM's brand identity.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Cloud Services Integration</strong>
                      <p>Establish secure API links for navigation, media streaming, voice assistants, and over-the-air update servers.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Safety and Boot-Time Tuning</strong>
                      <p>Optimize boot scripts to ensure the backup camera displays within the federally mandated time limit.</p>
                    </li>
                    <li>
                      <strong>Phase 6: System Validation & OTA Launch</strong>
                      <p>Perform regression testing, complete security penetration audits, and launch the platform with OTA support.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product3-content-section">
              <h2>System Architecture</h2>
              <p>The platform features a multi-operating-system architecture managed by a Type-1 hypervisor. The safety-critical instrument cluster runs on a microkernel RTOS (such as QNX), while the central infotainment system runs on Android Automotive OS. The two partitions share data via secure virtualized memory links. High-speed 5G connectivity is managed by an independent telematics control unit (TCU), which routes internet traffic to the infotainment core via a local ethernet switch.</p>
            </section>

            <section id="tech-arch" className="product3-content-section">
              <h2>Technical Architecture</h2>
              <div className="product3-tech-arch-grid">
                
                <div className="product3-tech-card">
                  <span className="product3-tech-label">FRONTEND</span>
                  <p>Developed using Qt Quick / QML for highly fluid 60fps animations, integrated with HTML5 web apps running on an optimized Chromium engine.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">BACKEND</span>
                  <p>C++ system services managing media routing, system configuration, and vehicle network communication via CAN/LIN drivers.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">GATEWAY</span>
                  <p>Internal bus controller managing SOME/IP (Scalable service-Oriented MiddlewarE over IP) messages over automotive Ethernet.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">PROCESSING</span>
                  <p>Hardware-accelerated video decoding using GStreamer and audio routing via ALSA / PulseAudio with custom DSP integrations.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">AI ML</span>
                  <p>On-device wake-word detection and basic command parsing using lightweight TensorFlow Lite models running on the SoC DSP.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">EDGE</span>
                  <p>Local caching and sync service storing user data offline, syncing back to cloud databases once internet connection is established.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">SECURITY</span>
                  <p>Hardware-backed storage for payment keys, SELinux policies, containerized sandboxing of third-party apps, and secure boot.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">CLOUD</span>
                  <p>Kubernetes-hosted cloud backend using Node.js and Go to manage user profiles, OTA updates, and app store configurations.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">INTEGRATION</span>
                  <p>Vehicle Integration APIs connecting the IVI to the vehicle body control module (BCM) and powertrain controllers.</p>
                </div>
                <div className="product3-tech-card">
                  <span className="product3-tech-label">MONITORING</span>
                  <p>Continuous health logging via systemd journal, transmitted to cloud diagnostics services like Datadog or custom OEM endpoints.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product3-content-section">
              <h2>Technologies Used</h2>
              <div className="product3-tags-container">
                
                <div className="product3-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">C++</span><span className="product3-tag">Java</span><span className="product3-tag">Kotlin</span><span className="product3-tag">QML</span><span className="product3-tag">JavaScript</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">Android Automotive OS (AAOS)</span><span className="product3-tag">Qt/QML</span><span className="product3-tag">Node.js</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">SQLite (local embedded)</span><span className="product3-tag">MongoDB (cloud profile database)</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">AWS</span><span className="product3-tag">Google Cloud Platform (GCP)</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">TensorFlow Lite</span><span className="product3-tag">Snips voice engine</span><span className="product3-tag">Dialogflow</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>IOT</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">On-board Telematics</span><span className="product3-tag">Smart Home IoT APIs</span><span className="product3-tag">BLE beacons</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">SOME/IP</span><span className="product3-tag">CAN</span><span className="product3-tag">LIN</span><span className="product3-tag">HTTPS</span><span className="product3-tag">WebSockets</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">Docker</span><span className="product3-tag">Yocto Project</span><span className="product3-tag">Jenkins</span><span className="product3-tag">Ansible</span>
                  </div>
                </div>
                <div className="product3-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product3-tags">
                    <span className="product3-tag">SELinux</span><span className="product3-tag">TLS 1.3</span><span className="product3-tag">Tokenized Payments</span><span className="product3-tag">OAuth 2.0</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product3-content-section">
              <h2>Real-World Applications</h2>
              <div className="product3-feature-grid">
                
                <div className="product3-app-card">
                  <h4>Luxury Sedan Infotainment</h4>
                  <p>Powers triple-display setups in high-end sedans, integrating digital clusters, center consoles, and rear screens.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Electric SUV Route Optimization</h4>
                  <p>Deploys in electric SUVs, automatically scheduling charging stops and cabin pre-heating based on navigation plans.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Fleet Delivery Van Infotainment</h4>
                  <p>Customized for delivery vans, showing route logs, cargo hold temperatures, and providing hands-free dispatch messaging.</p>
                </div>
                <div className="product3-app-card">
                  <h4>In-Car Commerce Integration</h4>
                  <p>Enabled instant touch-to-pay fuel dispensing and toll collections across a nationwide gas station network.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Car-Sharing Service UI</h4>
                  <p>Integrated into shared urban vehicles, showing local guide tips, unlocking via NFC, and loading guest profiles.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Off-Road Vehicle Gauges</h4>
                  <p>Provides specialized 3D pitch-and-roll indicators, topographical maps, and winch controls on rugged off-road dashboards.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Kid-Friendly Rear Seat Entertainment</h4>
                  <p>Drives dual headrest screens with individual headphone zones, gaming controls, and parental filters.</p>
                </div>
                <div className="product3-app-card">
                  <h4>Public Shuttle Passenger Informational Display</h4>
                  <p>Powers large public shuttle displays, showing routes, weather, local advertising, and estimated arrival times.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product3-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product3-grid-2">
                <div className="product3-benefits-box">
                  <h3 className="product3-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product3-check-list">
                    
                    <li>
                      <strong>Smartphone-Like Fluidity:</strong> Delivers smooth 60fps user interfaces with instant touch response and rapid application launching.
                    </li>
                    <li>
                      <strong>Branded Digital Identity:</strong> Allows OEMs to design bespoke visual layouts and voice assistants, retaining full ownership of customer data.
                    </li>
                    <li>
                      <strong>Recurring Revenue Streams:</strong> Enables in-car app purchases, feature subscriptions, and localized advertising opportunities.
                    </li>
                    <li>
                      <strong>Reduced Recall Costs:</strong> Resolves software issues and adds features remotely over-the-air, eliminating dealership visits.
                    </li>
                    <li>
                      <strong>Regulatory Compliance:</strong> Guarantees rapid boot-times for backup camera rendering, meeting strict national transport safety rules.
                    </li>
                  </ul>
                </div>
                <div className="product3-challenges-box">
                  <h3 className="product3-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product3-cross-list">
                    
                    <li>
                      <strong>Strict Boot-Time Limits:</strong> Rearview camera feeds must display within 2 seconds of boot, requiring intensive kernel optimization.
                    </li>
                    <li>
                      <strong>Safety-Critical Isolation:</strong> Preventing malware from the multimedia side from crossing over to critical vehicle control networks.
                    </li>
                    <li>
                      <strong>Fragile Network Connections:</strong> Ensuring streaming media and navigation remain functional in tunnels or poor signal rural areas.
                    </li>
                    <li>
                      <strong>Extreme Thermal Operation:</strong> IVI hardware must operate reliably in temperatures ranging from -40°C to +85°C without active cooling.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product3-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product3-glass-panel">
                <h3 className="product3-panel-heading">Future Scope</h3>
                <p>The future of connected car infotainment will be defined by augmented reality interfaces and generative AI assistants. We are building systems that integrate with passenger glasses and smart windshields to project navigation overlays directly onto the road. Generative AI assistants will hold context-aware conversations, acting as local travel guides and troubleshooting vehicle maintenance issues dynamically. Additionally, the integration of gaming platforms will allow passengers to stream triple-A games directly to high-resolution displays, transforming the vehicle cabin into a mobile gaming lounge during autonomous journeys.</p>
                <div className="product3-divider"></div>
                <h3 className="product3-panel-heading">Industry Impact</h3>
                <p>This platform redefines the relationship between drivers and their vehicles, turning cars into digital living spaces. By integrating cloud services with vehicle telemetry, it allows manufacturers to provide ongoing value throughout the vehicle's lifespan. It drives the adoption of in-car commerce and shapes the future of digital content consumption on the move.</p>
              </div>
            </section>

            <section className="product3-cta-section">
              <div className="product3-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our Connected Car Infotainment Platform offers a secure, scalable, and premium solution for the modern connected cockpit. By combining the flexibility of Android Automotive OS with strict safety-critical isolation, we enable OEMs to deliver the ultimate digital experience to their customers.</p>
                <button className="product3-btn product3-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product3;
