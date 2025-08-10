import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, log the data
    console.log('Form submitted:', formData);

    // Optionally, add API call here

    // Reset form after submit
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="underline"></div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>If you have any project in mind or just want to say hi, feel free to reach out!</p>

          <ul>
            <li><strong>Email:</strong> prachi@example.com</li>
            <li><strong>Phone:</strong> +91 9876543210</li>
            <li><strong>Location:</strong> Mumbai, India</li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
