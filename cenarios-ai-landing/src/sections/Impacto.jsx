import React from 'react';
import './Impacto.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="impacto" className="impacto-section">
      <div className="impacto-container">
        <h2 
          ref={titleRef} 
          className={`impacto-title animate-on-scroll ${titleVisible ? 'fade-in-up-visible' : ''}`}
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          Impacto e Aplicações
        </h2>
        
        <p 
          ref={introRef} 
          className={`impacto-intro animate-on-scroll ${introVisible ? 'fade-in-up-visible' : ''}`}
          style={{ opacity: introVisible ? 1 : 0, transform: introVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          O CenárioAI está sendo utilizado em universidades, secretarias de saúde e programas de vigilância para:
        </p>

        <div ref={gridRef} className="beneficios-grid-vertical">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index} 
              className={`beneficio-item-vertical animate-on-scroll ${gridVisible ? 'scale-in-visible' : ''}`}
              style={{ 
                opacity: gridVisible ? 1 : 0, 
                transform: gridVisible ? 'scale(1)' : 'scale(0.9)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
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