import React from 'react';
import { Code, Cpu, PenTool, FlaskConical } from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: "Software Development",
    icon: <Code size={40} className="service-icon" />,
    description: "Techbrain Networks offers a full range of software development services, specializing in creating innovative and customized solutions for businesses across multiple industries. We develop robust, scalable, and secure applications for web, mobile, and desktop platforms, ensuring they are tailored to meet the unique requirements of each client. With a focus on quality and efficiency, our team leverages the latest technologies to deliver high-performing software that drives growth and optimizes operations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Hardware Engineering",
    icon: <Cpu size={40} className="service-icon" />,
    description: "Techbrain Networks offers expert hardware engineering services designed to bring innovative and reliable products to market. Our team specializes in end-to-end hardware development, from concept design and prototyping to testing and production. We work across industries, including aerospace, automotive, healthcare, and more, ensuring that our solutions meet stringent quality and safety standards.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Product Design",
    icon: <PenTool size={40} className="service-icon" />,
    description: "Techbrain Networks delivers innovative product design services, transforming ideas into market-ready solutions. Our team excels in creating user-centric designs that balance functionality, aesthetics, and usability. We handle everything from concept development and prototyping to final production, ensuring each product meets industry standards and client expectations. With a focus on cutting-edge design technologies and techniques.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Research & Development",
    icon: <FlaskConical size={40} className="service-icon" />,
    description: "Techbrain Networks offers comprehensive Research & Development (R&D) services, driving innovation and technological advancements for businesses. Our team specializes in exploring new technologies, developing prototypes, and conducting in-depth testing to turn ideas into viable products. We focus on solving complex challenges across industries such as aerospace, healthcare, and technology, ensuring our R&D efforts lead to breakthroughs that enhance efficiency and performance.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We take pride in being an innovative organization where the digital revolution thrives and new advances are always on the horizon.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card glass-card" key={index}>
              <div className="service-img-wrapper">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content p-6">
                <div className="service-header">
                  {service.icon}
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
