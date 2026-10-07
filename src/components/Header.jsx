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
        <h1 className="hero-name">Ethan<br /><span>Chang</span></h1>
        <p className="hero-statement">
          Hi, I'm Ethan, a computer science student at RIT graduating in May 2027.
          I like turning messy data into <strong>things people can actually use</strong>.
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
