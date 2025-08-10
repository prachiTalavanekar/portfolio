import React from 'react';
import '../styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Prachi Talavanekar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/contact"><Link to='/contact'>Contact</Link></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
