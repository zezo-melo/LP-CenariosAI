import React, { useEffect, useState } from 'react';
import './Header.css';

import LogoCenariosAI from '../assets/logo-cenarios-ai.png'; 

const navItems = [
  { name: 'Sobre', href: '#sobre-cenarios' },
  { name: 'CenInha', href: '#modules' },
  { name: 'Bases de Dados', href: '#modules' },
  { name: 'Policy Briefing', href: '#modules' },
  { name: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 65;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      
      closeMenu();
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className={`logo ${isVisible ? 'animate-fade-in-left' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
          <a href="#">
          <img 
            src={LogoCenariosAI} 
            alt="Logo CenárioAI" 
            className="logo-image" 
          />
          </a>
        </div>

        <nav className={`main-nav ${isVisible ? 'animate-fade-in-down' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={item.name} className="nav-item" style={{ animationDelay: `${0.1 * index}s` }}>
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#" className={`header-btn-primary ${isVisible ? 'animate-fade-in-right' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
          Acessar Plataforma
        </a>

        <button 
          className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <a 
                  href={item.href} 
                  className="mobile-nav-link" 
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;