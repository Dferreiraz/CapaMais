import { useState } from 'react';
import './style.css';
import LogoCapaMais from '../../assets/images/LogoCapa+.svg';
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <img src={LogoCapaMais} alt="Logo da empresa Capa+" className='img-header' />

            <button 
                className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`menu-wrapper ${isMenuOpen ? 'open' : ''}`}>
                <nav className="nav-header">
                    <a href="#services" onClick={closeMenu}>Serviços</a>
                    <a href="#products" onClick={closeMenu}>Produtos</a>
                    <a href="#contact" onClick={closeMenu}>Contato</a>
                    <a href="#location" onClick={closeMenu}>Localização</a>
                </nav>

                <div className="btn-header">
                    <a
                        href="https://wa.me/5511911219846?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        Falar no WhatsApp
                    </a>
                    <img src={iconwhatsaap} alt='ícone do whatsapp' />
                </div>
            </div>
        </header>
    );
};