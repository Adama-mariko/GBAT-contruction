const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('apropos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="accueil">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">AVEC NOUS LE RÊVE SE BÂTIT</h1>
        <p className="hero-subtitle">
          Fondée en 2021, GBAT Construction est une entreprise ivoirienne ambitieuse spécialisée dans la construction, les travaux publics, les énergies, les télécoms, la promotion immobilière et le financement de projets.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToAbout}>NOUS CONNAÎTRE</button>
          <button className="btn btn-secondary" onClick={scrollToContact}>NOUS CONTACTER</button>
        </div>
      </div>
    </section>
  )
}

export default Hero