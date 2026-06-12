import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Careers.css';

const jobs = [
  {
    role: "Android Developer",
    skills: "Java, Kotlin",
    details: [
      "Android Automotive OS",
      "In-vehicle infotainment systems",
      "Connected car applications"
    ]
  },
  {
    role: "CAD/CAM Designer",
    skills: "Solidworks",
    details: [
      "Vehicle component design",
      "Chassis, engine, and mechanical part modeling",
      "Manufacturing support"
    ]
  },
  {
    role: "DFT (Design for Test) Engineer",
    skills: "DFT Methodologies, ATPG, JTAG",
    details: [
      "Automotive semiconductor testing",
      "ECU and automotive chip validation"
    ]
  },
  {
    role: "FPGA Engineer",
    skills: "VHDL, ModelSim, Xilinx Vivado",
    details: [
      "ADAS systems",
      "Sensor processing",
      "Autonomous vehicle prototyping"
    ]
  },
  {
    role: "Hardware Design & Testing",
    skills: "C, Embedded C, RTOS, KiCad",
    details: [
      "Electronic Control Units (ECUs)",
      "Automotive embedded systems",
      "Vehicle electronics"
    ]
  },
  {
    role: "Machine Learning Engineer",
    skills: "Python, Keras, OpenCV, Scikit, TensorFlow",
    details: [
      "Autonomous driving",
      "Driver monitoring systems",
      "Object detection and lane detection"
    ]
  },
  {
    role: "Physical Design Engineer",
    skills: "RTL-to-GDSII Flow, Place and Route, Timing Closure",
    details: [
      "Automotive chip development",
      "SoC design for vehicles"
    ]
  },
  {
    role: "Robotics Engineer",
    skills: "C++, Python, ROS",
    details: [
      "Autonomous vehicles",
      "Automated manufacturing systems",
      "Robotics in automotive production"
    ]
  },
  {
    role: "Software Tester",
    skills: "Automation and Manual Testing",
    details: [
      "Automotive software validation",
      "Functional safety testing",
      "ECU testing"
    ]
  },
  {
    role: "Verification Engineer",
    skills: "SystemVerilog, UVM, Functional Coverage",
    details: [
      "Automotive ASIC/SoC verification",
      "Safety-critical semiconductor validation"
    ]
  },
  {
    role: "VLSI Design Engineer",
    skills: "RTL Design, Verilog, Synthesis",
    details: [
      "Automotive processors",
      "ADAS and autonomous driving chips"
    ]
  }
];

const Careers = () => {
  return (
    <section id="careers" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Careers</h2>
        <p className="section-subtitle">
          Join our global team of innovators. We're hiring across multiple disciplines.
        </p>

        <div className="careers-grid">
          {jobs.map((job, index) => (
            <div className="job-card glass-card" key={index}>
              <div className="job-header">
                <div className="job-icon">
                  <Briefcase size={20} />
                </div>
                <h4 className="job-title">{job.role}</h4>
              </div>
              <div className="job-details">
                <div className="job-skills">
                  <strong>Skills:</strong> {job.skills}
                </div>
                <ul className="job-bullets">
                  {job.details.map((detail, idx) => (
                    <li key={idx} className="job-bullet-item">
                      <span className="bullet-dot"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="job-footer">
                <button className="apply-btn">
                  Apply <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
