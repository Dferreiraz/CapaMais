import './style.css'
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg'
import imageContact from '../../assets/images/image-contact.svg'

export const Main = () => {
  return (
    <main>
      <div className="main-content">
        <div className="badge">
          <span>Especialistas em Celulares</span>
        </div>
        <h1>Conserto rápido e <span>acessórios de alta qualidade</span></h1>
        <p>
          Sua assistência técnica de confiança na Mooca. Diagnóstico gratuito, peças originais e garantia total no seu atendimento.
        </p>

        <div className="btn-main">
          <a 
            href="https://wa.me/5511917243006?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Fazer Orçamento Grátis
          </a>

          <a href="#services" className="btn-secondary">
            <span>Ver Serviços</span>
            <img src={iconwhatsaap} alt="Seta indicando navegação para serviços" />
          </a>
        </div>
      </div>

      <div className="main-image-container">
        <img src={imageContact} alt="Técnico realizando reparo em smartphone" className="img-hero" />
      </div>
    </main>
  )
}