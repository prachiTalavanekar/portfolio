import React from 'react';
import '../styles/about.css';
import myPhoto from '../assets/Prachi.jpg'; // Replace with your image

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="underline"></div>

      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Prachi Talavanekar" />
        </div>

        <div className="about-content">
          <p className="about-intro">
            Hello! I am Prachi Talavanekar, a passionate web Developer with a focus on creating engaging and user-friendly web experiences.
          </p>
          <p className="about-description">
            I specialize in building responsive websites using modern technologies like React, Tailwind, and more. I love transforming ideas into reality with clean code and thoughtful design.
          </p>

          <div className="about-info">
            <p><strong>Name:</strong> Prachi Talavanekar</p>
            <p><strong>Email:</strong> prachi@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> Mumbai, India</p>
            <p><strong>Nationality:</strong> Indian</p>
            <p><strong>Freelance:</strong> Available</p>
          </div>

          <div className="about-buttons">
            <a href="#contact" className="btn hire">Hire Me</a>
            <a href="/PrachiTalavanekar_CV.pdf" className="btn download" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
