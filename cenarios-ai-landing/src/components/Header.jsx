import React, { useEffect, useState } from 'react';
import './Header.css';

import LogoCenariosAI from '../assets/logo-cenarios-ai.png'; 

// Dados de navegação conforme o descritivo (1 Cabeçalho Fixo)
const navItems = [
  { name: 'Sobre', href: '#sobre-cenarios' },
  { name: 'CenInha', href: '#modules' },
  { name: 'Bases de Dados', href: '#modules' },
  { name: 'Policy Briefing', href: '#modules' },
    { name: 'Contato', href: '#contact' },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul >
        </nav>

        <a href="#" className={`btn-primary ${isVisible ? 'animate-fade-in-right' : ''}`} style={{ opacity: isVisible ? 1 : 0 }}>
          Acessar Plataforma
        </a>
      </div>
    </header>
  );
};

export default Header;