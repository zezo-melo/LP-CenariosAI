import React from 'react';
import './Hero.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import MapaBrasilIlustracao from '../assets/mapa-brasil-img.png'; 

const Hero = () => {
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [imageRef, imageVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div 
          ref={contentRef} 
          className={`hero-content animate-on-scroll ${contentVisible ? 'fade-in-left-visible' : ''}`}
          style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateX(0)' : 'translateX(-30px)' }}
        >
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
            
            <a href="https://cenarios.unb.br/ceninha/" className="btn-secondary btn-ceninha" target='_blank'>
              Conhecer a CenInhA
            </a>
          </div>
        </div>

        <div 
          ref={imageRef} 
          className={`hero-illustration animate-on-scroll ${imageVisible ? 'fade-in-right-visible' : ''}`}
          style={{ opacity: imageVisible ? 1 : 0, transform: imageVisible ? 'translateX(0)' : 'translateX(30px)' }}
        >
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