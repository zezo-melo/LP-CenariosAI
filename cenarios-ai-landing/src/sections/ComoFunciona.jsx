import React from 'react';
import './ComoFunciona.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Dados das 5 Etapas do Fluxo
const flowSteps = [
  {
    icon: '🧾', // Ícone de lista/dados
    text: 'Coleta automática dos dados oficiais (FTP/MS)',
  },
  {
    icon: '🎯', // Ícone de foco/processamento
    text: 'Processamento e limpeza automática (CenárioAI)',
  },
  {
    icon: '📈', // Ícone de relatório/análise
    text: 'Geração de análises, gráficos e relatórios (Policy Brief)',
  },
  {
    icon: '🤖', // Ícone de robô/IA (CenInha)
    text: 'Apoio ao campo via CenInha',
  },
  {
    icon: '🧠', // Ícone de cérebro/predição
    text: 'Predição de riscos e desfechos',
  },
];

const ComoFunciona = () => {
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="como-funciona" className="como-funciona-section">
      <div className="como-funciona-container">
        <h2 
          ref={titleRef} 
          className={`como-funciona-title animate-on-scroll ${titleVisible ? 'fade-in-up-visible' : ''}`}
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          Como funciona
        </h2>
        
        <div ref={gridRef} className="flow-steps-grid">
          {flowSteps.map((step, index) => (
            <div 
              key={index} 
              className={`flow-step animate-on-scroll ${gridVisible ? 'scale-in-visible' : ''}`}
              style={{ 
                opacity: gridVisible ? 1 : 0, 
                transform: gridVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="step-icon-wrapper">
                  <span className="step-icon">{step.icon}</span>
              </div>
              
              <p className="step-text">{step.text}</p>
              
            </div>
          ))}
          
          <div 
            className={`flow-cta-wrapper animate-on-scroll ${gridVisible ? 'scale-in-visible' : ''}`}
            style={{ 
              opacity: gridVisible ? 1 : 0, 
              transform: gridVisible ? 'scale(1)' : 'scale(0.9)',
              transitionDelay: `${flowSteps.length * 0.1}s`
            }}
          >
              <a href="#plataforma" className="btn-como-fncn flow-cta-button">
                  Acesse aqui! <span className="cta-arrow">→</span>
              </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;