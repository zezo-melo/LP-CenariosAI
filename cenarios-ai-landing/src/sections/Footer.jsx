import React from 'react';
import './Footer.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import LogoCenariosAI from '../assets/logo-cenarios-ai.png'; 


// Links de Navegação (Para reuso de módulos e bases)
const navLinks = [
    { name: 'CenInha (Assistente IA)', href: 'https://cenarios.unb.br/ceninha/' },
    { name: 'Bases de Dados', href: '#modules' },
    { name: 'Policy Briefing', href: '#modules' },
    { name: 'Predições de desfecho', href: '#modules' },
];

const Rodape = () => {
    const [col1Ref, col1Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [col2Ref, col2Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [col3Ref, col3Visible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <footer id='contact' className="main-footer">
            <div className="footer-container">
                <div 
                    ref={col1Ref} 
                    className={`footer-col footer-branding animate-on-scroll ${col1Visible ? 'fade-in-left-visible' : ''}`}
                    style={{ opacity: col1Visible ? 1 : 0, transform: col1Visible ? 'translateX(0)' : 'translateX(-30px)' }}
                >
                    <div className="logo">
                        <a href="#">
                        <img 
                            src={LogoCenariosAI} 
                            alt="Logo CenárioAI" 
                            className="logo-image" 
                        />
                        </a>
                    </div>
                    
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} CenárioAI. 
                        <br/>Iniciativa da Universidade de Brasília.
                    </p>
                </div>

                <div 
                    ref={col2Ref} 
                    className={`footer-col footer-links animate-on-scroll ${col2Visible ? 'fade-in-up-visible' : ''}`}
                    style={{ opacity: col2Visible ? 1 : 0, transform: col2Visible ? 'translateY(0)' : 'translateY(30px)' }}
                >
                    <h4 className="footer-heading">Links Rápidos</h4>
                    <ul className="footer-list">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="footer-link" target='_blank'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div 
                    ref={col3Ref} 
                    className={`footer-col footer-documentation animate-on-scroll ${col3Visible ? 'fade-in-right-visible' : ''}`}
                    style={{ opacity: col3Visible ? 1 : 0, transform: col3Visible ? 'translateX(0)' : 'translateX(30px)' }}
                >
                    <h4 className="footer-heading">Suporte e Documentação</h4>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="footer-link" target='_blank'>
                                Documentação Técnica (API/IA)
                            </a>
                        </li>
                        <li>
                            <a href="https://cenarios.unb.br/" className="footer-link" target='_blank'>
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