// src/sections/SobreCenarios.jsx (Mantido igual, apenas para referência)

import React from 'react';
import './SobreCenarios.css';

// Importar a logo (Assumindo que está em src/assets/logo-cenarios.png)
import LogoCenariosUnB from '../assets/logo-cenarios.png'; 

const SobreCenarios = () => {
  return (
    <section id="sobre-cenarios" className="sobre-cenarios-section">
      <div className="sobre-cenarios-container">
        
        {/* Coluna 1: Conteúdo de Texto */}
        <div className="sobre-cenarios-content">
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

        {/* Coluna 2: Logo e CTA de Acesso */}
        <div className="sobre-cenarios-aside">
            <img 
                src={LogoCenariosUnB} 
                alt="Logo Cenários UnB" 
                className="aside-logo" 
            />
            
            {/* Botão com Fundo Branco e Seta */}
            <a href="#plataforma" className="btn-white-secondary">
                Acessar <span className="cta-arrow-dark">→</span>
            </a>
        </div>

      </div>
    </section>
  );
};

export default SobreCenarios;