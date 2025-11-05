import React from 'react';
import './Header.css'; // Importa os estilos específicos do cabeçalho

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
          {/* Usamos um <span> para simular o logo com a cor Terrosa definida */}
          <span className="logo-text">CenárioAI</span>
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
          </ul>
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