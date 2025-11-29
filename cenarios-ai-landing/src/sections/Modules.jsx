import React from 'react';
import CardModulo from '../components/CardModulo';
import './Modules.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import iconCeninha from '../assets/ceninha_logo.png' 
import iconDatabase from '../assets/CenariosDB.png';
import iconPolicyBrief from '../assets/Brief.png';
import iconPrediction from '../assets/TBRisk.png';

const modulesData = [
  {
    icon: iconCeninha, 
    title: 'CenInha - Assistente de IA',
    description: 'A CenInha é o assistente virtual da vigilância em saúde. Oferece apoio ao preenchimento do SINAN, educação de profissionais e geração de relatórios automáticos. Já disponível para Tuberculose, Hanseníase e Arboviroses.',
    linkText: 'Acessar os Assistentes',
    linkHref: 'https://cenarios.unb.br/ceninha/',
    target: '_blank',
  },
  {
    icon: iconDatabase, 
    title: 'Banco de Dados em Tempo Real',
    description: 'Dados oficiais atualizados diariamente via automação FTP do Ministério da Saúde. Disponível para TB, Hanseníase e Arboviroses. Permite Download em CSV ou XLSX e filtros por período, localidade e agravo.',
    linkText: 'Ver bases de dados',
    linkHref: '#bases',
  },
  {
    icon: iconPolicyBrief, 
    title: 'Policy Briefing Automatizado',
    description: 'Geração automática de Policy Briefs, a partir de planilhas sintéticas. O sistema cria texto analítico (com IA), gráficos/indicadores e o documento final editável (DOCX/PDF).',
    linkText: 'Gerar novo Policy Brief',
    linkHref: '#policy-briefing',
  },
  {
    icon: iconPrediction, 
    title: 'Predição de Desfechos',
    description: 'Modelos de Machine Learning preveem desfechos negativos da tuberculose com base em variáveis sociodemográficas e clínicas. Inclui risco de abandono, probabilidade de óbito e probabilidade de cura.',
    linkText: 'Acessar predição',
    linkHref: '#predicoes',
  },
];

const Modules = () => {
  const [titleRef, titleVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [gridRef, gridVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="modules" className="modules-section">
      <div className="modules-container">
        <h2 
          ref={titleRef} 
          className={`modules-main-title animate-on-scroll ${titleVisible ? 'fade-in-up-visible' : ''}`}
          style={{ opacity: titleVisible ? 1 : 0, transform: titleVisible ? 'translateY(0)' : 'translateY(30px)' }}
        >
          Módulos da Plataforma
        </h2>
        
        <div 
          ref={gridRef} 
          className={`modules-grid ${gridVisible ? 'visible' : ''}`}
        >
          {modulesData.map((module, index) => (
            <CardModulo 
              key={index}
              icon={module.icon} 
              title={module.title}
              description={module.description}
              linkText={module.linkText}
              target={module.target} 
              linkHref={module.linkHref}
              delay={index * 0.1}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;