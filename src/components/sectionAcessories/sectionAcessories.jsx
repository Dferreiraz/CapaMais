import './style.css'

import Capinhas from '../../assets/images/Capinhas.svg'
import Peliculas from '../../assets/images/Peliculas.svg'
import Carregadores from '../../assets/images/Carregadores.svg'
import CabosReforcados from '../../assets/images/CabosReforcados.svg'
import FonesdeOuvidos from '../../assets/images/FonesdeOuvidos.svg'
import SuporteseGadgets from '../../assets/images/SuporteseGadgets.svg'

const ACESSORIES_LIST = [
  { id: 1, title: 'Capinhas de Silicone', image: Capinhas },
  { id: 2, title: 'Películas 3D', image: Peliculas },
  { id: 3, title: 'Carregadores Rápidos', image: Carregadores },
  { id: 4, title: 'Cabos Reforçados', image: CabosReforcados },
  { id: 5, title: 'Fones de Ouvido', image: FonesdeOuvidos },
  { id: 6, title: 'Suportes e Gadgets', image: SuporteseGadgets },
]

export const SectionAcessories = () => {
  return (
    <section className="sectionAcessories" id="products">
      <div className="acessories-content">
        <h2>Acessórios</h2>
        <p>Proteção e estilo para os modelos mais desejados do mercado.</p>
      </div>

      <div className="acessories-cards">
        {ACESSORIES_LIST.map((item) => (
          <div key={item.id} className="card-acessory">
            <div className="card-image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-description">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}