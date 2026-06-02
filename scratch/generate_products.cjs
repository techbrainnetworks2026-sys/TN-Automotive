const fs = require('fs');
const path = require('path');

const products = [
  {
    id: 1,
    title: "Blockchain-Based Financial Transaction Platforms",
    description: "Secure, decentralized transaction networks providing transparent and immutable ledger solutions for global finance.",
    background: "Traditional financial infrastructure relies on centralized ledgers that are slow, prone to human error, and require expensive intermediaries for trust.",
    problem: "Settlement times for cross-border transactions can take days, with high fees and limited transparency, creating liquidity bottlenecks.",
    solution: "A distributed ledger system using smart contracts to provide near-instant settlement with cryptographic proof of every transaction.",
    architecture: "Multi-layered node structure with Byzantine Fault Tolerance consensus, integrating with existing core banking through secure oracles.",
    tech: ["Solidity", "Hyperledger Fabric", "Ethereum", "Node.js", "PostgreSQL"],
    applications: ["Cross-border Remittances", "Institutional Asset Custody", "DeFi Liquidity Pools"],
    realWorld: "Used by global banks to reduce settlement times from 3 days to 30 seconds while cutting intermediary costs by 60%.",
    benefits: ["Zero Single Point of Failure", "Lower Transaction Costs", "Full Audit Transparency"],
    challenges: ["Scalability throughput limitations", "Complex regulatory compliance across jurisdictions"],
    futureScope: "Integration with Central Bank Digital Currencies (CBDCs) and cross-chain atomic swaps for universal interoperability."
  },
  {
    id: 2,
    title: "Algorithmic Trading and Risk Management Software",
    description: "Advanced AI-driven trading platforms with robust real-time risk analytics and high-frequency execution capabilities.",
    background: "Capital markets move at microsecond speeds, where human decision-making is too slow and emotionally compromised for consistent returns.",
    problem: "Slippage, market impact, and the inability to manage risk across thousands of simultaneous positions manually.",
    solution: "High-frequency execution engines that utilize predictive machine learning to identify alpha and manage exposure in real-time.",
    architecture: "Event-driven low-latency engine with a distributed risk calculation layer and real-time market data feed handlers.",
    tech: ["C++", "Python (PyTorch)", "Kafka", "InfluxDB", "AWS ParallelCluster"],
    applications: ["High-Frequency Trading", "ETF Arbitrage", "Portfolio Hedge Management"],
    realWorld: "Proprietary trading firms use our platform to process 1M+ messages per second with sub-10 microsecond execution latency.",
    benefits: ["Emotionless Execution", "Precise Risk Guardrails", "Superior Fill Quality"],
    challenges: ["Technological arms race in latency", "Risk of algorithmic flash crashes during high volatility"],
    futureScope: "Transitioning to Quantum Computing for complex Monte Carlo simulations and multi-asset optimization."
  },
  {
    id: 3,
    title: "Financial Fraud Detection Solutions",
    description: "Intelligent anomaly detection systems powered by machine learning to prevent unauthorized access and financial crimes in real-time.",
    background: "As digital payments explode, fraud typologies are becoming increasingly sophisticated, bypassing traditional rule-based systems.",
    problem: "Identity theft and account takeover attacks are hard to detect when attackers mimic legitimate user behavior patterns.",
    solution: "A behavior-based AI that creates a unique fingerprint for every user and detects deviations from normal activity in milliseconds.",
    architecture: "Real-time streaming pipeline using graph databases to map entity relationships and detect complex laundering cycles.",
    tech: ["Python", "TensorFlow", "Neo4j", "Apache Flink", "Spark"],
    applications: ["Credit Card Fraud", "Internal Employee Theft", "Money Laundering Detection"],
    realWorld: "A top-tier retail bank reduced false positives by 40% while increasing fraud detection rates by 25% using our behavioral engine.",
    benefits: ["Reduced False Positives", "Adaptive Learning", "Real-time Prevention"],
    challenges: ["Data privacy (GDPR/CCPA) limitations", "Constant evolution of criminal tactics"],
    futureScope: "Federated Learning models that allow banks to share fraud patterns without sharing sensitive customer data."
  },
  {
    id: 4,
    title: "Personal Finance Management Apps",
    description: "Intuitive mobile applications allowing users to track expenses, manage budgets, and optimize their personal wealth effortlessly.",
    background: "The shift to digital payments makes it harder for individuals to track their 'invisible' spending, leading to poor financial health.",
    problem: "Fragmentation of financial data across multiple banks, cards, and investment platforms makes a holistic view impossible.",
    solution: "A unified financial command center that aggregates data via Open Banking and uses AI to provide proactive wealth advice.",
    architecture: "Microservices-based mobile backend with robust API connectors and an AI-driven categorization engine.",
    tech: ["React Native", "Spring Boot", "Plaid API", "MongoDB", "Redis"],
    applications: ["Consumer Budgeting", "Net Worth Planning", "Debt Payoff Strategy"],
    realWorld: "Our app helped users save an average of $450/month by identifying wasted subscriptions and optimizing spending categories.",
    benefits: ["Financial Clarity", "Automated Savings", "Debt Reduction"],
    challenges: ["Fragile bank API integrations", "User trust in data security"],
    futureScope: "AI 'Auto-Pilot' that automatically moves money between accounts to maximize interest and avoid overdrafts."
  },
  {
    id: 5,
    title: "RegTech Compliance Solutions",
    description: "Automated regulatory technology platforms ensuring complete adherence to shifting global financial compliance standards.",
    background: "Compliance departments are overwhelmed by the volume and frequency of new regulatory mandates (Basel III, Dodd-Frank, etc.).",
    problem: "Manual compliance processes are slow, expensive, and prone to oversight that results in billions of dollars in fines.",
    solution: "A 'Compliance-as-Code' platform that automates regulatory reporting and monitors adherence in real-time.",
    architecture: "Cloud-native policy engine with natural language processing (NLP) to parse and implement new regulatory text.",
    tech: ["Java", "Python (NLP)", "Elasticsearch", "Docker", "Kubernetes"],
    applications: ["Regulatory Reporting", "KYC/AML Lifecycle", "Internal Audit Automation"],
    realWorld: "Fintech firms use our platform to reduce the time spent on monthly regulatory filings from 2 weeks to 2 hours.",
    benefits: ["Penalty Avoidance", "Operational Efficiency", "Audit-Ready Logs"],
    challenges: ["Divergent global standards", "Difficulty mapping manual laws to binary code"],
    futureScope: "Real-time 'Always-On' auditing where regulators can directly verify compliance through a secure API."
  },
  {
    id: 6,
    title: "Digital Wallet and Cryptocurrency Management Software",
    description: "Secure cross-platform digital wallets integrating fiat and crypto asset management with instant exchange metrics.",
    background: "The complexity of managing private keys and the divide between traditional and crypto finance prevents mass adoption.",
    problem: "Users lose assets due to lost keys, or face high friction when trying to spend crypto at traditional merchants.",
    solution: "A custodial/non-custodial hybrid wallet with social recovery features and instant fiat on-ramps.",
    architecture: "Secure enclave-based key management with MPC (Multi-Party Computation) and decentralized identity (DID) support.",
    tech: ["Flutter", "Go", "Ethereum (Ethers.js)", "PostgreSQL", "Vault"],
    applications: ["Crypto Payments", "NFT Custody", "DeFi Interaction"],
    realWorld: "A major neobank integrated our wallet to allow 5M+ users to trade and spend 50+ cryptocurrencies seamlessly.",
    benefits: ["High Security", "Ease of Use", "Interoperability"],
    challenges: ["High network (gas) fees on some chains", "Complex UI for non-technical users"],
    futureScope: "Biometric-only wallets that use Apple/Android Secure Enclaves as the root of trust, removing the need for seed phrases."
  },
  {
    id: 7,
    title: "Robo-Advisory and Wealth Management Platforms",
    description: "Automated AI wealth advisors providing personalized portfolio allocation and continuous investment optimization.",
    background: "Quality investment advice was historically locked behind high management fees, excluding the retail investor.",
    problem: "Retail investors often buy high and sell low due to lack of a disciplined, data-driven strategy.",
    solution: "An automated investment engine that builds globally diversified portfolios based on Modern Portfolio Theory.",
    architecture: "Rebalancing engine with integrated brokerage API and real-time risk-profile monitoring.",
    tech: ["Python (Scipy)", "Node.js", "React", "PostgreSQL", "Alpaca API"],
    applications: ["Retirement Planning", "Goal-Based Investing", "Tax-Optimized Portfolios"],
    realWorld: "Wealth managers use our white-label solution to manage $10B+ in assets with 90% fewer manual staff.",
    benefits: ["Low Management Fees", "Tax-Loss Harvesting", "Fractional Share Access"],
    challenges: ["Market volatility during unexpected macro events", "Limited human interaction for complex financial situations"],
    futureScope: "Hyper-personalization using AI to include alternative assets like real estate and private equity in robo-portfolios."
  },
  {
    id: 8,
    title: "Real-Time Payments and Instant Settlement Systems",
    description: "Ultra-low latency payment gateways delivering immediate cross-border transaction settlements.",
    background: "The 3-day settlement cycle of traditional banking creates significant cash-flow drag for small businesses and individuals.",
    problem: "Liquidity is trapped in transit, and cross-border transfers are plagued by opaque exchange rates and hidden fees.",
    solution: "A real-time payment rail that settles transactions in seconds using local clearing systems and distributed liquidity pools.",
    features: ["ISO 20022 Compliance", "Direct Clearing Access", "Instant FX Quoting"],
    architecture: "Distributed ledger backbone with high-throughput gateway nodes and real-time settlement finality.",
    tech: ["Rust", "C#", "SQL Server", "Kafka", "Azure"],
    applications: ["Gig Economy Payouts", "Global Supply Chain Payments", "C2B Retail Payments"],
    realWorld: "A global e-commerce giant uses our rails to pay 1M+ sellers worldwide instantly, improving seller retention by 20%.",
    benefits: ["Improved Cash Flow", "Lower FX Costs", "Instant Confirmation"],
    challenges: ["Anti-fraud check speed vs transaction speed", "Interoperability between different regional real-time systems"],
    futureScope: "Universal 'Payment-on-Delivery' where funds are automatically released upon digital confirmation of receipt."
  },
  {
    id: 9,
    title: "Mobile Banking and Payment Applications",
    description: "Next-gen branchless banking solutions for consumers with tap-to-pay and seamless peer-to-peer transfers.",
    background: "Consumers increasingly view bank branches as a nuisance, demanding 100% of services via their mobile device.",
    problem: "Legacy mobile bank apps are often just wrappers for web views, lacking native speed and advanced features like budgeting.",
    solution: "A mobile-first core banking platform with virtual cards, instant notifications, and P2P payments.",
    architecture: "Native mobile frontend with a highly scalable cloud-native core banking system (CBS).",
    tech: ["Swift", "Kotlin", "Go", "Cassandra", "Google Cloud"],
    applications: ["Digital-Only Banking", "P2P Transfers", "Virtual Card Management"],
    realWorld: "Our platform powers a challenger bank with 10M+ users, supporting 50k transactions per second with 99.99% uptime.",
    benefits: ["Native Performance", "Branchless Convenience", "Instant Notifications"],
    challenges: ["Customer support scaling", "Sophisticated mobile phishing attacks"],
    futureScope: "Integration of AI assistants that can perform complex tasks like 'file a dispute' or 'increase my limit' via voice."
  },
  {
    id: 10,
    title: "Anti-Money Laundering (AML) Compliance Software",
    description: "Sophisticated transaction monitoring protocols identifying suspicious flow patterns and mitigating AML risks.",
    background: "Financial institutions are under intense pressure to stop the flow of illicit funds from organized crime and terrorism.",
    problem: "Manual transaction monitoring results in massive 'false positive' rates, drowning analysts in irrelevant alerts.",
    solution: "A machine learning engine that uses entity resolution and relationship graphs to detect 'smurfing' and other laundering patterns.",
    architecture: "Entity-link analysis engine using a graph database to trace the flow of funds across thousands of hops.",
    tech: ["Python", "Neo4j", "Apache Spark", "Elasticsearch", "Azure ML"],
    applications: ["Transaction Monitoring", "Customer Due Diligence", "Watchlist Screening"],
    realWorld: "A global bank reduced its AML backlog by 50% by using our AI to auto-clear low-risk alerts.",
    benefits: ["Higher Detection Rates", "Lower False Positives", "Auditability"],
    challenges: ["Data quality issues in legacy systems", "Balancing detection vs user friction"],
    futureScope: "Collaboration networks where banks can share 'anonymized' risk scores for entities without exposing PII."
  },
  {
    id: 11,
    title: "Credit Scoring and Risk Assessment Platforms",
    description: "Deep learning models analyzing diverse alternative data streams to accurately predict lending risk and output credit scores.",
    background: "Traditional credit scores (like FICO) are based on limited datasets, leaving millions of 'credit invisible' people behind.",
    problem: "Lenders miss out on good borrowers because they can't accurately assess risk for people without long credit histories.",
    solution: "An AI-driven scoring engine that incorporates utility payments, rental history, and bank cash flow analysis.",
    architecture: "Data ingestion layer that standardizes alternative data for a deep neural network scoring model.",
    tech: ["Python (Scikit-learn)", "R", "SQL Server", "Tableau", "AWS"],
    applications: ["Unsecured Personal Loans", "SME Lending", "Micro-credit for Emerging Markets"],
    realWorld: "A fintech lender used our alternative scoring to increase loan approvals by 30% without increasing default rates.",
    benefits: ["Fairer Credit Access", "Real-time Scoring", "Lower Default Rates"],
    challenges: ["Explainability (Black-box models)", "Fairness and bias in training data"],
    futureScope: "Continuous 'Live' credit scoring that updates in real-time as users make every purchase and payment."
  },
  {
    id: 12,
    title: "Financial Planning and Budgeting Apps",
    description: "Enterprise and personal forecasting platforms to visualize financial trajectories and manage cash flow efficiently.",
    background: "Most people and small businesses manage their future finances using 'guesswork' or outdated spreadsheets.",
    problem: "Static plans fail to account for the impact of inflation, market crashes, or unexpected life changes.",
    solution: "A dynamic simulation engine that allows for 'what-if' modeling of every financial decision.",
    architecture: "Monte Carlo simulation backend with a highly interactive data visualization frontend.",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL", "Heroku"],
    applications: ["Small Business Forecasting", "Retirement Modeling", "Home Purchase Planning"],
    realWorld: "Our tool helped a retail chain predict a cash flow gap 6 months in advance, allowing them to secure credit before a crisis.",
    benefits: ["Proactive Decision Making", "Risk Visualization", "Better Long-term Health"],
    challenges: ["User data entry fatigue", "Inaccurate long-term macro assumptions"],
    futureScope: "Generative AI that creates a 'written' financial strategy based on your data and goals."
  },
  {
    id: 13,
    title: "Peer-to-Peer (P2P) Lending Platforms",
    description: "Decentralized lending marketplaces directly connecting diverse borrowers with global institutional or retail investors.",
    background: "Banks take a large margin as an intermediary between savers and borrowers, offering low interest to one and high to the other.",
    problem: "Borrowers face high rates and savers get near-zero returns in a traditional banking environment.",
    solution: "A marketplace that cuts out the middleman, passing the savings and returns directly to users.",
    architecture: "Matching engine that pairs borrower risk with investor preference, with integrated automated collections.",
    tech: ["Go", "Node.js", "Redis", "MySQL", "AWS Lambda"],
    applications: ["Education Loans", "Debt Consolidation", "SME Working Capital"],
    realWorld: "A P2P platform built on our tech has facilitated $1B+ in loans, providing investors with an average 8% net return.",
    benefits: ["Higher Returns for Lenders", "Lower Rates for Borrowers", "Transparent Fees"],
    challenges: ["Credit risk management during recessions", "Regulatory hurdles in some US states"],
    futureScope: "Using NFTs as collateral for P2P loans, allowing users to borrow against their digital assets."
  },
  {
    id: 14,
    title: "Insurtech Solutions for Insurance Industry",
    description: "Digital insurance platforms facilitating automated underwriting, instant claim processing, and intelligent policy pricing.",
    background: "The insurance industry is notoriously slow, paper-heavy, and often frustrating for customers during claims.",
    problem: "Claims take weeks to process, and pricing is often 'flat' instead of being based on actual user behavior.",
    solution: "A digital-first platform that uses telematics and AI to price risk fairly and settle claims in minutes.",
    architecture: "Telematics ingestion hub with an AI-driven underwriting and claims automation engine.",
    tech: ["Java", "Python", "MQTT (for IoT)", "PostgreSQL", "GCP"],
    applications: ["Pay-as-you-drive Auto Insurance", "Instant Travel Insurance", "Parametric Weather Insurance"],
    realWorld: "A parametric crop insurance provider uses our tech to automatically pay out farmers based on satellite weather data.",
    benefits: ["Instant Claims Payout", "Personalized Pricing", "Reduced Fraud"],
    challenges: ["Data privacy for tracking (telematics)", "Complex actuarial regulations"],
    futureScope: "Embedded Insurance: Insurance that is automatically included at the point of sale for every product purchased."
  },
  {
    id: 15,
    title: "Open Banking API Platforms",
    description: "Secure interoperability middleware allowing seamless financial data sharing between traditional banks and third-party developers.",
    background: "Banks historically kept customer data in 'walled gardens', preventing innovation and user choice.",
    problem: "Third-party apps had to rely on insecure 'screen scraping' to access financial data, leading to security risks.",
    solution: "A secure API gateway that standardizes bank data access for authorized third parties with user consent.",
    architecture: "OAuth2-based consent management system with a high-security API translation layer.",
    tech: ["Node.js", "Go", "Vault", "MongoDB", "Auth0"],
    applications: ["Account Aggregation", "Payment Initiation", "Lending Data Verification"],
    realWorld: "A major financial aggregator uses our API platform to connect to 2,000+ banks across Europe securely.",
    benefits: ["Consumer Empowerment", "Enhanced Security", "Faster Innovation"],
    challenges: ["Varying API standards across banks", "Managing ongoing user consent"],
    futureScope: "Open Finance: Expanding beyond bank accounts to include insurance, pensions, and investments in the API ecosystem."
  },
  {
    id: 16,
    title: "Invoice Financing and Factoring Software",
    description: "B2B liquidity platforms allowing businesses to convert outstanding invoices into immediate working capital seamlessly.",
    problem: "B2B businesses often have 60-90 day payment terms, creating a 'cash gap' that kills growth.",
    background: "Working capital is the lifeblood of small business, yet it's often trapped in unpaid invoices.",
    solution: "An automated platform that buys invoices at a discount, providing immediate liquidity to the seller.",
    architecture: "ERP integration layer with an automated debtor risk assessment and funding rail.",
    tech: ["Python", "Django", "PostgreSQL", "Stripe API", "AWS"],
    applications: ["SME Working Capital", "Freight Factoring", "Recruitment Agency Finance"],
    realWorld: "A manufacturing firm uses our platform to fund its raw material purchases by financing its client invoices instantly.",
    benefits: ["Zero Debt on Balance Sheet", "Instant Liquidity", "Outsourced Collections"],
    challenges: ["Fraudulent invoice detection", "High cost of capital for some industries"],
    futureScope: "Integration with B2B marketplaces to offer 'Instant Financing' at the moment the invoice is generated."
  },
  {
    id: 17,
    title: "Equity Crowdfunding and Investment Platforms",
    description: "Digital launchpads democratizing access to startup equity or real estate ventures for everyday investors.",
    problem: "Early-stage investing was a 'members-only' club for VCs, leaving the public out of high-growth opportunities.",
    background: "Digital platforms now allow startups to raise capital directly from their own community and the public.",
    solution: "A regulated crowdfunding portal that handles everything from due diligence to cap table management.",
    architecture: "Investment ledger with integrated KYC/AML and secure escrow for fund management.",
    tech: ["Ruby on Rails", "React", "PostgreSQL", "Lemonway (Payment)", "Heroku"],
    applications: ["Startup Fundraising", "Real Estate Syndication", "Green Energy Projects"],
    realWorld: "A sustainable energy startup raised $5M from 2,000 retail investors on a platform powered by our technology.",
    benefits: ["Community Engagement", "Access to Capital", "Portfolio Diversification"],
    challenges: ["Regulatory ceiling on raise amounts", "High risk of startup failure for retail investors"],
    futureScope: "Secondary markets that allow 'crowd' investors to trade their startup shares before an IPO."
  },
  {
    id: 18,
    title: "Trade Finance and Supply Chain Finance Solutions",
    description: "End-to-end digitisation of the global trade process, providing transparency and financing at every supply chain node.",
    problem: "Global trade is plagued by paper documents, fraud, and a $1.7 trillion 'trade finance gap'.",
    background: "A single shipment can involve 20+ parties and 100+ pages of documentation, leading to massive delays.",
    solution: "A blockchain platform that digitizes the Bill of Lading and automates financing upon shipment milestones.",
    architecture: "Distributed network connecting banks, shippers, and customs with shared document visibility.",
    tech: ["Hyperledger Fabric", "Go", "CouchDB", "Node.js", "IBM Cloud"],
    applications: ["Export/Import Financing", "Inventory Finance", "Supplier Pre-payments"],
    realWorld: "A major shipping line reduced document processing time from 10 days to 1 day using our digitized trade platform.",
    benefits: ["Reduced Fraud", "Faster Working Capital", "Full Chain Visibility"],
    challenges: ["Network effect (getting all parties on one system)", "Legal recognition of digital titles"],
    futureScope: "IoT-triggered payments: Automatically releasing payment when a container reaches a specific GPS coordinate."
  },
  {
    id: 19,
    title: "Financial Data Analytics and Business Intelligence Tools",
    description: "Comprehensive BI platforms that aggregate raw financial activity into stunning, actionable visual insights and KPIs.",
    problem: "CFOs are drowning in data but can't see the 'big picture' of their company's financial health in real-time.",
    background: "Traditional reporting is 'backward-looking', telling you what happened last month instead of what will happen next month.",
    solution: "An AI-powered BI tool that predicts future cash flows and identifies hidden cost-saving opportunities.",
    architecture: "Data warehouse with an AI insight layer and a high-performance visualization engine.",
    tech: ["Python", "Snowflake", "PowerBI (Integration)", "React", "AWS"],
    applications: ["CFO Dashboards", "Operational Expense Audit", "Revenue Forecasting"],
    realWorld: "A global retail group used our BI tool to identify $2M in annual savings by optimizing their store-level inventory finance.",
    benefits: ["Actionable Insights", "Real-time Monitoring", "Better Forecasting"],
    challenges: ["Data silo integration", "User trust in AI-generated predictions"],
    futureScope: "Natural Language Querying: Allowing a CEO to ask 'What will our margin be if we raise prices by 2%?' and getting an instant answer."
  },
  {
    id: 20,
    title: "Regulatory Reporting Automation Software",
    description: "Audit-ready reporting systems that automatically compile and submit accurate financial operational data to regulatory bodies.",
    problem: "Preparing reports for the SEC, FCA, or ECB is a high-stakes manual process where a small error can lead to a huge fine.",
    background: "Regulatory requirements are increasing in complexity, requiring more data at higher frequencies.",
    solution: "An automated engine that maps internal data to regulatory schemas and validates it for accuracy before submission.",
    architecture: "Mapping engine with a built-in validation rules library and secure direct-submission connectors.",
    tech: ["Java", "Python (for validation rules)", "Oracle", "Azure", "XBRL"],
    applications: ["SEC Filings", "Basel III Reporting", "MIFID II Transaction Reporting"],
    realWorld: "A mid-sized investment bank avoided $500k in potential late-filing fines by automating their transaction reports with our tech.",
    benefits: ["Accuracy and Precision", "Reduced Filing Time", "Audit Readiness"],
    challenges: ["Constantly changing schemas from regulators", "Mapping disparate internal data sources"],
    futureScope: "Embedded Supervision: Where the regulator has a real-time 'read-only' view of the firm's data, eliminating periodic reporting."
  }
];

const targetDir = path.join('c:', 'Users', 'Techbrain2', 'Desktop', 'TB-Projects', 'automotive', 'src', 'components', 'Products', 'ProductPages');

products.forEach(p => {
  const prefix = "product" + p.id;

  const jsxContent = "import React, { useEffect } from 'react';\n" +
    "import { useNavigate } from 'react-router-dom';\n" +
    "import './Product" + p.id + ".css';\n" +
    "import prd" + p.id + " from \"../../../assets/images/prd" + p.id + "." + (p.id === 3 || p.id === 10 ? 'avif' : p.id === 13 ? 'jpeg' : p.id === 14 || p.id === 17 ? 'png' : 'jpg') + "\";\n\n" +
    "const Product" + p.id + " = () => {\n" +
    "  const navigate = useNavigate();\n\n" +
    "  useEffect(() => {\n" +
    "    window.scrollTo(0, 0);\n" +
    "  }, []);\n\n" +
    "  return (\n" +
    "    <div className=\"" + prefix + "-detail-page\">\n" +
    "      <section className=\"" + prefix + "-hero\" style={{ backgroundImage: `url(${prd" + p.id + "})` }}>\n" +
    "        <div className=\"" + prefix + "-hero-content\">\n" +
    "          <h1>" + p.title + "</h1>\n" +
    "          <p>" + p.description + "</p>\n" +
    "          <div className=\"" + prefix + "-hero-btns\">\n" +
    "            <button className=\"" + prefix + "-btn " + prefix + "-btn-primary\">Request Demo</button>\n" +
    "            <button className=\"" + prefix + "-btn " + prefix + "-btn-outline\" onClick={() => navigate('/#contact')}>Contact Us</button>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </section>\n\n" +
    "      <div className=\"" + prefix + "-container\">\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Background & Problem Statement</h2>\n" +
    "          <div className=\"" + prefix + "-grid-2\">\n" +
    "            <div>\n" +
    "              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#4b5563' }}>{`" + p.background + "`}</p>\n" +
    "              <p style={{ color: '#ef4444', fontWeight: '600' }}>The Problem:</p>\n" +
    "              <p style={{ color: '#4b5563' }}>{`" + p.problem + "`}</p>\n" +
    "            </div>\n" +
    "            <div className=\"" + prefix + "-glass-card\">\n" +
    "               <h3 style={{color: '#0A2540', marginBottom: '15px'}}>Problem Analysis</h3>\n" +
    "               <ul className=\"" + prefix + "-module-list\">\n" +
    "                 <li className=\"" + prefix + "-module-item\">Inefficient legacy infrastructure</li>\n" +
    "                 <li className=\"" + prefix + "-module-item\">Lack of real-time data transparency</li>\n" +
    "                 <li className=\"" + prefix + "-module-item\">High operational & middleman costs</li>\n" +
    "               </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding " + prefix + "-bg-accent\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Proposed Solution</h2>\n" +
    "          <p className=\"" + prefix + "-text-center\" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.25rem', color: '#0A2540', fontWeight: '500' }}>{`" + p.solution + "`}</p>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">System Architecture</h2>\n" +
    "          <div className=\"" + prefix + "-glass-card\" style={{ textAlign: 'center' }}>\n" +
    "            <p style={{ fontSize: '1.2rem', color: '#4b5563', marginBottom: '30px' }}>{`" + p.architecture + "`}</p>\n" +
    "            <img src=\"https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=1200&q=80\" alt=\"Architecture\" style={{ width: '100%', borderRadius: '15px', maxWidth: '800px' }} />\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Technologies Used</h2>\n" +
    "          <div className=\"" + prefix + "-tech-stack-grid\">\n" +
    "            {" + JSON.stringify(p.tech) + ".map((t, i) => (\n" +
    "              <div key={i} className=\"" + prefix + "-tech-item\">\n" +
    "                <h4 style={{margin:0}}>{t}</h4>\n" +
    "              </div>\n" +
    "            ))}\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding " + prefix + "-bg-accent\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Applications</h2>\n" +
    "          <div className=\"" + prefix + "-feature-grid\">\n" +
    "            {" + JSON.stringify(p.applications) + ".map((app, i) => (\n" +
    "              <div key={i} className=\"" + prefix + "-feature-card\" style={{textAlign:'center'}}>\n" +
    "                <h3>{app}</h3>\n" +
    "                <p>Enterprise deployment for {app.toLowerCase()} environments.</p>\n" +
    "              </div>\n" +
    "            ))}\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Real-World Impact</h2>\n" +
    "          <div className=\"" + prefix + "-glass-card\" style={{background: '#0A2540', color: '#fff'}}>\n" +
    "            <p style={{fontSize: '1.4rem', textAlign: 'center', margin: 0}}>{`\"" + p.realWorld + "\"`}</p>\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Key Benefits</h2>\n" +
    "          <div className=\"" + prefix + "-feature-grid\">\n" +
    "            {" + JSON.stringify(p.benefits) + ".map((b, i) => (\n" +
    "              <div key={i} className=\"" + prefix + "-feature-card\">\n" +
    "                <h3 style={{color: '#00BFA6'}}>✓ {b}</h3>\n" +
    "                <p>Delivering measurable value through {b.toLowerCase()}.</p>\n" +
    "              </div>\n" +
    "            ))}\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding bg-light\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Challenges & Limitations</h2>\n" +
    "          <div className=\"" + prefix + "-grid-2\">\n" +
    "            <ul className=\"" + prefix + "-module-list\">\n" +
    "              {" + JSON.stringify(p.challenges) + ".map((c, i) => (\n" +
    "                <li key={i} className=\"" + prefix + "-module-item\" style={{borderLeftColor: '#ef4444'}}>{c}</li>\n" +
    "              ))}\n" +
    "            </ul>\n" +
    "            <div>\n" +
    "              <p style={{color: '#6b7280'}}>Every cutting-edge solution faces hurdles. We proactively address these limitations through continuous R&D and strategic partnerships.</p>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\">Future Scope</h2>\n" +
    "          <div className=\"" + prefix + "-glass-card\">\n" +
    "            <p style={{fontSize: '1.2rem', color: '#4b5563', textAlign: 'center'}}>{`" + p.futureScope + "`}</p>\n" +
    "          </div>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding " + prefix + "-bg-darker\">\n" +
    "          <h2 className=\"" + prefix + "-section-title\" style={{color: '#fff'}}>The Future of Precision</h2>\n" +
    "          <p className=\"" + prefix + "-text-center\" style={{color: '#fff', maxWidth: '800px', margin: '0 auto'}}>The next decade of " + p.title.toLowerCase() + " will be defined by hyper-automation and autonomous decision-making systems. TechBrain Networks is leading the charge in this transition.</p>\n" +
    "        </section>\n\n" +
    "        <section className=\"" + prefix + "-section-padding\">\n" +
    "          <div className=\"" + prefix + "-glass-card " + prefix + "-text-center\">\n" +
    "            <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#1f2937' }}>Join the leaders in " + p.title.toLowerCase() + " technology.</p>\n" +
    "            <button className=\"" + prefix + "-btn " + prefix + "-btn-primary\" onClick={() => navigate('/#contact')}>Schedule a Consultation</button>\n" +
    "          </div>\n" +
    "        </section>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  );\n" +
    "};\n\n" +
    "export default Product" + p.id + ";";

  fs.writeFileSync(path.join(targetDir, "Product" + p.id + ".jsx"), jsxContent);
});

console.log('All 20 Product pages updated with ALL REQUESTED SECTIONS!');
