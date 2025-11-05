import React from 'react';
import './SobreCenarios.css';

const SobreCenarios = () => {
  return (
    <section id="sobre-cenarios" className="sobre-cenarios-section">
      <div className="sobre-cenarios-container">
        
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
    </section>
  );
};

export default SobreCenarios;