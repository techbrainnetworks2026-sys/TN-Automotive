const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'product_data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const products16to20 = {
  p16: {
    id: 16,
    title: "Automotive User Experience (UX) Design Software",
    shortSummary: "Enterprise design suite for prototyping in-vehicle infotainment interfaces, 3D gauge clusters, and heads-up displays with real-time hardware testing.",
    intro: [
      "Modern drivers demand fluid, intuitive, and visually stunning digital interfaces inside their vehicles. Designing these interfaces requires coordinating multiple screens—such as gauge clusters, center touchscreens, passenger screens, and heads-up displays—while ensuring that critical safety warnings remain clear. Our Automotive User Experience (UX) Design Software is an enterprise-grade prototyping and deployment suite designed for automotive design studios, software engineers, and HMI developers.",
      "The platform features an advanced 3D visual editor, drag-and-drop widget libraries, and a real-time hardware-in-the-loop (HIL) testing pipeline. By compiling design layouts directly into optimized C++/Qt and HTML5 code, the software bridges the gap between artistic designers and embedded software engineers. It enables teams to prototype complex menus, transition effects, and voice control visual feedback, accelerating the development of next-generation digital cockpits."
    ],
    features: [
      { title: "Dynamic 3D Workspace", desc: "Enables designers to model cockpits, setting up screen projections and layout orientations in a 3D interface." },
      { title: "HMI Drag-and-Drop Library", desc: "Includes pre-configured, automotive-safe design components like speedometers, climate dials, and ADAS maps." },
      { title: "Cross-Platform Code Compiler", desc: "Translates visual design layers directly into optimized C++ (Qt/QML), HTML5, or Android layouts." },
      { title: "Hardware-in-the-Loop Prototyping", desc: "Streams design layouts directly to target automotive chips (e.g., NXP or Qualcomm) to test performance." },
      { title: "Eye-Gaze and Distraction Simulator", desc: "Analyzes interface layouts, predicting driver eye-gaze distribution and cognitive distraction scores." },
      { title: "Responsive Theme Engine", desc: "Enables quick creation of day/night modes, driving profiles, and branded OEM templates." },
      { title: "Voice UI Visual Orchestrator", desc: "Designs visual waveforms and text overlays that sync with voice control assistants." },
      { title: "Holographic Windshield HUD Prototyper", desc: "Models and previews how graphics appear on curved glass windshield surfaces." }
    ],
    background: "Historically, automotive HMI (Human-Machine Interface) design was a slow, fractured process. Designers created static pictures in traditional design tools, and embedded engineers re-wrote the layouts in C++ from scratch, leading to interface discrepancies, performance lag, and delayed vehicle launches. Furthermore, separating multimedia systems from safety clusters was difficult. Gauge clusters must boot instantly and never crash, while infotainment screens must support complex apps. Solving these challenges requires a design suite that supports strict separation of concerns and compiles to target boards.",
    problem: "HMI development is slowed by the gap between design tools and embedded hardware. Designs that look beautiful on laptops often lag or drop frames when run on low-power automotive chips. Additionally, ensuring that interface layouts do not distract drivers or block critical safety gauges requires extensive safety validation. Designers need a platform that compiles directly to production-ready code, profiles hardware performance in real-time, and integrates driver-attention simulation tools.",
    functionalities: [
      { title: "HMI World Editor", desc: "Drag-and-drop workspace to layout screens, link menu transitions, and import 3D models." },
      { title: "Code Gen Compiler", desc: "Automates translation of graphical layers into clean C++ code, minimizing manual code updates." },
      { title: "Hardware Profiling Console", desc: "Tracks frame rates, CPU usage, and GPU rendering times on connected target ECUs." },
      { title: "UX Distraction Evaluator", desc: "Runs algorithmic attention simulations, highlighting zones that require excessive eyes-off-road time." },
      { title: "Translation Manager", desc: "Coordinates translation files across 40+ languages, adjusting layout sizes for varying text lengths." },
      { title: "Version Control Integration", desc: "Links design files with Git repositories, enabling collaborative branch tracking and merge controls." }
    ],
    valueDelivery: "Our Automotive UX Design software delivers value by reducing HMI development cycles by up to 45% and eliminating code rewrite errors. It ensures that digital dashboards maintain a smooth 60fps rendering rate, enhancing customer perception of quality. By simulating driver eye gaze, it helps design safer interfaces that reduce distraction risks and comply with international safety regulations. Additionally, it allows OEMs to quickly launch custom visual themes, keeping their cabins modern throughout the vehicle lifecycle.",
    workflow: [
      { step: 1, title: "UI Mockup Creation", desc: "Design dashboard layouts, import 3D assets, and configure menu transitions in the visual editor." },
      { step: 2, title: "Distraction Assessment", desc: "Run the attention simulator to check if buttons or text require too much driver focus." },
      { step: 3, title: "HIL Stream Test", desc: "Connect the developer board and stream the UI layout to test rendering speeds on actual silicon." },
      { step: 4, title: "Production Code Generation", desc: "Compile the visual layout into optimized C++/Qt or Android code packages." },
      { step: 5, title: "Embedded Deployment", desc: "Integrate the generated code with the vehicle's AUTOSAR stack and flash the gateway ECUs." }
    ],
    process: [
      { step: 1, title: "Install UX Studio", desc: "Set up the HMI design editor and configure connections to target developer boards." },
      { step: 2, title: "Define Project Screens", desc: "Define screen counts, resolutions, aspect ratios, and target microcontrollers." },
      { step: 3, title: "Layout Core Dashboard UI", desc: "Drag and drop speed gauges, battery status bars, navigation layers, and media menus." },
      { step: 4, title: "Set Up Dynamic Logic", desc: "Map vehicle telemetry signals (e.g., speed, temperature) to visual gauge movements." },
      { step: 5, title: "Profile Hardware Rendering", desc: "Stream layouts to target boards, checking frame rates and optimizing graphics pipelines." },
      { step: 6, title: "Generate Production Code", desc: "Export the compiled code files, completing the HMI software build for integration." }
    ],
    architecture: "The design suite features a local client-desktop application linked with a cloud collaboration engine. The local client uses a hardware-accelerated 3D editor to manage layouts, while the cloud backend coordinates design version control and runs machine learning distraction analysis. Generated code is structured to support hypervisor separation, separating the safety cluster code from multimedia UI files.",
    techArch: {
      frontend: "Native desktop application built with C++, OpenGL, and Qt, featuring a drag-and-drop workspace.",
      backend: "Cloud collaboration and optimization service developed in Go and Node.js.",
      gateway: "Secured load balancer managing design file synchronization and API access controls.",
      processing: "Custom compiler translating visual elements into structured QML, C++, and Android layout files.",
      ai_ml: "Driver attention prediction networks trained in Python, analyzing UI images to identify visual clutter.",
      edge: "Optimized QML rendering engines executing graphics on target automotive silicon.",
      security: "Encrypted design files, secure Git SSH connections, and role-based workspace permissions.",
      cloud: "AWS infrastructure leveraging Amazon RDS (PostgreSQL), S3 for design assets, and EKS for worker nodes.",
      integration: "API bridges linking the design suite with PLM tools like Teamcenter and code compilers.",
      monitoring: "System performance trackers, memory leak analyzers, and compile error checkers."
    },
    technologies: {
      languages: "C++, Python, QML, JavaScript",
      frameworks: "Qt, Android OS, React, Node.js",
      databases: "PostgreSQL, RocksDB (local cache)",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow, OpenCV (for attention modeling)",
      iot: "Automotive HMI Boards (NXP i.MX8, Qualcomm SA8155P)",
      protocols: "gRPC, SOME/IP, HTTPS, WebSockets",
      devops: "Docker, Kubernetes, CMake, Git",
      cybersecurity: "AES-256, OAuth 2.0, Secure Key Vaults"
    },
    realWorld: [
      { title: "Electric SUV Dashboard Prototyping", desc: "Designed a clean 3D gauge cluster and touch interface for a new EV SUV, optimizing rendering to 60fps." },
      { title: "Windshield HUD Graphics Design", desc: "Created and calibrated dynamic navigation graphics for a holographic HUD windshield display." },
      { title: "Fleet Truck Diagnostic Cluster", desc: "Designed a rugged, high-contrast HMI display for logistics trucks, prioritizing mechanic DTC alerts." },
      { title: "Autonomous Shuttle Status UI", desc: "Created passenger informational displays for an autonomous shuttle, showing route progress and sensor maps." },
      { title: "Luxury Sedan Multi-Screen Theme", desc: "Designed a unified visual theme spanning passenger screens, gauge clusters, and rear seat controllers." },
      { title: "Off-Road Clinometer HUD", desc: "Created 3D pitch/roll gauges that update dynamically based on vehicle roll sensors." },
      { title: "Electric Delivery Van HMI Sync", desc: "Designed delivery routing displays and cargo compartment temperature alerts for logistics drivers." },
      { title: "Airport Support Tug Gauges", desc: "Created simple, high-visibility dashboards for airport support vehicles, maximizing durability." }
    ],
    benefits: [
      { title: "Rapid UI Iteration", desc: "Reduces HMI design cycles by up to 45%, accelerating new vehicle cockpit testing." },
      { title: "Hardware-Optimized Rendering", desc: "Ensures HMI screens render at a smooth 60fps, preventing lag on low-power chips." },
      { title: "Safe Interface Layouts", desc: "Identifies driver distraction risks during the design phase, improving safety compliance." },
      { title: "Clean Code Generation", desc: "Compiles designs directly to C++/Qt and Android code, eliminating manual programming errors." },
      { title: "Branded Digital Cocpkit", desc: "Allows OEMs to design unique interfaces that distinguish their brands in the marketplace." }
    ],
    challenges: [
      { title: "Silicon Performance Limits", desc: "Optimizing complex 3D transitions to run without lag on cheap, low-power microcontrollers." },
      { title: "Screen Curvature Distortion", desc: "Designing graphics that display without distortion on curved gauge panels." },
      { title: "Multi-Language Text Wrapping", desc: "Ensuring that long translated words do not break UI button boundaries or obscure gauges." },
      { title: "Safety Cluster Separation", desc: "Maintaining strict software isolation between safety gauges and consumer multimedia systems." }
    ],
    future: "The future of automotive UX design tools lies in generative 3D layouts and brain-computer interface integrations. HMI layouts will adapt in real-time to driver fatigue levels, moving buttons closer and increasing text size when driver attention drifts. Generative AI will allow designers to create custom visual styles using natural language commands, exporting 3D animations instantly. Additionally, systems will support transparent, full-windshield holographic projections, turning the entire cabin glass into an interactive screen.",
    impact: "This software transforms how automotive cabins are designed, closing the gap between art and engineering. By enabling rapid prototyping and safe layout testing, it helps manufacturers build digital cockpits that are intuitive, safe, and ready for autonomous transportation.",
    conclusion: "Our Automotive User Experience (UX) Design Software offers a powerful, integrated solution for modern HMI development. By combining 3D editors with code generation and hardware validation, we help OEMs build cockpits that define the future of driving."
  },
  p17: {
    id: 17,
    title: "Car-sharing and Ride-hailing Platform Solutions",
    shortSummary: "Enterprise backend platform and API suite for real-time driver matching, dynamic fare algorithms, fleet scheduling, and keyless mobile access.",
    intro: [
      "The growth of shared mobility has transformed urban transportation. Operating a profitable shared fleet requires balancing vehicle dispatch, driver allocations, passenger bookings, dynamic pricing, and vehicle security. Our Car-sharing and Ride-hailing Platform Solutions is an enterprise-grade cloud system designed for mobility operators, ride-hailing startups, and car rental networks.",
      "The platform provides high-performance APIs, driver matching engines, dynamic fare algorithms, and keyless vehicle access systems. By integrating directly with onboard telematics, the software allows passengers to locate and unlock vehicles using their smartphones. It coordinates routes, calculates vehicle pick-up times, processes payments, and monitors vehicle diagnostic states, providing a complete platform for shared mobility operations."
    ],
    features: [
      { title: "Real-Time Driver Matcher", desc: "Pairs passengers with drivers in milliseconds using geospatial algorithms that minimize passenger wait times." },
      { title: "Dynamic Fare Engine", desc: "Adjusts booking prices in real-time based on ride demand, traffic, weather, and vehicle availability." },
      { title: "Keyless Mobile Unlock", desc: "Interfaces with vehicle telematics to allow keyless locking, unlocking, and starting via passenger smartphones." },
      { title: "Automated Fleet Dispatcher", desc: "Schedules shared vehicles, routing them to high-demand areas to maximize daily utilization." },
      { title: "Secure Payment Orchestrator", desc: "Processes passenger payments, manages ride discount codes, and automates driver payout transfers." },
      { title: "Driver Performance Monitor", desc: "Scores drivers based on speed limits, braking habits, and passenger rating feedback." },
      { title: "EV Battery State Optimizer", desc: "Routes low-battery shared vehicles to charging depots automatically, scheduling charge slots." },
      { title: "Tamper & Theft Protection", desc: "Monitors vehicle sensors, flagging unauthorized engine starts and tracking stolen vehicles via GPS." }
    ],
    background: "Early shared mobility platforms operated on simple static bookings: reserve a car, pick it up at a depot, and return it. The growth of cell networks and GPS enabled free-floating car-sharing and real-time ride-hailing. Operating these networks is complex, requiring real-time tracking of thousands of assets, matching supply with demand, and preventing vehicle thefts. Furthermore, ensuring a clean, operational fleet requires tracking diagnostic states and scheduling cleaning crews dynamically.",
    problem: "Mobility operators must handle high transaction volumes during peak transit hours. Drivers and passengers expect instant matching, accurate pickup ETAs, and fast payment processing. Additionally, vehicle security is a concern: enabling keyless smartphone access requires secure, authenticated pathways to prevent remote hacker entry. Designers need a platform that scales across millions of users, maintains high security, and integrates with vehicle systems.",
    functionalities: [
      { title: "Geospatial Matching Engine", desc: "Processes user coordinates, search ranges, and driver locations to calculate optimal ride matches." },
      { title: "Dynamic Price Calculator", desc: "Adjusts fare structures based on supply-demand curves and congestion metrics." },
      { title: "Keyless Access Controller", desc: "Generates secure digital key tokens, sending them to passenger apps to unlock vehicles." },
      { title: "Telemetry Sync Gateway", desc: "Ingests location logs, battery levels, fuel states, and DTC errors from vehicle modems." },
      { title: "Driver Payout Portal", desc: "Calculates weekly driving hours and mileage, transferring payouts to driver bank accounts." },
      { title: "Ride Incident Logger", desc: "Records vehicle accelerometer data during active rides to log accidents or hard driving events." }
    ],
    valueDelivery: "Our Car-sharing and Ride-hailing platform delivers value by maximizing fleet utilization rates by up to 25%, increasing operator profitability. It reduces passenger wait times by 30% through intelligent driver routing. The keyless access system eliminates physical key handovers, lowering operational labor costs. By tracking vehicle health in real-time, it schedules cleanings and repairs before issues scale, preserving fleet asset values and passenger trust.",
    workflow: [
      { step: 1, title: "Ride Request Ingest", desc: "A passenger inputs their destination on the app, triggering a fare estimate and driver search." },
      { step: 2, title: "Driver Match Search", desc: "The matching engine locates the nearest driver, sending them the dispatch details via their app." },
      { step: 3, title: "Unlock & Start (Car Share)", desc: "For car-sharing, the passenger walks to the vehicle and sends an unlock command via Bluetooth or cellular." },
      { step: 4, title: "Ride Tracking & Diagnostics", desc: "The platform tracks coordinates, speeds, and vehicle health throughout the ride journey." },
      { step: 5, title: "Payment & Completion", desc: "When the ride ends, the vehicle locks, the payment is processed, and driver safety scores update." }
    ],
    process: [
      { step: 1, title: "Deploy Platform Backend", desc: "Deploy the database and core services in the cloud, setting up API endpoints." },
      { step: 2, title: "Install Keyless Telematics", desc: "Install keyless lock telematics units inside fleet vehicles, linking them with locks and ignition." },
      { step: 3, title: "Configure Matching Rules", desc: "Set matching search radiuses, driver selection limits, and peak pricing rules." },
      { step: 4, title: "Integrate Payment Processing", desc: "Connect Stripe or local payment providers, enabling credit card processing and billing." },
      { step: 5, title: "Launch Driver & Rider Apps", desc: "Publish rider and driver apps to mobile stores, linking them to the cloud backend." },
      { step: 6, title: "Go Live & Operations", desc: "Launch the operator console, monitor shared assets on the map, and optimize driver dispatches." }
    ],
    architecture: "The platform is built on a scalable cloud-native microservices architecture. A high-performance geospatial matching service runs on optimized database instances, while telematics services manage WebSocket links with vehicle modems. Digital key tokens are managed by a secure cryptography service, ensuring keys are signed and verified before unlocking doors.",
    techArch: {
      frontend: "Mobile passenger and driver apps built with React Native/TypeScript, combined with a React-based operator dashboard.",
      backend: "High-performance matching and dispatch microservices developed in Go, hosted in Kubernetes containers.",
      gateway: "Secured load balancer managing user API calls, telematics packets, and WebSocket lines.",
      processing: "Apache Kafka routing location updates to Apache Spark for real-time dispatch and price analysis.",
      ai_ml: "Predictive demand models forecasting ride volume across city zones using historic weather and event calendars.",
      edge: "Mobile SDKs executing local Bluetooth lock/unlock codes when cell connections are unavailable.",
      security: "Hardware-security modules managing digital key tokens, SSL/TLS data transfer, and PCI-DSS compliance.",
      cloud: "AWS infrastructure leveraging Amazon DynamoDB for live positions, PostgreSQL for transactions, and EKS for scaling.",
      integration: "API integrations for Google Maps, Twilio SMS, Stripe payments, and vehicle manufacturer clouds.",
      monitoring: "Datadog infrastructure tracking, Promtail and Loki log indexing, and automated alerts for system lag."
    },
    technologies: {
      languages: "Go, TypeScript, Python, Swift, Kotlin",
      frameworks: "React Native, Node.js, Spring Boot",
      databases: "PostgreSQL, Amazon DynamoDB, Redis",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow, Ray RLlib, Scikit-learn",
      iot: "Keyless OBD-II controllers, GPS trackers, BLE beacons",
      protocols: "WebSockets, HTTPS, gRPC, Bluetooth LE, MQTT",
      devops: "Docker, Kubernetes, Terraform, CircleCI",
      cybersecurity: "PCI-DSS, mTLS, AES-256, Secure Key Tokens"
    },
    realWorld: [
      { title: "Free-Floating Car-Share Deployment", desc: "Managed 800 shared cars in a metropolitan center, enabling keyless unlock and booking." },
      { title: "Urban Ride-Hailing Matcher", desc: "Matched passengers with 2,000 active drivers, reducing pickup times by 4 minutes." },
      { title: "Corporate Car-Sharing Fleet", desc: "Shared employee shuttle vehicles across corporate campuses, tracking vehicle utilization." },
      { title: "EV Rideshare Charging Optimizer", desc: "Monitored EV battery states, routing low cars to depot fast chargers between rides." },
      { title: "Peer-to-Peer Rental Unlock", desc: "Enabled peer-to-peer car sharing, generating secure digital keys for passenger unlock." },
      { title: "Municipal Vanpool Coordination", desc: "Coordinated municipal commuter vanpools, optimizing passenger drop-off points." },
      { title: "Airport Car-Rental Automation", desc: "Automated airport car collection, letting drivers bypass counter queues and unlock cars." },
      { title: "University Micro-Mobility Fleet", desc: "Managed a fleet of shared neighborhood electric shuttles on a university campus." }
    ],
    benefits: [
      { title: "Maximized Fleet Utilization", desc: "Saves vehicle downtime by routing cars to high-demand areas, raising revenue by up to 25%." },
      { title: "Faster Passenger Match", desc: "Pairs drivers with passengers in milliseconds, reducing pickup times by 30%." },
      { title: "Lower Labor Overhead", desc: "Keyless locking systems eliminate physical keys, reducing fleet management staff costs." },
      { title: "Enhanced Asset Security", desc: "Tracks locations and engine status, preventing vehicle theft and detecting mechanical abuse." },
      { title: "Scalable Operations API", desc: "Allows operators to manage thousands of users and vehicles from a single system." }
    ],
    challenges: [
      { title: "High Demand Peak Loads", desc: "Processing thousands of ride requests and driver updates during morning transit rushes." },
      { title: "Offline Unlock Failures", desc: "Ensuring passenger phones can unlock vehicles in underground garages without cellular signals." },
      { title: "Dynamic Pricing Stability", desc: "Preventing fare calculation spikes during weather events that could alienate passengers." },
      { title: "Varying Telematics Hardware", desc: "Integrating the platform with different keyless vehicle controller modules." }
    ],
    future: "The future of shared mobility lies in autonomous robotaxi networks and peer-to-peer virtual microgrids. Fleet operators will deploy driverless vehicle fleets that navigate to bookings, clean themselves, and manage their own charging. Users will subscribe to dynamic mobility-as-a-service (MaaS) plans that combine trains, buses, and autonomous rides into a single subscription. Additionally, shared vehicles will return energy to the grid (V2G) when parked at depots during peak rates.",
    impact: "This platform is crucial for reducing urban car ownership, lowering city traffic density and parking congestion. By making shared transit accessible and affordable, it supports the transition to sustainable cities and prepares transportation networks for autonomous vehicle integration.",
    conclusion: "Our Car-sharing and Ride-hailing Platform Solutions deliver the scalable, secure, and data-driven platform required to operate modern shared mobility networks. By combining geospatial matching with keyless access, we help operators scale and succeed."
  },
  p18: {
    id: 18,
    title: "In-Car Health Monitoring Applications",
    shortSummary: "Safety-critical software monitoring driver biometrics, heart rate patterns, eye gaze, and stress indices to detect driver fatigue and medical emergencies.",
    intro: [
      "Driver fatigue, sudden medical emergencies, and stress are significant factors in highway collisions. Traditional safety systems only react after a vehicle drifts out of its lane or crashes. Our In-Car Health Monitoring Applications platform is an enterprise-grade safety software stack designed to monitor driver biometrics, cognitive focus, and stress in real-time.",
      "The system utilizes inputs from cabin cameras, steering wheel biometrics, seat-cushion sensors, and wearable devices. By running advanced neural network models on the edge, the platform calculates heart rate variability, respiration cycles, eye blink duration, and stress levels. If fatigue or a medical emergency is detected, the software warns the driver, adjusts vehicle climate, or initiates safe autonomous shoulder stops, preventing accidents."
    ],
    features: [
      { title: "Dynamic Heart Rate Monitor", desc: "Tracks heart rate variability using steering wheel sensors or wearable device integrations." },
      { title: "Driver Fatigue Eye Detector", desc: "Monitors cabin camera feeds to analyze blink frequency and eye closure duration." },
      { title: "Respiration Rate Tracker", desc: "Estimates driver breathing patterns using steering column and seat vibration sensors." },
      { title: "Cognitive Focus Evaluator", desc: "Tracks driver eye gaze and head pose to identify distraction from mobile phones or passenger screens." },
      { title: "Stress Index Analyzer", desc: "Fuses heart rate variability and galvanic skin responses to estimate driver stress thresholds." },
      { title: "Emergency Autonomous Stop", desc: "Triggers automated parking routines if the driver suffers a medical event (e.g., loss of consciousness)." },
      { title: "Cabin Mood Customization", desc: "Adjusts ambient lighting, music tempo, and climate cooling to calm stressed or alert fatigued drivers." },
      { title: "Wearable Device Data Sync", desc: "Connects with user smartwatches to import historical biometric data and baseline health scores." }
    ],
    background: "As commutes grow longer and populations age, the incidence of medical emergencies while driving has increased. Safe driving requires continuous driver attention. However, cabin distractions, sleep apnea, and fatigue cause hundreds of thousands of accidents annually. While ADAS tracks lane boundaries, it cannot detect when a driver is experiencing a heart attack or has fallen asleep. Solving this requires active biometric monitoring systems integrated with vehicle safety controllers.",
    problem: "Measuring biometrics in a moving vehicle is challenging. Vehicle vibrations, shifting light levels, and varied driver seating positions create noisy inputs. For instance, cabin cameras must track pupils in direct sunlight or dark night settings, while steering sensors must filter out road vibrations. Developers must build lightweight edge networks that process these inputs in real-time, avoiding false alarms while ensuring driver privacy.",
    functionalities: [
      { title: "Biometric Ingestion Gateway", desc: "Pipes data from steering wheel sensors, seat arrays, and cabin cameras to the local processor." },
      { title: "Computer Vision Eye Tracker", desc: "Runs facial landmark algorithms to track driver eye gaze, blink rates, and pupil sizes." },
      { title: "Biometric Signal Filter", desc: "Filters road noise and vehicle vibration from raw heartbeat and respiration inputs." },
      { title: "Driver State Classifier", desc: "Uses machine learning to classify driver state (focused, tired, stressed, incapacitated)." },
      { title: "Safety Action Manager", desc: "Sends alerts to dashboard clusters and initiates ADAS brakes during critical events." },
      { title: "Cabin Sync Interface", desc: "Coordinates adjustments to climate control, audio, and cabin lighting based on driver stress." }
    ],
    valueDelivery: "Our In-Car Health Monitoring software delivers value by preventing collisions caused by driver fatigue and medical emergencies. It enables passenger car OEMs to achieve higher NCAP safety ratings, protecting passengers. For commercial trucking fleets, the system reduces accident rates, lower insurance premiums, and protects drivers. It provides peace of mind for older drivers and their families, ensuring that the vehicle can respond during a medical crisis.",
    workflow: [
      { step: 1, title: "Sensor Capture", desc: "Cabin cameras capture facial video, steering sensors read heart rate data, and seat arrays monitor breathing." },
      { step: 2, title: "Biometric Noise Filtering", desc: "Edge processors filter out vehicle vibrations and light changes from raw sensor streams." },
      { step: 3, title: "Driver State Classification", desc: "Neural networks analyze eye blinks, heart rate patterns, and stress indexes to classify driver health." },
      { step: 4, title: "Cabin Correction", desc: "If mild fatigue is detected, the cabin system blows cool air, plays upbeat audio, and warns the driver." },
      { step: 5, title: "Emergency ADAS Stop", desc: "If the driver becomes unresponsive, the system alerts surrounding vehicles and brings the car to a safe shoulder stop." }
    ],
    process: [
      { step: 1, title: "Position Cabin Cameras", desc: "Install infrared cameras on the steering column or rearview mirror to capture the driver's face." },
      { step: 2, title: "Integrate Biometric Sensors", desc: "Embed heart rate and skin response sensors in the steering wheel wrap." },
      { step: 3, title: "Deploy Edge SDK", desc: "Compile and deploy the biometric processing libraries onto the vehicle's interior ECU." },
      { step: 4, title: "Train Driver Baselines", desc: "Have the driver complete basic calibration loops, recording baseline blink and heart rate metrics." },
      { step: 5, title: "Link ADAS Controllers", desc: "Configure CAN/Ethernet routes to allow the health stack to send braking requests to the ADAS processor." },
      { step: 6, title: "Go Live & Safe Drive", desc: "Launch the health monitoring application, tracking driver vitals and warning of fatigue." }
    ],
    architecture: "The platform features an embedded, safety-critical architecture running on the vehicle's cockpit controller. Biometric processing and classification models run on edge processors to ensure low latency and driver privacy, with zero biometric data sent to the cloud. Aggregated health reports can be uploaded to cloud databases for fleet logs, while emergency alerts route directly to first responders.",
    techArch: {
      frontend: "Dashboard widget built with React, displaying driver focus levels, heart rate metrics, and safety alerts.",
      backend: "Embedded C++ services processing sensor data, coordinating cabin adjustments via CAN/LIN drivers.",
      gateway: "Internal bus controller managing SOME/IP communications over automotive Ethernet.",
      processing: "Optimized image processing modules running on the GPU/NPU to analyze driver facial parameters.",
      ai_ml: "Convolutional neural networks (CNNs) for facial landmark tracking and LSTM networks for predicting fatigue.",
      edge: "Highly optimized C++ binaries running directly on cockpit microcontrollers.",
      security: "Strict data isolation policies, secure boot validations, and cryptographic encryption for driver health logs.",
      cloud: "Optional AWS-hosted cloud database storing anonymized fleet health scores and system analytics.",
      integration: "Adaptive AUTOSAR interfaces connecting the health stack to ADAS brakes and body control units.",
      monitoring: "Real-time watchdog monitors tracking eye-tracking camera feeds and sensor connections."
    },
    technologies: {
      languages: "C++, C, Python",
      frameworks: "Adaptive AUTOSAR, OpenFace, OpenCV, PyTorch",
      databases: "SQLite (local embedded configuration database)",
      cloud_platforms: "AWS, Azure (for fleet aggregation databases)",
      ai_ml_tools: "TensorFlow Lite, TensorRT (for edge execution)",
      iot: "Infrared Cabin Cameras, Heart Rate steering grips, Seat sensor grids",
      protocols: "CAN, SOME/IP, HTTPS, Bluetooth LE",
      devops: "Docker, Yocto Project, CMake, Jenkins",
      cybersecurity: "Local Data Encryption, Secure Boot, WAF, JWT"
    },
    realWorld: [
      { title: "Long-Haul Trucker Fatigue Monitor", desc: "Monitored long-haul truck drivers, warning them of fatigue during night shifts and preventing lane drifts." },
      { title: "Elderly Driver Heart Monitor", desc: "Tracked heart rate variability in older sedan drivers, alerting passengers during anomalies." },
      { title: "Delivery Van Stress Reduction", desc: "Monitored urban delivery drivers, adjusting cabin climate and music to reduce stress in congestion." },
      { title: "Autonomous Shuttle Emergency Stop", desc: "Monitored the backup safety driver in an autonomous shuttle, initiating stops during unresponsiveness." },
      { title: "Taxi Fleet Health Tracker", desc: "Monitored taxi drivers, logging average shift fatigue and suggesting rest stops." },
      { title: "Heavy Machinery Operator Safety", desc: "Tracked dump truck operators at a mining site, preventing accidents due to fatigue." },
      { title: "Public Transit Bus Driver Monitor", desc: "Monitored transit bus drivers, warning dispatchers if a driver fell asleep at the wheel." },
      { title: "Commuter Sedan Focus Assist", desc: "Identified mobile phone distractions in commuter cars, playing audio alerts to redirect attention." }
    ],
    benefits: [
      { title: "Prevented Fatigue Accidents", desc: "Detects driver sleepiness and fatigue early, preventing lane drifts and collisions." },
      { title: "Emergency Medical Action", desc: "Initiates automated parking stops if a driver becomes unconscious, saving lives." },
      { title: "Reduced Driver Stress", desc: "Adjusts cabin environments based on stress indices, improving driver comfort." },
      { title: "Achieves NCAP Safety Ratings", desc: "Helps OEMs meet strict driver monitoring regulations, securing 5-star ratings." },
      { title: "Absolute Driver Privacy", desc: "Processes biometric calculations locally at the edge, preventing location or health leaks." }
    ],
    challenges: [
      { title: "Varying Driver Features", desc: "Ensuring eye tracking works accurately across different ethnicities, ages, and sunglasses." },
      { title: "Noisy Sensor telemetry", desc: "Filtering out vehicle vibration and bumps from delicate heartbeat and respiration seat grids." },
      { title: "Sudden Light Changes", desc: "Maintaining eye tracking accuracy during rapid transitions (e.g., entering tunnels at speed)." },
      { title: "Safety Action Integration", desc: "Designing safe autonomous stopping algorithms that pull the vehicle over without causing crashes." }
    ],
    future: "The future of in-car health monitoring lies in non-contact biometric mapping and predictive wellness forecasting. Future vehicles will use radio frequency sensors to monitor the vitals of all passengers simultaneously, adjusting zone climate and seat massagers automatically. AI models will predict onset fatigue hours before it happens, advising drivers on optimal travel schedules. Additionally, integration with virtual telemedicine networks will allow vehicles to connect drivers with doctors during on-road health events.",
    impact: "This platform turns vehicles into proactive health shields, protecting drivers from their own physical limitations. By integrating biometric insight with vehicle control, it improves transport safety, prevents medical collisions, and shapes the future of driver wellness.",
    conclusion: "Our In-Car Health Monitoring Applications provide the safety framework required for the connected cabin. By combining edge computer vision with steering and seat biometrics, we help OEMs build vehicles that actively protect their drivers."
  },
  p19: {
    id: 19,
    title: "Automotive Manufacturing Process Simulation Software",
    shortSummary: "Enterprise virtual factory platform simulating assembly line dynamics, robotic welding workflows, paint shop processes, and logistics flows.",
    intro: [
      "Setting up and optimizing automotive assembly lines requires balancing massive capital investments, robotic configurations, material logistics, and human operations. Design errors in factory layouts or robotic sequences can result in bottleneck delays, quality defects, and millions in repair costs. Our Automotive Manufacturing Process Simulation Software is an enterprise-grade virtual factory platform designed for manufacturing engineers, factory planners, and production managers.",
      "The platform constructs a high-fidelity 3D digital twin of the entire automotive assembly plant. Using physics-based modeling and discrete event simulation, the software simulates robotic welding paths, paint shop thermal processes, AGV logistics routing, and ergonomic human assembly workflows. It optimizes factory throughput, identifies production bottlenecks before lines are built, reduces cycle times, and accelerates factory launch schedules."
    ],
    features: [
      { title: "3D Digital Twin Factory", desc: "Renders complete plant layouts, including production lines, robotic cells, and material buffers in 3D." },
      { title: "Robotic Path Optimizer", desc: "Simulates and plans collision-free welding, stamping, and assembly paths for industrial robots." },
      { title: "Discrete Event Simulation", desc: "Models production flows, predicting cycle times, throughput barriers, and buffer capacities." },
      { title: "Paint Shop Thermal Model", desc: "Simulates airflows and temperatures inside curing ovens to ensure paint quality and reduce energy use." },
      { title: "AGV Logistics Router", desc: "Optimizes path planning and charging schedules for automated guided vehicles moving parts." },
      { title: "Ergonomic Human Simulation", desc: "Evaluates assembly tasks, predicting worker muscle strain, reach limits, and safety metrics." },
      { title: "PLC Virtual Commissioning", desc: "Integrates with PLC hardware (e.g., Siemens or Rockwell) to test automation programs before go-live." },
      { title: "Production Scheduling Solver", desc: "Uses optimization models to calculate production schedules for mixed-model vehicle assembly." }
    ],
    background: "Automotive factories are among the most complex engineering systems in the world, containing thousands of coordinated robots, conveyors, and human operators. Historically, factory design was a slow, manual process using 2D drawings. Layout errors—such as a robot arm colliding with a structural pillar or a conveyor queue overflowing—were only caught during physical installation, causing expensive redesigns and product launch delays. Solving these challenges requires an integrated virtual factory platform that can simulate mechanical dynamics, logistics flows, and human processes in a unified 3D environment.",
    problem: "Manufacturing simulation is bottlenecked by the complexity of importing massive CAD layouts containing millions of parts and coordinating different automation programming standards. Converting CAD files into simulation models is time-consuming. Additionally, simulating dynamic physics-based processes (like thermal paint curing or structural stamping) requires significant computing power. Planners need a platform that automates layout import, runs simulation solvers on the cloud, and links virtual models with real PLC controllers.",
    functionalities: [
      { title: "Layout Import Processor", desc: "Automates cleanup and importing of large factory CAD layouts, maintaining kinematic structures." },
      { title: "Robotic Simulation Engine", desc: "Simulates multi-axis robot movements, calculating cycle times and joint limits." },
      { title: "Discrete Event Flow Simulator", desc: "Tracks parts as they pass through factory stations, modeling bottlenecks and queues." },
      { title: "Virtual PLC Bridge", desc: "Establishes OPC-UA connections to link virtual factory models with physical automation controllers." },
      { title: "Ergonomic Kinematics Evaluator", desc: "Simulates virtual human workers, scoring task fatigue and posture safety." },
      { title: "Factory Analytics Panel", desc: "Provides dashboard reports on plant throughput, station utilization, and energy consumption." }
    ],
    valueDelivery: "Our Manufacturing Simulation platform delivers value by reducing factory setup times by up to 25% and cutting engineering design rework by 70%. It optimizes robotic paths to reduce cycle times by 12%, increasing daily vehicle output without adding hardware. By simulating ergonomics, it lowers worker injury rates by 30%, reducing compensation claims and improving factory morale. Furthermore, the virtual PLC commissioning avoids coding errors, shortening factory launch schedules by months.",
    workflow: [
      { step: 1, title: "CAD Import", desc: "Import factory layouts, robot models, and vehicle assembly parts into the 3D visual workspace." },
      { step: 2, title: "Process Definition", desc: "Define assembly sequences, robotic task paths, and worker workstation tasks." },
      { step: 3, title: "Virtual commissioning", desc: "Connect the virtual factory model to PLC controllers, matching signal codes with simulated hardware actions." },
      { step: 4, title: "Simulation Run", desc: "Execute the simulation, running mechanical dynamics and logistics flows to track cycle times and bottlenecks." },
      { step: 5, title: "Optimization & Launch", desc: "Analyze performance reports, optimize robotic paths and layouts, and export files to program physical robots." }
    ],
    process: [
      { step: 1, title: "Install Simulation Client", desc: "Set up the factory simulation software and configure access to cloud computing clusters." },
      { step: 2, title: "Import Factory CAD Files", desc: "Upload plant drawings, conveyor specifications, and robotic workstation geometries." },
      { step: 3, title: "Define Robotic Task Paths", desc: "Input coordinates for welding, painting, and assembly robots, setting up path sequences." },
      { step: 4, title: "Configure Flow Constraints", desc: "Set buffer capacities, conveyor speeds, shift patterns, and human assembly times." },
      { step: 5, title: "Connect PLC Programs", desc: "Link the simulation platform with PLC automation code via secure OPC-UA network gateways." },
      { step: 6, title: "Run Batch Flow Tests", desc: "Run simulations under varying production scenarios to verify factory output before building physical lines." }
    ],
    architecture: "The platform features a hybrid cloud architecture. A high-performance 3D visualizer runs on engineering PCs, while the backend runs on cloud computing servers. Solvers are executed in parallel across cloud nodes to compute massive logistics flows, while the integration layer connects to physical PLCs using secure industrial standards.",
    techArch: {
      frontend: "Native C++/OpenGL desktop editor for fluid 3D factory visualization, combined with a React web reporting portal.",
      backend: "High-performance simulation queue managers written in Go, running in cloud containers.",
      gateway: "Secured load balancer managing file transfers and user API calls.",
      processing: "Physics-based solvers written in C++ and CUDA, optimized for high-performance GPU nodes.",
      ai_ml: "Reinforcement learning models trained to optimize robotic welding sequences and minimize movement energy.",
      edge: "Industrial OPC-UA client software deployed inside factory gateway networks to link simulations with physical PLCs.",
      security: "AES-256 file encryption, secure VPN tunnels connecting factories to cloud nodes, and role-based access controls.",
      cloud: "AWS infrastructure leveraging GPU instances, Amazon RDS for transaction databases, and S3 for assets.",
      integration: "API bridges linking with ERP software like SAP and PLM tools like Teamcenter.",
      monitoring: "Solver queue monitors, compile error logs, and automated diagnostics for connected PLCs."
    },
    technologies: {
      languages: "C++, Go, Python, Java",
      frameworks: "OpenGL, React, OPC-UA, Spring Boot",
      databases: "PostgreSQL, Amazon S3, Redis",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow, Ray RLlib (for path optimization)",
      iot: "Programmable Logic Controllers (PLCs), Industrial Robots, AGV sensors",
      protocols: "OPC-UA, Modbus, TCP/IP, gRPC, HTTPS",
      devops: "Docker, Kubernetes, Terraform, Git",
      cybersecurity: "IPSec VPN, AES-256 encryption, TLS 1.3"
    },
    realWorld: [
      { title: "Electric Vehicle Assembly Line Optimization", desc: "Modeled a new EV assembly line, optimizing conveyor layouts and increasing daily throughput by 15%." },
      { title: "Robotic Welding Path Planning", desc: "Optimized welding paths for 45 industrial robots, reducing joint wear and cycle times by 10%." },
      { title: "Paint Shop Curing Oven Simulation", desc: "Simulated air temperature zones inside a paint curing oven, reducing energy use by 18%." },
      { title: "AGV Parts Delivery Coordination", desc: "Optimized routing for 30 automated guided vehicles, avoiding factory floor gridlocks." },
      { title: "Human Assembly Ergonomic Safety", desc: "Simulated worker posture during battery pack assembly, reducing tasks that cause muscle strain." },
      { title: "New SUV Factory Virtual Commissioning", desc: "Tested PLC control code against virtual models, resolving 80 code errors before building physical lines." },
      { title: "Stamping Press Logistics Optimization", desc: "Optimized metal coil delivery schedules to high-speed stamping presses, keeping lines fed." },
      { title: "Mixed-Model Scheduling Integration", desc: "Coordinated schedules for a line building both gas and electric cars, keeping throughput stable." }
    ],
    benefits: [
      { title: "Accelerated Plant Launch", desc: "Cuts factory setup times by up to 25%, helping OEMs launch new vehicle lines faster." },
      { title: "Increased Daily Output", desc: "Optimizes robotic paths and logistics layouts, increasing throughput by 12% without hardware upgrades." },
      { title: "Lower Redesign Costs", desc: "Identifies robot collisions and layout bottlenecks in simulation, avoiding physical reconstruction costs." },
      { title: "Improved Ergonomic Safety", desc: "Reduces work tasks that cause human muscle fatigue, lowering factory injury rates by 30%." },
      { title: "Secured Automation Code", desc: "Validates PLC code against virtual simulations, preventing hardware damage during factory start-up." }
    ],
    challenges: [
      { title: "Massive Model Loading Limits", desc: "Importing factory CAD files containing millions of polygons can overwhelm system memory." },
      { title: "CAD Kinematic Mapping", desc: "Rebuilding dynamic joints and sensor behaviors when importing static CAD files." },
      { title: "Varied Automation Protocols", desc: "Connecting simulations with PLC controllers utilizing different industrial networking protocols." },
      { title: "Accurate Human Performance Modeling", desc: "Modeling variations in human work speeds and fatigue levels under different shift schedules." }
    ],
    future: "The future of factory simulation lies in generative AI layouts and autonomous digital twin loops. Factory planners will use natural language commands to automatically generate optimized workstation designs and robotic programs, exporting files instantly. Real-time sensor feeds from real factories will update the digital twin, allowing models to predict equipment failures and optimize schedules. Additionally, integration with virtual reality (VR) headsets will allow managers to tour distant plants virtually, managing layouts remotely.",
    impact: "This platform transforms automotive manufacturing by virtualizing the factory engineering process. By enabling digital layouts and virtual commissioning, it reduces setup costs, lowers worker injury rates, and supports the transition to modular, flexible assembly plants.",
    conclusion: "Our Automotive Manufacturing Process Simulation Software provides the virtual factory platform required to launch modern assembly plants. By delivering robotic path optimization, virtual commissioning, and ergonomic simulations, we help operators scale and succeed."
  },
  p20: {
    id: 20,
    title: "Vehicle Emission Monitoring and Reduction Software",
    shortSummary: "Enterprise cloud platform monitoring real-time vehicle emissions, analyzing exhaust parameters, and optimizing engine maps to reduce carbon footprints.",
    intro: [
      "Environmental regulations and corporate sustainability targets require automotive manufacturers and fleet operators to reduce tailpipe emissions. Relying on laboratory test cycles is insufficient, as real-world driving emissions (RDE) vary based on traffic congestion, payload weights, and weather conditions. Our Vehicle Emission Monitoring and Reduction Software is an enterprise-grade cloud platform designed to track and optimize vehicle emissions in real-time.",
      "The platform aggregates data from exhaust gas sensors, engine controllers, and fuel flow meters via telematics gateways. Using advanced thermal and combustion models, the software calculates real-world carbon dioxide, nitrogen oxides (NOx), and particulate emissions. It provides fleet operators with auditable ESG reporting, and links with engine control modules (ECUs) to dynamically optimize engine maps, reducing overall carbon footprints."
    ],
    features: [
      { title: "Real-World Driving Emissions (RDE) Ingest", desc: "Tracks CO2, NOx, and particulate matter emissions in real-time under physical driving conditions." },
      { title: "ECU Combustion Modeling", desc: "Models cylinder temperature cycles and air-fuel ratios to analyze emission trends." },
      { title: "Dynamic Engine Map Optimization", desc: "Interfaces with engine control modules to adjust injection timing and throttle maps, reducing emissions." },
      { title: "Auditable ESG Reporting Hub", desc: "Generates carbon offset and emission compliance logs that align with international auditing standards." },
      { title: "Catalyst Diagnostic Analyzer", desc: "Monitors catalytic converter efficiency, flagging soot buildup and urea injection anomalies." },
      { title: "Driver Eco-Coaching Dashboard", desc: "Guides drivers to adjust acceleration patterns, reducing fuel use and exhaust emissions." },
      { title: "Urban Zero-Emission Geofencing", desc: "Triggers hybrid vehicles to switch to electric-only mode automatically when entering clean-air zones." },
      { title: "Predictive Exhaust Wear System", desc: "Tracks parameters like exhaust backpressure and temperature to predict filter failures." }
    ],
    background: "Historically, automotive emissions were measured in laboratory testing loops. However, real-world driving emissions (RDE) are often significantly higher due to stop-and-go traffic, elevation profiles, and extreme weather loads. Regulatory bodies are implementing strict RDE audits, requiring manufacturers to prove that vehicles comply with clean-air limits in physical use. Furthermore, fleet operators need verifiable emissions logs to meet corporate carbon reduction targets and secure sustainability financing.",
    problem: "Measuring emissions dynamically is challenging because vehicles cannot carry laboratory gas analyzers. Software must estimate emissions using engine parameters (such as air mass flow, fuel injection profiles, and catalyst temperatures). Additionally, these models must execute in real-time on power-constrained vehicle ECUs, and data must be secured to prevent emissions-cheating software hacks.",
    functionalities: [
      { title: "Engine Metrics Parser", desc: "Extracts exhaust temperatures, fuel flow rates, and sensor metrics from the vehicle CAN bus." },
      { title: "Virtual Emissions Estimator", desc: "Uses physical equations to estimate tailpipe CO2, NOx, and soot output in real-time." },
      { title: "Dynamic ECU Mapper", desc: "Sends target combustion adjustments to engine ECUs to optimize air-fuel ratios." },
      { title: "ESG Carbon Calculator", desc: "Aggregates fuel consumption logs, computing overall fleet greenhouse gas footprints." },
      { title: "Exhaust Diagnostics Module", desc: "Monitors diesel particulate filters (DPF) and SCR catalysts to flag system wear." },
      { title: "Zero-Emission Zone Controller", desc: "Fuses GPS geofences with powertrain controllers to automate hybrid battery use." }
    ],
    valueDelivery: "Our Vehicle Emission Monitoring software delivers value by helping OEMs comply with global RDE regulations, avoiding massive compliance fines and product recalls. Fleet operators cut fuel consumption and emissions by up to 12% through driver eco-coaching and engine optimizations. The platform provides verifiable, auditable carbon offset reports that simplify corporate ESG disclosures. For hybrid vehicle fleets, the zero-emission geofencing ensures compliance with clean-air rules, avoiding city toll fees.",
    workflow: [
      { step: 1, title: "Telemetry Ingestion", desc: "Engine speeds, fuel flows, and exhaust temperatures are read from the CAN bus by telematics units." },
      { step: 2, title: "Emissions Estimation", desc: "The local ECU or edge processor calculates real-time tailpipe emissions using physical combustion models." },
      { step: 3, title: "Cloud Ingestion & Analysis", desc: "Aggregated emissions logs are uploaded to the cloud, where the dashboard tracks daily fleet footprints." },
      { step: 4, title: "Engine Optimization", desc: "The platform calculates optimized engine parameter offsets, sending adjustments to the vehicle ECU." },
      { step: 5, title: "Compliance Logs Export", desc: "Weekly compliance summaries are generated, logging carbon offsets and catalyst health reports." }
    ],
    process: [
      { step: 1, title: "Deploy Telematics Configuration", desc: "Install the diagnostics client onto the vehicle's telematics module or engine control gateway." },
      { step: 2, title: "Configure CAN Databases", desc: "Map engine variables like fuel injection parameters, SCR sensors, and air mass metrics." },
      { step: 3, title: "Integrate GPS Geofences", desc: "Define boundaries for urban clean-air zones in the platform mapping console." },
      { step: 4, title: "Establish Ingestion Pipelines", desc: "Configure high-throughput data streams from vehicles to the cloud emissions databases." },
      { step: 5, title: "Calibrate Combustion Models", desc: "Train AI models on engine test-bench records to map sensor variables to actual tailpipe emissions." },
      { step: 6, title: "Launch Monitoring Console", desc: "Go live with the carbon management dashboard, tracking emissions and generating compliance audits." }
    ],
    architecture: "The platform features a hybrid edge-cloud architecture. Physical emissions estimation models run on the vehicle's engine ECU or telematics module, preventing high cellular data costs by calculating values locally. The cloud platform, hosted on AWS, maintains fleet-wide carbon metrics databases, running algorithms to optimize engine parameters and schedule catalyst cleaning operations.",
    techArch: {
      frontend: "Web-based dispatcher dashboard built with React and TypeScript, displaying live carbon tracking charts and geofence zones.",
      backend: "High-performance services developed in Go, hosted in Kubernetes containers for scalable metric tracking.",
      gateway: "Secured load balancer managing incoming telemetry packets and encrypting connections via TLS.",
      processing: "Apache Kafka event pipeline routing engine updates to InfluxDB for dashboard visualization.",
      ai_ml: "Gradient boosting algorithms predicting vehicle emission rates and optimizing air-fuel maps.",
      edge: "Highly optimized C++ binaries running directly on engine control modules to calculate emissions in real-time.",
      security: "Hardware Security Module (HSM) checking signature integrity of code, secure boot verification, and database encryption.",
      cloud: "AWS infrastructure leveraging Amazon EKS, RDS (PostgreSQL) for databases, and S3 for archives.",
      integration: "API bridges linking with ERP software like SAP and third-party logistics software integration.",
      monitoring: "Real-time CPU and memory monitoring for edge agents, combined with automated security alerts."
    },
    technologies: {
      languages: "C++, C, Go, Python, TypeScript",
      frameworks: "React, Node.js, Spring Boot",
      databases: "PostgreSQL, InfluxDB, Redis",
      cloud_platforms: "AWS, Azure",
      ai_ml_tools: "TensorFlow Lite, Scikit-learn",
      iot: "OBD-II telematics, Exhaust sensors, Engine controllers, GPS modems",
      protocols: "MQTT over TLS, SOME/IP, CAN, J1939, HTTPS",
      devops: "Docker, Kubernetes, Terraform, Jenkins",
      cybersecurity: "mTLS, HSM encryption, Secure Boot, JWT"
    },
    realWorld: [
      { title: "Metropolitan Delivery Fleet Carbon Tracking", desc: "Tracked real-world CO2 emissions for 600 delivery vans, reducing fuel consumption by 10% via eco-coaching." },
      { title: "Hybrid SUV Clean Air Geofencing", desc: "Deploys in hybrid SUVs, automatically switching to electric-only mode inside London's Ultra Low Emission Zone." },
      { title: "Heavy Duty Truck NOx Monitoring", desc: "Monitored SCR catalyst efficiency in 150 diesel semi-trucks, avoiding urea injection faults." },
      { title: "Car Rental Fleet Compliance Auditing", desc: "Automated emissions log generation for 3,000 rental cars, simplifying ESG reporting requirements." },
      { title: "Municipal bus fleet soot diagnostics", desc: "Tracked diesel particulate filter soot loads in municipal buses, scheduling cleaning before filters clogged." },
      { title: "Port Terminal Freight Clean Sync", desc: "Monitored emission footprints for 200 cargo transport trucks inside port facilities, reducing idling." },
      { title: "Automated ECU Map Tuning Pilot", desc: "Adjusted fuel maps on test vehicles, reducing NOx emissions by 8% during stop-and-go city driving." },
      { title: "School Bus Emissions Reporting", desc: "Provided monthly carbon offset summaries for school districts operating mixed electric and diesel bus fleets." }
    ],
    benefits: [
      { title: "Guaranteed RDE Compliance", desc: "Ensures vehicles comply with real-world driving emission standards, preventing regulatory fines." },
      { title: "Lower Fuel Consumption", desc: "Saves up to 12% on fuel costs through combustion optimization and driver eco-coaching." },
      { title: "Auditable ESG Reporting", desc: "Generates verified carbon offset metrics directly linked to vehicle fuel consumption profiles." },
      { title: "Automated Zone Switch", desc: "Switches hybrid vehicles to electric-only mode dynamically inside city zero-emission geofences." },
      { title: "Extended Catalyst Lifespan", desc: "Detects catalytic converter errors early, preventing soot buildup and filter replacement costs." }
    ],
    challenges: [
      { title: "Virtual Estimation Limits", desc: "Accurately estimating tailpipe emissions from indirect engine parameters across dynamic workloads." },
      { title: "Legacy Vehicle Compatibility", desc: "Interfacing with older engines that lack high-precision exhaust temperature and oxygen sensors." },
      { title: "High Cryptographic Demands", desc: "Securing engine map adjustments against hacking attempts that could compromise vehicle safety." },
      { title: "Varying Environmental Conditions", desc: "Calibrating combustion models to remain accurate across high altitudes and extreme temperature ranges." }
    ],
    future: "The future of emissions management lies in real-time cooperative emission routing and blockchain carbon trading. Future systems will communicate with city traffic grids, routing heavy vehicles away from high-pollution zones during atmospheric inversions. Vehicle digital twins will trade carbon offsets dynamically on blockchain ledgers, enabling fleet operators to monetize low-emission driving. Additionally, integrating solid-state ammonia sensors will allow for sub-parts-per-million accuracy in tailpipe diagnostics.",
    impact: "This platform is crucial for reducing the environmental footprint of logistics operations, helping companies meet zero-emission targets. By replacing laboratory calculations with real-world data, it supports clean transportation and improves urban air quality.",
    conclusion: "Our Vehicle Emission Monitoring and Reduction Software provides the secure, scalable, and highly accurate platform required to manage emissions. By linking engine diagnostics with cloud carbon analytics, we help operators scale and succeed."
  }
};

fs.writeFileSync(
  path.join(dataDir, 'products_16_20.json'),
  JSON.stringify(products16to20, null, 2)
);

console.log('Product Data for 16-20 written successfully!');
