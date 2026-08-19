import './style.css'
import LogoCapaMais from '../../assets/images/LogoCapa+.svg'
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg'

export const Header = () => {
  return (
    <header>
        <img src={LogoCapaMais} alt="Logo da empresa Capa+" className='img-header'/>

        <div>
            <nav className="nav-header">
                <a href="#services">Serviços</a>
                <a href="#products">Produtos</a>
                <a href="#contact">Contato</a>
                <a href="#location">Localização</a>
            </nav>
        </div>

        <div className="btn-header">
            <a>Falar no whatsApp</a>
            <img src={iconwhatsaap} alt='ícone do whatsapp' />
        </div>
    </header>
  )
}