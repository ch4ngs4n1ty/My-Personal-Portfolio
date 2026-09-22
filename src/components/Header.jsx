function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-label">Computer Science · RIT · Class of 2026</div>
        <h1 className="hero-name">Ethan<br /><span>Chang</span></h1>
        <p className="hero-sub">
          Data Science &nbsp;·&nbsp; Machine Learning &nbsp;·&nbsp; <em>Software Engineering</em>
        </p>

        <p className="hero-statement">
          I build systems that turn messy data into things people can actually use —
          and I care most about the part where it has to hold up in the real world.
        </p>

        <div className="hero-actions">
          <button type="button" className="hero-cta" onClick={scrollToWork}>
            <span className="cta-gem" aria-hidden="true"></span>
            <span>View Work</span>
          </button>
          <button type="button" className="hero-ghost" onClick={scrollToContact}>
            Get in touch
            <span className="hero-ghost-arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-rail"><span className="hero-scroll-dot" /></span>
      </div>
    </section>
  );
}

export default Header;
