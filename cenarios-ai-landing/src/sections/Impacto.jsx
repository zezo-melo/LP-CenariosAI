import React from 'react';
import './Impacto.css';

// Dados dos benefícios
const beneficios = [
  {
    icon: '⚡️', // Raio para acelerar
    text: 'Acelerar a resposta a surtos locais',
  },
  {
    icon: '📊', // Gráfico para automatizar boletins
    text: 'Automatizar boletins epidemiológicos',
  },
  {
    icon: '🎓', // Chapéu para educação
    text: 'Apoiar a educação permanente de profissionais',
  },
  {
    icon: '🛡️', // Escudo para fortalecer vigilância
    text: 'Fortalecer a vigilância baseada em evidências',
  },
];

const Impacto = () => {
  return (
    <section id="impacto" className="impacto-section">
      <div className="impacto-container">
        
        <h2 className="impacto-title">Impacto e Aplicações</h2>
        
        <p className="impacto-intro">
          O CenárioAI está sendo utilizado em universidades, secretarias de saúde e programas de vigilância para:
        </p>

        {/* Mudar a classe para refletir o novo layout vertical (colunas 2x2) */}
        <div className="beneficios-grid-vertical">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="beneficio-item-vertical">
              
              <div className="beneficio-icon-wrapper-vertical">
                <span className="beneficio-icon-large">{beneficio.icon}</span>
              </div>
              
              <p className="beneficio-text-center">{beneficio.text}</p>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Impacto;