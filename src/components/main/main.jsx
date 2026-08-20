import './style.css'
import imgHero from '../../assets/images/imgHero.svg'
import iconwhatsaap from '../../assets/icons/icon-whatsaap.svg'

export const Main = () => {
    return (
        <main>
            <div className="main-content">

                <span className="badge">Assistência Técnica Mooca</span>
                <h1>Assistência Técnica <span>Especializada</span> para seu Smartphone</h1>
                <p>Consertos rápidos, acessórios de qualidade e atendimento especializado para deixar seu aparelho como novo. Especialistas em <span>Apple, Samsung</span> e as principais marcas.</p>
                
                <div className="btn-main">
                    <a className='btn-primary'>Solicitar orçamento</a>
                    <div className="btn-secondary">
                        <a href='https://wa.me/5511911219846?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'
                        target="_blank" rel="noopener noreferrer">Falar no whatsApp</a>
                        <img src={iconwhatsaap} alt='ícone do whatsapp' />
                    </div>
                </div>
            </div>

            <img className="img-hero" src={imgHero} alt="Frente da Assistência Técnica" />
        </main>
    )
}