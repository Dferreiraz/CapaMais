import './style.css'
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg'
import iconRelogio from '../../assets/icons/iconRelogio.svg'
import iconEndereco from '../../assets/icons/iconEndereco.svg'
import imageContact from '../../assets/images/image-contact.svg'

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        
        <div className="contact-image-wrapper">
          <img 
            src={imageContact} 
            alt="Interior da loja Capa+ com acessórios e balcão de atendimento" 
            className="contact-store-image"
          />
        </div>

        {/* Coluna Direita: Mapa Interativo e Informações */}
        <div className="contact-content">
          
          {/* Mapa do Endereço */}
          <div className="contact-map-wrapper">
            <iframe
              title="Mapa de localização da loja Capa+ na Mooca"
              src="https://maps.google.com/maps?q=Rua%20do%20Oratorio,%201234%20-%20Mooca,%20Sao%20Paulo%20-%20SP&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="contact-map-iframe"
              loading="lazy"
            ></iframe>
          </div>

          {/* Título da Seção */}
          <h2 className="contact-title">Onde nos encontrar</h2>

          {/* Grid de Informações de Contato */}
          <div className="contact-info-grid">
            
            {/* Endereço */}
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

            {/* Horário */}
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

            {/* WhatsApp */}
            <div className="contact-info-item">
              <div className="contact-info-header">
                <img src={iconwhatsaap} alt="Ícone do WhatsApp" className="contact-icon" />
                <strong className="contact-label">WhatsApp:</strong>
              </div>
              <a 
                href="https://wa.me/5511917243006" 
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