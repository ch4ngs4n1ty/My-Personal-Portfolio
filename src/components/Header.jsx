function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-label">Computer Science · RIT · Class of 2026</div>
        <h1 className="hero-name">Ethan<br /><span>Chang</span></h1>
        <p className="hero-sub">
          Data Science &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; <em>Software Engineering</em>
        </p>
        <p className="hero-hint">Drag to rotate &nbsp;·&nbsp; Click any node to explore ↓</p>

        <div className="hero-legend-wrap">
          <div className="hero-legend-rule"></div>
          <div className="hero-legend">
            <span><span className="legend-dot" style={{ background: '#c9a84c' }}></span>Projects</span>
            <span><span className="legend-dot" style={{ background: '#f0b450' }}></span>Experience</span>
            <span><span className="legend-dot" style={{ background: '#c0392b' }}></span>ML &amp; Tools</span>
            <span><span className="legend-dot" style={{ background: '#dc7840' }}></span>DevOps</span>
          </div>
        </div>

        <button type="button" className="hero-cta" onClick={scrollToContact}>
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Header;
