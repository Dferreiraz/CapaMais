import './style.css'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        <div className="footer-brand">
          <span className="footer-logo">Capa+</span>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Capa+. Todos os direitos reservados.
          </p>
        </div>

        <div className="footer-social">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-social-btn"
            aria-label="Instagram"
          >
            <svg className="footer-social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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