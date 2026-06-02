import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Careers.css';

const jobs = [
  { role: "Android Developer", skills: "Java, Kotlin" },
  { role: "CAD/CAM Designer", skills: "Solidworks" },
  { role: "DFT (Design for Test) Engineer", skills: "DFT Methodologies, ATPG, JTAG" },
  { role: "FARM-stack Developer", skills: "FastAPI, ReactJs, MongoDB" },
  { role: "FPGA Engineer", skills: "VHDL, modelsim, xilinc vivado" },
  { role: "Hardware Design & Testing", skills: "C, Embedded C, RTOS, Kicad" },
  { role: "IOS Developer", skills: "Swift" },
  { role: "Machine Learning Engineer", skills: "Python, Keras, Opencv, Scikit, Tensorflow" },
  { role: "MEAN-stack Developer", skills: "AngularJs, NodeJs, MongoDB, ExpressJs" },
  { role: "MERN-stack Developer", skills: "ReactJs, NodeJs, MongoDB, ExpressJs" },
  { role: "Physical Design Engineer", skills: "RTL-to-GDSII Flow, Place and Route, Timing Closure" },
  { role: "Robotics Engineer", skills: "C++, Python, ROS" },
  { role: "Software Tester", skills: "Automation and Manual Testing" },
  { role: "UX/UI Designer", skills: "Framer, Figma, Adobe XD, Sketch" },
  { role: "Verification Engineer", skills: "SystemVerilog, UVM, Functional Coverage" },
  { role: "VLSI Design Engineer", skills: "RTL Design, Verilog, Synthesis" }
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
              <div className="job-icon">
                <Briefcase size={24} />
              </div>
              <div className="job-details">
                <h4>{job.role}</h4>
                <p><strong>Skills:</strong> {job.skills}</p>
              </div>
              <button className="apply-btn">
                Apply <ChevronRight size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
