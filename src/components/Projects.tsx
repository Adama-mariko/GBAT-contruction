import { ExternalLink, Calendar, MapPin } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Résidence Les Cocotiers",
      category: "Résidentiel",
      location: "Abidjan, Cocody",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
      description: "Complexe résidentiel moderne avec 20 appartements de standing"
    },
    {
      title: "Centre Commercial Plateau",
      category: "Commercial",
      location: "Abidjan, Plateau",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      description: "Centre commercial moderne de 3000m² avec parking souterrain"
    },
    {
      title: "Villa Moderne Riviera",
      category: "Résidentiel",
      location: "Abidjan, Riviera",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
      description: "Villa contemporaine avec piscine et jardin tropical"
    },
    {
      title: "Infrastructure Télécom",
      category: "Télécommunications",
      location: "Yamoussoukro",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "Installation d'antennes et infrastructure réseau 4G"
    }
  ]

  return (
    <section className="projects" id="projets">
      <div className="container">
        <div className="section-header">
          <h2>Nos Projets Récents</h2>
          <p>Découvrez quelques-unes de nos réalisations les plus remarquables</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="project-link">
                    <ExternalLink size={20} />
                    Voir le projet
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <div className="project-details">
                    <span className="project-year">
                      <Calendar size={14} />
                      {project.year}
                    </span>
                    <span className="project-location">
                      <MapPin size={14} />
                      {project.location}
                    </span>
                  </div>
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <button className="btn btn-primary">Voir Tous Nos Projets</button>
        </div>
      </div>
    </section>
  )
}

export default Projects