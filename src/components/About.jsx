import projectsData from '../data/projects.json';
import toolsData from '../data/tools.json';

const STATS = (projects, tools) => [
  { num: '4', suffix: 'th', label: 'Year, B.S. CS' },
  { num: String(projects), label: 'Projects Shipped' },
  { num: String(tools), label: 'Tools & Tech' },
  { num: '∞', label: 'Problems Solved' },
];

function About() {
  const stats = STATS(projectsData.length, toolsData.length);

  return (
    <section id="about">
      <div className="about-stats reveal">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-num">
              {s.num}{s.suffix && <span>{s.suffix}</span>}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <article className="about-panel reveal">
        <div className="about-watermark" aria-hidden="true">01</div>
        <div className="about-edge" aria-hidden="true" />
        <div className="about-panel-inner">
          <div className="about-section-label">
            <span className="about-gem" aria-hidden="true"></span>About Me
          </div>
          <h2 className="about-heading">
            Building at the<br />edge of <em>data &amp; code</em>
          </h2>
          <div className="about-body">
            <p className="about-lead">
              I'm a <strong>fourth-year Computer Science student</strong> at the{' '}
              <strong>Rochester Institute of Technology</strong>. I came in curious about how software actually gets
              built, and over the past few years that curiosity has turned into a real interest in{' '}
              <em>data science, machine learning, and AI</em>.
            </p>
            <p>
              Coming out of my computer science degree, I'm aiming to be a <em>well-rounded engineer</em> who can
              adapt to just about any technology a problem calls for. I care less about mastering one specific tool
              and more about learning quickly, thinking through the data, and building solutions that actually hold
              up in the real world.
            </p>
          </div>
          <div className="about-focus">
            <span className="about-focus-label">Focus</span>
            <div className="about-focus-tags">
              {['Data Science', 'Machine Learning', 'Artificial Intelligence'].map((t) => (
                <span className="about-focus-tag" key={t}>
                  <span className="about-focus-gem" aria-hidden="true"></span>
                  <span>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
