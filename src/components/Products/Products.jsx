import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

import prd1 from "../../assets/images/prd1.jpg";
import prd2 from "../../assets/images/prd2.jpg";
import prd3 from "../../assets/images/prd3.avif";
import prd4 from "../../assets/images/prd4.jpg";
import prd5 from "../../assets/images/prd5.jpg";
import prd6 from "../../assets/images/prd6.jpg";
import prd7 from "../../assets/images/prd7.jpg";
import prd8 from "../../assets/images/prd8.jpg";
import prd9 from "../../assets/images/prd9.jpg";
import prd10 from "../../assets/images/prd10.avif";
import prd11 from "../../assets/images/prd11.jpg";
import prd12 from "../../assets/images/prd12.jpg";
import prd13 from "../../assets/images/prd13.jpeg";
import prd14 from "../../assets/images/prd14.png";
import prd15 from "../../assets/images/prd15.jpg";
import prd16 from "../../assets/images/prd16.jpg";
import prd17 from "../../assets/images/prd17.png";
import prd18 from "../../assets/images/prd18.jpg";
import prd19 from "../../assets/images/prd19.jpg";
import prd20 from "../../assets/images/prd20.jpg";

const productsData = [
  {
    title: "Blockchain-Based Financial Transaction Platforms",
    description: "Secure, decentralized transaction networks providing transparent and immutable ledger solutions for global finance.",
    image: prd1
  },
  {
    title: "Algorithmic Trading and Risk Management Software",
    description: "Advanced AI-driven trading platforms with robust real-time risk analytics and high-frequency execution capabilities.",
    image: prd2
  },
  {
    title: "Financial Fraud Detection Solutions",
    description: "Intelligent anomaly detection systems powered by machine learning to prevent unauthorized access and financial crimes in real-time.",
    image: prd3
  },
  {
    title: "Personal Finance Management Apps",
    description: "Intuitive mobile applications allowing users to track expenses, manage budgets, and optimize their personal wealth effortlessly.",
    image:prd4
  },
  {
    title: "RegTech Compliance Solutions",
    description: "Automated regulatory technology platforms ensuring complete adherence to shifting global financial compliance standards.",
    image: prd5
  },
  {
    title: "Digital Wallet and Cryptocurrency Management Software",
    description: "Secure cross-platform digital wallets integrating fiat and crypto asset management with instant exchange metrics.",
    image: prd6
  },
  {
    title: "Robo-Advisory and Wealth Management Platforms",
    description: "Automated AI wealth advisors providing personalized portfolio allocation and continuous investment optimization.",
    image: prd7
  },
  {
    title: "Real-Time Payments and Instant Settlement Systems",
    description: "Ultra-low latency payment gateways delivering immediate cross-border transaction settlements.",
    image: prd8
  },
  {
    title: "Mobile Banking and Payment Applications",
    description: "Next-gen branchless banking solutions for consumers with tap-to-pay and seamless peer-to-peer transfers.",
    image: prd9
  },
  {
    title: "Anti-Money Laundering (AML) Compliance Software",
    description: "Sophisticated transaction monitoring protocols identifying suspicious flow patterns and mitigating AML risks.",
    image: prd10
  },
  {
    title: "Credit Scoring and Risk Assessment Platforms",
    description: "Deep learning models analyzing diverse alternative data streams to accurately predict lending risk and output credit scores.",
    image: prd11
  },
  {
    title: "Financial Planning and Budgeting Apps",
    description: "Enterprise and personal forecasting platforms to visualize financial trajectories and manage cash flow efficiently.",
    image:prd12
  },
  {
    title: "Peer-to-Peer (P2P) Lending Platforms",
    description: "Decentralized lending marketplaces directly connecting diverse borrowers with global institutional or retail investors.",
    image: prd13
  },
  {
    title: "Insurtech Solutions for Insurance Industry",
    description: "Digital insurance platforms facilitating automated underwriting, instant claim processing, and intelligent policy pricing.",
    image: prd14
  },
  {
    title: "Open Banking API Platforms",
    description: "Secure interoperability middleware allowing seamless financial data sharing between traditional banks and third-party developers.",
    image: prd15
  },
  {
    title: "Invoice Financing and Factoring Software",
    description: "B2B liquidity platforms allowing businesses to convert outstanding invoices into immediate working capital seamlessly.",
    image: prd16
  },
  {
    title: "Equity Crowdfunding and Investment Platforms",
    description: "Digital launchpads democratizing access to startup equity or real estate ventures for everyday investors.",
    image: prd17
  },
  {
    title: "Trade Finance and Supply Chain Finance Solutions",
    description: "End-to-end digitisation of the global trade process, providing transparency and financing at every supply chain node.",
    image: prd18
  },
  {
    title: "Financial Data Analytics and Business Intelligence Tools",
    description: "Comprehensive BI platforms that aggregate raw financial activity into stunning, actionable visual insights and KPIs.",
    image: prd19
  },
  {
    title: "Regulatory Reporting Automation Software",
    description: "Audit-ready reporting systems that automatically compile and submit accurate financial operational data to regulatory bodies.",
    image: prd20
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
                <Link to={`/product/${index + 1}`} className="btn btn-primary product-btn">Learn More</Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Products;
