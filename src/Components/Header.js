import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Assets/Styles/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <img src="../../Logo.png" alt="Accueil" style={{ width: '200px', height: 'auto' }} />
      </Link>
      <nav className={isMenuOpen ? 'menu-open' : ''}>
        <ul>
          <li><Link to="/batiment" onClick={closeMenu}>Bâtiment</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/fabrication" onClick={closeMenu}>Fabrication</Link></li>
          <li><Link to="/alimentation" onClick={closeMenu}>Alimentation</Link></li>
          <li><Link to="/fiche-artisan" onClick={closeMenu}>Fiche Artisans</Link></li>
        </ul>
        
      </nav>
      <button className="burger-menu" onClick={handleMenuToggle}>&#9776;</button>
    </header>
  );
}

export default Header;
