import React from 'react';
import './SobreCenarios.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import LogoCenariosUnB from '../assets/logo-cenarios.png'; 

const SobreCenarios = () => {
  const [contentRef, contentVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [asideRef, asideVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="sobre-cenarios" className="sobre-cenarios-section">
      <div className="sobre-cenarios-container">
        <div 
          ref={contentRef} 
          className={`sobre-cenarios-content animate-on-scroll ${contentVisible ? 'fade-in-left-visible' : ''}`}
          style={{ opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateX(0)' : 'translateX(-30px)' }}
        >
          <h2 className="sobre-cenarios-title">
            O que é o Cenários UnB
          </h2>
          
          <p className="sobre-cenarios-text">
            O projeto Cenários UnB é uma iniciativa da **Universidade de Brasília** que integra dados epidemiológicos e tecnologias de IA para apoiar a tomada de decisão em saúde pública.
          </p>
          
          <p className="sobre-cenarios-text">
            A plataforma **CenárioAI** centraliza ferramentas de automação, análise e geração de relatórios inteligentes com base em dados do Ministério da Saúde.
          </p>
        </div>

        <div 
          ref={asideRef} 
          className={`sobre-cenarios-aside animate-on-scroll ${asideVisible ? 'fade-in-right-visible' : ''}`}
          style={{ opacity: asideVisible ? 1 : 0, transform: asideVisible ? 'translateX(0)' : 'translateX(30px)' }}
        >
            <img 
                src={LogoCenariosUnB} 
                alt="Logo Cenários UnB" 
                className="aside-logo" 
            />
            
            <a href="https://cenarios.unb.br/" className="btn-white-secondary" target='_blank'>
                Acessar <span className="cta-arrow-dark">→</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default SobreCenarios;