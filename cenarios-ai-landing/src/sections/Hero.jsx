import React from 'react';
import './Hero.css';

import MapaBrasilIlustracao from '../assets/mapa-brasil-img.png'; 

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        
        {/* Coluna 1: Texto e CTAs */}
        <div className="hero-content">
          <h1 className="hero-title">
            Inteligência Artificial a serviço da vigilância em saúde pública
          </h1>
          
          <p className="hero-subtitle">
            O CenárioAI automatiza análises, relatórios e previsões sobre tuberculose, hanseníase e arboviroses, com dados oficiais atualizados diariamente.
          </p>

          <div className="hero-actions">
            <a href="#explorar" className="btn-primary btn-explore">
              Explorar a Plataforma
            </a>
            
            <a href="#ceninha" className="btn-secondary btn-ceninha">
              Conhecer a CenInhA
            </a>
          </div>
        </div>

        {/* NOVO: Coluna 2 (Ilustração do Mapa do Brasil) */}
        <div className="hero-illustration">
          <img 
            src={MapaBrasilIlustracao} 
            alt="Mapa do Brasil com rede de dados e IA" 
            className="map-image" 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;