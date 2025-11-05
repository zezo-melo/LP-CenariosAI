import React from 'react';
import './Hero.css';

// Importe a imagem de destaque do mapa do Brasil (substitua pelo caminho correto)
// import MapIllustration from '../assets/mapa-brasil-ia.png'; 
// Se você não tiver o arquivo de imagem, use a URL da imagem de referência para teste:
import MapIllustration from '../assets/mapa-brasil-img.png'; 

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
            {/* CTA Principal: Fundo Azul Petróleo (usa classe global) */}
            <a href="#explorar" className="btn-primary btn-explore">
              Explorar a Plataforma
            </a>
            
            {/* CTA Secundário: Contorno Azul Petróleo */}
            <a href="#ceninha" className="btn-secondary btn-ceninha">
              Conhecer a CenInhA
            </a>
          </div>
        </div>

        {/* Coluna 2: Ilustração do Mapa do Brasil */}
        <div className="hero-illustration">
          {/* Se a imagem for um SVG ou PNG, coloque o caminho correto aqui. */}
          {/* Por enquanto, usamos a imagem de referência (se for uma URL, ajuste o src) */}
          <img src={MapIllustration} alt="Mapa do Brasil com rede de dados e IA" className="map-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;