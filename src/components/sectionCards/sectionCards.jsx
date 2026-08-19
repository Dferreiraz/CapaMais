import './style.css'
import iconTela from '../../assets/icons/iconTela.svg'
import iconBateria from '../../assets/icons/iconBateria.svg'
import iconReparo from '../../assets/icons/iconReparo.svg'
import iconAtualizacao from '../../assets/icons/iconAtualizacao.svg'
import iconComponentes from '../../assets/icons/iconComponentes.svg'
import iconApple from '../../assets/icons/iconApple.svg'


const SERVICES_DATA = [
  {
    id: 'tela',
    title: 'Troca de Tela',
    description: 'Substituição de displays originais e de alta qualidade com garantia total contra defeitos.',
    icon: iconTela,
    alt: 'Ícone para Troca de tela',
  },
  {
    id: 'bateria',
    title: 'Troca de Bateria',
    description: 'Recupere a autonomia do seu smartphone com baterias novas certificadas.',
    icon: iconBateria,
    alt: 'Ícone para troca de Bateria',
  },
  {
    id: 'reparo-placa',
    title: 'Reparo de placa',
    description: 'Reparo em placas com precisão técnica, garantindo diagnóstico especializado e manutenção de alta qualidade.',
    icon: iconReparo,
    alt: 'Ícone para reparo de placa',
  },
  {
    id: 'software',
    title: 'Atualização de Software',
    description: 'Restauração de sistema, remoção de falhas e atualizações de segurança.',
    icon: iconAtualizacao,
    alt: 'Ícone para Atualização de Software',
  },
  {
    id: 'componentes',
    title: 'Componentes e Conectores',
    description: 'Reparamos ou substituímos botões, câmeras e conectores de carga para devolver o desempenho e a funcionalidade do seu dispositivo.',
    icon: iconComponentes,
    alt: 'Ícone para componentes e Conectores',
  },
  {
    id: 'apple',
    title: 'Apple',
    description: 'Assistência especializada para iPhone, incluindo troca de tela, bateria, conectores, reparos em placa e diagnóstico completo.',
    icon: iconApple,
    alt: 'Logo da Apple',
  },
]

export const SectionCards = () => {
  return (
    <section className="section-cards" id="services">
      <div className="section-header">
        <h2>Serviços Profissionais</h2>
        <span className="divider"></span>
        <p>Soluções completas com excelência técnica para manter sua vida digital em movimento.</p>
      </div>

      <div className="cards-grid">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="card">
            <div className="icon-card">
              <img src={service.icon} alt={service.alt} />
            </div>
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}