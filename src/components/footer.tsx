// components/Footer.js
import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Shaheers Portfolio</h3>
          <p>Building digital experiences with creativity and code.</p>
        </div>
        
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://www.youtube.com/@MusicBySherry" target="_blank" rel="noopener noreferrer">Youtube</a>
          <a href="https://github.com/Shaheeer-create" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shaheer Naeem. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
