import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  // Images d'africains noirs spécifiques pour chaque client
  const testimonialAvatars = {
    "Kouassi Jean-Baptiste": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face", // Homme africain noir
    "Aminata Traoré": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face", // Femme africaine noire
    "Mamadou Koné": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" // Homme africain noir
  }

  // Fonction pour obtenir l'image d'avatar
  const getAvatarImage = (name: string) => {
    return testimonialAvatars[name as keyof typeof testimonialAvatars] || 
           "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face"
  }

  // Fonction de secours au cas où l'image ne se chargerait pas
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const testimonials = [
    {
      name: "Kouassi Jean-Baptiste",
      role: "Propriétaire",
      content: "GBAT Construction a réalisé la maison de mes rêves à Cocody. Leur professionnalisme et la qualité de leur travail sont exceptionnels. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Aminata Traoré",
      role: "Directrice d'entreprise",
      content: "Pour notre nouveau siège social au Plateau, nous avons fait confiance à GBAT Construction. Le résultat dépasse nos attentes. Délais respectés et budget maîtrisé.",
      rating: 5
    },
    {
      name: "Mamadou Koné",
      role: "Investisseur immobilier",
      content: "Après 2 projets avec GBAT Construction, je peux affirmer qu'ils sont parmi les meilleurs en Côte d'Ivoire. Qualité, ponctualité et transparence au rendez-vous.",
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Ce Que Disent Nos Clients</h2>
          <p>La satisfaction de nos clients est notre plus grande récompense</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <Quote size={24} className="quote-icon" />
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="testimonial-content">"{testimonial.content}"</p>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={getAvatarImage(testimonial.name)}
                    alt={`Photo de ${testimonial.name}`}
                    className="avatar-image"
                    loading="lazy"
                    width="56"
                    height="56"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      
                      // Créer un élément fallback
                      const fallbackDiv = document.createElement('div')
                      fallbackDiv.className = 'avatar-fallback'
                      fallbackDiv.textContent = getInitials(testimonial.name)
                      
                      fallbackDiv.style.width = '56px'
                      fallbackDiv.style.height = '56px'
                      fallbackDiv.style.borderRadius = '50%'
                      fallbackDiv.style.display = 'flex'
                      fallbackDiv.style.alignItems = 'center'
                      fallbackDiv.style.justifyContent = 'center'
                      fallbackDiv.style.fontWeight = '600'
                      fallbackDiv.style.fontSize = '18px'
                      fallbackDiv.style.color = 'white'
                      fallbackDiv.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      
                      target.parentNode?.appendChild(fallbackDiv)
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials