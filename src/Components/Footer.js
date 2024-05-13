import React from 'react';
import './Assets/Styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="legal-links">
          <a href="#*">Mentions légales</a>
          <a href="#">Données personnelles</a>
          <a href="#">Accessibilité</a>
          <a href="#">Cookies</a>
        </div>
        <div className="contact-info">
          <p>101 cours Charlemagne</p>
          <p>CS 20033</p>
          <p>69269 LYON CEDEX 02</p>
          <p>France</p>
          <p>+33 (0)4 26 73 40 00</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
