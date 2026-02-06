import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Users size={32} />, number: "50+", label: "Projets Réalisés" },
    { icon: <Award size={32} />, number: "3+", label: "Années d'Expérience" },
    { icon: <CheckCircle size={32} />, number: "100%", label: "Satisfaction Client" },
    { icon: <Clock size={32} />, number: "24/7", label: "Support Client" }
  ]

  return (
    <section className="about" id="apropos">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>À Propos de GBAT Construction</h2>
            <p>
              Fondée en 2021, GBAT Construction est une entreprise ivoirienne ambitieuse qui s'impose 
              rapidement comme un acteur majeur dans le secteur de la construction en Côte d'Ivoire. 
              Notre expertise couvre la construction, les travaux publics, les énergies, les télécoms, 
              la promotion immobilière et le financement de projets.
            </p>
            <p>
              Basée à Abidjan, nous nous engageons à fournir des services de qualité supérieure, 
              en respectant les délais et en offrant des solutions innovantes adaptées aux besoins 
              spécifiques du marché ivoirien et ouest-africain.
            </p>
            <div className="about-features">
              <div className="feature">
                <CheckCircle size={20} />
                <span>Matériaux de qualité premium</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Équipe d'experts qualifiés</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Respect des normes internationales</span>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About