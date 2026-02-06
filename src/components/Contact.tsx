import { Phone, Mail, MapPin, Send } from 'lucide-react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contactez-Nous</h2>
          <p>Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Informations de Contact</h3>
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h4>Téléphone</h4>
                <p>+225 27 22 40 64 92</p>
                <p>+225 07 98 44 40 00</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>infos@gbatconstruction.online</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h4>Adresse</h4>
                <p>Abidjan, Cocody Angré Château</p>
                <p>Cité Star 16 – Villa 96</p>
                <p>Côte d'Ivoire</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Votre téléphone" />
            </div>
            <div className="form-group">
              <select required>
                <option value="">Type de projet</option>
                <option value="construction">Construction & Travaux Publics</option>
                <option value="energie">Énergies</option>
                <option value="telecom">Télécommunications</option>
                <option value="immobilier">Promotion Immobilière</option>
                <option value="financement">Financement de Projet</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div className="form-group">
              <textarea placeholder="Décrivez votre projet" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <Send size={20} />
              Envoyer le Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact