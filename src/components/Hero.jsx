import './Hero.css'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      </div>
      <h1 className="hero-title">Welcome to Your Project</h1>
      <p className="hero-subtitle">
        Build amazing experiences with Vite, React, and Builder.io
      </p>
    </div>
  )
}

export default Hero
