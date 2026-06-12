import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product18.css';
import prd18 from "../../../assets/images/prd18.jpg";

const Product18 = () => {
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
    <div className="product18-detail-page">
      <section className="product18-hero" style={{ backgroundImage: `linear-gradient(135deg, rgba(10, 37, 64, 0.9) 0%, rgba(10, 37, 64, 0.7) 100%), url(${prd18})` }}>
        <div className="product18-hero-content">
          <button className="product18-back-btn" onClick={() => navigate('/')}>&larr; Back to Home</button>
          <h1>In-Car Health Monitoring Applications</h1>
          <p>Safety-critical software monitoring driver biometrics, heart rate patterns, eye gaze, and stress indices to detect driver fatigue and medical emergencies.</p>
        </div>
      </section>

      <div className="product18-container">
        <div className="product18-layout">
          {/* Sidebar Table of Contents */}
          <aside className="product18-sidebar">
            <div className="product18-toc-sticky">
              <h3>Navigation</h3>
              <ul className="product18-toc-list">
                {sections.map(sec => (
                  <li key={sec.id}>
                    <button 
                      className={`product18-toc-link ${activeSection === sec.id ? 'active' : ''}`}
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
          <main className="product18-main-content">
            
            <section id="introduction" className="product18-content-section">
              <h2>Introduction</h2>
              <p>Driver fatigue, sudden medical emergencies, and stress are significant factors in highway collisions. Traditional safety systems only react after a vehicle drifts out of its lane or crashes. Our In-Car Health Monitoring Applications platform is an enterprise-grade safety software stack designed to monitor driver biometrics, cognitive focus, and stress in real-time.</p>
              <p>The system utilizes inputs from cabin cameras, steering wheel biometrics, seat-cushion sensors, and wearable devices. By running advanced neural network models on the edge, the platform calculates heart rate variability, respiration cycles, eye blink duration, and stress levels. If fatigue or a medical emergency is detected, the software warns the driver, adjusts vehicle climate, or initiates safe autonomous shoulder stops, preventing accidents.</p>
            </section>

            <section id="key-features" className="product18-content-section">
              <h2>Key Features</h2>
              <div className="product18-feature-grid">
                
                <div className="product18-card">
                  <h3 className="product18-card-title">Dynamic Heart Rate Monitor</h3>
                  <p className="product18-card-desc">Tracks heart rate variability using steering wheel sensors or wearable device integrations.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Driver Fatigue Eye Detector</h3>
                  <p className="product18-card-desc">Monitors cabin camera feeds to analyze blink frequency and eye closure duration.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Respiration Rate Tracker</h3>
                  <p className="product18-card-desc">Estimates driver breathing patterns using steering column and seat vibration sensors.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Cognitive Focus Evaluator</h3>
                  <p className="product18-card-desc">Tracks driver eye gaze and head pose to identify distraction from mobile phones or passenger screens.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Stress Index Analyzer</h3>
                  <p className="product18-card-desc">Fuses heart rate variability and galvanic skin responses to estimate driver stress thresholds.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Emergency Autonomous Stop</h3>
                  <p className="product18-card-desc">Triggers automated parking routines if the driver suffers a medical event (e.g., loss of consciousness).</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Cabin Mood Customization</h3>
                  <p className="product18-card-desc">Adjusts ambient lighting, music tempo, and climate cooling to calm stressed or alert fatigued drivers.</p>
                </div>
                <div className="product18-card">
                  <h3 className="product18-card-title">Wearable Device Data Sync</h3>
                  <p className="product18-card-desc">Connects with user smartwatches to import historical biometric data and baseline health scores.</p>
                </div>
              </div>
            </section>

            <section id="background" className="product18-content-section">
              <h2>Background & Problem Statement</h2>
              <div className="product18-glass-panel">
                <h3 className="product18-panel-heading">Industry Background</h3>
                <p>As commutes grow longer and populations age, the incidence of medical emergencies while driving has increased. Safe driving requires continuous driver attention. However, cabin distractions, sleep apnea, and fatigue cause hundreds of thousands of accidents annually. While ADAS tracks lane boundaries, it cannot detect when a driver is experiencing a heart attack or has fallen asleep. Solving this requires active biometric monitoring systems integrated with vehicle safety controllers.</p>
                <div className="product18-divider"></div>
                <h3 className="product18-panel-heading" style={{color: '#ef4444'}}>The Core Problem</h3>
                <p>Measuring biometrics in a moving vehicle is challenging. Vehicle vibrations, shifting light levels, and varied driver seating positions create noisy inputs. For instance, cabin cameras must track pupils in direct sunlight or dark night settings, while steering sensors must filter out road vibrations. Developers must build lightweight edge networks that process these inputs in real-time, avoiding false alarms while ensuring driver privacy.</p>
              </div>
            </section>

            <section id="functionalities" className="product18-content-section">
              <h2>Core Functionalities</h2>
              <ul className="product18-module-list">
                
                <li className="product18-module-item">
                  <strong>Biometric Ingestion Gateway:</strong> Pipes data from steering wheel sensors, seat arrays, and cabin cameras to the local processor.
                </li>
                <li className="product18-module-item">
                  <strong>Computer Vision Eye Tracker:</strong> Runs facial landmark algorithms to track driver eye gaze, blink rates, and pupil sizes.
                </li>
                <li className="product18-module-item">
                  <strong>Biometric Signal Filter:</strong> Filters road noise and vehicle vibration from raw heartbeat and respiration inputs.
                </li>
                <li className="product18-module-item">
                  <strong>Driver State Classifier:</strong> Uses machine learning to classify driver state (focused, tired, stressed, incapacitated).
                </li>
                <li className="product18-module-item">
                  <strong>Safety Action Manager:</strong> Sends alerts to dashboard clusters and initiates ADAS brakes during critical events.
                </li>
                <li className="product18-module-item">
                  <strong>Cabin Sync Interface:</strong> Coordinates adjustments to climate control, audio, and cabin lighting based on driver stress.
                </li>
              </ul>
            </section>

            <section id="value" className="product18-content-section">
              <h2>How We Deliver Value</h2>
              <p className="product18-highlight-text">Our In-Car Health Monitoring software delivers value by preventing collisions caused by driver fatigue and medical emergencies. It enables passenger car OEMs to achieve higher NCAP safety ratings, protecting passengers. For commercial trucking fleets, the system reduces accident rates, lower insurance premiums, and protects drivers. It provides peace of mind for older drivers and their families, ensuring that the vehicle can respond during a medical crisis.</p>
            </section>

            <section id="workflow" className="product18-content-section">
              <h2>Workflow & Step-by-Step Process</h2>
              <div className="product18-grid-2">
                <div>
                  <h3 className="product18-subheading">Operational Workflow</h3>
                  <div className="product18-workflow-steps">
                    
                    <div className="product18-step">
                      <div className="product18-step-number">1</div>
                      <div className="product18-step-content">
                        <h4>Sensor Capture</h4>
                        <p>Cabin cameras capture facial video, steering sensors read heart rate data, and seat arrays monitor breathing.</p>
                      </div>
                    </div>
                    <div className="product18-step">
                      <div className="product18-step-number">2</div>
                      <div className="product18-step-content">
                        <h4>Biometric Noise Filtering</h4>
                        <p>Edge processors filter out vehicle vibrations and light changes from raw sensor streams.</p>
                      </div>
                    </div>
                    <div className="product18-step">
                      <div className="product18-step-number">3</div>
                      <div className="product18-step-content">
                        <h4>Driver State Classification</h4>
                        <p>Neural networks analyze eye blinks, heart rate patterns, and stress indexes to classify driver health.</p>
                      </div>
                    </div>
                    <div className="product18-step">
                      <div className="product18-step-number">4</div>
                      <div className="product18-step-content">
                        <h4>Cabin Correction</h4>
                        <p>If mild fatigue is detected, the cabin system blows cool air, plays upbeat audio, and warns the driver.</p>
                      </div>
                    </div>
                    <div className="product18-step">
                      <div className="product18-step-number">5</div>
                      <div className="product18-step-content">
                        <h4>Emergency ADAS Stop</h4>
                        <p>If the driver becomes unresponsive, the system alerts surrounding vehicles and brings the car to a safe shoulder stop.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="product18-subheading">Implementation Process</h3>
                  <ul className="product18-process-list">
                    
                    <li>
                      <strong>Phase 1: Position Cabin Cameras</strong>
                      <p>Install infrared cameras on the steering column or rearview mirror to capture the driver's face.</p>
                    </li>
                    <li>
                      <strong>Phase 2: Integrate Biometric Sensors</strong>
                      <p>Embed heart rate and skin response sensors in the steering wheel wrap.</p>
                    </li>
                    <li>
                      <strong>Phase 3: Deploy Edge SDK</strong>
                      <p>Compile and deploy the biometric processing libraries onto the vehicle's interior ECU.</p>
                    </li>
                    <li>
                      <strong>Phase 4: Train Driver Baselines</strong>
                      <p>Have the driver complete basic calibration loops, recording baseline blink and heart rate metrics.</p>
                    </li>
                    <li>
                      <strong>Phase 5: Link ADAS Controllers</strong>
                      <p>Configure CAN/Ethernet routes to allow the health stack to send braking requests to the ADAS processor.</p>
                    </li>
                    <li>
                      <strong>Phase 6: Go Live & Safe Drive</strong>
                      <p>Launch the health monitoring application, tracking driver vitals and warning of fatigue.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="architecture" className="product18-content-section">
              <h2>System Architecture</h2>
              <p>The platform features an embedded, safety-critical architecture running on the vehicle's cockpit controller. Biometric processing and classification models run on edge processors to ensure low latency and driver privacy, with zero biometric data sent to the cloud. Aggregated health reports can be uploaded to cloud databases for fleet logs, while emergency alerts route directly to first responders.</p>
            </section>

            <section id="tech-arch" className="product18-content-section">
              <h2>Technical Architecture</h2>
              <div className="product18-tech-arch-grid">
                
                <div className="product18-tech-card">
                  <span className="product18-tech-label">FRONTEND</span>
                  <p>Dashboard widget built with React, displaying driver focus levels, heart rate metrics, and safety alerts.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">BACKEND</span>
                  <p>Embedded C++ services processing sensor data, coordinating cabin adjustments via CAN/LIN drivers.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">GATEWAY</span>
                  <p>Internal bus controller managing SOME/IP communications over automotive Ethernet.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">PROCESSING</span>
                  <p>Optimized image processing modules running on the GPU/NPU to analyze driver facial parameters.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">AI ML</span>
                  <p>Convolutional neural networks (CNNs) for facial landmark tracking and LSTM networks for predicting fatigue.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">EDGE</span>
                  <p>Highly optimized C++ binaries running directly on cockpit microcontrollers.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">SECURITY</span>
                  <p>Strict data isolation policies, secure boot validations, and cryptographic encryption for driver health logs.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">CLOUD</span>
                  <p>Optional AWS-hosted cloud database storing anonymized fleet health scores and system analytics.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">INTEGRATION</span>
                  <p>Adaptive AUTOSAR interfaces connecting the health stack to ADAS brakes and body control units.</p>
                </div>
                <div className="product18-tech-card">
                  <span className="product18-tech-label">MONITORING</span>
                  <p>Real-time watchdog monitors tracking eye-tracking camera feeds and sensor connections.</p>
                </div>
              </div>
            </section>

            <section id="technologies" className="product18-content-section">
              <h2>Technologies Used</h2>
              <div className="product18-tags-container">
                
                <div className="product18-tag-group">
                  <h4>LANGUAGES</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">C++</span><span className="product18-tag">C</span><span className="product18-tag">Python</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>FRAMEWORKS</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">Adaptive AUTOSAR</span><span className="product18-tag">OpenFace</span><span className="product18-tag">OpenCV</span><span className="product18-tag">PyTorch</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>DATABASES</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">SQLite (local embedded configuration database)</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>CLOUD PLATFORMS</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">AWS</span><span className="product18-tag">Azure (for fleet aggregation databases)</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>AI ML_TOOLS</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">TensorFlow Lite</span><span className="product18-tag">TensorRT (for edge execution)</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>IOT</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">Infrared Cabin Cameras</span><span className="product18-tag">Heart Rate steering grips</span><span className="product18-tag">Seat sensor grids</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>PROTOCOLS</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">CAN</span><span className="product18-tag">SOME/IP</span><span className="product18-tag">HTTPS</span><span className="product18-tag">Bluetooth LE</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>DEVOPS</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">Docker</span><span className="product18-tag">Yocto Project</span><span className="product18-tag">CMake</span><span className="product18-tag">Jenkins</span>
                  </div>
                </div>
                <div className="product18-tag-group">
                  <h4>CYBERSECURITY</h4>
                  <div className="product18-tags">
                    <span className="product18-tag">Local Data Encryption</span><span className="product18-tag">Secure Boot</span><span className="product18-tag">WAF</span><span className="product18-tag">JWT</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="applications" className="product18-content-section">
              <h2>Real-World Applications</h2>
              <div className="product18-feature-grid">
                
                <div className="product18-app-card">
                  <h4>Long-Haul Trucker Fatigue Monitor</h4>
                  <p>Monitored long-haul truck drivers, warning them of fatigue during night shifts and preventing lane drifts.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Elderly Driver Heart Monitor</h4>
                  <p>Tracked heart rate variability in older sedan drivers, alerting passengers during anomalies.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Delivery Van Stress Reduction</h4>
                  <p>Monitored urban delivery drivers, adjusting cabin climate and music to reduce stress in congestion.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Autonomous Shuttle Emergency Stop</h4>
                  <p>Monitored the backup safety driver in an autonomous shuttle, initiating stops during unresponsiveness.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Taxi Fleet Health Tracker</h4>
                  <p>Monitored taxi drivers, logging average shift fatigue and suggesting rest stops.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Heavy Machinery Operator Safety</h4>
                  <p>Tracked dump truck operators at a mining site, preventing accidents due to fatigue.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Public Transit Bus Driver Monitor</h4>
                  <p>Monitored transit bus drivers, warning dispatchers if a driver fell asleep at the wheel.</p>
                </div>
                <div className="product18-app-card">
                  <h4>Commuter Sedan Focus Assist</h4>
                  <p>Identified mobile phone distractions in commuter cars, playing audio alerts to redirect attention.</p>
                </div>
              </div>
            </section>

            <section id="benefits" className="product18-content-section">
              <h2>Benefits & Challenges</h2>
              <div className="product18-grid-2">
                <div className="product18-benefits-box">
                  <h3 className="product18-subheading" style={{color: '#00BFA6'}}>Key Benefits</h3>
                  <ul className="product18-check-list">
                    
                    <li>
                      <strong>Prevented Fatigue Accidents:</strong> Detects driver sleepiness and fatigue early, preventing lane drifts and collisions.
                    </li>
                    <li>
                      <strong>Emergency Medical Action:</strong> Initiates automated parking stops if a driver becomes unconscious, saving lives.
                    </li>
                    <li>
                      <strong>Reduced Driver Stress:</strong> Adjusts cabin environments based on stress indices, improving driver comfort.
                    </li>
                    <li>
                      <strong>Achieves NCAP Safety Ratings:</strong> Helps OEMs meet strict driver monitoring regulations, securing 5-star ratings.
                    </li>
                    <li>
                      <strong>Absolute Driver Privacy:</strong> Processes biometric calculations locally at the edge, preventing location or health leaks.
                    </li>
                  </ul>
                </div>
                <div className="product18-challenges-box">
                  <h3 className="product18-subheading" style={{color: '#ef4444'}}>Challenges Mitigated</h3>
                  <ul className="product18-cross-list">
                    
                    <li>
                      <strong>Varying Driver Features:</strong> Ensuring eye tracking works accurately across different ethnicities, ages, and sunglasses.
                    </li>
                    <li>
                      <strong>Noisy Sensor telemetry:</strong> Filtering out vehicle vibration and bumps from delicate heartbeat and respiration seat grids.
                    </li>
                    <li>
                      <strong>Sudden Light Changes:</strong> Maintaining eye tracking accuracy during rapid transitions (e.g., entering tunnels at speed).
                    </li>
                    <li>
                      <strong>Safety Action Integration:</strong> Designing safe autonomous stopping algorithms that pull the vehicle over without causing crashes.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="future" className="product18-content-section">
              <h2>Future Scope & Industry Impact</h2>
              <div className="product18-glass-panel">
                <h3 className="product18-panel-heading">Future Scope</h3>
                <p>The future of in-car health monitoring lies in non-contact biometric mapping and predictive wellness forecasting. Future vehicles will use radio frequency sensors to monitor the vitals of all passengers simultaneously, adjusting zone climate and seat massagers automatically. AI models will predict onset fatigue hours before it happens, advising drivers on optimal travel schedules. Additionally, integration with virtual telemedicine networks will allow vehicles to connect drivers with doctors during on-road health events.</p>
                <div className="product18-divider"></div>
                <h3 className="product18-panel-heading">Industry Impact</h3>
                <p>This platform turns vehicles into proactive health shields, protecting drivers from their own physical limitations. By integrating biometric insight with vehicle control, it improves transport safety, prevents medical collisions, and shapes the future of driver wellness.</p>
              </div>
            </section>

            <section className="product18-cta-section">
              <div className="product18-cta-card">
                <h2>Ready to Transform Your Automotive Operations?</h2>
                <p>Our In-Car Health Monitoring Applications provide the safety framework required for the connected cabin. By combining edge computer vision with steering and seat biometrics, we help OEMs build vehicles that actively protect their drivers.</p>
                <button className="product18-btn product18-btn-primary" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Product18;
