import './style.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Identidade e Copyright */}
        <div className="footer-brand">
          <h2 className="footer-logo">Capa+</h2>
          <p className="footer-copyright">
            © 2026 Capa+. Todos os direitos reservados.
          </p>
        </div>

        {/* Links de Redes Sociais */}
        <div className="footer-social">
          <a 
            href="https://www.instagram.com/capamaiss/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-btn" 
            aria-label="Instagram da Capa+"
          >
            <svg 
              className="footer-social-icon" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a 
            href="" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-btn"   
          >
            
          </a>
        </div>

      </div>
    </footer>
  )
}