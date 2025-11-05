import React from 'react';
import './CardModulo.css';
// Se você estiver usando ícones, precisará importá-los aqui (ex: React Icons)
// Exemplo: import { FaDatabase, FaChartBar, FaRobot, FaBrain } from 'react-icons/fa';

// O componente CardModulo aceita props para Icone, Título, Descrição e Link
const CardModulo = ({ icon, title, description, linkText, linkHref }) => {
  return (
    <div className="card-modulo">
      {/* Ícone placeholder. Em um projeto real, você usaria SVG ou um componente de ícone */}
      <div className="card-icon-wrapper">
        <span className="card-icon">{icon || '📦'}</span> 
      </div>
      
      <h3 className="card-title">{title}</h3>
      
      <p className="card-description">{description}</p>
      
      <a href={linkHref} className="card-link">
        {linkText} →
      </a>
    </div>
  );
};

export default CardModulo;