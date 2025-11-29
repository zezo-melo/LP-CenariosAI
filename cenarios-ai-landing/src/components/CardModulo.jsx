import React from 'react';
import './CardModulo.css';

const CardModulo = ({ icon, title, description, linkText, linkHref, target, delay = 0, isVisible = false }) => {
  return (
    <div 
      className={`card-modulo animate-on-scroll ${isVisible ? 'scale-in-visible' : ''}`}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transform: isVisible ? 'scale(1)' : 'scale(0.9)',
        transitionDelay: `${delay}s`
      }}
    >
      <div className="card-icon">
        <img src={icon} alt={title} className="module-icon" />
      </div>

      <h3 className="card-title">{title}</h3>

      <p className="card-description">{description}</p>

      <a href={linkHref} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="card-link">
        {linkText} →
      </a>
    </div>
  );
};

export default CardModulo;
