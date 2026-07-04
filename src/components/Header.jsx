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
        <p className="hero-hint">
          <span><em>Drag</em> to rotate</span>
          <i className="hint-sep" aria-hidden="true"></i>
          <span><em>Click</em> any node to explore</span>
        </p>

        <div className="hero-legend-wrap">
          <div className="hero-legend-rule"></div>
          <div className="hero-legend">
            <span><span className="legend-dot" style={{ background: '#d6b25c' }}></span>Projects</span>
            <span><span className="legend-dot" style={{ background: '#e2a850' }}></span>Experience</span>
            <span><span className="legend-dot" style={{ background: '#e26048' }}></span>ML &amp; Tools</span>
            <span><span className="legend-dot" style={{ background: '#ce8246' }}></span>DevOps</span>
          </div>
        </div>

        <button type="button" className="hero-cta" onClick={scrollToContact}>
          <span className="cta-gem" aria-hidden="true"></span>
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
}

export default Header;
