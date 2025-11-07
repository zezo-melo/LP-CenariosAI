import React from 'react';
import './Header.css'; // Importa os estilos específicos do cabeçalho

// 1. Importar a imagem da logo (Assumindo que está em src/assets/)
import LogoCenariosAI from '../assets/logo-cenarios-ai.png'; 

// Dados de navegação conforme o descritivo (1 Cabeçalho Fixo)
const navItems = [
  { name: 'Sobre', href: '#about' },
  { name: 'CenInha', href: '#ceninha' },
  { name: 'Bases de Dados', href: '#bases' },
  { name: 'Policy Briefing', href: '#policy-briefing' },
  { name: 'Predições de desfecho (TB)', href: '#predicoes' },
  { name: 'Contato', href: '#contact' },
];

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        
        {/* Logo CenárioAI à esquerda */}
        <div className="logo">
          {/* 2. Substituir o <span> pelo <img> */}
          <img 
            src={LogoCenariosAI} 
            alt="Logo CenárioAI" 
            className="logo-image" 
          />
        </div>

        {/* Menu de Navegação centralizado/à direita */}
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.name}
                </a>
              </li>
            ))}
          </ul >
        </nav>

        {/* Botão CTA Primário: "Acessar Plataforma" */}
        <a href="#" className="btn-primary">
          Acessar Plataforma
        </a>
      </div>
    </header>
  );
};

export default Header;