const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'product_data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const products6to10 = {
  p6: {
    id: 6,
    title: "Vehicle-to-Everything (V2X) Communication Platforms",
    shortSummary: "Secure, low-latency communication middleware connecting vehicles with other vehicles, infrastructure, pedestrians, and the cloud (V2V, V2I, V2P, V2N).",
    intro: [
      "Real-world automotive safety and intelligent transit depend on the ability of vehicles to exchange information with their surroundings. Vehicle-to-Everything (V2X) communication technology enables vehicles to broadcast and receive safety-critical messages in real-time, even in non-line-of-sight conditions. Our V2X Communication Platform is an enterprise-grade middleware software stack designed for automotive OEMs, roadside infrastructure developers, and traffic authorities.",
      "The platform supports both cellular V2X (C-V2X) and Dedicated Short-Range Communications (DSRC) protocols. By providing ultra-low latency data transmission (sub-10 milliseconds), the software enables critical collision avoidance applications such as forward collision warning, intersection movement assist, and emergency brake light alerts. The system features advanced hardware-backed security, utilizing security credential management systems (SCMS) to cryptographically sign and verify every message, ensuring absolute protection against hacking and spoofing."
    ],
    features: [
      { title: "Multi-Protocol Connectivity Support", desc: "Integrates with both 3GPP Cellular V2X (PC5 interface) and IEEE 802.11p (DSRC) physical communication layers." },
      { title: "Low-Latency Cooperative Awareness", desc: "Transmits and receives Cooperative Awareness Messages (CAM) at 10Hz frequency with latency under 10 milliseconds." },
      { title: "Intersection Safety Warnings", desc: "Calculates intersection crash risks by analyzing incoming position reports from surrounding vehicles." },
      { title: "Roadside Unit (RSU) Integration", desc: "Interfaces with smart roadside units to receive Signal Phase and Timing (SPaT) and Map Data (MAP) broadcasts." },
      { title: "V2P Pedestrian Collision Shield", desc: "Monitors mobile phone GPS coordinates from pedestrians to alert drivers of hidden pedestrian crossings." },
      { title: "Platooning Control Engine", desc: "Enables heavy-duty trucks to coordinate acceleration and braking wirelessly, reducing aerodynamic drag and fuel consumption." },
      { title: "SCMS Credential Management", desc: "Automates the rotation of cryptographic pseudonymous certificates to prevent vehicle tracking while ensuring message authenticity." },
      { title: "V2N Cloud Telematics Sync", desc: "Interfaces with cellular networks (Uu interface) to transmit system telemetry and download local weather alerts." }
    ],
    background: "Modern driving safety systems rely primarily on vehicle-mounted line-of-sight sensors like cameras, radars, and LiDARs. However, these sensors cannot see through large trucks, around blind corners, or during dense fog. V2X communications overcome these limitations by allowing vehicles to share their speed, acceleration, steering angle, and braking status directly with surrounding cars and infrastructure. For instance, a vehicle braking heavily around a blind bend can notify incoming traffic before it becomes visible, giving drivers time to respond. Establishing this cooperative network requires highly secure, standard-compliant communication layers.",
    problem: "Developing V2X applications is complex due to strict latency and security requirements. Fusing local sensor tracks with wireless messages requires precise spatial-temporal alignment. Additionally, the system must process hundreds of messages per second from surrounding vehicles in dense traffic without overloading the vehicle's ECU. Furthermore, preventing malicious actors from sending fake traffic data to cause accidents requires high-speed cryptographic signing and verification capabilities.",
    functionalities: [
      { title: "V2X Message Router", desc: "Directs incoming messages to corresponding safety applications while managing queue priorities for collision alerts." },
      { title: "Cryptographic Verification Accelerator", desc: "Offloads ECC signature checks to hardware security modules, verifying up to 1,000 incoming messages per second." },
      { title: "Spatial-Temporal Alignment Module", desc: "Synchronizes vehicle position reports from wireless messages with local GPS and IMU coordinate frames." },
      { title: "Local Dynamic Map (LDM)", desc: "Maintains a real-time database of all local vehicles, obstacles, signs, and traffic light statuses in the vicinity." },
      { title: "SPaT Logic Parser", desc: "Interprets traffic light timing signals, computing optimal speeds for drivers to pass intersections without stopping." },
      { title: "Certificate Rotation Daemon", desc: "Rotates security certificates daily to protect driver privacy from location tracking." }
    ],
    valueDelivery: "Our V2X platform delivers value by enhancing vehicle safety beyond the limits of local sensors. It reduces multi-vehicle collisions by up to 80% by providing early warnings of hazards. For commercial truck fleets, the platooning module cuts fuel costs by up to 12% through aerodynamic vehicle spacing. It allows OEMs to prepare their vehicles for Level 4 autonomous driving, where cooperative perception is mandatory, and provides municipal authorities with real-time traffic data to optimize signal timings.",
    workflow: [
      { step: 1, title: "Sensor Capture & Packaging", desc: "Vehicle speed, heading, and brake status are captured from the CAN bus and packaged into a Basic Safety Message (BSM)." },
      { step: 2, title: "Message Signing", desc: "The hardware security module signs the BSM payload with a pseudonymous certificate to prove authenticity." },
      { step: 3, title: "Wireless Broadcast", desc: "The V2X transceiver broadcasts the signed BSM over the 5.9GHz frequency band." },
      { step: 4, title: "Message Reception & Verification", desc: "Surrounding vehicles receive the packet, verify the cryptographic signature, and parse the payload." },
      { step: 5, title: "Collision Threat Assessment", desc: "The local threat engine compares the remote vehicle's trajectory with its own, triggering alerts if collision risks are detected." }
    ],
    process: [
      { step: 1, title: "Select V2X Silicon", desc: "Select and configure the target V2X chipset (e.g., Qualcomm 9150 or Autotalks Craton2) on the telematics board." },
      { step: 2, title: "Install Software Middleware", desc: "Compile and deploy our V2X middleware stack onto the target telematics ECU." },
      { step: 3, title: "Configure SCMS Credentials", desc: "Connect the system to an authorized SCMS provider to download initial certificate batches." },
      { step: 4, title: "Integrate CAN Interface", desc: "Configure CAN/LIN routing to feed vehicle speed, steering angle, and braking states to the V2X stack." },
      { step: 5, title: "Perform HIL Validation", desc: "Run Hardware-in-the-Loop tests using RF simulators to verify message handling under dense traffic conditions." },
      { step: 6, title: "Conducted Field Tests", desc: "Perform road trials past connected infrastructure to verify SPaT warnings and V2V warning accuracy." }
    ],
    architecture: "The V2X platform is designed as an embedded middleware layer running on top of an automotive Real-Time Operating System. It acts as an intermediary between the V2X wireless radio chipset and the vehicle's ADAS and central display controllers. Security operations are segregated in a secure cryptoprocessor, ensuring that cryptographic keys are never exposed to the application layer. Telemetry is fed in real-time to a Local Dynamic Map (LDM) database, which provides a unified interface for safety applications to query the surrounding traffic state.",
    techArch: {
      frontend: "An engineering diagnostics app built with React and WebGL, showing a real-time overhead radar-like view of nearby vehicles and active V2X alerts.",
      backend: "C++ system services executing the V2X protocol stacks (IEEE 1609.x / ETSI ITS-G5) with microsecond latency.",
      gateway: "Internal communications handled by DDS middleware, providing publish-subscribe routes for ADAS integration.",
      processing: "Optimized packet serialization and deserialization modules utilizing Google Protocol Buffers for internal messages.",
      ai_ml: "Trajectory forecasting models running locally to predict whether surrounding V2X-equipped vehicles are planning lane changes.",
      edge: "Highly optimized embedded binary compiled with gcc-arm, running directly on telematics control units (TCUs).",
      security: "Hardware security module (HSM) storing private keys, executing ECDSA message signing, and verifying certificates.",
      cloud: "AWS-hosted cloud services managing SCMS configurations, CRL (Certificate Revocation List) updates, and telematics ingestion.",
      integration: "Standardized AUTOSAR V2X interfaces, providing simple APIs for dashboard alert screens and ADAS brakes.",
      monitoring: "Syslog diagnostic loggers monitoring packet loss, latency, and GPS drift, reporting status to the main vehicle cluster."
    },
    technologies: {
      languages: "C++, C, Python",
      frameworks: "Adaptive AUTOSAR, ETSI TC ITS, IEEE 1609 Stack",
      databases: "SQLite (local LDM), Redis",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow Lite (for behavior modeling)",
      iot: "C-V2X Transceivers, Smart Roadside Units, High-Precision GNSS",
      protocols: "PC5, DSRC, ASN.1 encoding, SOME/IP, MQTT",
      devops: "Docker, Yocto Project, CMake, Jenkins",
      cybersecurity: "IEEE 1609.2 Security, SCMS, ECDSA, HSM"
    },
    realWorld: [
      { title: "Cooperative Intersection Movement Assist", desc: "Implemented in a municipal shuttle fleet, preventing blind-spot collisions at uncontrolled urban intersections." },
      { title: "Highway Truck Platooning", desc: "Deploys in shipping fleets, keeping three semi-trucks at 15-meter gaps wirelessly, saving fuel." },
      { title: "Roadside Hazard Alert System", desc: "Integrates roadside units with construction equipment, warning incoming V2X cars of active roadwork ahead." },
      { title: "Emergency Vehicle Clearing", desc: "Links police cruisers with city traffic light signals, securing green lights dynamically along response routes." },
      { title: "Connected EV Eco-Routing", desc: "Links electric vehicles with city SPaT data, calculating target speeds to avoid stop-and-go energy loss." },
      { title: "Pedestrian Collision Alert App", desc: "Fuses mobile phone GPS tracking with vehicle V2X receivers, warning drivers of pedestrians in crosswalks." },
      { title: "Railroad Crossing Warning System", desc: "Broadcasts train approach telemetry to surrounding vehicles, preventing collisions at rural crossings." },
      { title: "Dynamic Speed Limit Advisory", desc: "Updates vehicles on changing highway speed limits automatically via V2I roadside alerts." }
    ],
    benefits: [
      { title: "Beyond-Line-of-Sight Safety", desc: "Warns drivers of accidents and braking events occurring blocks away or behind large obstacles." },
      { title: "Reduced Fuel Consumption", desc: "Optimizes speed to match traffic light cycles, minimizing stopping and saving fuel." },
      { title: "Scalable ADAS Enhancement", desc: "Serves as an extra, virtual sensor, increasing the reliability of vehicle perception pipelines." },
      { title: "Absolute Security Certification", desc: "Cryptographically signs all data, preventing remote vehicle hacking and data spoofing." },
      { title: "Enables Safe Truck Platooning", desc: "Maintains close following distances with microsecond response times, cutting fleet fuel bills." }
    ],
    challenges: [
      { title: "Market Penetration Dependency", desc: "V2X safety benefits require a high percentage of vehicles on the road to be equipped with the technology." },
      { title: "Spectrum Allocation Disputes", desc: "Regulatory shifts in frequency bands between C-V2X and Wi-Fi creates global deployment uncertainties." },
      { title: "Crypto Verification Bottlenecks", desc: "Verifying hundreds of signatures per second can overwhelm ECUs in high-density urban zones." },
      { title: "Privacy Concerns", desc: "Ensuring that pseudonymous certificates cannot be tracked by third-party receivers to trace routes." }
    ],
    future: "The future of V2X lies in Cooperative Maneuver Planning. Instead of just sharing position and speed, vehicles will negotiate driving trajectories dynamically over wireless channels. For instance, two cars arriving at a merge lane will coordinate their acceleration profiles to merge seamlessly without braking. Integration with satellite constellation connectivity will extend V2X communication coverage to remote desert and mountain areas. We are also developing models to broadcast road traction metrics dynamically, warning trailing vehicles of local black ice segments.",
    impact: "This technology changes driving from an individual, reactive task into a collaborative, optimized system. By connecting cars with infrastructure and other road users, V2X eliminates gridlock, prevents multi-car pileups, and provides the cooperative framework necessary for safe, full-scale driverless transit.",
    conclusion: "Our Vehicle-to-Everything (V2X) Communication Platform provides the secure, ultra-low latency middleware required to connect vehicles with the modern smart city. By bridging local safety systems with global wireless networks, we enable safer, more efficient, and fully cooperative transportation."
  },
  p7: {
    id: 7,
    title: "Automotive Cybersecurity Solutions",
    shortSummary: "Intrusion detection and prevention system (IDPS) safeguarding vehicle networks, ECUs, and OTA update pipelines from remote cyber threats.",
    intro: [
      "As vehicles become connected, software-defined, and autonomous, they also become targets for cyberattacks. Modern cars run over 100 million lines of code across dozens of Electronic Control Units (ECUs) connected via internal networks. A vulnerability in an infotainment system or a telematics unit can allow remote hackers to send unauthorized steering or braking commands, creating critical safety risks. Our Automotive Cybersecurity Solutions platform is an enterprise-grade cybersecurity suite designed to protect vehicle architectures, internal networks, and cloud update pipelines.",
      "The platform features an embedded Intrusion Detection and Prevention System (IDPS) that monitors the internal CAN bus and Automotive Ethernet traffic in real-time. Using advanced machine learning models optimized for microcontrollers, the software detects anomalies, blocks unauthorized messages, and alerts the vehicle manufacturer's Security Operations Center (vSOC). The solution conforms strictly to ISO/SAE 21434 standards and UNECE WP.29 regulations, ensuring compliance for global markets."
    ],
    features: [
      { title: "Real-Time CAN Bus IDPS", desc: "Monitors CAN bus traffic for message anomalies, injected frames, and timing violations, blocking malicious messages instantly." },
      { title: "Automotive Ethernet Firewall", desc: "Filters SOME/IP and TCP/IP packets to prevent unauthorized access to safety-critical ECUs." },
      { title: "Secure Onboard Communication (SecOC)", desc: "Integrates message authentication codes (MAC) to verify the authenticity of critical control commands." },
      { title: "Hardware Security Module (HSM) Client", desc: "Interfaces with silicon-level HSMs to manage secure key storage, cryptographic signatures, and secure boot cycles." },
      { title: "vSOC Cloud Dashboard Integration", desc: "Transmits real-time security alerts and audit logs to the manufacturer's security operations center." },
      { title: "Anomalous Diagnostic Detection", desc: "Detects unauthorized attempts to flash ECU firmware via OBD-II ports or wireless diagnostic paths." },
      { title: "Secure OTA Update Manager", desc: "Cryptographically verifies firmware updates, ensuring code integrity and preventing middleman attacks." },
      { title: "Automated Threat Intel Sharing", desc: "Updates vehicle firewall rules dynamically to protect against newly discovered exploits in the field." }
    ],
    background: "Modern automotive architectures were originally designed for closed environments, where physical access was required to communicate with vehicle modules. The CAN bus protocol does not have built-in authentication or encryption, meaning any message sent on the bus is trusted by default. However, modern vehicles feature cellular links, Wi-Fi, Bluetooth, and V2X connections. If an attacker gains access to a connected module, they can broadcast malicious messages across the vehicle network. Securing these architectures requires active, real-time monitoring and cryptographic verification of all internal communications.",
    problem: "Automotive cybersecurity must operate without impacting safety-critical latency. Safety messages on CAN networks must be processed in microseconds, meaning heavy, slow encryption algorithms cannot be used. Additionally, vehicles have long lifespans (10-15 years), meaning security software must be capable of adapting to new threats over time. Developers need a platform that integrates into low-power ECUs, complies with strict safety standards, and updates security rules remotely.",
    functionalities: [
      { title: "Embedded Network Monitor", desc: "Inspects frame IDs, payloads, and transmission intervals on internal CAN and Ethernet networks." },
      { title: "Anomaly Detection Engine", desc: "Uses lightweight statistical models to identify unauthorized diagnostics, brute-force keys, or out-of-sequence commands." },
      { title: "Stateful Firewall Module", desc: "Enforces communication rules between different vehicle sub-networks, isolating infotainment from braking zones." },
      { title: "Cryptographic Manager", desc: "Coordinates key exchange, decryption, and validation of incoming control messages." },
      { title: "Audit Log Collector", desc: "Generates secure, tamper-proof logs of all security incidents, storing them in encrypted flash memory." },
      { title: "OTA Verification Agent", desc: "Validates digital signatures of incoming update packages before allowing the bootloader to execute flashes." }
    ],
    valueDelivery: "Our Automotive Cybersecurity platform delivers value by protecting vehicles and passengers from potentially life-threatening remote attacks. It ensures that OEMs comply with global regulations (such as UNECE R155/R156), avoiding vehicle sales blocks in major markets. The system's low resource footprint prevents ECU performance degradation, preserving safety-critical reaction times. By integrating with a centralized vSOC, it allows manufacturers to identify, analyze, and patch security vulnerabilities across millions of vehicles in real-time, preventing large-scale fleet hacks.",
    workflow: [
      { step: 1, title: "Traffic Inspection", desc: "The IDPS agent continuously monitors CAN frames and Ethernet packets flowing across the vehicle gateway." },
      { step: 2, title: "Anomaly Scoring", desc: "The local detection engine evaluates the messages against baseline timing and payload profiles." },
      { step: 3, title: "Intrusion Mitigation", desc: "If an anomaly is detected, the firewall blocks the message or resets the compromised bus transceiver." },
      { step: 4, title: "Log Encryption & Storage", desc: "An audit log of the threat is cryptographically sealed and saved to secure on-board storage." },
      { step: 5, title: "vSOC Alert Transmission", desc: "The telematics module uploads the threat logs to the cloud vSOC, triggering fleet-wide vulnerability analysis." }
    ],
    process: [
      { step: 1, title: "Network Architecture Review", desc: "Audit the vehicle's ECU network configuration and identify potential access routes and attack vectors." },
      { step: 2, title: "IDPS Deployment", desc: "Integrate the IDPS code libraries into the gateway ECU's AUTOSAR software stack." },
      { step: 3, title: "Baseline Communication Profile", desc: "Record network traffic during extensive track testing to establish a baseline of normal communication." },
      { step: 4, title: "Configure Firewall Rules", desc: "Define access control lists (ACLs) to block unauthorized communications between sub-networks." },
      { step: 5, title: "Cybersecurity Validation Testing", desc: "Perform penetration testing and simulated attacks to verify that the IDPS blocks malicious payloads." },
      { step: 6, title: "vSOC Launch", desc: "Connect the vehicle fleet to the cloud security operations center, enabling live threat monitoring and OTA security updates." }
    ],
    architecture: "The cybersecurity system is divided into two parts: an embedded software client running on vehicle gateways, and a cloud-based Security Operations Center. The embedded client runs directly inside the AUTOSAR operating system, utilizing the hardware security module (HSM) for cryptography. The cloud platform uses streaming analytics to ingest threat reports from millions of vehicles, using machine learning to detect coordinated attacks against specific vehicle models.",
    techArch: {
      frontend: "Enterprise vSOC dashboard built with React and D3.js, featuring real-time geographic maps of threat alerts and firmware patch status.",
      backend: "High-throughput cloud services developed in Go and Python, hosted on AWS to aggregate and analyze vehicle security reports.",
      gateway: "Secured NGINX gateway validating incoming telematics messages and managing secure connections to the vSOC.",
      processing: "Apache Kafka event streaming combined with Elasticsearch to index and search millions of vehicle threat logs.",
      ai_ml: "Gradient boosting anomaly detection models trained in the cloud and compiled into lightweight C code for edge execution.",
      edge: "Highly optimized C code library conforming to MISRA C standards, compiled for automotive microcontrollers.",
      security: "Hardware security module (HSM) managing secure boot keys, executing cryptographic functions, and storing secrets.",
      cloud: "AWS infrastructure leveraging Amazon DynamoDB for live threat status and Amazon S3 for long-term log storage.",
      integration: "Adaptive AUTOSAR SecOC and Crypto Stack integrations, interfacing with ECU bootloaders and gateway controllers.",
      monitoring: "Real-time CPU and memory monitoring for IDPS agents, combined with automated security alerts via Slack/Email."
    },
    technologies: {
      languages: "C, C++, Go, Python",
      frameworks: "AUTOSAR Classic, Adaptive AUTOSAR, TensorRT",
      databases: "InfluxDB, PostgreSQL, Amazon DynamoDB",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "Scikit-learn (for anomaly profiling), TensorFlow",
      iot: "Gateway ECUs, Telematics Control Units, Automotive HSMs",
      protocols: "CAN, CAN FD, SOME/IP, DoIP, MQTT over TLS",
      devops: "Docker, Kubernetes, Terraform, Jenkins",
      cybersecurity: "ISO 21434, UNECE R155, SecOC, HSM, PKI, AES-128"
    },
    realWorld: [
      { title: "Telematics Unit Remote Attack Blocking", desc: "Blocked a simulated buffer overflow attack targeting a vehicle's cellular modem, preventing access to the CAN network." },
      { title: "OBD-II Dongle Anomaly Detection", desc: "Detected and blocked unauthorized CAN messages injected by a rogue OBD-II diagnostic tool, avoiding engine shutdown." },
      { title: "Infotainment Zone Isolation", desc: "Isolated a compromised infotainment system, preventing it from sending steering commands over the gateway." },
      { title: "OTA Update Integrity Check", desc: "Prevented a fake over-the-air firmware update containing malicious code from executing on the engine ECU." },
      { title: "Brute-Force Key Blocking", desc: "Detected and blocked a brute-force attack attempting to crack the cryptographic key of a vehicle's smart lock system." },
      { title: "Logistics Fleet Intrusion Tracking", desc: "Monitored a fleet of 500 delivery trucks, flagging anomalous network traffic caused by unauthorized GPS trackers." },
      { title: "Autonomous Vehicle perception sensor protect", desc: "Protected an autonomous vehicle's LiDAR data pipeline from a coordinate-spoofing attack." },
      { title: "vSOC Alert Dashboard Deployment", desc: "Connected 50,000 passenger vehicles to a central vSOC, identifying an exploit attempt on a specific ECU variant." }
    ],
    benefits: [
      { title: "Remote Exploit Prevention", desc: "Blocks remote hackers from sending safety-critical steering or braking commands, protecting lives." },
      { title: "Regulatory WP.29 Compliance", desc: "Ensures compliance with international UNECE R155/R156 standards, enabling vehicle sales in Europe and Asia." },
      { title: "Microsecond Latency Monitoring", desc: "Monitors internal networks in real-time without introducing lag to critical safety communications." },
      { title: "Fleet-Wide Threat Visibility", desc: "Allows OEMs to identify and patch security vulnerabilities across millions of vehicles remotely via the cloud vSOC." },
      { title: "Secured OTA Update Pipeline", desc: "Guarantees firmware integrity and authenticity, preventing unauthorized code deployment." }
    ],
    challenges: [
      { title: "Power-Constrained Microcontrollers", desc: "Running security checks on low-frequency ECUs without exceeding CPU and memory limits." },
      { title: "Zero Latency Tolerances", desc: "Securing time-critical safety messages on CAN networks without introducing network delay." },
      { title: "Long Lifespan Threat Updates", desc: "Maintaining security and updating firewall rules over the vehicle's 15-year lifecycle." },
      { title: "False-Positive Risk Mitigation", desc: "Ensuring that the security software does not block legitimate safety messages due to false alerts." }
    ],
    future: "The future of automotive cybersecurity lies in Artificial Intelligence and decentralized security swarms. We are developing federated learning models that allow vehicles to detect and analyze new exploits locally, sharing threat insights with the rest of the fleet without sending raw data to the cloud. Additionally, post-quantum cryptographic algorithms will be integrated into future ECU designs to protect against decryption attacks by future quantum systems. We are also building security layers for cooperative autonomous vehicle networks, ensuring V2V communication routes are verified.",
    impact: "This platform is crucial for the future of connected mobility, as it provides the security foundation necessary to build public trust in autonomous vehicles. By protecting vehicles from remote exploits, it enables OEMs to confidently launch software-defined features and connected services, securing the future of smart transportation networks.",
    conclusion: "Our Automotive Cybersecurity Solutions platform delivers the security framework required for the software-defined vehicle era. By combining embedded IDPS networks with cloud-based security analytics, we help manufacturers protect their vehicles, comply with global regulations, and ensure driver safety."
  },
  p8: {
    id: 8,
    title: "Predictive Maintenance for Automobiles",
    shortSummary: "Enterprise AI platform utilizing on-board telemetry, sensor vibration data, and cloud diagnostics to forecast vehicle component failures before they happen.",
    intro: [
      "Vehicle downtime and unexpected component failures present significant costs for fleet operators and car owners. Traditional maintenance schedules rely on static parameters, such as mileage or calendar duration, which fail to account for actual driving stresses, environmental conditions, and manufacturing variances. Our Predictive Maintenance for Automobiles software is an enterprise-grade AI platform designed to monitor, diagnose, and forecast component wear in real-time.",
      "The platform aggregates high-frequency data streams—including engine temperatures, oil viscosity indexes, cabin vibration profiles, and brake caliper wear—directly from the vehicle CAN bus and external sensors. Using deep learning models and digital twin technology, the system projects the Remaining Useful Life (RUL) of critical components, alerting fleet managers and scheduling service appointments before a failure occurs, reducing vehicle downtime by up to 35%."
    ],
    features: [
      { title: "Real-Time Sensor Ingestion Engine", desc: "Pipes high-frequency data from engine, transmission, battery, and brake systems via telematics modems." },
      { title: "Digital Twin Wear Modeling", desc: "Constructs a live virtual model of the engine and drivetrain, simulating stress and wear based on driving habits." },
      { title: "Remaining Useful Life (RUL) Forecast", desc: "Predicts the exact mileage or date range when a specific component is expected to fail with 90% accuracy." },
      { title: "Vibration Signature Analysis", desc: "Analyzes high-frequency accelerometer data to identify bearing wear, wheel misalignment, and suspension decay." },
      { title: "Battery Degradation Analytics", desc: "Monitors cell-level parameters in EVs to predict internal resistance increases and thermal management failures." },
      { title: "Fluids Quality Estimation", desc: "Estimates oil, coolant, and brake fluid contamination levels based on temperature cycles and driving load." },
      { title: "Automated Dealership Booking", desc: "Interfaces with OEM dealer management networks to reserve parts and schedule service appointments automatically." },
      { title: "Dynamic Fleet Health Dashboard", desc: "Provides fleet operators with a complete overhead view of vehicle health scores, active trouble codes, and maintenance priorities." }
    ],
    background: "Automotive maintenance has historically been reactive: a component breaks, and the vehicle is towed to a shop. While scheduled maintenance helps, it is highly inefficient—leading to the premature replacement of perfectly functional parts or, conversely, sudden breakdowns between service windows. The rise of connected vehicles and advanced onboard diagnostics opens the door to a smarter approach. By analyzing the tiny, early indicators of wear—such as micro-vibrations, minor pressure drops, or temperature fluctuations—software can identify failures weeks before they happen, optimizing logistics and parts inventory.",
    problem: "Developing predictive maintenance systems requires handling massive amounts of noisy sensor data. Vibration signals, for instance, generate megabytes of data per second, which is too expensive to upload to the cloud. The system must run edge filtering algorithms to compress and analyze data on the vehicle, transmitting only identified anomalies. Furthermore, training AI models to recognize failure modes requires access to historical failure datasets, which are often siloed or unavailable.",
    functionalities: [
      { title: "CAN Telemetry Parser", desc: "Extracts engine, transmission, and battery diagnostic codes and sensor metrics from the vehicle network." },
      { title: "Edge Vibration Processor", desc: "Executes Fast Fourier Transforms (FFT) on accelerometer data at the edge, flagging anomalous frequency peaks." },
      { title: "Cloud Diagnostic Engine", desc: "Runs deep neural network models to compare vehicle telemetry with historical failure signatures." },
      { title: "Digital Twin Synchronizer", desc: "Updates the component wear indices stored in the cloud based on daily vehicle operational stress." },
      { title: "Maintenance Scheduler Module", desc: "Matches predicted failures with dealer parts availability and schedules service window slots." },
      { title: "Operator Alert Dispatcher", desc: "Generates clear, prioritised maintenance recommendations for fleet managers, avoiding technical code jargon." }
    ],
    valueDelivery: "Our Predictive Maintenance platform delivers value by converting raw vehicle telemetry into direct cost savings. It reduces unplanned roadside breakdowns by 70%, ensuring high service reliability for logistics and delivery fleets. Fleet operators save up to 20% on maintenance budgets by extending service intervals for gently driven vehicles and preventing secondary damage (e.g., a worn bearing destroying an entire axle assembly). For passenger vehicle OEMs, it increases customer satisfaction and improves dealer service workshop efficiency through pre-ordered parts inventory.",
    workflow: [
      { step: 1, title: "Telemetry Collection", desc: "Telematics units read engine load, coolant temperature, vibration, and error codes from the OBD-II port." },
      { step: 2, title: "Edge Filtering & Processing", desc: "Local processors filter high-frequency sensor noise, executing basic Fourier transforms to detect abnormal friction signatures." },
      { step: 3, title: "Cloud Ingestion & Matching", desc: "Filtered telemetry is uploaded to the cloud, where it is compared against the specific vehicle model's failure database." },
      { step: 4, title: "Digital Twin Wear Update", desc: "The virtual digital twin updates its component wear logs, computing the remaining useful life of the vehicle's parts." },
      { step: 5, title: "Alert & Service Booking", desc: "If a component's health drops below a set threshold, an alert is sent, and an automated booking is sent to the nearest service center." }
    ],
    process: [
      { step: 1, title: "Select Target Vehicle Models", desc: "Identify the vehicle models in the fleet and audit their onboard sensor configurations." },
      { step: 2, title: "Deploy Telematics Configuration", desc: "Install the diagnostic software client onto the vehicle's telematics module or gateway ECU." },
      { step: 3, title: "Establish Cloud Data Pipelines", desc: "Configure high-throughput data streams from the vehicles to the cloud ingestion servers." },
      { step: 4, title: "Train Component AI Models", desc: "Train machine learning models on historical sensor records and repair datasets to recognize failure patterns." },
      { step: 5, title: "Configure Integration APIs", desc: "Link the platform with the fleet's ERP software and the OEM's dealer management systems." },
      { step: 6, title: "Launch Predictive Monitoring", desc: "Go live with the fleet dashboard, track component health scores, and receive automated maintenance recommendations." }
    ],
    architecture: "The predictive maintenance platform utilizes a hybrid edge-cloud architecture. Vibration sensors and diagnostic modules run edge algorithms to process high-frequency signals locally, preventing high cellular data costs. The cloud platform, hosted on AWS, maintains a digital twin for every vehicle in the fleet, executing complex neural network models to calculate wear and schedule repairs. Integration with dealer inventory management systems ensures that parts are ordered and delivered before the vehicle arrives for its service appointment.",
    techArch: {
      frontend: "Enterprise operator dashboard built with React and Redux, featuring interactive charts, component wear indicators, and active maintenance logs.",
      backend: "Scalable backend services written in Go and Node.js, running in Kubernetes containers for automated scaling.",
      gateway: "Secure API gateway managing telemetry ingestion streams and external system integrations.",
      processing: "Apache Kafka ingestion hub routing telemetry data to Apache Spark for batched aggregation and feature extraction.",
      ai_ml: "Recurrent Neural Networks (RNN) and Long Short-Term Memory (LSTM) networks trained on AWS SageMaker for RUL forecasting.",
      edge: "C++ client software running on Linux telematics units, executing edge signal processing and CAN bus protocol translation.",
      security: "mTLS authentication for all telemetry streams, role-based access control (RBAC), and AES-256 database encryption.",
      cloud: "AWS infrastructure leveraging InfluxDB for time-series sensor data, PostgreSQL for configurations, and S3 for long-term log archives.",
      integration: "REST and SOAP APIs linking the system to ERP software, dealer parts networks, and manufacturer inventory databases.",
      monitoring: "Prometheus and Grafana for system health metrics, combined with automated alerts for offline telematics devices."
    },
    technologies: {
      languages: "C++, Go, Python, JavaScript",
      frameworks: "React, Apache Spark, TensorFlow",
      databases: "InfluxDB, PostgreSQL, Redis",
      cloud_platforms: "AWS, Google Cloud",
      ai_ml_tools: "TensorFlow, Keras, AWS SageMaker, NumPy",
      iot: "OBD-II, CAN Bus, Accelerometers, Temperature Sensors",
      protocols: "MQTT, HTTPS, gRPC, J1939",
      devops: "Docker, Kubernetes, Terraform, Jenkins",
      cybersecurity: "mTLS, AES-256, Secure Boot, JWT"
    },
    realWorld: [
      { title: "Last-Mile Delivery Brake Diagnostics", desc: "Monitored brake pads and caliper wear across 800 delivery vans, preventing roadside failures and reducing downtime." },
      { title: "Interstate Logistics Engine Diagnostics", desc: "Tracked coolant pressure and oil temperatures in 200 long-haul trucks, identifying head gasket leaks before failure." },
      { title: "Electric Transit Bus Battery Care", desc: "Monitored battery cell imbalances in a municipal bus fleet, scheduling balancing charges and preventing cell failures." },
      { title: "Car-Rental Fleet Health Monitoring", desc: "Analyzed suspension and alignment wear via accelerometers in 5,000 rental cars, prioritizing maintenance." },
      { title: "Airport Tug Gearbox Diagnostics", desc: "Monitored transmission vibration signatures on airport support tugs, avoiding cargo loading delays." },
      { title: "Agricultural Tractor Hydraulic Care", desc: "Monitored hydraulic pressure cycles on heavy farm tractors, scheduling fluid changes before system failure." },
      { title: "Ride-Hailing Vehicle Tire Wear Analytics", desc: "Analyzed ABS sensor frequency shifts to estimate tire tread wear dynamically across a ride-hailing fleet." },
      { title: "Emergency Ambulance Powertrain Monitor", desc: "Provided real-time diagnostic and wear tracking for an ambulance fleet, guaranteeing 99.9% vehicle availability." }
    ],
    benefits: [
      { title: "Reduced Unplanned Downtime", desc: "Reduces roadside breakdowns by 70%, keeping logistics and transport fleets operating reliably." },
      { title: "Lower Maintenance Costs", desc: "Saves up to 20% by extending component replacement intervals and preventing secondary powertrain damage." },
      { title: "Optimized Workshop Efficiency", desc: "Ensures parts are ordered and delivered to the service center before the vehicle arrives, cutting service times." },
      { title: "Enhanced Vehicle Safety", desc: "Detects worn brakes, steering components, and tires before they create safety hazards for drivers." },
      { title: "Extended Vehicle Lifespan", desc: "Protects major powertrain components from failure, extending the economic lifecycle of the vehicle." }
    ],
    challenges: [
      { title: "Noisy Operational Environments", desc: "Filtering out road noise and passenger movement from suspension and bearing vibration sensors." },
      { title: "Data Silo Challenges", desc: "Accessing detailed manufacturing records and historical repair histories from OEMs to calibrate models." },
      { title: "High Edge Processing Demands", desc: "Executing complex Fast Fourier Transforms on low-power telematics microcontrollers." },
      { title: "Unpredictable Failure Modes", desc: "Modeling rare, catastrophic component failures that occur without clear warning indicators." }
    ],
    future: "The future of predictive maintenance lies in deep integration with automotive digital twins and blockchain-backed service ledgers. We are developing systems where a vehicle's digital twin lives on decentralized cloud networks, continuously updating its status. When a component requires replacement, the digital twin will negotiate directly with local parts warehouses, purchase the replacement part, and book the repair slot. Additionally, integrating blockchain ledgers will create a tamper-proof service history, verifying vehicle maintenance status and increasing resale values.",
    impact: "This platform transforms vehicle ownership and logistics operations by making maintenance completely predictable. It eliminates the economic waste of premature servicing, reduces roadside vehicle breakdowns, and supports the transition to autonomous logistics where vehicles must manage their own health.",
    conclusion: "Our Predictive Maintenance for Automobiles software offers a secure, scalable, and highly accurate solution for fleet operators and OEMs. By leveraging edge analytics and cloud digital twins, we help companies keep their vehicles on the road, reduce maintenance costs, and ensure maximum passenger safety."
  },
  p9: {
    id: 9,
    title: "Intelligent Traffic Management Systems",
    shortSummary: "Enterprise-grade smart city platform optimizing urban transit through real-time traffic signal control, incident detection, and multi-modal transit coordination.",
    intro: [
      "Rapid urbanization and growing vehicle fleets have pushed city road networks to their absolute physical limits. Standard traffic management solutions, relying on static schedules, are unable to adapt to dynamic demand, accidents, or special events. Our Intelligent Traffic Management System is a comprehensive, cloud-native enterprise platform designed for city traffic departments, municipal authorities, and highway operators seeking to modernize their urban mobility grids.",
      "The platform aggregates data from a wide array of sensors—including video cameras, radar detectors, induction loops, and vehicle telemetry feeds—to construct a live digital map of urban mobility. Using advanced artificial intelligence, the software optimizes signal timings dynamically across entire municipal grids, creating coordinated green light corridors that adapt to traffic patterns in real-time. It reduces delays, minimizes vehicle idling, alerts emergency services to accidents, and coordinates multi-modal public transit routes."
    ],
    features: [
      { title: "Adaptive Traffic Signal Control", desc: "Adjusts traffic light phases and green wave durations dynamically based on real-time vehicle queue lengths." },
      { title: "Automated Incident Identification", desc: "Analyzes sensor telemetry to detect vehicle breakdowns, accidents, or debris, notifying dispatchers within seconds." },
      { title: "Active Emergency Vehicle Preemption", desc: "Coordinates with police and fire department GPS systems to secure green lights dynamically along response routes." },
      { title: "Transit Signal Priority (TSP)", desc: "Optimizes light cycles to keep city buses and light rail systems running on schedule without halting cross-traffic." },
      { title: "Dynamic Road Signs Integration", desc: "Updates highway variable message signs (VMS) automatically with detour routes and speed advisories." },
      { title: "Multi-Modal Traffic Analytics", desc: "Classifies and tracks passenger cars, heavy trucks, buses, cyclists, and pedestrians to balance urban safety." },
      { title: "Variable Speed Limit Control", desc: "Adjusts speed limits dynamically on major highways to smooth out traffic shockwaves and prevent pileups." },
      { title: "Predictive Congestion Modeling", desc: "Forecasts gridlock patterns 30 minutes in advance, allowing operators to preemptively adjust routing programs." }
    ],
    background: "Traditional city traffic systems run on pre-programmed plans that are calibrated using historical traffic surveys. These plans cannot adapt to unexpected traffic spikes, accidents, or weather changes. The resulting congestion causes billions in lost economic productivity, increases collision rates, and contributes heavily to localized air pollution. Resolving these challenges requires connecting legacy traffic controllers to a centralized, cloud-hosted platform that can analyze sensor telemetry in real-time and coordinate traffic signal networks.",
    problem: "Urban traffic networks are highly complex, where adjusting a light sequence at one intersection often pushes the bottleneck downstream. Additionally, city departments operate a mix of hardware from different generations and vendors. Integrating these legacy controllers into a single network requires secure, standardized API bridges. Designers must also ensure the system operates with high reliability, as any software error could cause city-wide gridlock.",
    functionalities: [
      { title: "Central Telemetry Ingestion Hub", desc: "Ingests and normalizes data streams from cameras, radar units, and vehicle GPS devices across the city." },
      { title: "Signal Controller Bridge Module", desc: "Translates high-level timing decisions from the AI into specific hardware commands using NTCIP protocols." },
      { title: "Incident Detection Engine", desc: "Monitors traffic anomalies, flagging stopped vehicles or rapid deceleration patterns in real-time." },
      { title: "Digital City Mobility Map", desc: "Maintains a live digital twin of all city vehicles, speeds, queue lengths, and signal phases." },
      { title: "V2X Communication Interface", desc: "Broadcasts real-time Signal Phase and Timing (SPaT) data to connected cars, advising drivers on target speeds." },
      { title: "Transit Integration Module", desc: "Connects with public transit schedules to prioritize late buses and train crossings." }
    ],
    valueDelivery: "Our Intelligent Traffic Management System delivers value by reducing average city commute times by up to 25% and reducing vehicle emissions by 15% through minimized idling at red lights. It improves emergency response times by 30%, saving lives during critical events. Municipalities save millions by delaying or avoiding expensive physical road expansion projects, maximizing the efficiency of their existing assets. Furthermore, the platform's automated incident detection reduces secondary accident rates by warning incoming drivers of crashes ahead.",
    workflow: [
      { step: 1, title: "Sensor Ingestion", desc: "Traffic cameras, radar detectors, and connected vehicle GPS logs send real-time data to the ingestion hub." },
      { step: 2, title: "Data Aggregation", desc: "The platform maps counts, speeds, and queue lengths onto a digital twin of the road network." },
      { step: 3, title: "Timing Optimization", desc: "The AI optimization engine calculates signal phase durations to maximize throughput and minimize stops." },
      { step: 4, title: "Signal Actuation", desc: "Commands are sent via the NTCIP bridge to update physical traffic light states at intersections." },
      { step: 5, title: "Feedback Loop & Adjustment", desc: "The system monitors traffic flow changes, feeding the data back to continuously calibrate the optimization models." }
    ],
    process: [
      { step: 1, title: "Map Road Network & Nodes", desc: "Construct a digital map of all target city streets, intersections, and signal controllers." },
      { step: 2, title: "Connect Signal Hardware", desc: "Install secure cellular or fiber VPN gateways inside traffic signal control cabinets." },
      { step: 3, title: "Deploy Traffic Sensors", desc: "Install radar units and traffic cameras at key intersections to measure vehicle density." },
      { step: 4, title: "Configure Protocol Bridges", desc: "Configure NTCIP or proprietary protocol links to enable two-way communication with controllers." },
      { step: 5, title: "Train and Calibrate AI Models", desc: "Calibrate reinforcement learning models using historical traffic data and run simulations to verify safety guardrails." },
      { step: 6, title: "Activate System Coordination", desc: "Launch the operator dashboard, enable automated signal control, and monitor municipal traffic improvements." }
    ],
    architecture: "The platform features a hybrid edge-cloud architecture. Deep learning video analytics run locally on edge processors inside intersection cabinets, transmitting only vehicle counts and queue lengths to the cloud. The cloud platform, hosted on AWS, runs the global coordination algorithms, adjusting signal schedules across entire neighborhoods. This structure minimizes cellular data costs and ensures that if internet connection is lost, individual intersections fall back to local, coordinated plans.",
    techArch: {
      frontend: "Web-based GIS operator interface built with React and Mapbox GL, showing live congestion layers, active phases, and alert windows.",
      backend: "High-performance services developed in Rust and Go, designed to handle thousands of concurrent sensor streams.",
      gateway: "Secure NGINX load balancer managing incoming sensor telemetry and outgoing control commands.",
      processing: "Apache Kafka event streaming routing data to Apache Flink for real-time corridor speed calculations.",
      ai_ml: "Deep reinforcement learning models implemented in PyTorch, running on GPU-accelerated cloud instances to calculate signal timings.",
      edge: "NVIDIA Jetson edge computers running deep-learning video analytics to count vehicles and estimate queue lengths.",
      security: "IPSec VPN tunnels connecting cabinets to the cloud, mutual TLS (mTLS) authentication, and AES-256 database encryption.",
      cloud: "AWS infrastructure featuring Amazon DynamoDB for state tracking, Timestream for sensor logs, and Amazon EKS for service orchestration.",
      integration: "Standardized NTCIP 1202 interfaces for signal controllers, GTFS-RT APIs for public transit sync, and OpenGIS mapping standards.",
      monitoring: "Datadog for cloud infrastructure tracking, Promtail and Loki for log aggregation, and SMS alerts for offline hardware."
    },
    technologies: {
      languages: "Rust, Go, Python, JavaScript",
      frameworks: "React, PyTorch, Apache Spark, SUMO",
      databases: "Amazon DynamoDB, Timestream, PostgreSQL (with PostGIS)",
      cloud_platforms: "AWS, Microsoft Azure",
      ai_ml_tools: "TensorFlow, OpenCV, Ray RLlib",
      iot: "NTCIP Signal Controllers, Induction Loops, Thermal Traffic Cameras",
      protocols: "NTCIP 1202, MQTT, HTTPS, WebSockets",
      devops: "Docker, Kubernetes, Helm, Terraform",
      cybersecurity: "mTLS, IPSec VPN, TLS 1.3, OAuth 2.0"
    },
    realWorld: [
      { title: "Urban Center Signal Optimization", desc: "Coordinated 60 intersections in a downtown business district, reducing peak travel delays by 24%." },
      { title: "Smart Commuter Corridor Green Wave", desc: "Created dynamic green waves along a busy commuter avenue, saving commuters an average of 6 minutes per trip." },
      { title: "Transit Signal Priority Deployment", desc: "Configured TSP for a city bus network, improving schedule reliability and reducing transit delays by 18%." },
      { title: "Highway Variable Speed Limits", desc: "Managed speed limits on a major bridge during rainstorms, preventing multi-car rear-end collisions." },
      { title: "Emergency Response Preemption", desc: "Linked city signals with fire engine GPS tracking, reducing response times by 3 minutes across 8 stations." },
      { title: "Industrial Freight Route Flow Control", desc: "Optimized traffic signals around a busy logistics hub, reducing heavy truck queue lines by 28%." },
      { title: "Automated Collision Divert System", desc: "Detected an accident on a major avenue, automatically updating digital signs to reroute incoming traffic." },
      { title: "Bridge Lane Closure Flow Management", desc: "Adjusted signal phases to manage traffic around a bridge lane closure, keeping grid throughput stable." }
    ],
    benefits: [
      { title: "Reduced Congestion Delays", desc: "Reduces average city commute times by up to 25%, returning lost time to the economy." },
      { title: "Lower Urban Air Pollution", desc: "Cuts vehicle red-light idle times by 35%, reducing municipal carbon emissions." },
      { title: "Improved Emergency Transit", desc: "Clears traffic ahead of emergency vehicles automatically, improving response times and saving lives." },
      { title: "Delayed Infrastructure Capital", desc: "Avoids costly physical road expansions by maximizing the efficiency of existing lanes." },
      { title: "Enhanced Public Transit Appeal", desc: "Keeps public transit running on time, driving higher public transport usage." }
    ],
    challenges: [
      { title: "Legacy Hardware Integration", desc: "Interfacing with older electromechanical traffic controllers that lack processing power and modern API connectivity." },
      { title: "Sensor Uptime and Maintenance", desc: "Dirt, ice, and lens fog frequently degrade camera and radar accuracy, requiring automated sensor fault detection." },
      { title: "Congestion Relocation Risk", desc: "Solving bottlenecks in one zone can push congestion to adjacent neighborhoods if not globally optimized." },
      { title: "High Municipal Cybersecurity Risks", desc: "Preventing hackers from taking control of traffic lights, which could paralyze entire cities." }
    ],
    future: "The future of traffic management lies in cooperative swarm coordination. By integrating with V2X platforms, traffic lights will communicate target speed profiles directly to vehicles, allowing cars to adjust their speed so they always arrive at intersections during green lights, eliminating the need to stop entirely. Reinforcement learning models will run on decentralized edge networks, coordinating patterns locally between adjacent intersections. Eventually, autonomous vehicle swarms will coordinate their own movements through intersections without physical traffic lights, utilizing digital scheduling systems.",
    impact: "This technology is vital for building sustainable, livable cities. By transforming traffic control from a reactive scheduling problem into a predictive, real-time optimization system, we improve air quality, lower commuter stress, and make public transit highly competitive. It reshapes municipal grid management and lays the infrastructure foundation for autonomous vehicle networks.",
    conclusion: "Our Intelligent Traffic Management System provides a powerful, scalable, and data-driven approach to urban congestion management. By leveraging real-time sensor streams and advanced reinforcement learning, we help cities move smarter, breathe cleaner, and prepare for the future of connected mobility."
  },
  p10: {
    id: 10,
    title: "Autonomous Vehicle Simulation and Testing Software",
    shortSummary: "Enterprise virtual testing platform generating ultra-realistic 3D environments, sensor models, and traffic scenarios to validate autonomous driving software stacks.",
    intro: [
      "Developing safe, reliable autonomous vehicles (AVs) requires billions of miles of testing. Physical road testing is slow, expensive, and unable to safely replicate critical corner cases—such as near-miss collisions, extreme weather anomalies, and erratic pedestrian behaviors. Our Autonomous Vehicle Simulation and Testing Software is an enterprise-grade virtual validation platform designed for AV developers, automotive OEMs, and safety certification bodies.",
      "The platform generates high-fidelity 3D environments with physics-based sensor models for cameras, radar, LiDAR, and ultrasonic units. Using advanced traffic scenario generators, the software simulates complex urban and highway environments where autonomous software stacks can be tested under millions of virtual scenarios. It bridges the gap between software-in-the-loop (SIL) and hardware-in-the-loop (HIL) testing, enabling developers to validate perception, planning, and control algorithms safely and efficiently."
    ],
    features: [
      { title: "High-Fidelity 3D Environment Render", desc: "Renders photorealistic virtual worlds with dynamic lighting, shadow, reflections, and varied weather profiles." },
      { title: "Physics-Based Sensor Simulation", desc: "Simulates raw outputs of cameras, radars, LiDAR point clouds, and ultrasonic sensors, complete with noise and lens distortion." },
      { title: "Dynamic Scenario Generator", desc: "Creates millions of test scenarios, including erratic pedestrian crossings, vehicle cuts-ins, and construction detours." },
      { title: "Centimeter-Level HD Map Import", desc: "Supports importing OpenDRIVE and HD maps to replicate real-world city streets and highways in virtual environments." },
      { title: "SIL and HIL Integration Support", desc: "Seamlessly connects with target software stacks (SIL) and physical ECU hardware setups (HIL)." },
      { title: "Automated Regression Testing", desc: "Runs automated test batches on cloud infrastructure, generating detailed safety and collision reports." },
      { title: "Vehicle Dynamics Simulator", desc: "Models tire friction, suspension movement, chassis roll, and brake system responses under extreme maneuvers." },
      { title: "Regulatory Validation Suite", desc: "Includes standardized test scenarios for safety compliance, including ISO 26262, NCAP, and NHTSA benchmarks." }
    ],
    background: "To prove that an autonomous vehicle is safer than a human driver, developers must validate its software across billions of miles. On public roads, this validation process would take decades and cost billions. Furthermore, exposing test vehicles to high-risk scenarios (like a child running onto a highway) is physically unsafe and illegal. Virtual simulation solves this by allowing developers to run millions of parallel test miles in the cloud, testing edge cases repeatedly, and validating software updates in hours instead of months.",
    problem: "Developing realistic simulations is challenging. Sensor models must be physics-based to ensure that perception algorithms behave the same way in simulation as they do on the road. For instance, simulating LiDAR laser reflections off wet asphalt or camera lens flare from direct sunlight requires complex physical equations. Additionally, the simulator must run at high frame rates, synchronize data across multiple simulated sensors, and scale across thousands of cloud-based parallel processors.",
    functionalities: [
      { title: "World Engine", desc: "Manages the virtual environment, including terrain elevation, buildings, vegetation, and variable weather states." },
      { title: "Sensor Model Simulator", desc: "Generates simulated raw data streams (radar packets, camera frames, LiDAR point clouds) based on ray-tracing physics." },
      { title: "Traffic Swarm Coordinator", desc: "Controls surrounding vehicles and pedestrians using AI models to create realistic, unpredictable behaviors." },
      { title: "Vehicle Physics Simulator", desc: "Calculates the real-time physical forces acting on the ego-vehicle, steering columns, and suspension." },
      { title: "API Bridge & Interface Layer", desc: "Establishes low-latency data loops between the simulator and the autonomous vehicle's software stack." },
      { title: "Test Orchestrator", desc: "Runs parallel regression tests in cloud containers, logging safety compliance metrics and collisions." }
    ],
    valueDelivery: "Our AV Simulation and Testing platform delivers value by reducing software validation times from months to hours, accelerating the time-to-market for autonomous systems. It eliminates the capital costs of operating large physical test fleets, saving millions in vehicle hardware and fuel expenses. By allowing developers to test dangerous corner cases safely, the system helps identify and resolve critical planning errors before code is deployed to real cars, reducing public road safety risks.",
    workflow: [
      { step: 1, title: "Scenario Definition", desc: "Define target road layouts, weather profiles, sensor setups, and traffic participant movements in the scenario creator." },
      { step: 2, title: "Sensor & Physics Sync", desc: "Initialize physics-based sensor models and configure vehicle dynamics to match the target car chassis." },
      { step: 3, title: "Data Loop Connection", desc: "Connect the autonomous vehicle software stack to the simulator via low-latency API links." },
      { step: 4, title: "Simulation Run", desc: "Run the simulation, generating virtual sensor outputs that feed directly into the AV stack's perception layer." },
      { step: 5, title: "Evaluation & Reporting", desc: "The AV stack sends steering and speed commands back to the simulator, which executes the movement, logs performance, and checks for collisions." }
    ],
    process: [
      { step: 1, title: "Set Up Virtual Test Environment", desc: "Import HD map files of the target test tracks or create custom road layouts in the map editor." },
      { step: 2, title: "Configure the Ego Vehicle Profile", desc: "Select sensor configurations (cameras, LiDAR, radar) and define vehicle mass, tire grip, and suspension profiles." },
      { step: 3, title: "Integrate the AV Software Stack", desc: "Establish Docker container links to pipe simulated sensor data directly into the AV perception stack." },
      { step: 4, title: "Define Safety Test Suites", desc: "Create a library of safety scenarios, including highway lane changes, city pedestrian avoidance, and bad weather driving." },
      { step: 5, title: "Run Cloud Scale Tests", desc: "Deploy the simulation across thousands of cloud-based GPU instances to run millions of parallel test miles." },
      { step: 6, title: "Analyze Safety Reports", desc: "Review regression test results, identify failed scenarios, debug planning algorithms, and update the software." }
    ],
    architecture: "The simulator features a highly distributed microservices architecture optimized for cloud deployment. The core rendering engine utilizes ray-tracing GPUs to generate photorealistic camera feeds and physics-based LiDAR reflections. Sensor models and traffic scenarios are coordinated by a central orchestrator, which syncs data across parallel nodes. Integration APIs connect the simulator to physical HIL test racks, translating virtual data into hardware electrical signals in real-time.",
    techArch: {
      frontend: "Desktop control application built with C++ and Qt, combined with a web-based cloud dashboard for test tracking.",
      backend: "High-performance simulation services developed in C++ and CUDA, optimized for multi-GPU hardware configurations.",
      gateway: "Internal communications handled by gRPC and Shared Memory segments, ensuring sub-millisecond data loops.",
      processing: "Physics-based ray-tracing engine utilizing NVIDIA OptiX to simulate radar reflections, LiDAR points, and camera light rays.",
      ai_ml: "Behavioral AI models for virtual pedestrians and drivers, utilizing deep reinforcement learning to create realistic traffic patterns.",
      edge: "HIL interface modules converting virtual sensor streams into physical LVDS camera signals and raw Ethernet packets for ECU inputs.",
      security: "Encrypted data storage for proprietary vehicle models, secure API access control, and tenant isolation in cloud environments.",
      cloud: "AWS infrastructure leveraging GPU instances (G4/G5), Amazon EKS for container management, and S3 for large simulation log files.",
      integration: "Support for OpenDRIVE, OpenSCENARIO, and FMI/FMU standards to link with external vehicle dynamics models.",
      monitoring: "Real-time frame-rate monitoring, memory leak protection, and automated alerts for failed simulation nodes."
    },
    technologies: {
      languages: "C++, CUDA, Python, GLSL",
      frameworks: "Qt, NVIDIA OptiX, ROS 2, OpenDRIVE, OpenSCENARIO",
      databases: "PostgreSQL, Amazon S3 (log storage)",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow, PyTorch (for traffic behavioral models)",
      iot: "ADAS HIL Testing Racks, ECU interfaces, dSPACE/National Instruments systems",
      protocols: "gRPC, Protobuf, Shared Memory, UDP, SOME/IP",
      devops: "Docker, Kubernetes, Terraform, GitLab CI",
      cybersecurity: "AES-256, TLS 1.3, IAM access controls"
    },
    realWorld: [
      { title: "Highway Cut-In Safety Validation", desc: "Tested an autonomous truck stack across 10 million simulated lane cut-ins, refining braking parameters." },
      { title: "Pedestrian Collision Avoidance Tuning", desc: "Validated automatic braking algorithms against erratic child-pedestrian movements behind parked cars." },
      { title: "Bad Weather Perception Validation", desc: "Tested camera and LiDAR perception stacks in virtual dense fog, snow, and rainstorms, adjusting sensor weights." },
      { title: "Autonomous Valet Parking Simulation", desc: "Simulated parking structures, validating low-speed path planning and obstacle detection around narrow pillars." },
      { title: "Regulatory NCAP Test Automation", desc: "Automated standard NCAP safety test scenarios, verifying software compliance before physical track testing." },
      { title: "Centimeter-Level Map Loop Testing", desc: "Imported an HD map of San Francisco to test urban path planning and intersection turns in simulation." },
      { title: "Sensor Fault Fail-Safe Verification", desc: "Simulated camera failures and radar drift to verify that the AV stack initiates a safe shoulder stop." },
      { title: "Electric Vehicle Energy Dynamics Simulation", desc: "Simulated battery drain and regenerative braking gains across hilly terrains, optimizing route planning." }
    ],
    benefits: [
      { title: "Accelerated Development Cycle", desc: "Runs millions of virtual test miles in hours, significantly reducing software validation cycles." },
      { title: "Dangerous Corner-Case Testing", desc: "Allows developers to test near-collision scenarios safely without risking lives or hardware." },
      { title: "Significant Cost Reductions", desc: "Eliminates fuel, driver, and vehicle wear costs associated with large physical testing fleets." },
      { title: "Physics-Based Sensor Models", desc: "Ensures that perception algorithms behave realistically, matching real-world road behavior." },
      { title: "Automated Compliance Auditing", desc: "Generates detailed safety reports mapping performance directly to transport regulatory standards." }
    ],
    challenges: [
      { title: "Simulation-to-Reality Gap", desc: "Ensuring that perception models behave exactly the same way in simulation as they do on physical asphalt." },
      { title: "Massive Computing Costs", desc: "Running ray-tracing sensor simulations across thousands of parallel nodes generates high cloud computing bills." },
      { title: "Highly Complex Physics Modeling", desc: "Accurately simulating dynamic light scattering, radar clutter, and tire-rubber road friction forces." },
      { title: "Scenarios Combinatorial Explosion", desc: "Managing and indexing the millions of possible variable combinations (speed, weather, signs) in scenario suites." }
    ],
    future: "The future of AV simulation lies in generative AI environments and neural radiance fields (NeRFs). Instead of manually creating 3D models of cities, generative AI will reconstruct photorealistic virtual worlds directly from short video segments recorded by real cars. Additionally, simulator traffic agents will utilize advanced conversational models to interact with the ego-vehicle, creating complex human-to-vehicle behaviors (like a pedestrian waving a car forward at a crosswalk). The integration of cloud-based quantum computing will allow for instant evaluation of complex multi-vehicle conflict simulations.",
    impact: "This software changes autonomous vehicle development by making safety validation scalable, auditable, and completely safe. By virtualizing the testing process, it allows startups and established OEMs to quickly refine their algorithms, building public trust and accelerating the global launch of autonomous transit networks.",
    conclusion: "Our Autonomous Vehicle Simulation and Testing Software provides the virtual validation platform required to launch autonomous vehicles safely. By delivering physics-based sensor models, scalable cloud execution, and comprehensive regulatory test suites, we help AV developers move from prototype to production with confidence."
  }
};

fs.writeFileSync(
  path.join(dataDir, 'products_6_10.json'),
  JSON.stringify(products6to10, null, 2)
);

console.log('Product Data for 6-10 written successfully!');
