import React from 'react';
import './Footer.css';

// Links de Navegação (Para reuso de módulos e bases)
const navLinks = [
    { name: 'CenInha (Assistente IA)', href: '#ceninha' },
    { name: 'Bases de Dados', href: '#bases' },
    { name: 'Policy Briefing', href: '#policy-briefing' },
    { name: 'Predições de desfecho', href: '#predicoes' },
];

const Rodape = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                
                {/* Coluna 1: Logo e Copyright */}
                <div className="footer-col footer-branding">
                    {/* Reutilizando o estilo do logo do cabeçalho */}
                    <span className="logo-text footer-logo">CenárioAI</span>
                    
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} CenárioAI. 
                        <br/>Iniciativa da Universidade de Brasília.
                    </p>
                </div>

                {/* Coluna 2: Links Úteis / Módulos */}
                <div className="footer-col footer-links">
                    <h4 className="footer-heading">Links Rápidos</h4>
                    <ul className="footer-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="footer-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coluna 3: Documentação e Contato */}
                <div className="footer-col footer-documentation">
                    <h4 className="footer-heading">Suporte e Documentação</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="footer-link">
                                Documentação Técnica (API/IA)
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="footer-link">
                                Contato e Parcerias
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Rodape;