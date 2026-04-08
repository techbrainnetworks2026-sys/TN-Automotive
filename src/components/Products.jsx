import React from 'react';

const productsData = [
  {
    title: "Blockchain-Based Financial Transaction Platforms",
    description: "Secure, decentralized transaction networks providing transparent and immutable ledger solutions for global finance.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Algorithmic Trading and Risk Management Software",
    description: "Advanced AI-driven trading platforms with robust real-time risk analytics and high-frequency execution capabilities.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Financial Fraud Detection Solutions",
    description: "Intelligent anomaly detection systems powered by machine learning to prevent unauthorized access and financial crimes in real-time.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Personal Finance Management Apps",
    description: "Intuitive mobile applications allowing users to track expenses, manage budgets, and optimize their personal wealth effortlessly.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "RegTech Compliance Solutions",
    description: "Automated regulatory technology platforms ensuring complete adherence to shifting global financial compliance standards.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Digital Wallet and Cryptocurrency Management Software",
    description: "Secure cross-platform digital wallets integrating fiat and crypto asset management with instant exchange metrics.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Robo-Advisory and Wealth Management Platforms",
    description: "Automated AI wealth advisors providing personalized portfolio allocation and continuous investment optimization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Real-Time Payments and Instant Settlement Systems",
    description: "Ultra-low latency payment gateways delivering immediate cross-border transaction settlements.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Mobile Banking and Payment Applications",
    description: "Next-gen branchless banking solutions for consumers with tap-to-pay and seamless peer-to-peer transfers.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Anti-Money Laundering (AML) Compliance Software",
    description: "Sophisticated transaction monitoring protocols identifying suspicious flow patterns and mitigating AML risks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Credit Scoring and Risk Assessment Platforms",
    description: "Deep learning models analyzing diverse alternative data streams to accurately predict lending risk and output credit scores.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Financial Planning and Budgeting Apps",
    description: "Enterprise and personal forecasting platforms to visualize financial trajectories and manage cash flow efficiently.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Peer-to-Peer (P2P) Lending Platforms",
    description: "Decentralized lending marketplaces directly connecting diverse borrowers with global institutional or retail investors.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Insurtech Solutions for Insurance Industry",
    description: "Digital insurance platforms facilitating automated underwriting, instant claim processing, and intelligent policy pricing.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Open Banking API Platforms",
    description: "Secure interoperability middleware allowing seamless financial data sharing between traditional banks and third-party developers.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Invoice Financing and Factoring Software",
    description: "B2B liquidity platforms allowing businesses to convert outstanding invoices into immediate working capital seamlessly.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Equity Crowdfunding and Investment Platforms",
    description: "Digital launchpads democratizing access to startup equity or real estate ventures for everyday investors.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Trade Finance and Supply Chain Finance Solutions",
    description: "End-to-end digitisation of the global trade process, providing transparency and financing at every supply chain node.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Financial Data Analytics and Business Intelligence Tools",
    description: "Comprehensive BI platforms that aggregate raw financial activity into stunning, actionable visual insights and KPIs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Regulatory Reporting Automation Software",
    description: "Audit-ready reporting systems that automatically compile and submit accurate financial operational data to regulatory bodies.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
  }
];

const Products = () => {
  return (
    <section id="products" className="section">
      <div className="container">
        <h2 className="section-title">Our Financial Technology Products</h2>
        <p className="section-subtitle">
          Explore our suite of 20 cutting-edge products designed to power the next generation of global digital finance.
        </p>

        <div className="product-grid">
          {productsData.map((product, index) => (
            <div className="glass-card product-card" key={index}>
              <div className="product-image-container">
                <img src={product.image} alt={product.title} className="product-image" loading="lazy" />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <button className="btn btn-primary product-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
