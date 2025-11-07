import React from 'react';
import './ComoFunciona.css';

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
  return (
    <section id="como-funciona" className="como-funciona-section">
      <div className="como-funciona-container">
        
        <h2 className="como-funciona-title">Como funciona</h2>
        
        <div className="flow-steps-grid">
          {flowSteps.map((step, index) => (
            <div key={index} className="flow-step">
              
              <div className="step-icon-wrapper">
                  <span className="step-icon">{step.icon}</span>
              </div>
              
              <p className="step-text">{step.text}</p>
              
            </div>
          ))}
          
          {/* NOVO ITEM: O Botão CTA na terceira coluna da linha de baixo */}
          <div className="flow-cta-wrapper">
              {/* O href deve ser ajustado para o destino da plataforma */}
              <a href="#plataforma" className="btn-primary flow-cta-button">
                  Acesse aqui! <span className="cta-arrow">→</span>
              </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;