import React from 'react';
import { Target, Lightbulb, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <h2 className="section-title">About Company</h2>
        <p className="section-subtitle">
          Techbrain Networks is a leading Software Product Development company that specializes in AI, IoT, Big data, Blockchain, Cloud Computing, Quantum Computing and Digital Marketing.
        </p>

        <div className="grid grid-cols-4 about-grid">
          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Target size={32} />
            </div>
            <h3>Vision</h3>
            <p>
              We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.
            </p>
          </div>

          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Lightbulb size={32} />
            </div>
            <h3>Mission</h3>
            <p>
              We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.
            </p>
          </div>

          <div className="glass-card about-card p-6">
            <div className="icon-wrapper">
              <Heart size={32} />
            </div>
            <h3>Passion</h3>
            <p>
              Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. Every product and service reflects our commitment to innovation and excellence. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.
            </p>
          </div>


        </div>
        <div className="glass-card about-card p-6 highlight-card">
          <div className="icon-wrapper">
            <Users size={32} />
          </div>
          <h3>Team & Impact</h3>
          <p>
            We are revolutionizing the future of technology with 480 innovative products spanning 24 industries. Starting in 2027, our solutions will reach 30 countries, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact.
          </p>
          <div className="founder-info mt-4">
            <strong>Ramkumar Arunachalam</strong>
            <span>Founder of Techbrain Networks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
