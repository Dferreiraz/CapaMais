import './style.css'
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg'
import iconRelogio from '../../assets/icons/iconRelogio.svg'
import iconEndereco from '../../assets/icons/iconEndereco.svg'
import imageContact from '../../assets/images/image-contact.svg'

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        <div className="contact-image-wrapper">
          <img 
            src={imageContact} 
            alt="Interior da loja Capa+ com acessórios e balcão de atendimento" 
            className="contact-store-image"
          />
        </div>

        <div className="contact-content">
          
          <div className="contact-map-wrapper" id="location">
            <iframe
              title="Mapa de localização da loja Capa+ na Mooca"
              src="https://maps.google.com/maps?q=Rua%20do%20Oratorio,%201234%20-%20Mooca,%20Sao%20Paulo%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="contact-map-iframe"
              loading="lazy"
            ></iframe>
          </div>

          <h2 className="contact-title">Onde nos encontrar</h2>

          <div className="contact-info-grid">
            
            <div className="contact-info-item">
              <div className="contact-info-header">
                <img src={iconEndereco} alt="Ícone de endereço" className="contact-icon" />
                <strong className="contact-label">Endereço:</strong>
              </div>
              <address className="contact-address-text">
                Rua do Oratório, 1234 - Mooca<br />
                São Paulo - SP, 03116-000
              </address>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-header">
                <img src={iconRelogio} alt="Ícone de relógio" className="contact-icon" />
                <strong className="contact-label">Horário de funcionamento:</strong>
              </div>
              <p className="contact-details-text">
                Segunda a Sexta: 09:00 - 19:00<br />
                Sábado: 09:00 - 15:00
              </p>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-header">
                <img src={iconwhatsaap} alt="Ícone do WhatsApp" className="contact-icon" />
                <strong className="contact-label">WhatsApp:</strong>
              </div>
              <a 
                href="https://wa.me/5511917243006?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20atendimento." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-whatsapp-link"
              >
                (11) 91724-3006
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}