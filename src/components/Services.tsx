import { Building, Hammer, Wrench, Shield, Zap, Radio } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Building size={48} />,
      title: "Construction & Travaux Publics",
      description: "Bâtiments résidentiels, commerciaux et infrastructures publiques avec des finitions de qualité supérieure."
    },
    {
      icon: <Zap size={48} />,
      title: "Énergies",
      description: "Solutions énergétiques durables, installations électriques et projets d'énergies renouvelables."
    },
    {
      icon: <Radio size={48} />,
      title: "Télécommunications",
      description: "Infrastructure télécom, réseaux de communication et solutions technologiques avancées."
    },
    {
      icon: <Hammer size={48} />,
      title: "Promotion Immobilière",
      description: "Développement de projets immobiliers et financement de projets de construction."
    },
    {
      icon: <Wrench size={48} />,
      title: "Rénovation & Réhabilitation",
      description: "Modernisation et amélioration de vos espaces existants avec des solutions innovantes."
    },
    {
      icon: <Shield size={48} />,
      title: "Gestion de Projet",
      description: "Suivi complet de votre projet de A à Z avec respect des délais et du budget."
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Nos Services</h2>
          <p>Des solutions complètes pour tous vos projets de construction et d'infrastructure</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services