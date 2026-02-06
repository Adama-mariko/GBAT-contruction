interface LogoProps {
  className?: string
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
}

const Logo = ({ className = '', size = 'medium', showText = true }: LogoProps) => {
  return (
    <div className={`logo-container ${size} ${className}`}>
      <div className="gbat-logo">
        {/* Logo GBAT Construction en CSS pur basé sur l'image fournie */}
        <div className="building-structure">
          {/* Côté gauche rouge */}
          <div className="building-side left-side">
            <div className="building-row">
              <div className="brick red"></div>
              <div className="brick red"></div>
              <div className="brick red"></div>
            </div>
            <div className="building-row">
              <div className="brick red"></div>
              <div className="brick red"></div>
              <div className="brick red"></div>
            </div>
            <div className="building-row">
              <div className="brick red"></div>
              <div className="brick red"></div>
              <div className="brick red"></div>
            </div>
            <div className="building-row">
              <div className="brick red"></div>
              <div className="brick red"></div>
              <div className="brick red"></div>
            </div>
          </div>
          
          {/* Côté droit bleu */}
          <div className="building-side right-side">
            <div className="building-row">
              <div className="brick blue"></div>
              <div className="brick blue"></div>
              <div className="brick blue"></div>
            </div>
            <div className="building-row">
              <div className="brick blue"></div>
              <div className="brick blue"></div>
              <div className="brick blue"></div>
            </div>
            <div className="building-row">
              <div className="brick blue"></div>
              <div className="brick blue"></div>
              <div className="brick blue"></div>
            </div>
            <div className="building-row">
              <div className="brick blue"></div>
              <div className="brick blue"></div>
              <div className="brick blue"></div>
            </div>
          </div>
        </div>
      </div>
      
      {showText && (
        <div className="logo-text-container">
          <span className="logo-text-main">GBAT CONSTRUCTION</span>
          <div className="logo-dot"></div>
        </div>
      )}
    </div>
  )
}

export default Logo