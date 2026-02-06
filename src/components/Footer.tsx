import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Logo size="medium" showText={true} />
            </div>
            <p>
              Votre partenaire de confiance pour tous vos projets de construction, travaux publics, 
              énergies, télécoms et promotion immobilière. Excellence, qualité et innovation depuis 2021.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Construction & Travaux Publics</a></li>
              <li><a href="#services">Énergies</a></li>
              <li><a href="#services">Télécommunications</a></li>
              <li><a href="#services">Promotion Immobilière</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Liens Rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#apropos">À Propos</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>+225 27 22 40 64 92</li>
              <li>+225 07 98 44 40 00</li>
              <li>infos@gbatconstruction.online</li>
              <li>Abidjan, Cocody Angré Château</li>
              <li>Cité Star 16 – Villa 96</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 GBAT Construction. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer