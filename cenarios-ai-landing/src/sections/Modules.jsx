import React from 'react';
import CardModulo from '../components/CardModulo';
import './Modules.css';

// Dados dos Módulos baseados no wireframe
const modulesData = [
  {
    icon: '🤖', // CenInha - Assistente de IA
    title: 'CenInha - Assistente de IA',
    description: 'A CenInha é o assistente virtual da vigilância em saúde. Oferece apoio ao preenchimento do SINAN, educação de profissionais e geração de relatórios automáticos. Já disponível para Tuberculose, Hanseníase e Arboviroses.',
    linkText: 'Acessar os Assistentes',
    linkHref: '#ceninha',
  },
  {
    icon: '📊', // Banco de Dados em Tempo Real
    title: 'Banco de Dados em Tempo Real',
    description: 'Dados oficiais atualizados diariamente via automação FTP do Ministério da Saúde. Disponível para TB, Hanseníase e Arboviroses. Permite Download em CSV ou XLSX e filtros por período, localidade e agravo.',
    linkText: 'Ver bases de dados',
    linkHref: '#bases',
  },
  {
    icon: '📄', // Policy Briefing Automatizado
    title: 'Policy Briefing Automatizado',
    description: 'Geração automática de Policy Briefs, a partir de planilhas sintéticas. O sistema cria texto analítico (com IA), gráficos/indicadores e o documento final editável (DOCX/PDF).',
    linkText: 'Gerar novo Policy Brief',
    linkHref: '#policy-briefing',
  },
  {
    icon: '🧠', // Predição de Desfechos
    title: 'Predição de Desfechos',
    description: 'Modelos de Machine Learning preveem desfechos negativos da tuberculose com base em variáveis sociodemográficas e clínicas. Inclui risco de abandono, probabilidade de óbito e probabilidade de cura.',
    linkText: 'Acessar predição',
    linkHref: '#predicoes',
  },
];

const Modules = () => {
  return (
    <section id="modules" className="modules-section">
      <div className="modules-container">
        <h2 className="modules-main-title">Módulos da Plataforma</h2>
        
        <div className="modules-grid">
          {modulesData.map((module, index) => (
            <CardModulo 
              key={index}
              icon={module.icon}
              title={module.title}
              description={module.description}
              linkText={module.linkText}
              linkHref={module.linkHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;